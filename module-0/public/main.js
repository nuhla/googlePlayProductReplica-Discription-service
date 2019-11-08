class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement("h1", null, "inner component ");
  }

}

ReactDOM.render(React.createElement(Index, null), document.getElementById("info"));