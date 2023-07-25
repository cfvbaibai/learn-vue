import { createSSRApp } from "vue";
import AppVue from "./App.vue";

export function createMyApp() {
  return createSSRApp(AppVue)
}
