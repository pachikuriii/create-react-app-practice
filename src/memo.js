import React from "react";

class Memo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        memo: this.props.memo
      };  
    }

  render() {
      const shownMemo =  this.state.memo.content.split("\n")[0];
        return (
            <p onClick={() => this.props.edit(this.state.memo)}>{shownMemo}</p>
        );
    }
  }

  export default Memo;