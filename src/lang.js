// src/lang.js
import { ref, computed } from 'vue';
import enTranslations from './locales/en.json';
import csTranslations from './locales/cs.json';
import deTranslations from './locales/de.json';

// Supported languages
const languages = ['en', 'cs', 'de'];

// Current language from localStorage or browser fallback
const currentLanguage = ref(
  localStorage.getItem('preferredLanguage') ||
  navigator.language.split('-')[0] ||
  'en'
);

// Ensure it's one of the supported languages
if (!languages.includes(currentLanguage.value)) {
  currentLanguage.value = 'en';
}

// Translation strings
const translations = {
  en: enTranslations,
  cs: csTranslations,
  de: deTranslations
};

// Language switcher
function setLanguage(lang) {
  if (languages.includes(lang)) {
    currentLanguage.value = lang;
    localStorage.setItem('preferredLanguage', lang);
    console.log('Language set to:', currentLanguage.value);
  }
}

// Composition function for components
function useTranslations() {
  const currentTranslation = computed(() => translations[currentLanguage.value] || translations.en);
  return { currentTranslation, currentLanguage };
}

// Exports
export {
  languages,
  currentLanguage,
  translations,
  setLanguage,
  useTranslations
};
