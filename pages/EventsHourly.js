import React, { Component } from "react";
import Nav from '../components/nav.js';
import Head from "next/head";
import GenericChart from "../components/GenericChart.js";

export default class StatsDaily extends Component {
  constructor() {
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
            <center>Events Hourly Data</center>
          </h1>
          <br></br>
          <GenericChart
            chartType="line"
            chartContent="events hourly"
            chartDataUrl="http://127.0.0.1:5555/events/hourly"
          />
          <h5>
            <center>* Data is of original scale</center>
          </h5>
        </body>
      </html>
    );
  }
}
