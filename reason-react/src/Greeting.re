let component = ReasonReact.statelessComponent("Greeting");

let make = (~name, _children) => {
  ...component,
  render: _self =>
    <div>
      {ReasonReact.string("Hello " ++ name ++ " from ReasonReact!")}
    </div>,
};