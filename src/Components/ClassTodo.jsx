import  { Component } from "react";

class ClassTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      task: ""
    };
  }

  handleTask = (e) => {
    this.setState({ task: e.target.value });
  };

  handleCreate = () => {
    const { list, task } = this.state;
    const newList = [...list, task];
    this.setState({ list: newList, task: "" });
  };

  handleDelete = (idx) => {
    const { list } = this.state;
    const newList = [...list];
    newList.splice(idx, 1);
    this.setState({ list: newList });
  };
  
  handleUpdate = (newTask, idx) => {
    const { list } = this.state;
    const updatedList = [...list]; 
    updatedList[idx] = newTask; 
    this.setState({ list: updatedList });
  };
  
  render() {
    const { list, task } = this.state;
    return (
      <>
        <input
          type="text"
          value={task}
          onChange={(event) => this.handleTask(event)}
          placeholder="Type here"
        />
        <button onClick={this.handleCreate}>Add Item</button>
        <h1>{task}</h1>
        <div className="content">
          {list.map((task, index) => (
            <div className="task-div" key={index}>
              <input
                onChange={(e) => this.handleUpdate(e.target.value, index)}
                value={task}
              />
              <button onClick={() => this.handleDelete(index)}>Delete Item</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ClassTodo;
