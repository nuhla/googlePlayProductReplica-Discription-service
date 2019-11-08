class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("div", null, React.createElement("h1", null, "hiii "));
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));