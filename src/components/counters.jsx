import React, { Component } from 'react'
import Counter from './counter';

class Counters extends Component {

  render() {
    console.log("Counters - Rendered");

    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2">
            Reset
        </button>

        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            itemName={counter.itemName}
            stock={counter.stock}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onReduce={this.props.onReduce}
          />
        ))}

        <div />
      </div>
    );

  }

}
 
export default Counters;