import React from "react";
import { createMemoryHistory, createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import App from "./app";

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  });

  onNavigate && history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;
      if (nextPathName !== pathname) {
        history.push(nextPathName);
      }
    }
  }
}

// Running in isolation
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// Running through a Container
export { mount };
