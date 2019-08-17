import React from 'react';
// import {shallow} from 'enzyme';
import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
import Demonym from './demonym';

describe('Demonym component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Demonym />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
