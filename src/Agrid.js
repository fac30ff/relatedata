import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class Agrid extends Component {
  /*constructor(props) {
    super(props);
    this.state ={
      deviceSnmpMetrics: this.props.data
    }
  }*/

  render() {
    const {deviceSnmpMetrics} = this.props.data
    //const {deviceSnmpMetrics, interfaceSnmpMetrics} = this.props.data.snmpMonitoringConfig
    //const {a, b} = this.props.name

    return(
      <div className="ag-theme-balham"
           style={{
             height: '500px',
             width: '600px' }} >
        {/*{deviceSnmpMetrics[0].metricName}*/}
        <AgGridReact
          enableSorting={true}
          enableFilter={true}
          columnDefs={Object.keys(deviceSnmpMetrics[0]).map(key => <div>{deviceSnmpMetrics[0][key]}</div>)}
          rowData={[1,2,3,4]}>
        </AgGridReact>
      </div>
    )
  }
}

export default Agrid;
