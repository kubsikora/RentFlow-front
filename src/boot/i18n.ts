import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';
import i18nOptions from 'src/i18n';

export default boot(({ app }) => {
  const i18n = createI18n(i18nOptions);
  app.use(i18n);
});
