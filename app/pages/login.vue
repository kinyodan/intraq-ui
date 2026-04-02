<template>
  <UContainer class="min-h-screen flex items-center justify-center">
    <UCard
      class="max-w-5xl w-full rounded-2xl border border-muted/30 shadow-md bg-background/80 backdrop-blur-md overflow-hidden"
      :ui="{ body: 'p-0' }"
    >
      <div class="flex flex-col md:flex-row">
        <!-- Left: Login Form -->
        <div class="w-full md:w-2/5 p-8 flex flex-col justify-center space-y-6">
          <div class="text-center">
            <h2 class="text-3xl font-semibold">Login to your account</h2>
            <p class="text-sm text-muted">Enter your email to continue</p>
          </div>
          <UFormGroup label="Email" name="email">
            <UInput
              v-model="email"
              type="email"
              placeholder="m@example.com"
              class="w-full h-11"
              autocomplete="email"
              @keyup.enter="login"
            />
          </UFormGroup>
          <UFormGroup label="Password" name="password">
            <UInput
              v-model="password"
              type="password"
              placeholder="••••••••"
              class="w-full h-11"
              autocomplete="current-password"
              @keyup.enter="login"
            />
          </UFormGroup>
          <div class="space-y-3 pt-2">
            <UButton
              block
              color="primary"
              class="h-11 text-base font-medium"
              @click="login"
              :loading="loading"
              :disabled="loading"
            >
              Login
            </UButton>
          </div>
          <p class="text-sm text-muted text-center pt-2">
            Don’t have an account?
            <NuxtLink to="/register" class="underline text-primary">
              Sign up
            </NuxtLink>
          </p>
        </div>
        <!-- Right: Image -->
        <div
          class="hidden md:block md:w-3/5 bg-cover rounded-2xl bg-center"
          style="background-image: url('/images/register1.png');"
        ></div>
      </div>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
const toast = useToast()
const config = useRuntimeConfig()

const email = ref('')
const password = ref('')
const loading = ref(false)

// ✅ Use public proxy URLs (set these in Vercel Env Vars for the LANDING app)
const landingUrl = config.public.landingUrl || 'https://intro.pro'
const dashboardUrl = config.public.dashboardUrl || 'https://intro.pro/dashboard'  // Important: full public path

const apiUrl = config.public.apiBaseUrl

const login = async () => {
  if (!email.value.trim() || !password.value) {
    toast.add({
      title: 'Validation Error',
      description: 'Please enter both email and password',
      icon: 'i-heroicons-exclamation-triangle',
      color: 'amber',
      timeout: 4000
    })
    return
  }

  loading.value = true

  try {
    const formData = new FormData()
    formData.append('username', email.value.trim())
    formData.append('password', password.value)
    formData.append('client_id', 'dashboard-app')

    // ✅ CRITICAL FIX: redirect_uri must be the PUBLIC proxy URL
    const redirectUri = `${dashboardUrl}/auth-callback`
    formData.append('redirect_uri', redirectUri)

    const state = crypto.randomUUID()
    formData.append('state', state)

    const response = await fetch(`${apiUrl}/login`, {
      method: 'POST',
      body: formData,
      credentials: 'include'
    })

    const data = await response.json()

    if (!response.ok || !data.success) {
      const errorMsg = data.message || data.error || 'Invalid email or password'
      toast.add({
        title: 'Login Failed',
        description: errorMsg,
        icon: 'i-heroicons-x-circle',
        color: 'red',
        timeout: 5000
      })
      return
    }

    if (data.redirect_uri) {
      toast.add({
        title: 'Success',
        description: 'Login successful! Redirecting...',
        icon: 'i-heroicons-check-circle',
        color: 'green',
        timeout: 2000
      })

      setTimeout(() => {
        window.location.href = data.redirect_uri
      }, 1500)
    } else {
      toast.add({
        title: 'Error',
        description: 'No redirect URL received from server',
        color: 'red'
      })
    }
  } catch (err) {
    console.error('Login error:', err)
    toast.add({
      title: 'Network Error',
      description: 'Cannot connect to server',
      icon: 'i-heroicons-exclamation-triangle',
      color: 'red',
      timeout: 5000
    })
  } finally {
    loading.value = false
  }
}
</script>