new Vue({
  el: "#app",
  data: {
    length: 5,
    width: 3,
  },
  computed: {
    area: function () {
      return this.length * this.width;
    },
  },
  watch: {
    length: function (newVal, oldVal) {
      console.log("이전 세로 길이 : " + oldVal);
      console.log("새 세로 길이 : " + newVal);
    },
    width: function (newVal, oldVal) {
      console.log("이전 가로 길이 : " + oldVal);
      console.log("새 가로 길이 : " + newVal);
    },
    area: function (newVal, oldVal) {
      console.log("이전 넓이 : " + oldVal);
      console.log("새 넓이 : " + newVal);
    },
  },
  beforeUpdate: function () {
    console.log("데이터 변경은 결과값 변경 이전에 이루어졌습니다.");
  },
});
