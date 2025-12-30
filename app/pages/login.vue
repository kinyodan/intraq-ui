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
            />
          </UFormGroup>

          <UFormGroup label="Password" name="password">
            <UInput
              v-model="password"
              type="password"
              placeholder="••••••••"
              class="w-full h-11"
              autocomplete="current-password"
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
            <UButton block variant="outline" class="h-11 text-base font-medium">
              Login with Google
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
// Composition API - Fixed version
import { ref } from 'vue'
import { useRoute } from '#imports'

// Initialize composables
const toast = useToast()
const route = useRoute()

// Reactive state
const email = ref('')
const password = ref('')
const loading = ref(false)

// Login function
const login = async () => {
  if (!email.value || !password.value) {
    toast.add({
      title: 'Validation Error',
      description: 'Please enter both email and password',
      icon: 'i-heroicons-exclamation-triangle',
      color: 'amber'
    })
    return
  }

  loading.value = true

  try {
    const formData = new URLSearchParams()
    formData.append('username', email.value)
    formData.append('password', password.value)

    const response = await fetch('http://localhost:8002/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData
    })

    if (response.ok) {
      const result = await response.json()
      console.log('Login successful:', result)
      
      // Store tokens
      localStorage.setItem('access_token', result.access_token)
      localStorage.setItem('refresh_token', result.refresh_token)
      
      // Show success toast
      toast.add({
        title: 'Success',
        description: 'Login successful! Redirecting...',
        icon: 'i-heroicons-check-circle',
        color: 'green',
        timeout: 2000
      })
      
      // Get redirect URL from query param or default
      const redirectUri = route.query.redirect_uri || 'https://dashboard.yourdomain.com'
      
      // Small delay to show toast before redirect
      setTimeout(() => {
        window.location.href = redirectUri
      }, 1500)
      
    } else {
      const error = await response.json()
      console.error('Login failed:', error)
      
      let errorMessage = 'Login failed!'
      if (error.detail) {
        errorMessage = Array.isArray(error.detail) 
          ? error.detail.map(d => d.msg || d).join(', ')
          : error.detail
      }
      
      toast.add({
        title: 'Login Failed',
        description: errorMessage,
        icon: 'i-heroicons-x-circle',
        color: 'red',
        timeout: 5000
      })
    }
  } catch (error: any) {
    console.error('Login error:', error)
    
    let errorMessage = 'Network error during login!'
    if (error.message?.includes('Failed to fetch')) {
      errorMessage = 'Cannot connect to server. Please try again.'
    }
    
    toast.add({
      title: 'Network Error',
      description: errorMessage,
      icon: 'i-heroicons-exclamation-triangle',
      color: 'red',
      timeout: 5000
    })
  } finally {
    loading.value = false
  }
}

// Optional: Press Enter to submit
const onEnter = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && !loading.value) {
    login()
  }
}

// SEO Meta (using Nuxt 3's useSeoMeta)
useSeoMeta({
  title: 'Login - Your App Name',
  description: 'Login to access your dashboard',
  ogTitle: 'Login - Your App Name',
  ogDescription: 'Login to access your dashboard'
})
</script>