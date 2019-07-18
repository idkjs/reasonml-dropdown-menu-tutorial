// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";

import './styles.css'
;

function Dropdown(Props) {
  var match = React.useReducer((function (state, action) {
          if (action) {
            return state;
          } else {
            return /* record */[/* showList */!state[/* showList */0]];
          }
        }), /* record */[/* showList */false]);
  var dispatch = match[1];
  var match$1 = match[0][/* showList */0];
  return React.createElement("div", {
              className: "dropdown",
              style: {
                background: "red",
                width: "200px"
              },
              tabIndex: 0,
              onBlur: (function (_evt) {
                  return Curry._1(dispatch, /* ShowList */0);
                })
            }, React.createElement("div", {
                  className: "button",
                  onClick: (function (_evt) {
                      return Curry._1(dispatch, /* ShowList */0);
                    })
                }, "My Setting"), match$1 ? React.createElement("ul", undefined, React.createElement("li", undefined, React.createElement("a", {
                            className: "active",
                            href: "#Create Page"
                          }, "Create Page")), React.createElement("li", undefined, React.createElement("a", {
                            href: "#Manage Pages"
                          }, "Manage Pages ")), React.createElement("li", undefined, React.createElement("a", {
                            href: "#Create Ads"
                          }, "Create Ads")), React.createElement("li", undefined, React.createElement("a", {
                            href: "#Manage Ads"
                          }, "Manage Ads")), React.createElement("li", undefined, React.createElement("a", {
                            href: "#Activity Logs"
                          }, "Activity Logs")), React.createElement("li", undefined, React.createElement("a", {
                            href: "#Setting"
                          }, "Setting")), React.createElement("li", undefined, React.createElement("a", {
                            href: "#Log Out"
                          }, "Log Out"))) : null);
}

var make = Dropdown;

export {
  make ,
  
}
/*  Not a pure module */
