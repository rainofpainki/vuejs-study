Vue.config.devtools = true;
var webstore = new Vue({
  el: "#app",
  data: {
    sitename: "Vue.js 애완용품샵",
    product: {
      id: 1001,
      title: "Feed for your cat",
      description: "당신의 고양이를 위한 <strong>유기농</strong> 사료입니다.",
      price: 150000000,
      image: "assets/images/product-fullsize.png",
      availableInventory: 10,
    },
    cart: [],
    showProduct: true,
    order: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      zip: "",
      state: "",
      method: "자택 주소",
      business: "직장 주소",
      home: "자택 주소",
      gift: "선물로 보내기",
      sendGift: "선물로 보내기",
      dontSendGift: "선물로 보내지 않기",
    },
    states: {
      AL: "앨라배마",
      AR: "애리조나",
      CA: "캘리포니아",
      NV: "네바다",
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
    upperTitle: function (title) {
      return title.toUpperCase();
    },
  },
  methods: {
    addToCart: function () {
      this.cart.push(this.product.id);
    },
    showCheckout() {
      this.showProduct = this.showProduct ? false : true;
    },
    submitForm() {
      alert("제출 완료");
    },
  },
  computed: {
    cartItemCount: function () {
      return this.cart.length || "";
    },
    canAddToCart: function () {
      return this.product.availableInventory > this.cartItemCount;
    },
  },
});
