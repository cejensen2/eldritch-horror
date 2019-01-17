import React, { Component } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Markers,
  Marker,
  Lines,
  Line,
} from 'react-simple-maps';
import { connect } from 'react-redux';

const markers = [
  {
    markerOffset: -25,
    name: 'Buenos Aires',
    coordinates: [-58.3816, -34.6037],
  },
  { markerOffset: -25, name: 'La Paz', coordinates: [-68.1193, -16.4897] },
  { markerOffset: 35, name: 'Brasilia', coordinates: [-47.8825, -15.7942] },
  { markerOffset: 35, name: 'Santiago', coordinates: [-70.6693, -33.4489] },
  { markerOffset: 35, name: 'Bogota', coordinates: [-74.0721, 4.711] },
  { markerOffset: 35, name: 'Quito', coordinates: [-78.4678, -0.1807] },
  { markerOffset: -25, name: 'Georgetown', coordinates: [-58.1551, 6.8013] },
  { markerOffset: -25, name: 'Asuncion', coordinates: [-57.5759, -25.2637] },
  { markerOffset: 35, name: 'Paramaribo', coordinates: [-55.2038, 5.852] },
  { markerOffset: 35, name: 'Montevideo', coordinates: [-56.1645, -34.9011] },
  { markerOffset: -25, name: 'Caracas', coordinates: [-66.9036, 10.4806] },
];

class Board extends Component {
  render() {
    if (this.props.locations) {
      return (
        <React.Fragment>
          <h1>Game Board</h1>
          <ComposableMap
            projectionConfig={{ scale: 100, rotation: [-11, 0, 0] }}
            width={980}
            height={551}
            style={{ width: '100%', height: 'auto' }}
          >
            <Geographies geography="/public/50m.json">
              {(geographies, projection) =>
                geographies.map((geography, i) => (
                  <Geography
                    key={i}
                    geography={geography}
                    projection={projection}
                    style={{
                      default: {
                        fill: '607D8B',
                        stroke: '607D8B',
                        strokeWidth: 0.75,
                        outline: 'none',
                      },
                      hover: {
                        fill: '607D8B',
                        stroke: '607D8B',
                        strokeWidth: 0.75,
                        outline: 'none',
                      },
                      click: {
                        fill: '607D8B',
                        stroke: '607D8B',
                        strokeWidth: 0.75,
                        outline: 'none',
                      },
                    }}
                  />
                ))
              }
            </Geographies>
            <Markers>
              {markers.map((marker, i) => (
                <Marker
                  key={i}
                  marker={marker}
                  style={{
                    default: { fill: '#FF5722' },
                    hover: { fill: '#FFFFFF' },
                    pressed: { fill: '#FF5722' },
                  }}
                >
                  <circle
                    cx={0}
                    cy={0}
                    r={10}
                    style={{
                      stroke: '#FF5722',
                      strokeWidth: 3,
                      opacity: 0.9,
                    }}
                  />
                  <text
                    textAnchor="middle"
                    y={marker.markerOffset}
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fill: '#607D8B',
                    }}
                  >
                    {marker.name}
                  </text>
                </Marker>
              ))}
              {/*this.props.locations.map(location => (
                <Marker
                  key={location.name}
                  marker={{ coordinates: [location.xcoord, location.ycoord] }}
                >
                  <circle cx={0} cy={0} r={10} />
                </Marker>
              ))*/}
            </Markers>
          </ComposableMap>
        </React.Fragment>
      );
    } else {
      return <p>...Loading</p>;
    }
  }
}

const mapStateToProps = state => {
  return {
    locations: state.reducer.locations,
  };
};

export default connect(mapStateToProps)(Board);
