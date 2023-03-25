Vue.config.devtools = true;
var webstore = new Vue({
  el: "#app",
  data: {
    sitename: "Vue.js 애완용품샵",
    product: {
      id: 1001,
      title: "고양이 사료, 2500원",
      description: "당신의 고양이를 위한 <strong>유기농</strong> 사료입니다.",
      price: 2500,
      image: "assets/images/product-fullsize.png",
    },
  },
});
