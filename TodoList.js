import React from 'react';
import './TodoList.css';

class TodoList extends React.Component {

  constructor(props){
    super(props);
    this.state={
      list:[ ],
      inputValue:''
    }
  }

  handleBtnClick(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }

  handleInputChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }

  handleItemClick(index){
    const list=[...this.state.list];
    list.splice(index,1);
    this.setState({
      list:list
    })
  }
  render() {
    return (
      <div className="APP">
        <div className="rt">React Todos</div>
        <div>
          <input  placeholder="请输入！！！" className="texts" value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button className="bt" onClick={this.handleBtnClick.bind(this)}>submit</button>
        </div>
        <ul className="list">
          {
            this.state.list.map((item,index)=>{
            return<li className="lii" key={index} onClick={this.handleItemClick.bind(this,index)}>
              <button className="btt">remove</button>
              {item}
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
