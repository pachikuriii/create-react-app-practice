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
        memos: todoStorage.fetch(),
        selectedMemo: ''
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
      const newMemo = { id: new Date().getTime(), content:'new memo' }
      this.state.memos.push(newMemo)
      todoStorage.save(this.state.memos)
      this.setState({ selectedMemo: newMemo, memos: this.state.memos })
  }
  
  editMemo = (memo) => {
    this.setState({ formMode: '', selectedMemo: memo })
  }
  
  render() {

        return (
          <div className="memo-table">
            <div>
              <MemoList addMemo={this.addMemo} editMemo={this.editMemo}  memos={this.state.memos} />
            </div>
            <div className={this.state.formMode}>
              <MemoForm selectedMemo={this.state.selectedMemo} />
            </div>   
          </div>
      );
    }
  }
  
  
  export default MemoTable;
  