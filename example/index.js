import React from 'react';
import { render } from 'react-dom';
import GoogleExample from "./google";



const example = (
  <div>
    <h1>React-Leaflet-Google example</h1>
    <GoogleExample />
  </div>
)

render(example, document.getElementById('app'));