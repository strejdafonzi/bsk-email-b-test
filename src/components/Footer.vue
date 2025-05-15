<template>
    <footer class="bg-base-300 py-10">
        <div class="flex justify-center-safe">
            <div class="max-w-7xl w-full px-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-14">


                    <!-- BSK.EMAIL -->
                    <div class="flex-col">
                        <div class="text-2xl font-bold mb-4">
                            <span class="text-black dark:text-white">bsk.</span>
                            <span class="text-white dark:text-gre-d">email</span>
                        </div>
                        <p class="mb-6">BSK.EMAIL provides secure and anonymous email communication for Bluesky users through a proxy system that protects your privacy.
                        </p>
                        <div class="flex space-x-3">
                            <!-- Bluesky icon -->
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="fill-black dark:fill-white hover:fill-secondary transition-colors duration-200">
                                    <path d="M5.6,4.2c2.5,1.9,5.3,5.8,6.3,7.9c1-2.1,3.7-5.9,6.3-7.9c1.8-1.4,4.8-2.4,4.8,0.9c0,0.7-0.4,5.7-0.6,6.5 
                                c-0.8,2.8-3.7,3.5-6.2,3.1c4.5,0.8,5.6,3.3,3.2,5.8c-4.7,4.8-6.7-1.2-7.2-2.7c-0.1-0.3-0.1-0.4-0.1-0.3c0-0.1,0,0-0.1,0.3 
                                c-0.5,1.5-2.6,7.5-7.2,2.7C2,18,3.1,15.5,7.6,14.7c-2.6,0.4-5.4-0.3-6.2-3.1c-0.2-0.8-0.6-5.8-0.6-6.5C0.8,1.7,3.7,2.8,5.6,4.2z" />
                                </svg>
                            </button>
                            <!-- Bot icon -->
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 stroke-black dark:stroke-white hover:stroke-primary transition-colors duration-200">
                                    <path d="M12 8V4H8" />
                                    <rect width="16" height="12" x="4" y="8" rx="2" />
                                    <path d="M2 14h2" />
                                    <path d="M20 14h2" />
                                    <path d="M15 13v2" />
                                    <path d="M9 13v2" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <!-- Quick Links -->
                    <div class="pl-10">
                        <h3 class="flex-col text-2xl font-semibold mb-5">Quick Links</h3>
                        <ul class="space-y-1">
                            <li><a href="#how-it-works" class="hover:text-primary">How It Works</a></li>
                            <li><a href="#features" class="hover:text-primary">Features</a></li>
                            <li><a href="#pricing" class="hover:text-primary">Pricing</a></li>
                            <li><a href="https://bsky.app/profile/yourhandle" class="link link-hover">Bluesky Profile</a></li>
                        </ul>
                    </div>

                    <!-- Legal -->
                    <div class="pl-10">
                        <h3 class="flex-col text-2xl font-semibold mb-5">Legal</h3>
                        <ul class="space-y-1">
                            <li><a href="#terms" class="hover:text-primary">Terms of Service</a></li>
                            <li><a href="#privacy" class="hover:text-primary">Privacy Policy</a></li>
                            <li><a href="#gdpr" class="hover:text-primary">GDPR Compliance</a></li>
                        </ul>
                    </div>

                    <!-- Contact -->
                    <div class="pl-10">
                        <h3 class="flex-col text-2xl font-semibold mb-5">Contact</h3>
                        <ul class="space-y-1">
                            <li><a href="mailto:support@bsk.email" class="hover:text-primary">Email Support</a></li>
                            <li><a href="https://bsky.app/profile/yourhandle" class="hover:text-primary">Bluesky DM</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="divider my-6"></div>

        <!-- Copyright -->
        <div class="text-center text-sm">
            © 2025 BSK.EMAIL. All rights reserved.
        </div>
    </footer>
</template>