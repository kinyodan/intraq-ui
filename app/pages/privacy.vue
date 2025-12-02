<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy - Intraq Data Solutions',
  description: 'Learn how Intraq collects, uses, and protects your data in compliance with African data protection laws.',
  ogTitle: 'Privacy Policy - Intraq Data Solutions',
  ogDescription: 'Your data security and privacy is our priority at Intraq.'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

// Last updated date
const lastUpdated = 'February 15, 2024'
</script>

<template>
  <UContainer class="py-12 md:py-20">
    <!-- Header -->
    <div class="max-w-4xl mx-auto">
      <div class="mb-12 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Privacy Policy
        </h1>
        <p class="text-lg text-muted">
          Last Updated: {{ lastUpdated }}
        </p>
        <div class="mt-6">
          <UBadge color="primary" variant="soft" size="lg">
            Compliant with Kenya Data Protection Act, 2019 & GDPR
          </UBadge>
        </div>
      </div>

      <!-- Quick Navigation -->
      <div class="sticky top-6 mb-10 bg-background/80 backdrop-blur-sm rounded-xl border p-4 z-10">
        <p class="font-semibold mb-2">Quick Navigation:</p>
        <div class="flex flex-wrap gap-2">
          <a href="#data-collection" class="text-sm text-primary hover:underline">Data Collection</a>
          <span class="text-muted">•</span>
          <a href="#data-use" class="text-sm text-primary hover:underline">Data Use</a>
          <span class="text-muted">•</span>
          <a href="#data-protection" class="text-sm text-primary hover:underline">Data Protection</a>
          <span class="text-muted">•</span>
          <a href="#your-rights" class="text-sm text-primary hover:underline">Your Rights</a>
          <span class="text-muted">•</span>
          <a href="#contact" class="text-sm text-primary hover:underline">Contact Us</a>
        </div>
      </div>

      <!-- Main Content -->
      <div class="prose prose-lg dark:prose-invert max-w-none space-y-12">
        
        <!-- Introduction -->
        <section>
          <h2 class="text-2xl font-bold mb-4">1. Introduction</h2>
          <p>
            Intraq Data Solutions ("we," "our," or "us") is committed to protecting your privacy and personal data. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
            our data entry, validation, and management services, particularly for clients and users in Africa.
          </p>
          <p>
            We comply with the Kenya Data Protection Act, 2019, Nigeria Data Protection Act, 2023, 
            South Africa's Protection of Personal Information Act (POPIA), and the General Data Protection Regulation (GDPR) 
            for our international clients.
          </p>
        </section>

        <!-- Data We Collect -->
        <section id="data-collection">
          <h2 class="text-2xl font-bold mb-4">2. Data We Collect</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold mb-2">2.1 Business Client Information</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li><strong>Contact Details:</strong> Business name, email, phone number, physical address</li>
                <li><strong>Business Information:</strong> Company registration details, VAT/Tax numbers</li>
                <li><strong>Billing Information:</strong> Payment details, invoices, billing history</li>
                <li><strong>Project Data:</strong> Data you provide for processing, validation, or analysis</li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-2">2.2 Website Visitors</h3>
              <ul class="list-disc pl-6 space-y-2">
                <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, referral sources</li>
                <li><strong>Cookies:</strong> Essential, functional, and analytical cookies</li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-2">2.3 Data Processing Services</h3>
              <p>
                When you engage our data entry or validation services, we may process:
              </p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Customer/Client databases</li>
                <li>Survey and research data</li>
                <li>Financial records (with appropriate security measures)</li>
                <li>Operational data for business intelligence</li>
                <li>Any data you specifically request us to process</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- How We Use Your Data -->
        <section id="data-use">
          <h2 class="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
          
          <div class="overflow-x-auto">
            <table class="min-w-full border rounded-lg">
              <thead class="bg-muted/50">
                <tr>
                  <th class="p-3 text-left font-semibold">Purpose</th>
                  <th class="p-3 text-left font-semibold">Legal Basis</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t">
                  <td class="p-3">To provide data entry and validation services</td>
                  <td class="p-3">Contract fulfillment</td>
                </tr>
                <tr class="border-t">
                  <td class="p-3">To process payments and send invoices</td>
                  <td class="p-3">Contract fulfillment, Legal obligation</td>
                </tr>
                <tr class="border-t">
                  <td class="p-3">To communicate about service updates</td>
                  <td class="p-3">Legitimate interest</td>
                </tr>
                <tr class="border-t">
                  <td class="p-3">To improve our services</td>
                  <td class="p-3">Legitimate interest</td>
                </tr>
                <tr class="border-t">
                  <td class="p-3">To comply with legal obligations</td>
                  <td class="p-3">Legal obligation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Data Protection & Security -->
        <section id="data-protection">
          <h2 class="text-2xl font-bold mb-4">4. Data Protection & Security</h2>
          
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <UCard class="h-full">
              <template #header>
                <h3 class="font-semibold text-lg">Technical Measures</h3>
              </template>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 mr-2" />
                  <span>End-to-end encryption for data in transit</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 mr-2" />
                  <span>AES-256 encryption for data at rest</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 mr-2" />
                  <span>Regular security audits and penetration testing</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 mr-2" />
                  <span>Secure data centers with 24/7 monitoring</span>
                </li>
              </ul>
            </UCard>

            <UCard class="h-full">
              <template #header>
                <h3 class="font-semibold text-lg">Organizational Measures</h3>
              </template>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 mr-2" />
                  <span>Role-based access controls</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 mr-2" />
                  <span>Regular staff training on data protection</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 mr-2" />
                  <span>Data Protection Officer (DPO) oversight</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-lucide-check-circle" class="text-green-500 mt-1 mr-2" />
                  <span>Incident response and breach notification plans</span>
                </li>
              </ul>
            </UCard>
          </div>

          <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div class="flex items-start">
              <UIcon name="i-lucide-shield" class="text-blue-500 mt-1 mr-3 text-xl" />
              <div>
                <h4 class="font-semibold mb-1">Data Processing Agreements</h4>
                <p class="text-sm">
                  We sign Data Processing Agreements (DPAs) with all clients that comply with African data protection laws.
                  These agreements clearly define responsibilities and ensure compliance throughout our data processing activities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Data Retention -->
        <section>
          <h2 class="text-2xl font-bold mb-4">5. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, 
            including for satisfying any legal, accounting, or reporting requirements.
          </p>
          
          <div class="mt-4 space-y-3">
            <div class="flex justify-between items-center p-3 bg-muted/30 rounded">
              <span>Client account data</span>
              <UBadge color="gray">7 years after contract ends</UBadge>
            </div>
            <div class="flex justify-between items-center p-3 bg-muted/30 rounded">
              <span>Financial records</span>
              <UBadge color="gray">7 years (legal requirement)</UBadge>
            </div>
            <div class="flex justify-between items-center p-3 bg-muted/30 rounded">
              <span>Website analytics</span>
              <UBadge color="gray">26 months</UBadge>
            </div>
            <div class="flex justify-between items-center p-3 bg-muted/30 rounded">
              <span>Customer service inquiries</span>
              <UBadge color="gray">3 years</UBadge>
            </div>
          </div>
        </section>

        <!-- Your Rights -->
        <section id="your-rights">
          <h2 class="text-2xl font-bold mb-4">6. Your Data Protection Rights</h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <UCard v-for="right in dataRights" :key="right.title" class="h-full">
              <template #header>
                <div class="flex items-center">
                  <UIcon :name="right.icon" class="mr-3 text-primary" />
                  <h3 class="font-semibold">{{ right.title }}</h3>
                </div>
              </template>
              <p class="text-sm">{{ right.description }}</p>
            </UCard>
          </div>

          <div class="mt-8 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h4 class="font-semibold mb-2 flex items-center">
              <UIcon name="i-lucide-message-square" class="mr-2" />
              How to Exercise Your Rights
            </h4>
            <p class="text-sm mb-3">
              To exercise any of these rights, please contact our Data Protection Officer at 
              <a href="mailto:privacy@intraq.com" class="text-primary font-semibold">privacy@intraq.com</a>.
            </p>
            <p class="text-sm">
              We will respond to your request within 30 days as required by the Kenya Data Protection Act.
            </p>
          </div>
        </section>

        <!-- Cookies -->
        <section>
          <h2 class="text-2xl font-bold mb-4">7. Cookies & Tracking Technologies</h2>
          
          <div class="space-y-4">
            <p>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information.
            </p>
            
            <div class="overflow-x-auto">
              <table class="min-w-full border rounded-lg">
                <thead class="bg-muted/50">
                  <tr>
                    <th class="p-3 text-left font-semibold">Cookie Type</th>
                    <th class="p-3 text-left font-semibold">Purpose</th>
                    <th class="p-3 text-left font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-t">
                    <td class="p-3 font-medium">Essential</td>
                    <td class="p-3">Site functionality and security</td>
                    <td class="p-3">Session</td>
                  </tr>
                  <tr class="border-t">
                    <td class="p-3 font-medium">Analytics</td>
                    <td class="p-3">Understanding visitor behavior (Google Analytics)</td>
                    <td class="p-3">2 years</td>
                  </tr>
                  <tr class="border-t">
                    <td class="p-3 font-medium">Preference</td>
                    <td class="p-3">Remembering your settings</td>
                    <td class="p-3">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="mt-4">
              <UAlert
                icon="i-lucide-cookie"
                title="Cookie Consent"
                description="You can control cookies through your browser settings. However, disabling essential cookies may affect website functionality."
                color="blue"
                variant="subtle"
              />
            </div>
          </div>
        </section>

        <!-- International Transfers -->
        <section>
          <h2 class="text-2xl font-bold mb-4">8. International Data Transfers</h2>
          <p>
            As an African-focused company, we primarily store and process data within Africa. However, for certain 
            international clients or cloud services, data may be transferred outside Africa with appropriate safeguards:
          </p>
          
          <div class="mt-4 space-y-3">
            <div class="flex items-start p-3 bg-muted/30 rounded">
              <UIcon name="i-lucide-check-circle-2" class="text-green-500 mt-1 mr-3" />
              <div>
                <p class="font-medium">Standard Contractual Clauses (SCCs)</p>
                <p class="text-sm text-muted">For transfers to countries without adequacy decisions</p>
              </div>
            </div>
            <div class="flex items-start p-3 bg-muted/30 rounded">
              <UIcon name="i-lucide-check-circle-2" class="text-green-500 mt-1 mr-3" />
              <div>
                <p class="font-medium">Adequacy Decisions</p>
                <p class="text-sm text-muted">For transfers to countries with recognized data protection standards</p>
              </div>
            </div>
            <div class="flex items-start p-3 bg-muted/30 rounded">
              <UIcon name="i-lucide-check-circle-2" class="text-green-500 mt-1 mr-3" />
              <div>
                <p class="font-medium">Explicit Consent</p>
                <p class="text-sm text-muted">When required by law, we obtain your explicit consent</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Contact -->
        <section id="contact">
          <h2 class="text-2xl font-bold mb-4">9. Contact Information</h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <UCard>
              <template #header>
                <h3 class="font-semibold">Data Protection Officer</h3>
              </template>
              <div class="space-y-3">
                <div>
                  <p class="font-medium">Email</p>
                  <a href="mailto:privacy@intraq.com" class="text-primary hover:underline">privacy@intraq.com</a>
                </div>
                <div>
                  <p class="font-medium">Phone</p>
                  <p>+254 700 123 456</p>
                </div>
                <div>
                  <p class="font-medium">Address</p>
                  <p>Intraq Data Solutions<br>
                  Nairobi, Kenya</p>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <h3 class="font-semibold">Regulatory Authorities</h3>
              </template>
              <p class="text-sm mb-3">You have the right to lodge a complaint with the relevant data protection authority:</p>
              <ul class="space-y-2 text-sm">
                <li class="flex items-start">
                  <UIcon name="i-lucide-flag" class="mr-2 mt-1" />
                  <span><strong>Kenya:</strong> Office of the Data Protection Commissioner (ODPC)</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-lucide-flag" class="mr-2 mt-1" />
                  <span><strong>Nigeria:</strong> Nigeria Data Protection Commission (NDPC)</span>
                </li>
                <li class="flex items-start">
                  <UIcon name="i-lucide-flag" class="mr-2 mt-1" />
                  <span><strong>South Africa:</strong> Information Regulator South Africa</span>
                </li>
              </ul>
            </UCard>
          </div>
        </section>

        <!-- Updates -->
        <section>
          <h2 class="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
            the new Privacy Policy on this page and updating the "Last Updated" date at the top of this policy.
          </p>
          <div class="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p class="text-sm">
              <UIcon name="i-lucide-bell" class="inline mr-2" />
              <strong>Notification:</strong> For material changes, we will notify registered users via email 
              at least 30 days before the changes take effect.
            </p>
          </div>
        </section>
      </div>

      <!-- CTA -->
      <div class="mt-16 p-8 rounded-2xl border bg-gradient-to-r from-primary/10 to-primary/5 text-center">
        <h3 class="text-2xl font-bold mb-3">Questions About Our Privacy Policy?</h3>
        <p class="text-muted mb-6 max-w-2xl mx-auto">
          We're committed to transparency and protecting your data. Contact our Data Protection Officer 
          for any questions about how we handle your information.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton to="mailto:privacy@intraq.com" icon="i-lucide-mail" size="lg">
            Email Our DPO
          </UButton>
          <UButton variant="outline" to="/contact" icon="i-lucide-phone" size="lg">
            Contact Support
          </UButton>
        </div>
      </div>

      <!-- Back to top -->
      <div class="mt-12 text-center">
        <UButton variant="ghost" icon="i-lucide-arrow-up" @click="window.scrollTo({ top: 0, behavior: 'smooth' })">
          Back to Top
        </UButton>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts">
// Data rights array
const dataRights = [
  {
    title: 'Right to Access',
    description: 'You have the right to request copies of your personal data.',
    icon: 'i-lucide-file-text'
  },
  {
    title: 'Right to Rectification',
    description: 'You have the right to request correction of inaccurate or incomplete data.',
    icon: 'i-lucide-edit'
  },
  {
    title: 'Right to Erasure',
    description: 'You have the right to request deletion of your personal data under certain conditions.',
    icon: 'i-lucide-trash-2'
  },
  {
    title: 'Right to Restrict Processing',
    description: 'You have the right to request restriction of processing your personal data.',
    icon: 'i-lucide-pause-circle'
  },
  {
    title: 'Right to Data Portability',
    description: 'You have the right to receive your data in a structured, commonly used format.',
    icon: 'i-lucide-download'
  },
  {
    title: 'Right to Object',
    description: 'You have the right to object to our processing of your personal data.',
    icon: 'i-lucide-ban'
  }
]
</script>

<style scoped>
.prose {
  color: inherit;
}

.prose h2 {
  margin-top: 2.5em;
  margin-bottom: 0.5em;
  scroll-margin-top: 80px;
}

.prose h3 {
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

.prose p {
  margin-bottom: 1em;
}

.prose ul {
  margin-bottom: 1em;
}

.prose table {
  margin-bottom: 1em;
}

/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}
</style>