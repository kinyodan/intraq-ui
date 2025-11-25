<template>
  <UContainer class="min-h-screen flex items-center justify-center">
    <UCard
      class="max-w-5xl w-full rounded-2xl border border-muted/30 shadow-md bg-background/80 backdrop-blur-md overflow-hidden"
      :ui="{ body: 'p-0' }"
    >
      <!-- Flex container inside the card -->
      <div class="flex flex-col md:flex-row">
        <!-- Left: Sign-Up Form (keeps padding) -->
        <div class="w-full md:w-2/5 p-8 flex flex-col justify-center space-y-6">
          <div class="text-center">
            <h2 class="text-3xl font-semibold">Create your account</h2>
            <p class="text-sm text-muted">Join us and get started in seconds</p>
          </div>

          <UFormGroup label="Full Name" name="name">
            <UInput
              v-model="name"
              type="text"
              placeholder="John Doe"
              class="w-full h-11"
            />
          </UFormGroup>

          <UFormGroup label="Email" name="email">
            <UInput
              v-model="email"
              type="email"
              placeholder="you@example.com"
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

          <UFormGroup label="Confirm Password" name="confirmPassword">
            <UInput
              v-model="confirmPassword"
              type="password"
              placeholder="••••••••"
              class="w-full h-11"
            />
          </UFormGroup>

          <div class="space-y-3 pt-2">
            <UButton block color="primary" class="h-11 text-base font-medium" @click="signup">
              Sign Up
            </UButton>
            <UButton block variant="outline" class="h-11 text-base font-medium">
              Continue with Google
            </UButton>
          </div>

          <p class="text-sm text-muted text-center pt-2">
            Already have an account?
            <NuxtLink to="/login" class="underline text-primary">
              Log in
            </NuxtLink>
          </p>
        </div>

        <!-- Right: Image (touches edges, no padding) -->
        <div
          class="hidden md:block md:w-3/5 bg-cover bg-center rounded-2xl"
          style="background-image: url('/images/data-driven.jpg');"
        ></div>
      </div>
    </UCard>
  </UContainer>
</template>
<script>
import apiService from "@/services/apiService"

export default {
  async asyncData({ $content, error }) {
    try {
      const page = await $content('content').first()
      if (!page) {
        throw new Error('Page not found')
      }
      return { page }
    } catch (err) {
      error({ statusCode: 404, statusMessage: 'Page not found' })
    }
  },
  
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
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
      async signup() {
        console.log('Signing up:', { 
          username: this.name, 
          email: this.email
        })

        // Validation
        if (this.password !== this.confirmPassword) {
          alert("Passwords don't match!")
          return
        }

        if (this.password.length < 6) {
          alert("Password must be at least 6 characters long!")
          return
        }

        try {
          const formData = new FormData()
          formData.append('username', this.name)
          formData.append('email', this.email)
          formData.append('password', this.password)

          const response = await fetch('http://localhost:8000/signup', {
            method: 'POST',
            body: formData
          })

          if (response.ok) {
            const result = await response.json()
            console.log('Signup successful:', result)
            //alert('Signup successful! You can now login.')
            this.$router.push('/login')

            // Redirect to login or clear form
            this.name = ''
            this.email = ''
            this.password = ''
            this.confirmPassword = ''
          } else {
            const error = await response.json()
            console.error('Signup failed:', error)
            alert(error.detail || 'Signup failed!')
          }
        } catch (error) {
          console.error('Signup error:', error)
          alert('Network error during signup!')
        }
    }
  }
}
</script>