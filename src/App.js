import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters'
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, itemName: 'Football Helmet', stock: 10, value: 0, price: 49.99 },
      { id: 2, itemName: 'Soccer Jersey', stock: 12, value: 0, price: 64.99 },
      { id: 3, itemName: 'Baseball Cap', stock: 10, value: 0, price: 29.99 },
      { id: 4, itemName: 'Baseball Glove', stock: 7, value: 0, price: 149.99 },
      { id: 5, itemName: 'Basketball', stock: 15, value: 0, price: 19.99 }
    ]
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor");
  }

  componentDidMount() {
    console.log("App - Mounted");
  }

  handleDelete = counterId => {
    let counters = this.state.counters.filter(c => c.id !== counterId);

    this.setState({ counters: counters });
  };

  handleReset = () => {
    let counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };

    if(counters[index].value == counters[index].stock) {

    } else {
      counters[index].value++;

    }

    this.setState({ counters: counters });
  };


  handleReduce = counter => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value === 0){

    } else {
      counters[index].value--;
    }

    this.setState({ counters: counters });
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onReduce={this.handleReduce}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
