import Module from './Module.vue'
// import Home from './views/Home.vue'
import HomeDisplay from './views/HomeDisplay.vue'
import Login from './views/Login.vue'

const route = {
      path: "/",
      name: "Home",
      component: Module,
      children: [
        {
          path: "",
          component: HomeDisplay
        },
        {
          path: "login",
          component: Login
        }
      ]
    }

export default route