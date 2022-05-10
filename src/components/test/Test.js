import React, { Component } from 'react'

class Test extends Component {
    state = {
        title: 'title',
        userId: 'userId'
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => this.setState({
                title: json.title,
                userId: json.userId
            }))
    };

  render() {
      const { title, userId } = this.state;
    return (
      <div>
          <h1>{title}</h1>
          <p>{userId}</p>
      </div>
    )
  }
}

export default Test;
