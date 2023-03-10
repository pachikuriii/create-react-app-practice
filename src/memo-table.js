import React from "react";
import MemoForm from "./memo-form";
import MemoList from "./memo-list";
import "./memo-table.css";

const STORAGE_KEY = "react-todo";
const todoStorage = {
  fetch: function () {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};

class MemoTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formDisplayMode: "off",
      memos: todoStorage.fetch(),
      selectedMemo: "",
    };
  }

  add = () => {
    this.setState({ formDisplayMode: "" });
    const newMemo = { id: new Date().getTime(), content: "new memo" };
    this.state.memos.push(newMemo);
    todoStorage.save(this.state.memos);
    this.setState({ selectedMemo: newMemo, memos: this.state.memos });
  };

  edit = (memo) => {
    this.setState({
      selectedMemo: memo,
      formDisplayMode: "",
    });
  };

  doneEdit = (editedMemo, newContent) => {
    const memo = this.state.memos.find((memo) => memo.id === editedMemo.id);
    const index = this.state.memos.indexOf(memo);
    const oldMemos = this.state.memos;
    oldMemos[index].content = newContent;
    todoStorage.save(oldMemos);
    this.setState({
      memos: this.state.memos,
      formDisplayMode: "off",
      selectedMemo: "",
    });
  };

  delete = (selectedMemo) => {
    const memo = this.state.memos.find((memo) => memo.id === selectedMemo.id);
    const index = this.state.memos.indexOf(memo);
    const result = window.confirm("本当に削除しますか？");
    if (result) {
      this.state.memos.splice(index, 1);
    }
    todoStorage.save(this.state.memos);
    this.setState({
      memos: this.state.memos,
      formDisplayMode: "off",
      selectedMemo: "",
    });
  };

  render() {
    return (
      <div className="memo-table">
        <div>
          <MemoList add={this.add} edit={this.edit} memos={this.state.memos} />
        </div>
        <div className={this.state.formDisplayMode}>
          <MemoForm
            key={this.state.selectedMemo.id}
            selectedMemo={this.state.selectedMemo}
            doneEdit={this.doneEdit}
            delete={this.delete}
          />
        </div>
      </div>
    );
  }
}

export default MemoTable;
