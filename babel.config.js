module.exports = {
  presets: [
    '@vue/app',
    [
      "@babel/env",
      {
        "modules": false
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "helpers": false,
        "regenerator": true
      }
    ]
  ]
}