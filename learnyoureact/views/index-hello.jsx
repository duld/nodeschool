import React from 'react';
import PropTypes from 'prop-types';

export default class TodoBox extends React.Component {
  render() {
    return (
    <div className="todoBox">
      <h1>Todos</h1>
      <TodoList data={this.props.data}/>
      <TodoForm/>
    </div>
    );
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      titleValue: "",
      detailValue: ""
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.changeDetail = this.changeDetail.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  changeTitle(e) {
    this.setState({titleValue: e.target.value});
  }

  changeDetail(e) {
    this.setState({detailValue: e.target.value});
  }

  addTodo() {
    let newData = this.state.data;
    newData.push({
        title: this.state.titleValue,
        detail: this.state.detailValue
    });
    this.setState({detailValue: ""});
    this.setState({titleValue: ""});
    this.setState({data: newData})
  }

  render() {
    let todo = this.state.data.map( function (obj) {
      return <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>
    });
    
    return (
      <div className="todoList">
        <div>
          Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} />
          Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <table style={style['table']}>
          <tbody>
            {todo}
          </tbody>
        </table>
      </div>
    );
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      TodoStyle: style.notCheckedTodo
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({checked: e.target.checked});
    if (e.target.checked) {
      this.setState({TodoStyle: style.checkedTodo});
    } else {
      this.setState({TodoStyle: style.notCheckedTodo});
    }
  }

  render() {
    return (
    <tr style={this.state.TodoStyle}>
      <td style={style['tableContent']}>
        <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} />
      </td>
      <td style={style['tableContent']}>{this.props.title}</td>
      <td style={style['tableContent']}>{this.props.children}</td>
    </tr>
    );
  }
}
Todo.propTypes = {
  title: PropTypes.string.isRequired
};


class TodoForm extends React.Component {
  render() {
    return (
      <div className="todoForm">
        I am a TodoForm.
      </div>
    )
  }
}

let style = {
  tableContent: {
    border: "1px solid black"
  },
  table: {
    border: "2px solid black"
  },
  checkedTodo: {
    textDecoration: "line-through"
  },
  notCheckedTodo: {
    textDecoration: "none"
  }
}