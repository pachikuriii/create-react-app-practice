/* eslint-disable react/prop-types */
import React from "react";

class MemoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ content: event.target.value });
  }

  doneEdit = (event) => {
    this.props.doneEdit(this.props.selectedMemo, this.state.content);
    event.preventDefault();
  };

  delete = () => {
    this.props.delete(this.props.selectedMemo);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.doneEdit}>
          <textarea
            type="text"
            key={this.props.selectedMemo.id}
            defaultValue={this.props.selectedMemo.content}
            onChange={this.handleChange}
          />
          <input type="submit" value="変更" />
          <input type="button" onClick={() => this.delete()} value="削除" />
        </form>
      </div>
    );
  }
}

export default MemoForm;
