import { Component, Prop, Vue } from 'vue-property-decorator';
import { UserLightMapping } from '../light-validate/user.light-mapping';
import { LightException } from '../../../light-validate/src/common/light-exception';

@Component({})
export class HelloWorldComponent extends Vue {
    public lightRuleMapping = UserLightMapping;

    public appModel: Partial<UserLightMapping> = {};
}