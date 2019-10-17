import { VueConstructor } from 'vue';
import { selector, directive } from './light-validate-vue-ui.directive';
import { UiLightValidateResolver } from './ui-light-validate.resolver';
export function install(vue: VueConstructor, config: UiLightValidateResolver = undefined) {
    vue.directive(selector, directive(config));
}
export default { install }