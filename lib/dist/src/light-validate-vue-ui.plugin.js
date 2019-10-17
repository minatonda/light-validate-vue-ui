import { selector, directive } from './light-validate-vue-ui.directive';
export function install(vue, config = undefined) {
    vue.directive(selector, directive(config));
}
export default { install };
//# sourceMappingURL=light-validate-vue-ui.plugin.js.map