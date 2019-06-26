import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

var inputs = {
    "inputs": {
        "tag": ["coordinates", "species"],
        "coordinates": [
            [
                [0.03192167, 0.00638559, 0.01301679],
                [-0.83140486, 0.39370209, -0.26395324],
                [-0.66518241, -0.84461308, 0.20759389],
                [0.45554739, 0.54289633, 0.81170881],
                [0.66091919, -0.16799635, -0.91037834]
            ]
        ],
        "species": [
            [1, 0, 0, 0, 0]
        ]
    }
};

// Hydrogen 0, Carbon 1, Nitrogen 2, Oxygen 3

var hydrogenColor = "#F0F0F0";
var carbonColor = "#303030";
var nitrogenColor = "#4c4cff";
var oxygenColor = "#ff3232";

var crd0x = inputs['inputs']['coordinates'][0][0][0];
var crd0y = inputs['inputs']['coordinates'][0][0][1];
var crd0z = inputs['inputs']['coordinates'][0][0][2];
var position = crd0x + " " + crd0y + " " + crd0z;

function get_coordinates() {



}

function App() {
  return (
    <Fragment>
      <script src="https://aframe.io/releases/0.9.2/aframe.min.js" />
      <div style={{ width: "100%", height: "200px" }}>
        <a-scene background="color: #ECECEC" embedded="">
<a-entity camera look-controls position="0 1.6 0"></a-entity>

          <a-sphere
            position={position}
            radius="1.25"
            color={carbonColor}
            shadow=""
          />
        </a-scene>
      </div>
    </Fragment>
  );
}

export default App;
