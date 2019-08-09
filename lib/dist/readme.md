# light-validate-vue-ui
Vue UI module for working with the light-validate Library.
This module provides a directive that controls properties of an html element based on a class with Light Validate mappings.

### Install

```sh
$ npm install -save light-validate
$ npm install -save light-validate-vue-ui
$ npm install -save reflect-metadata
```

### Development and Implementation - Configuring on Vue ...
Register the UiLightValidate plugin on Vue.
```typescript
import * as UiLightValidate from 'light-validate-vue-ui';
Vue.use(UiLightValidate);
```

### Development and Implementation - Create your LightRules ...
Create some LightRules...
```typescript
import { LightRule } from 'light-validate';

export const LightRuleRequired: LightRule = async (value, target) => {
  if (!value) {
    throw 'Value must be not empty';
  }
}

export const LightRuleMustBeTheSame = (property) => {
  const rule: LightRule = async (value, target) => {
    if (value === target[property]) {
      throw 'Value must be the same';
    }
  }
  return rule;
}

export const LightRuleMustNotBeTheSame = (property) => {
  const rule: LightRule = async (value, target) => {
    if (value === target[property]) {
      throw 'Value must not be the same';
    }
  }
  return rule;
}

export const LightRuleOnlyNumber: LightRule = async (value, target) => {
  if ((typeof value) !== 'number') {
    throw 'Value is not a Number';
  }
}

export const LightRuleOnlyText: LightRule = async (value, target) => {
  if ((typeof value) !== 'string') {
    throw 'Value is not a Text';
  }
}
```

### Development and Implementation - Create your Mapping Class ...
Create your mapping class...
```typescript
import { LightValidate } from 'light-validate';
import { LightRuleOnlyText } from './light-rule-only-text';
import { LightRuleOnlyNumber } from './light-rule-only-number';
import { LightRuleMustNotBeTheSame } from './light-rule-must-not-be-the-same';
import { LightRuleMustBeTheSame } from './light-rule-must-be-the-same';
import { LightRuleRequired } from './light-rule-required';

export class UserLightMapping {

  @LightValidate(LightRuleRequired, LightRuleOnlyText, LightRuleMustNotBeTheSame('username'))
  public name: string = undefined;

  @LightValidate(LightRuleRequired, LightRuleOnlyText, LightRuleMustNotBeTheSame('name'))
  public username: string = undefined;

  @LightValidate(LightRuleRequired, LightRuleOnlyNumber, LightRuleMustBeTheSame('confirmPassword'))
  public password: string = undefined;

  @LightValidate(LightRuleRequired, LightRuleOnlyNumber, LightRuleMustBeTheSame('password'))
  public confirmPassword: string = undefined;

}
```

### Development and Implementation - Use on Component ...
Add your target mapping class to an component property

```typescript
import { UserLightMapping } from 'src/mappings/user.light-mapping';

@Component({})
export class AppComponent {

  public title = 'light-validate-vue-ui';

  constructor() { }

  public lightRuleMapping = UserLightMapping; // <- Mapping Class Property

  public appModel: Partial<UserLightMapping> = {}; // <- Your Data Model.
  //Here, I set my data model type to Partial <MyMappingClass> for typing purposes only, the typing code is optional, but the object to be validated must follow the interface of the target mapping class.
  
}

```

And call the directive on your template code
```html
<!-- v-ui-light-validate attribute needs to bind the Mapping Class -->
<!-- ui-light-property needs to receive the property name to be validated on directive -->
<!-- ui-light-target attribute needs to bind target model to be validate on directive-->
<div style="text-align:center">
  <br>
  <div>
    <label>Name</label>
    <br>
    <input type="text" placeholder="Name" v-model="appModel.name" v-ui-light-validate="lightRuleMapping"
      ui-light-property="name" ui-light-target="appModel">
  </div>
  <br>
  <div>
    <label>UserName</label>
    <br>
    <input type="text" placeholder="Username" v-model="appModel.username" v-ui-light-validate="lightRuleMapping"
      ui-light-property="username" ui-light-target="appModel">
  </div>
  <br>
  <div>
    <label>Password</label>
    <br>
    <input type="number" placeholder="Password" v-model="appModel.password" v-ui-light-validate="lightRuleMapping"
      ui-light-property="password" ui-light-target="appModel">
  </div>
  <br>
  <div>
    <label>ConfirmPassword</label>
    <br>
    <input type="number" placeholder="Confirm Password" v-model="appModel.confirmPassword"
      v-ui-light-validate="lightRuleMapping" ui-light-property="confirmPassword" ui-light-target="appModel">
  </div>
</div>
```

## Attributes

| Attribute                       	| Description                                                                          	| Type    	| Default       	|
|---------------------------------	|--------------------------------------------------------------------------------------	|---------	|---------------	|
| v-ui-light-validate                 	| Directive selector, also receives the mapping class.                                 	| Object  	| undefined     	|
| ui-light-property                 	| Receives the property key of the target to be validated.                             	| string  	| undefined     	|
| ui-light-target                   	| Receives the target to be validated.                                                 	| Object  	| undefined     	|
| v-bind:ui-light-on-validate                   	| Receives a callback function that will fire when performing field validation.                                                 	| (BaseException)=>void  	| undefined     	|
| ui-light-validate-on-blur       	| Enables validation on the blur event of the element.                                 	| boolean 	| true          	|
| ui-light-validate-on-change     	| Enables validation on the change event of the element.                               	| boolean 	| true          	|
| ui-light-validate-on-keyup      	| Enables validation on the keyup event of the element.                                	| boolean 	| true          	|
| ui-light-validate-icon-enabled  	| Enables the validation icon.                                                         	| boolean 	| false         	|
| ui-light-validate-invalid-class 	| Receives the name of the class that will represent the invalid state of the element. 	| string  	| light-invalid 	|
| ui-light-validate-valid-class   	| Receives the name of the class that will represent the valid state of the element.   	| string  	| light-valid   	|
| ui-light-validate-message-class 	| Receives the name of the label class that will represent the state of the element.   	| string  	| light-message 	|
