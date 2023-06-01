import ru from './locales/ru.js'
import en from './locales/en.js'
import fr from './locales/fr.js'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ru',
  messages: {
    ru,
    en,
    fr
  }
}))