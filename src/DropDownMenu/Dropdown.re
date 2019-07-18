%raw
"import './styles.css'";

type state = {showList: bool};

type action =
  | ShowList
  | ItemClick;

[@react.component]
let make = () => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | ShowList => {showList: !state.showList}
        | ItemClick => state
        },
      {showList: false},
    );

  <div
    className="dropdown"
    style={ReactDOMRe.Style.make(~background="red", ~width="200px", ())}
    onBlur={_evt => dispatch(ShowList)}
    tabIndex=0>
    <div className="button" onClick={_evt => dispatch(ShowList)}>
      {"My Setting" |> React.string}
    </div>
    {
      state.showList ?
        <ul>
          <li>
            <a className="active" href="#Create Page">
              {"Create Page" |> React.string}
            </a>
          </li>
          <li>
            <a href="#Manage Pages"> {"Manage Pages " |> React.string} </a>
          </li>
          <li> <a href="#Create Ads"> {"Create Ads" |> React.string} </a> </li>
          <li> <a href="#Manage Ads"> {"Manage Ads" |> React.string} </a> </li>
          <li>
            <a href="#Activity Logs"> {"Activity Logs" |> React.string} </a>
          </li>
          <li> <a href="#Setting"> {"Setting" |> React.string} </a> </li>
          <li> <a href="#Log Out"> {"Log Out" |> React.string} </a> </li>
        </ul> :
        React.null
    }
  </div>;
};