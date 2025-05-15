// src/lang.js
import { ref } from 'vue';
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

// Ensure a supported language
if (!languages.includes(currentLanguage.value)) {
  currentLanguage.value = 'en';
}

// Translation strings from imported JSON files
const translations = {
  en: enTranslations,
  cs: csTranslations,
  de: deTranslations
};

// Language switcher
function setLanguage(lang) {
  if (languages.includes(lang)) {
    // Force reactivity by creating a new assignment
    currentLanguage.value = lang;
    localStorage.setItem('preferredLanguage', lang);
    console.log("Language set to:", currentLanguage.value);
  }
}

// Export languages array as well
export { currentLanguage, translations, setLanguage, languages };
