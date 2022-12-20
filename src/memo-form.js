import React from 'react'

class MemoForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      content: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ content: event.target.value })
  }

  doneEdit = () => {
    this.props.doneEdit(this.props.selectedMemo, this.state.content)
    this.setState({ content: '' })
  }

  delete = () => {
    this.props.delete(this.props.selectedMemo)
    this.setState({ content: '' })
  }

  render () {
    return (
      <div>
        <textarea type="text" value={this.state.content} onChange={this.handleChange} />
        <button onClick={() => this.doneEdit()}>変更</button>
        <button onClick={() => this.delete()}>削除</button>
        </div>
    )
  }
}

export default MemoForm
