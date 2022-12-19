import React from "react";

class Memo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        memo: this.props.memo,
        content: this.props.memo.content
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({ value: event.target.value });
      
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
  
    render() {
        return (
            <p onClick={() => this.props.editMemo(this.state.memo)}>{this.state.memo.content}</p>
        );
    }
  }
  
  
  export default Memo;