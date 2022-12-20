import React from "react";
import Memo from './memo'

class MemoList extends React.Component {
  render() {
    const rows = []
    this.props.memos.forEach((memo) => {
      rows.push(
        <Memo
          memo={memo}
          key={memo.id}
          edit={this.props.edit}
        />
        )
    })
    
      return (
        <div>
           <ul>
               {rows}
          </ul>
          <button onClick={() => this.props.add()}>+</button>
          </div>
           
        );
    }
  }
  
  export default MemoList;