import React, { Component } from 'react'
import Chart from "chart.js";
import RemoteApi from "../services/src/RemoteApi.js";
import DataProcessor from "../services/src/DataProcessor.js";
import ChartBuilder from "../services/src/ChartBuilder.js";

export default class GenericChart extends Component {

  constructor(props) {
    super(props);
    this.remoteApi = new RemoteApi();
    this.dataProcessor = new DataProcessor();
    this.chartBuilder = new ChartBuilder();
    this.chartType = props.chartType;
    this.chartContent = props.chartContent;
    this.chartDataUrl = props.chartDataUrl;
  }

  chartRef = React.createRef();

  async componentDidMount() {
    const jsonData = await this.remoteApi.fetchJsonData(this.chartDataUrl);
    const chartData = await this.dataProcessor.processData(jsonData, this.chartContent);
    const chartObj = await this.chartBuilder.buildChart(this.chartType, chartData);
    const myChartRef = this.chartRef.current.getContext("2d");
    new Chart(myChartRef, chartObj);
  }

  render() {
    return(<canvas id="chart" height="100%"
      ref = {
        this.chartRef
      }
      />);
    }

  }
