import React, { Component } from 'react';

class Agrid extends Component {

  render() {
    const {deviceSnmpMetrics} = this.props.data
    //const {deviceSnmpMetrics, interfaceSnmpMetrics} = this.props.data.snmpMonitoringConfig
    //const {a, b} = this.props.name

    return(
      <div>
        {deviceSnmpMetrics[0].metricName}
      </div>
    )
  }
}

export default Agrid;
