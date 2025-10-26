<script setup lang="ts">
import { ref } from 'vue'

const { data: page } = await useAsyncData('index', () => queryCollection('content').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.seo?.title || page.value.title,
  ogTitle: page.value.seo?.title || page.value.title,
  description: page.value.seo?.description || page.value.description,
  ogDescription: page.value.seo?.description || page.value.description
})

const email = ref('')
const password = ref('')

function login() {
  console.log('Logging in:', email.value, password.value)
}
</script>

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
