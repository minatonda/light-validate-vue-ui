<template>
  <div style="text-align:center">
    <br />
    <div>
      <label>Name</label>
      <br />
      <input
        type="text"
        placeholder="Name"
        v-model="appModel.name"
        v-ui-light-validate="lightRuleMapping"
        ui-light-property="name"
        ui-light-target="appModel"
      />
    </div>
    <br />
    <br />
    <br />
    <div>
      <label>UserName</label>
      <br />
      <input
        type="text"
        placeholder="Username"
        v-model="appModel.username"
        v-ui-light-validate="lightRuleMapping"
        ui-light-property="username"
        ui-light-target="appModel"
      />
    </div>
    <br />
    <br />
    <br />
    <div>
      <label>Password</label>
      <br />
      <input
        type="number"
        placeholder="Password"
        v-model="appModel.password"
        v-ui-light-validate="lightRuleMapping"
        ui-light-property="password"
        ui-light-target="appModel"
        v-on:ui-light-on-validate="onValidateField"
      />
    </div>
    <br />
    <br />
    <br />
    <div>
      <label>ConfirmPassword</label>
      <br />
      <input
        type="number"
        placeholder="Confirm Password"
        v-model="appModel.confirmPassword"
        v-ui-light-validate="lightRuleMapping"
        ui-light-property="confirmPassword"
        ui-light-target="appModel"
        v-bind:ul-target="appModel"
        v-on:ui-light-on-validate="onValidateField"
      />
    </div>
  </div>
</template>

<script lang="ts">
export { HelloWorldComponent as default } from './hello-word.component';
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
