import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };
  
  handleDelete = (counterId) => {
    let counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters: counters})
  };


  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
          />
        ))}
      </div>
    );
  };
}
 
export default Counters;