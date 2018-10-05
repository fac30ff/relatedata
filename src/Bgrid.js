import React, { Component } from 'react';

class Bgrid extends Component {

  render() {
    const {interfaceSnmpMetrics} = this.props.data
    //const {deviceSnmpMetrics, interfaceSnmpMetrics} = this.props.data.snmpMonitoringConfig
    //const {a, b} = this.props.name

    return(
      <div>
        {interfaceSnmpMetrics[0].metricName}
      </div>
    )
  }
}

export default Bgrid;
