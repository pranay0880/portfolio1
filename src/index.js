import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CustomThemeProvider } from "./ThemeContext";
// import { CacheProvider } from "@emotion/react";
// import createCache from "@emotion/cache";

const observerErr = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (
      mutation.type === "childList" &&
      mutation.addedNodes.length > 0 &&
      [...mutation.addedNodes].some((node) => {
        return (
          node.nodeType === 1 &&
          node.textContent.includes(
            "ResizeObserver loop completed with undelivered notifications."
          )
        );
      })
    ) {
      mutation.target.innerHTML = ""; // clear the warning
    }
  }
};

const mutationObserver = new MutationObserver(observerErr);

mutationObserver.observe(document.body, {
  childList: true,
  subtree: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
// const cache = createCache({ key: "css", prepend: true });
root.render(
  <React.StrictMode>
    <CustomThemeProvider>
      {/* <CacheProvider value={cache}> */}
      <App />
      {/* </CacheProvider> */}
    </CustomThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
