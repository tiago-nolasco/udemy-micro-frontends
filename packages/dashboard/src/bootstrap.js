import { createApp } from "vue";
import Dashboard from "./components/Dashboard";

const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
}

// Running in isolation
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

// Running through a Container
export { mount };
