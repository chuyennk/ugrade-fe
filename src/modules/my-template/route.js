const Module = () => import("./Module.vue");
const Home = () => import("./views/Home.vue");

const route = {
  path: "/cust",
  component: Module,
  children: [
    {
      path: "",
      component: Home
    }
  ]
};

export default route

