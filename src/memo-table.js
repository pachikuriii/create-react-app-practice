import React from "react";
import MemoForm from "./memo-form";
import MemoList from './memo-list'
import './memo-table.css';

class MemoTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        formMode: 'off'
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
    addMemo = () => {
    this.setState({ formMode: '' })
    }
  
    render() {
        return (
          <div className="memo-table">
            <div>
              <MemoList addMemo={this.addMemo} />
            </div>
            <div className={this.state.formMode}>
              <MemoForm />
            </div>   
          </div>
      );
    }
  }
  
  
  export default MemoTable;
  