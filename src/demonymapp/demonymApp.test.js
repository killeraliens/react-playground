import React from 'react';
// import {shallow} from 'enzyme';
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import DemonymApp from './demonymApp';

describe('DemonymApp component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemonymApp />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
