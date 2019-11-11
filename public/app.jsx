

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Discription: "",
      userId: 0
    };
  }

  componentDidMount() {
    /// first try is to get data from database for the first object in it
    if (
      typeof this.props.userId === "undefined" ||
      typeof this.props.userId === "null"
    ) {
      var that = this;
      $.ajax({
        url: "/discrp",
        type: "GET",
        data: { userId: "00-00-1" },
        datatype: "apllication/json",
        success: function(response) {
          console.log("sucssed");
          that.setState({
            userId: response.username,
            Discription: response.Discription
          });
        },
        error: function(error) {
          alert(error);
        }
      });
    } else {
      this.setState({
        userId: this.props.userId
      });

      $.ajax({
        url: "/discrp",
        type: "GET",
        data: { userId: that.state.userId },
        datatype: "apllication/json",
        success: function(response) {
          console.log("sucssed");
          that.setState({
            Discription: response.Discription
          });
        },
        error: function(error) {
          alert(error);
        }
      });
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.Discription}</p>
        <di></div>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("app"));
