// src/lang.js
import { ref, computed } from 'vue';
import enTranslations from './locales/en.json';
import csTranslations from './locales/cs.json';
import deTranslations from './locales/de.json';

const languages = ['en', 'cs', 'de'];

const currentLanguage = ref(
  localStorage.getItem('preferredLanguage') ||
  navigator.language.split('-')[0] ||
  'en'
);

if (!languages.includes(currentLanguage.value)) {
  currentLanguage.value = 'en';
}

const translations = {
  en: enTranslations,
  cs: csTranslations,
  de: deTranslations
};

function setLanguage(lang) {
  if (languages.includes(lang)) {
    currentLanguage.value = lang;
    localStorage.setItem('preferredLanguage', lang);
    console.log('Language set to:', currentLanguage.value);
  }
}

function useTranslations() {
  const currentTranslation = computed(() => translations[currentLanguage.value] || translations.en);
  return { currentTranslation, currentLanguage };
}

export {
  languages,
  currentLanguage,
  translations,
  setLanguage,
  useTranslations
};
