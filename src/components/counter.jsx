import React, { Component } from 'react';

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Previous Props", prevProps);
    console.log("Previous State", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // AJAX calls and get new data from server
    }
  }

  componentWillUnmount() {
    console.log("App - Unmounted");
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <div className="m-2">
        <div>
          <strong>{this.props.itemName}</strong>{" "}
          <small>Available: {this.formatStock()}</small>
        </div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className={this.getIncrementClasses()}
        >
          +
        </button>

        <button
          onClick={() => this.props.onReduce(this.props.counter)}
          className={this.getReduceClasses()}
        >
          -
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getIncrementClasses() {
    let classes = "btn btn-sm m-1 btn-";
    classes += this.props.counter.stock === this.props.counter.value ? "dark" : "secondary";
    return classes;
  }

  getReduceClasses() {
    let classes = "btn btn-sm m-1 btn-";
    classes += this.props.counter.value === 0 ? "dark" : "secondary";
    return classes;
  }

  getBadgeClasses() {
    let classes = "badge badge-";
    classes +=
      this.props.counter.value === 0 ? "warning mr-2 " : "primary mr-2";
    return classes;
  }

  formatCount() {
    let { value } = this.props.counter;

    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  formatStock() {
    let { value } = this.props.counter;
    let { stock } = this.props.counter;

    return this.props.counter.stock - this.props.counter.value;
  }
}
 
export default Counter;