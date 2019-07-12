%raw "import './App.css'";

[@react.component]
let make = () => {
  <div className="App">
    <div style=(ReactDOMRe.Style.make(~display="flex", ~justifyContent="center",()))>
        <Dropdown />
      </div>
  </div>;
};