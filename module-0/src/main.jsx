
class Index extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return (
            <h1>inner component </h1>
          );
    }
}

ReactDOM.render(<Index></Index>, document.getElementById("info"))
