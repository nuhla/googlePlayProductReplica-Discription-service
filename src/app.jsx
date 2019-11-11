const Container = styled.div`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 1px solid #f8f5ff;
  border-radius: 10px;

  word-wrap: break-word;
`;

const Div = styled.div`
  font-size: 0.8em;
  margin: 0.5em;
  padding: 0.25em 1em;

  display: block;
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-line;

  word-wrap: break-word;
`;

const Divall = styled.div`
  font-size: 0.8em;
  margin: 0.5em;
  padding: 0.25em 1em;

  display: block;
  height: 100%;
  text-overflow: ellipsis;
  white-space: pre-line;
`;

const InnerDv = styled.button`
  font-size: 1.5em;
  padding: 0.25em 1em;
  border-radius: 0px;
  border: 0px 
  border-radius: 0px;

  width: 100%;
  height:80px;
  border-radius: 20px 10px;
  background-color:#ffffff;
  border-top: 0px ;

  color: green;`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Discription: "",
      userId: 0,
      openreadmoe: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      openreadmoe: !this.state.openreadmoe
    });
    console.log(this.state.openreadmoe);
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
            userId: response.data.userID,
            Discription: response.data.description
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
      <Container>
        {!this.state.openreadmoe ? (
          <Div>
            <p>{this.state.Discription}</p>
          </Div>
        ) : (
          <Divall>
            <p>{this.state.Discription}</p>
          </Divall>
        )}

        {!this.state.openreadmoe ? (
          <InnerDv onClick={this.handleClick}>read more</InnerDv>
        ) : (
          <InnerDv onClick={this.handleClick}>Less</InnerDv>
        )}
      </Container>
    );
  }
}

ReactDOM.render(<App></App>, document.getElementById("app"));
