import React, { Component } from 'react';
import './App.css';
import Collapse, { Panel } from 'rc-collapse';
import 'rc-collapse/assets/index.css';
import MonitoringConfig from './MonitoringConfig';
import Agrid from "./Agrid";
import Bgrid from "./Bgrid";

function random() {
  return parseInt(Math.random() * 10, 10) + 1;
}

const fakeData = () => JSON.parse(JSON.stringify(MonitoringConfig));
console.log(fakeData());

class App extends Component {
  state = {
    time: random(),
    accordion: false,
    activeKey: ['0'],
  }


  getItems() {
    const items = [];
    const text = ["deviceSnmpMetrics", "interfaceSnmpMetrics"];
    for (let i = 0, len = 2; i < len; i++) {
      const key = i + 1;
      items.push(
        <Panel header={`${text[i]}`} key={key} disabled={i === 3}>
          <Agrid data={fakeData()}/>
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
    const {snmpMonitoringConfig} = fakeData();
    const accordion = this.state.accordion;
    const activeKey = this.state.activeKey;
    return (
      <div className="App">
        <header className="App-header">
          <input type="checkbox" defaultChecked="checked"/>
          <p>SNMP Monitoring Configuration</p>
        </header>
        <Collapse
          accordion={accordion}
          onChange={this.onChange}
          activeKey={activeKey}
        ><Panel header={`deviceSnmpMetrics`} headerClass="my-header-class" key={1}>
          <Agrid data={snmpMonitoringConfig}/>
        </Panel>
          <Panel header={`interfaceSnmpMetrics`} headerClass="my-header-class" key={2}>
          <Bgrid data={snmpMonitoringConfig}/>
        </Panel>

          {/*{this.getItems()}*/}

        </Collapse>
      </div>
    );
  }
}

export default App;
