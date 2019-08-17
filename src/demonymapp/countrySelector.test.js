import React from 'react';
// import {shallow} from 'enzyme';
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import CountrySelector from './countrySelector';


describe('CountrySelector component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CountrySelector />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
