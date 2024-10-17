import enUS from './en-US';
import plPL from './pl-PL';
import { I18nOptions } from 'vue-i18n';

export type MessageSchema = typeof enUS;

const messages: Record<string, MessageSchema> = {
  'en-US': enUS,
  'pl-PL': plPL,
};

const i18nOptions: I18nOptions = {
  locale: 'pl-PL',
  fallbackLocale: 'pl-PL',
  legacy: false,
  messages,
};

export default i18nOptions;
