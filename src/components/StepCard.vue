<template>
  <section id="how-it-works" class="flex flex-col items-center space-y-6 py-15 justify-center min-h-1 max-h-fit">
      <!-- Heading -->
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center pb-10">
    How does bsk.<span class="text-primary">email</span> work?
  </h2>

      <!-- Cards Row -->
      <div class="max-w-[80rem] flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0">
          <Card :step="1">
              <template #title>Register on Bluesky</template>
              <template #description>
                  Visit our bot on Bluesky and send a direct message with the command
                  <code>/register your@email.com</code> to create your secure email alias.
              </template>
          </Card>

          <Card :step="2">
              <template #title>Start Receiving Emails</template>
              <template #description>
                  Your new email address will be
                  <code>yourhandle.bsky.social@bsk.email</code>. All emails sent to this address will be securely forwarded to your real email.
              </template>
          </Card>

          <Card :step="3">
              <template #title>Manage & Control</template>
              <template #description>
                  Use Bluesky DM commands to control your preferences, whitelist senders, and manage your account settings.
              </template>
          </Card>
      </div>
  </section>
</template>

<script setup>
  import Card from './Card.vue'
</script>