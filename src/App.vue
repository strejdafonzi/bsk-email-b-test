<script setup>
import { ref, provide } from 'vue';
import Test from './components/Test.vue';
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import StepCard from './components/StepCard.vue';
import Features from './components/Features.vue';
import Offer from './components/Offer.vue';
import Pricing from './components/Pricing.vue';


// Available languages
const languages = ['en', 'cs', 'de'];

// Current language
const currentLanguage = ref(
  localStorage.getItem('preferredLanguage') || 
  navigator.language.split('-')[0] || 
  'en'
);

// If stored language isn't in our supported list, default to English
if (!languages.includes(currentLanguage.value)) {
  currentLanguage.value = 'en';
}

// Translation object
const translations = {
  en: {
    howitworks: 'How It Works',
    features: 'Features',
    pricing: 'Pricing',
    bluesky: 'Bluesky',
    login: 'Login'
  },
  cs: {
    howitworks: 'Jak to funguje',
    features: 'Funkce',
    pricing: 'Ceny',
    bluesky: 'Bluesky',
    login: 'Přihlásit se'
  },
  de: {
    howitworks: 'Wie es funktioniert',
    features: 'Funktionen',
    pricing: 'Preise',
    bluesky: 'Bluesky',
    login: 'Anmelden'
  }
};

// Function to change language
const setLanguage = (lang) => {
  if (languages.includes(lang)) {
    currentLanguage.value = lang;
    localStorage.setItem('preferredLanguage', lang);
  }
};

// Provide translations and language functions to all components
provide('translations', translations);
provide('currentLanguage', currentLanguage);
provide('setLanguage', setLanguage);
</script>

<template>
  <NavBar></NavBar>
  <Hero></Hero> 
  <StepCard></StepCard>
  <Features></Features>
  <Offer></Offer>
  <Pricing></Pricing>
  <Test></Test>
</template>

<style>
</style>
