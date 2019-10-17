import { validate } from 'light-validate';
export const selector = 'ui-light-validate';
export function directive(resolver) {
    const options = {
        inserted: function (el, binding, vnode) {
            const modelRuleClass = binding.value;
            // const modelRuleOnValidate = getModelRuleOnValidate(el, vnode);
            // criar span que irá conter o erro.
            const htmlErrorElement = getHtmlErrorElement(el);
            if (isIconEnabled(el)) {
                // criar div que irá conter o icone referente a validação
                const htmlIconElement = getHtmlIconElement(el);
                !el.parentNode.contains(htmlIconElement) && el.parentNode.insertBefore(htmlIconElement, el);
            }
            const onValidateThen = () => {
                //remover span com classe 'error' referente ao campo do DOM...caso já esteja presente
                el.parentNode.contains(htmlErrorElement) && el.parentNode.removeChild(htmlErrorElement);
                el.parentElement.classList.remove(getElementInvalidClass(el));
                el.parentElement.classList.add(getElementValidClass(el));
                //disparar callback externo onValidate
                emit(vnode, 'ui-light-on-validate', undefined);
            };
            const onValidateCatch = (exceptions) => {
                const exception = exceptions.shift();
                //setar texto do span com classe 'error' referente ao campo do DOM...
                htmlErrorElement.innerHTML = resolver ? resolver.label(exception) : exception.code;
                //adicionar span com classe 'error' referente ao campo do DOM...caso já não esteja presente
                !el.parentNode.contains(htmlErrorElement) && el.parentNode.appendChild(htmlErrorElement);
                el.parentElement.classList.add(getElementInvalidClass(el));
                el.parentElement.classList.remove(getElementValidClass(el));
                //disparar callback externo onValidate
                emit(vnode, 'ui-light-on-validate', exception);
            };
            const onValidateFinally = () => {
            };
            let firstTrigger = true;
            if (isValidateOnBlurEnabled(el)) {
                el.onblur = (event) => {
                    firstTrigger = false;
                    validate(getVModelValue(el, vnode), modelRuleClass, getElementProperty(el))
                        .then(() => onValidateThen())
                        .catch((errors) => onValidateCatch(errors))
                        .finally(() => onValidateFinally());
                };
            }
            ;
            if (isValidateOnChangeEnabled(el)) {
                el.onchange = (event) => {
                    firstTrigger = false;
                    validate(getVModelValue(el, vnode), modelRuleClass, getElementProperty(el))
                        .then(() => onValidateThen())
                        .catch((errors) => onValidateCatch(errors))
                        .finally(() => onValidateFinally());
                };
            }
            if (isValidateOnBlurEnabled(el) || isValidateOnChangeEnabled(el)) {
                el.onkeyup = (event) => {
                    if (!firstTrigger) {
                        validate(getVModelValue(el, vnode), modelRuleClass, getElementProperty(el))
                            .then(() => onValidateThen())
                            .catch((errors) => onValidateCatch(errors))
                            .finally(() => onValidateFinally());
                    }
                };
            }
            else if (isValidateOnKeyUpEnabled(el)) {
                el.onkeyup = (event) => {
                    validate(getVModelValue(el, vnode), modelRuleClass, getElementProperty(el))
                        .then(() => onValidateThen())
                        .catch((errors) => onValidateCatch(errors))
                        .finally(() => onValidateFinally());
                };
            }
            ;
        }
    };
    return options;
}
function isValidateOnBlurEnabled(el) {
    return getBoolValueFromAttr(el, 'ui-light-validate-on-blur', true);
}
function isValidateOnChangeEnabled(el) {
    return getBoolValueFromAttr(el, 'ui-light-validate-on-change', true);
}
function isValidateOnKeyUpEnabled(el) {
    return getBoolValueFromAttr(el, 'ui-light-validate-on-keyup', true);
}
function isIconEnabled(el) {
    return getBoolValueFromAttr(el, 'ui-light-validate-icon-enabled', false);
}
function getBoolValueFromAttr(el, attr, defaultValue) {
    if ((el.getAttribute(attr) === undefined || el.getAttribute(attr) === '' || el.getAttribute(attr) === null)) {
        return defaultValue;
    }
    else {
        return (el.getAttribute(attr) == 'true');
    }
}
function getElementProperty(el) {
    return el.getAttribute('ui-light-property');
}
function getElementInvalidClass(el) {
    return el.getAttribute('ui-light-validate-invalid-class') || 'light-error';
}
function getElementValidClass(el) {
    return el.getAttribute('ui-light-validate-invalid-class') || 'light-valid';
}
function getElementMessageClass(el) {
    return el.getAttribute('ui-light-validate-message-class') || 'light-invalid';
}
function getUiLightTarget(el) {
    return el.getAttribute('ui-light-target') || undefined;
}
function getVModelValue(el, vnode) {
    const uiLightTarget = getUiLightTarget(el);
    const vModelFullExpression = vnode.data.directives.find(o => o.name === 'model').expression;
    const vModelExpression = uiLightTarget ? uiLightTarget : vModelFullExpression.split('.')[0];
    return getContextValue(vnode.context, vModelExpression);
}
function emit(vnode, name, data) {
    var handlers = (vnode.data && vnode.data.on) ||
        (vnode.componentOptions && vnode.componentOptions.listeners);
    if (handlers && handlers[name]) {
        handlers[name].fns(data);
    }
}
function getContextValue(context, expression) {
    const expressionArray = expression.split('.');
    return expressionArray.length > 1 ? getContextValue(context[expressionArray[0]], expressionArray.slice(1).join('.')) : context[expressionArray[0]];
}
function getHtmlIconElement(el) {
    const htmlDivIconElement = document.createElement('div');
    htmlDivIconElement.setAttribute('class', 'palco-icon');
    const htmlIconElement = document.createElement('i');
    htmlIconElement.setAttribute('class', 'icon');
    htmlDivIconElement.appendChild(htmlIconElement);
    return htmlDivIconElement;
}
function getHtmlErrorElement(el) {
    const htmlSpanElement = document.createElement('span');
    const htmlSpanElementClass = getElementMessageClass(el);
    htmlSpanElement.setAttribute('class', htmlSpanElementClass);
    return htmlSpanElement;
}
// export default function (vue: VueConstructor<Vue>) {
//     Vue.directive(selector, options);
// };
//# sourceMappingURL=light-validate-vue-ui.directive.js.map