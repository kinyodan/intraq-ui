<template>
  <UContainer class="min-h-screen flex items-center justify-center">
    <UCard
      class="max-w-5xl w-full rounded-2xl border border-muted/30 shadow-md bg-background/80 backdrop-blur-md overflow-hidden"
      :ui="{ body: 'p-0' }"
    >
      <!-- Flex container inside the card -->
      <div class="flex flex-col md:flex-row">
        <!-- Left: Login Form (keeps padding) -->
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
            />
          </UFormGroup>

          <UFormGroup label="Password" name="password">
            <UInput
              v-model="password"
              type="password"
              placeholder="••••••••"
              class="w-full h-11"
            />
          </UFormGroup>

          <div class="space-y-3 pt-2">
            <UButton block color="primary" class="h-11 text-base font-medium" @click="login">
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

        <!-- Right: Image (touches edges, no padding) -->
        <div
          class="hidden md:block md:w-3/5 bg-cover rounded-2xl bg-center"
          style="background-image: url('/images/register1.png');"
        ></div>
      </div>
    </UCard>
  </UContainer>
</template>
<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  async asyncData({ $content }) {
    try {
      const page = await $content('content').fetch()
      return {
        page
      }
    } catch (error) {
      throw { statusCode: 404, statusMessage: 'Page not found' }
    }
  },
  head() {
    return {
      title: this.page?.seo?.title || this.page?.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page?.seo?.description || this.page?.description
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.page?.seo?.title || this.page?.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page?.seo?.description || this.page?.description
        }
      ]
    }
  },
  methods: {
    async login() {
      console.log('Logging in:', { 
        email: this.email, 
        password: this.password 
      })

      this.loading = true

      try {
        const formData = new URLSearchParams()
        formData.append('username', this.email)
        formData.append('password', this.password)

        const response = await fetch('http://localhost:8000/login', {
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
          
          this.$toast.success('Login successful!')
          
          // Redirect to dashboard
          this.$router.push('/dashboard')
        } else {
          const error = await response.json()
          console.error('Login failed:', error)
          this.$toast.error(error.detail || 'Login failed!')
        }
      } catch (error) {
        console.error('Login error:', error)
        this.$toast.error('Network error during login!')
      } finally {
        this.loading = false
      }
    }
  }
}
</script>