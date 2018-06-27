import React, { Component } from 'react';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }
  render() {
    return (
      <div className="inputWrapper">
        <input className="form-control" type="text" placeholder="Add a Task" value={this.state.term} onChange={ event => this.onTermChange(event.target.value)}/>
        <button className="btn" onClick={() => this.addNewTask(this.state.term)}>Submit</button>
      </div>
    );
  }

  onTermChange(term) {
    this.setState({term});
    // this.props.addNewTask(term);
  }

  addNewTask(term) {
    this.props.addNewTask(term);
    this.setState({ term: ''});
  }
}

export default AddTask;
