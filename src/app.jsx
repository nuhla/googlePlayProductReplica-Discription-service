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
        url: "https://agile-waters-08360.herokuapp.com/discrp",
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
      <div
        className="alert  alert-danger alert-dismissible fade show"
        role="alert"
      >
        <p className="hidden">{this.state.Discription}</p>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("app"));
