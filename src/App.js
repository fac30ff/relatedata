import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Collapse, { Panel } from 'rc-collapse';
import 'rc-collapse/assets/index.css';
import MonitoringConfig from './MonitoringConfig';

function random() {
  return parseInt(Math.random() * 10, 10) + 1;
}

const loadData = fetch('./MonitoringConfig.json')
  .then(res => res.json());

const fakeData = () => JSON.parse(JSON.stringify(MonitoringConfig));

class App extends Component {
  state = {
    time: random(),
    accordion: false,
    activeKey: ['1'],
  }

  getItems() {
    const items = [];
    for (let i = 0, len = 2; i < len; i++) {
      const key = i + 1;
      items.push(
        <Panel header={`This is panel header ${key}`} key={key} disabled={i === 3}>
          <p>{"hello world".repeat(this.state.time)}</p>
        </Panel>
      );
    }

       return items;
  }

  onChange = (activeKey) => {
    this.setState({
      activeKey,
    });
  }

  render() {
    const accordion = this.state.accordion;
    const activeKey = this.state.activeKey;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Collapse
          accordion={accordion}
          onChange={this.onChange}
          activeKey={activeKey}
        >
          {this.getItems()}
        </Collapse>
      </div>
    );
  }
}

export default App;
