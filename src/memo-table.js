import React from "react";
import MemoForm from "./memo-form";
import MemoList from './memo-list'

class MemoTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Please write an essay about your favorite DOM element.'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
        return (
            <div>
                <MemoList />
                <MemoForm />
            </div>
       
      );
    }
  }
  
  
  export default MemoTable;
  