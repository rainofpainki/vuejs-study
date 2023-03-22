Vue.config.devtools = true;

var webstore = new Vue({
  el: "#app",
  data: {
    sitename: "Vue.js 애완용품샵",
  },
  beforeCreate: function () {
    console.log("beforeCreate");
  },
  created: function () {
    console.log("created");
  },
  beforeMount: function () {
    console.log("beforeMount");
  },
  mounted: function () {
    console.log("mounted");
  },
  beforeUpdate: function () {
    console.log("beforeUpdate");
  },
  updated: function () {
    console.log("updated");
  },
  beforeDestroy: function () {
    console.log("beforeDestroy");
  },
  destroyed: function () {
    console.log("destroyed");
  },
});
