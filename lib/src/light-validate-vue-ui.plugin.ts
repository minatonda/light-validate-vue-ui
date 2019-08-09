import Vue, { VueConstructor } from 'vue';
import { selector, options } from './light-validate-vue-ui.directive';
export function install(vue: VueConstructor) {
    vue.directive(selector, options);
}

export default { install }