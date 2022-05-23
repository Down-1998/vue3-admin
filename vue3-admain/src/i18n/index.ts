import { createI18n } from "vue-i18n";
import CN from './ZH-CN/cn'
import EN from "./en/en";

const message = {
    chs:{
        ...CN
    },
    en:{
        ...EN
    }
}

const i18n = createI18n({
    legacy:false,
    locale:'chs',
    globalInjection:true,
    messages:message
})

export default i18n