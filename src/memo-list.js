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
    const rows = []
    this.props.memos.forEach((memo) => {
      rows.push(
        <Memo
          memo={memo}
          key={memo.id}
          editMemo={this.props.editMemo}
        />
        )
      })
      return (
        <div>
           <ul>
               {rows}
          </ul>
          <button onClick={() => this.props.addMemo()}>+</button>
          </div>
           
        );
    }
  }
  
  
  export default MemoList;