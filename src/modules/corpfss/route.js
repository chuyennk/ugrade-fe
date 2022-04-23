const Module = () => import("./Module.vue");
const FssView = () => import("./views/FssView.vue");

const route = {
  path: "/corpfss",
  component: Module,
  children: [
    {
      path: "",
      component: FssView
    }
  ]
};

export default route

