import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import FindUs from "@/views/FindUs.vue";
import Restaurant from "@/views/Restaurant.vue";
import Accommodation from "@/views/Accommodation.vue"
import Spa from "@/views/Spa.vue"
import RestMenu from "@/views/RestMenu.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path:"/findus",
    name: "FindUs",
    component: FindUs,
  },
  {
  path:"/restaurant",
  name: "Restaurant",
  component: Restaurant,
  },
  {
    path:"/accommodation",
    name: "Accommodation",
    component: Accommodation,
    },
    {
      path:"/spa",
      name: "Spa",
      component: Spa,
      },
    {
      path:"/restMenu",
      name:"RestMenu",
      component: RestMenu,
    }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;