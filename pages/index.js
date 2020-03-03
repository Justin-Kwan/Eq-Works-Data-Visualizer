import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import GenericChart from "../components/GenericChart.js";
import StatsDaily from "./StatsDaily.js";
import StatsHourly from "./StatsHourly.js";
import EventsDaily from "./EventsDaily.js";
import EventsHourly from "./EventsHourly.js";

const Home = () => (
  <div>
    <Head>
      <title>EQ Works Data Visualizer</title>
      <link rel="icon" href="/favicon.png" />
    </Head>

    <Nav />

    <br></br>
    <br></br>
    <br></br>
    <h1>
      <center>
        <font size="50">
          Hi there!&#160;
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/70/Emoji_u1f44b.svg"
            width="45"
            height="45"
          ></img>
        </font>
      </center>
    </h1>
    <br></br>
    <center>
      <font size="4">
        Feel free to click around and check out the data visualization graphs, using the EQ Works API,
        linked above
      </font>
    </center>
    <center>
      <br></br>
      <br></br>
      <br></br>
      <font size="4">
        You can see some of my other projects as well:  <a href="https://github.com/Justin-Kwan" target="_blank">My Github</a>
      </font>
    </center>
  </div>
);

export default Home;
