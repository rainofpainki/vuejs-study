Vue.config.devtools = true;
var webstore = new Vue({
  el: "#app",
  data: {
    sitename: "Vue.js 애완용품샵",
    product: {
      id: 1001,
      title: "고양이 사료, 25파운드",
      description: "당신의 고양이를 위한 <strong>유기농</strong> 사료입니다.",
      price: 150000000,
      image: "assets/images/product-fullsize.png",
    },
  },
  filters: {
    formatPrice: function (price) {
      // formatPrice 정수를 받아 값을 형식화
      if (!parseInt(price)) {
        return "";
      } // 정수를 받지 않으면 즉시 반환함
      if (price > 99999) {
        // $1,000 이상의 값들을 형식화함.
        var priceString = (price / 100).toFixed(2); // 소숫점 두번째 자리까지 붙임.
        // 세자리마다 쉼표를 삽입함.
        var priceArray = priceString.split("").reverse();
        var index = 3;
        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, ",");
          index += 4;
        }
        return "$" + priceArray.reverse().join("");
      } else {
        return "$" + (price / 100).toFixed(2); // $1,000 미만이라면 형식화된 십진수 값으로 반환
      }
    },
  },
});
