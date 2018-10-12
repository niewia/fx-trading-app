import React, { Component } from 'react';
import Panel from './components/panel/Panel';
import DataProvider from './services/DataProvider';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  adjustPrice(price) {
    let sign = Math.random() < 0.5 ? -1 : 1;
    return price + (price * (Math.random() * 0.1 * sign));
  }

  componentDidMount() {
    setInterval(() => {
      const newData = this.state.data.map(item => {
        item.buy = this.adjustPrice(item.buy);
        item.sell = this.adjustPrice(item.sell);
        return item;
      })
      this.setState({ data: newData });
    }, 1000)
    this.setState({ data: DataProvider.getData() });
  }

  render() {
    return (
      <div className="App">
        {
          this.state.data.map((item, index) => {
            return (<Panel key={index} pair={item.pair} buy={item.buy} sell={item.sell}></Panel>)
          })
        }
      </div>
    );
  }
}

export default App;
