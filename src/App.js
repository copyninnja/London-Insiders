import React, { Component } from "react";
import { connect } from "react-redux";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import KeplerGl from "kepler.gl";
import logo from "./logo.png";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
// Kepler.gl actions
import { addDataToMap } from "kepler.gl/actions";
// Kepler.gl Data processing APIs
import Processors from "kepler.gl/processors";

// Kepler.gl Schema APIs
import KeplerGlSchema from "kepler.gl/schemas";
import mapConfigJson from "./geodata/config-all.json";

import roomData from "./geodata/ratings.js";
import railStationData from "./geodata/UKRailStations.js";
import testdata from "./geodata/line.js";
import { Link } from "react-router-dom";
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN; // eslint-disable-line

class App extends Component {
  componentDidMount() {
    // Use processCsvData helper to convert csv file into kepler.gl structure {fields, rows}
    // const processedBusRouteData = Processors.processGeojson(busRouteData);

    const processedRoompData = Processors.processGeojson(roomData);
    const processedRailData = Processors.processGeojson(railStationData);
    const test = Processors.processGeojson(testdata);

    // Create dataset structure
    const dataset1 = {
      data: processedRoompData,
      info: {
        label: "London Rental Price",
        // this is used to match the dataId defined in nyc-config.json. For more details see API documentation.
        // It is paramount that this id matches your configuration otherwise the configuration file will be ignored.
        id: "roomprice",
      },
    };

    const dataset2 = {
      data: processedRailData,
      info: {
        label: "RailStation",
        // this is used to match the dataId defined in nyc-config.json. For more details see API documentation.
        // It is paramount that this id matches your configuration otherwise the configuration file will be ignored.
        id: "i91q045g",
      },
    };
    const dataset3 = {
      data: test,
      info: {
        label: "railway",
        // this is used to match the dataId defined in nyc-config.json. For more details see API documentation.
        // It is paramount that this id matches your configuration otherwise the configuration file will be ignored.
        id: "dfghj",
      },
    };
    // addDataToMap action to inject dataset into kepler.gl instance
    //hide side bar options: {readOnly: true}
    this.props.dispatch(
      addDataToMap({
        datasets: [dataset1, dataset2, dataset3],
        config: mapConfigJson,
      })
    );
    // this.props.dispatch(
    //   addDataToMap({
    //     datasets: [dataset4],
    //     options: { centerMap: true, readOnly: true },
    //   })
    // );
  }

  render() {
    return (
      <div>
        <img alt="ima" className="imageframe" src={logo}></img>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            minHeight: "70vh",
          }}
        >
          <AutoSizer>
            {({ height, width }) => (
              <KeplerGl
                mapboxApiAccessToken={MAPBOX_TOKEN}
                id="map"
                width={width}
                height={height}
              />
            )}
          </AutoSizer>
        </div>
        <Link to="/advertisement">
          <div className="ad"> Advertisement</div>
        </Link>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const mapStateToProps = (state) => state;
const dispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(App);
