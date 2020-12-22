import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
// import HomePage from "./HomePage";
// import AboutPage from "./AboutPage";

const HomePage = () => import(/* webpackChunkName: "HomePage" */ './HomePage')
const AboutPage = () => import(/* webpackChunkName: "AboutPage" */ './AboutPage')

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
];

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history',
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
