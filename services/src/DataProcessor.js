/**
 * class responsible for extracting and processing data from api endpoints
 */


class DataProcessor {

  constructor() {
    this.dates = [];
    this.chartData = {
      xAxes: undefined,
      datasets: undefined
    };
  }

  /**
   * processData is an abstraction layer to handle extracting and returning
   * necessary axes values and data from unparsed JSON data
   * @param {JSON Array} - JSON array of unparsed data
   * @param {String} - String representing the chart type data is used for
   * @param {Object} - containing x-axes, and data set(s)
   */
  processData(jsonDataList, chartContent) {
    this.chartData.xAxes = this.processXAxes(jsonDataList, chartContent);
    if (chartContent === "stats hourly" || chartContent === "stats daily") {
      let impressionsDataset = this.processJsonByField(jsonDataList, "impressions");
      let clicksDataset = this.processJsonByField(jsonDataList, "clicks");
      let revenuesDataset = this.processJsonByField(jsonDataList, "revenue");
      console.log("impressions!" + impressionsDataset);

      this.chartData.datasets = [{
          label: "Impressions",
          data: this.normalizeData(impressionsDataset),
          backgroundColor: "#55A2E6",
          borderColor: "#55A2E6",
          fill: false
        },
        {
          label: "Clicks",
          data: this.normalizeData(clicksDataset),
          backgroundColor: "#ffcc00",
          borderColor: "#ffcc00",
          fill: false
        },
        {
          label: "Revenues",
          data: this.normalizeData(revenuesDataset),
          backgroundColor: "#ff6666",
          borderColor: "#ff6666",
          fill: false
        }
      ];
    } else if (chartContent === "events daily") {
      let eventsDataset = this.processJsonByField(jsonDataList, "events");
      this.chartData.datasets = [{
        label: "Events",
        data: eventsDataset,
        backgroundColor: [
          "#FFA500",
          "#ffcc00",
          "#8FBFBE",
          "#ff6666",
          "#55A2E6",
          "#67D4D6",
          "#F6F5AE"
        ]
      }];
    } else if(chartContent === "events hourly") {
      let eventsDataset = this.processJsonByField(jsonDataList, "events");
      this.chartData.datasets = [{
        label: "Events",
        data: eventsDataset,
        backgroundColor: "#FFA500",
        borderColor: "#FFA500",
        fill: true
      }];
    }

    return this.chartData;
  }

  /**
   * processXaxes processes and returns x-axes values for the intended
   * chart type data is used for
   * @param {JSON Array} - JSON array of unparsed data
   * @param {String} - String representing the chart type data is used for
   * @return {Array} - Array of string values
   */
  processXAxes(jsonData, chartContent) {
    for (let i = 0; i < jsonData.length; ++i) {
      if (chartContent === "events daily" || chartContent === "stats daily") {
        this.dates.push(jsonData[i].date.substring(0, 10));
      } else if (chartContent === "stats hourly" || chartContent === "events hourly") {
        this.dates.push(jsonData[i].date.substring(0, 10) + " / hour " + jsonData[i].hour);
      }

    }
    return this.dates;
  }

  /**
   * processJsonByField parses and returns data from unparsed JSON, given a field,
   * fieldName
   * @param {JSON Array} - JSON array of unparsed data
   * @param {String} - String representing the chart type data is used for
   * @return {Array} - Array of string values
   */
  processJsonByField(jsonData, fieldName) {
    let dataset = [];
    for (let i = 0; i < jsonData.length; ++i) {
      dataset.push(jsonData[i][fieldName]);
    }
    return dataset;
  }

  /**
   * normalizeData normalizes all numbers in array, nums, to the range [0,1]
   * @param {Array} - array of numerical values
   * @return {Array} - array of numerical values all normalized
   */
  normalizeData(nums) {
    const max = Math.max.apply(null, nums);
    const min = Math.min.apply(null, nums);
    const normalizedNums = [];

    for (let i = 0; i < nums.length; ++i) {
      const normalizedNum = (nums[i] - min) / (max - min);
      normalizedNums.push(normalizedNum);
    }
    return normalizedNums;
  }

}

module.exports = DataProcessor;
