<template>
    <div class="container-fluid pt-2">
      <div class="row">
          <div class="col-12 col-md-12 form-group">
              <div class="card">
                  <div class="card-body">
                      <div class="row">
                          <div class="col-12 form-group">
                              <label class="control-label">Name</label>
                              <input class="form-control" type="text" placeholder="Name" v-model="appModel.name" v-ui-light-validate="lightRuleMapping" ui-light-property="name" ui-light-target="appModel" />
                          </div>
                          <div class="col-12 form-group">
                              <label class="control-label">UserName</label>
                              <input class="form-control" type="text" placeholder="Username" v-model="appModel.username" v-ui-light-validate="lightRuleMapping" ui-light-property="username" ui-light-target="appModel" />
                          </div>
                          <div class="col-12 form-group">
                              <label class="control-label">Password</label>
                              <input class="form-control" type="number" placeholder="Password" v-model="appModel.password" v-ui-light-validate="lightRuleMapping" ui-light-property="password" ui-light-target="appModel" v-on:ui-light-on-validate="onValidateField" />
                          </div>
                          <div class="col-12 form-group">
                              <label class="control-label">ConfirmPassword</label>
                              <input class="form-control" type="number" placeholder="Confirm Password" v-model="appModel.confirmPassword" v-ui-light-validate="lightRuleMapping" ui-light-property="confirmPassword" ui-light-target="appModel" v-bind:ul-target="appModel" v-on:ui-light-on-validate="onValidateField" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-12 col-md-12 form-group">
              <b>See code below</b>
              <hr />
          </div>
          <div class="col-12 col-md-12 form-group">
              <div class="card">
                  <div class="card-header">component.ts</div>
                  <div class="card-body">
                      <pre>
              <code>{{getHtmlComponent()}}</code>
            </pre>
                  </div>
              </div>
          </div>
          <div class="col-12 col-md-12 form-group">
              <div class="card">
                  <div class="card-header">model.light-mapping.ts</div>
                  <div class="card-body">
                      <pre>
                  <code>{{getHtmlLightMapping()}}</code>
                </pre>
                  </div>
              </div>
          </div>
          <div class="col-12 col-md-12 form-group">
              <div class="card">
                  <div class="card-header">component.html</div>
                  <div class="card-body">
                      <pre>
                <code>{{getHtmlTemplate()}}</code>
              </pre>
                  </div>
              </div>
          </div>
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
