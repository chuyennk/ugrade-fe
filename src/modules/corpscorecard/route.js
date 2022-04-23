const Module = () => import("./Module.vue");
const ScorecardModule = () => import("./views/ScorecardModule.vue");

const route = {
  path: "/corpsc",
  component: Module,
  children: [
    {
      path: "",
      component: ScorecardModule
    }
  ]
};

export default route

