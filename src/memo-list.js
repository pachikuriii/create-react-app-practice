import React from "react";
import Memo from './memo'

class MemoList extends React.Component {
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
           <ul>
               <Memo/>
          </ul>
          <button onClick={() => this.props.addMemo()}>+</button>
          </div>
           
        );
    }
  }
  
  
  export default MemoList;