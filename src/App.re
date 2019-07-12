%raw "import './App.css'";

[@react.component]
let make = () => {
  <div className="App">
  <header className="App-header">
      <a
        className="App-link"
        href="https://github.com/idkjs/reasonml-dropdown-menu-tutorial"
        target="_blank"
        rel="noopener noreferrer">
        {React.string("ReasonML Dropdown Menu Tutorial(Click to see the source code)")}
      </a>
    </header>
    <div style=(ReactDOMRe.Style.make(~display="flex", ~justifyContent="center",()))>
        <Dropdown />
      </div>
  </div>;
};