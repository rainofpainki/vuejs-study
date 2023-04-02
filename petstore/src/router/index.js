import Vue from "vue";
import Router from "vue-router";
import Form from "@/component/Form";
import Form from "@/component/Main";

Vue.use(Router);

export default new Router({
  mode: "history", // 경로에 해시가 없는 히스토리 모드
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main,
      props: true
    },
    {
      path: "/form",
      name: "Form",
      component: Form,
      props: true
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
