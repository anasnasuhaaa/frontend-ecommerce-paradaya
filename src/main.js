import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes/route";
import { createPinia } from "pinia";
import "./index.css";
import "@steveyuowo/vue-hot-toast/vue-hot-toast.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";

import * as FaIcons from "oh-vue-icons/icons/fa";
import * as CoIcons from "oh-vue-icons/icons/co";
import * as SiIcons from "oh-vue-icons/icons/si";
const pinia = createPinia();
const Fa = Object.values({ ...FaIcons });
const Co = Object.values({ ...CoIcons });
const Si = Object.values({ ...SiIcons });
addIcons(...Fa, ...Co, ...Si);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(pinia);
app.use(router);
app.mount("#app");
