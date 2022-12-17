import React from "react";
import MemoForm from "./memo-form";
import MemoList from './memo-list'
import './memo-table.css';

const STORAGE_KEY = 'react-todo'
const todoStorage = {
  fetch: function () {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

class MemoTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        formMode: 'off',
        memos: todoStorage.fetch()
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
      this.state.memos.push({ id: new Date().getTime(), content:'' })
      todoStorage.save(this.state.memos)
      this.setState({ todos: this.state.memos })
    }
  
    render() {
        return (
          <div className="memo-table">
            <div>
              <MemoList addMemo={this.addMemo} memos={this.state.memos} />
            </div>
            <div className={this.state.formMode}>
              <MemoForm />
            </div>   
          </div>
      );
    }
  }
  
  
  export default MemoTable;
  