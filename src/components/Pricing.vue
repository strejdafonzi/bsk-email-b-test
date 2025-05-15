<template>
    <section class="bg-base-200" id="pricing">
        <div class="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-5 pt-5">
                <h2 class="text-4xl sm:text-3xl md:text-4xl font-bold text-center">
            Choose Your Plan
          </h2>
                <h2 class="text-lg sm:text-xl md:text-2xl text-pretty-content max-w-3xl text-center mx-auto p-4">
            Select the plan that fits your needs
          </h2>

                <!-- Fake error -->
                <ErrorBiatch />
            </div>

            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <!-- Free Plan -->
                <PriceCard :features="['Up to 2 recipients', 'Max 5 emails per recipient', 'Basic notifications']">
                    <template #title>Free</template>
                    <template #description>Basic functionality for casual users.</template>
                    <template #price>€0</template>
                    <template #period>/year</template>
                    <template #button>Start Free</template>
                </PriceCard>

                <!-- Standard Plan -->
                <PriceCard :features="[
              'Unrestricted recipients',
              'Public email with whitelist system',
              'Bluesky DM notifications',
              'Basic statistics',
            ]">
                    <template #title>Standard</template>
                    <template #description>Perfect for everyday users.</template>
                    <template #price>€5</template>
                    <template #period>/year</template>
                    <template #button>Get Standard</template>
                </PriceCard>

                <!-- Pro Plan -->
                <PriceCard class="glass ring-2 ring-primary border-2 border-primary scale- origin-top [transform:scaleY(1.1)] hover:[transform:scaleY(1.1)_translateY(-0.5rem)] transition-transform duration-300" :features="[
              'All Standard features',
              'Priority support',
              'Advanced whitelist system',
              'Custom notifications',
              'Detailed analytics',
            ]">
                    <template #badge>
                        <div class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-content text-xs font-bold px-3 py-1 rounded-lg shadow">
                            Most popular
                        </div>
                    </template>

                    <template #title><span class="grad text-4xl">Pro</span></template>
                    <template #description>Enhanced features for power users.</template>
                    <template #price>€20</template>
                    <template #period>/year</template>
                    <template #button>Get Pro</template>
                </PriceCard>

                <!-- Business Plan -->
                <PriceCard :features="[
              'All Pro features',
              'Starter Pack system for group emails',
              'Custom domain',
              'Complete DNS management',
              'API access',
              'SLA guaranteed delivery',
            ]">
                    <template #title>Business</template>
                    <template #description>Complete solution for professionals.</template>
                    <template #price>€40</template>
                    <template #period>/year</template>
                    <template #button>Get Business</template>
                </PriceCard>
            </div>
        </div>
    </section>
</template>

<script>
    import PriceCard from "@/components/PriceCard.vue";
      import ErrorBiatch from "./ErrorBiatch.vue";
      
      export default {
        name: "Pricing",
        components: {
          PriceCard,
          ErrorBiatch,
        },
      };
</script>