import VueI18n from 'vue-i18n';
import languageMessage from '@/i18n/languageMessage';

export default () => new VueI18n({
    local: 'zh',
    messages: languageMessage,
});
