const Div = styled.div`
  font-size: 0.8em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border-radius: 1px;
  border: 1px solid #feedfe;
  border-radius: 1px;
  display: block;
`;
const InnerDv = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 0px;
  border: 0px 
  border-radius: 0px;
  width: 100%;
  background: rgb(254,237,254);
background: linear-gradient(180deg, rgba(254,237,254,1) 0%, rgba(255,255,255,1) 16%, rgba(249,249,249,1) 88%, rgba(251,239,239,1) 100%);
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Discription: "",
      userId: 0
    };
  }

  ClickMe(e) {
    Div = styled.div`
      font-size: 0.8em;
      margin: 0.5em;
      padding: 0.25em 1em;
      border-radius: 1px;
      border: 1px solid #feedfe;
      border-radius: 1px;
      display: block;
      height: 20%;
    `;
    console.log("iam in");
  }

  componentDidMount() {
    /// first try is to get data from database for the first object in it
    if (typeof this.props.userId === "undefined" || typeof this.props.userId === "null") {
      var that = this;
      $.ajax({
        url: "https://agile-waters-08360.herokuapp.com/discrp",
        type: "GET",
        data: {
          userId: "00-00-1"
        },
        datatype: "apllication/json",
        success: function (response) {
          console.log("sucssed");
          that.setState({
            userId: response.data.userID,
            Discription: response.data.description
          });
        },
        error: function (error) {
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
        data: {
          userId: that.state.userId
        },
        datatype: "apllication/json",
        success: function (response) {
          console.log("sucssed");
          that.setState({
            Discription: response.Discription
          });
        },
        error: function (error) {
          alert(error);
        }
      });
    }
  }

  render() {
    return React.createElement(Div, null, React.createElement("p", null, this.state.Discription), React.createElement(InnerDv, {
      onclick: this.ClickMe.bind(this)
    }, "read more"));
  }

}

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));