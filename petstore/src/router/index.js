import Vue from "vue";
import Router from "vue-router";
import Form from "@/components/Form";
import Main from "@/components/Main";
import Product from "@/components/Product";
import EditProduct from "@/components/EditProduct";

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
      path: "/product/:id",
      name: "Id",
      component: Product,
      props: true,
      children: [
        {
          path: "edit",
          name: "Edit",
          component: EditProduct,
          props: true
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
