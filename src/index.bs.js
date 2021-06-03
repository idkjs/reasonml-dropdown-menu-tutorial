// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ReactDOMRe from "reason-react/src/legacy/ReactDOMRe.bs.js";
import * as ServiceWorker from "./serviceWorker";
import * as App$ReasonmlDropdownMenuTutorial from "./App.bs.js";

import './index.css'
;

function register_service_worker(prim) {
  ServiceWorker.register();
  
}

function unregister_service_worker(prim) {
  ServiceWorker.unregister();
  
}

ReactDOMRe.renderToElementWithId(React.createElement(App$ReasonmlDropdownMenuTutorial.make, {}), "root");

ServiceWorker.unregister();

export {
  register_service_worker ,
  unregister_service_worker ,
  
}
/*  Not a pure module */
