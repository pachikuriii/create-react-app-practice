import React from "react";

class MemoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        content: '',
        memo: this.props.selectedMemo
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(event) {
    this.setState({ content: event.target.value });
    event.preventDefault();
    }
  
  handleSubmit(event) {
    this.props.editedMemo(this.props.selectedMemo, this.state.content)
    this.setState({ content: this.props.selectedMemo.id })
      event.preventDefault();
  }

  handleStateChange
  
  render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <textarea type="text" defaultValue={this.props.selectedMemo.id} onChange={this.handleChange} required/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  
  export default MemoForm;
  