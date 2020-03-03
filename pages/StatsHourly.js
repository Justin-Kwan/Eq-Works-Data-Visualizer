import React, { Component } from 'react';
import Nav from '../components/nav.js';
import GenericChart from '../components/GenericChart.js';

export default class StatsHourly extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <html lang="en">
        <style jsx>
          {`
            h1,
            body {
              font-family: "Arial";
            }
          `}
        </style>
        <Nav />
        <br></br>
        <br></br>

        <body>
          <h1>
            <center>Stats Daily Hourly</center>
          </h1>
          <br></br>
          <GenericChart
            chartType="line"
            chartContent="stats hourly"
            chartDataUrl="http://127.0.0.1:5555/stats/hourly"
          />
          <h5>
            <center>* Data is normalized within range [0,1]</center>
          </h5>
        </body>
      </html>
    );
  }
}
