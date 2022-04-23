// This is just an example,
// so you can safely delete all default props below
import { createI18n } from 'vue-i18n'
import enUS from 'vxe-table/lib/locale/lang/en-US'

const messages = {
    en_US: {...enUS}
}

const i18n = createI18n({
    locale: 'en_US',
    messages,
})


export default i18n