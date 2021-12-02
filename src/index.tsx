import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/App.css";
import App from "./components/Pages/App";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import PrivateRouter from "./router/PrivateRouter";
import PublicRouter from "./router/PublicRouter";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<p>Cargando...</p>}>
      <BrowserRouter>
        {(window.localStorage.getItem("SpotifyToken")
         )? (
          <PrivateRouter />
        ) : (
          <PublicRouter />
        )}
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
