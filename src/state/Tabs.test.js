import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tabs from './Tabs';


const tabsProp = [
  {name: 'name 1', content: 'content 1 & some content'},
  {name: 'name 2', content: 'content 2 & some content'},
  {name: 'name 3', content: 'content 3 & some content'}
];


describe('Tabs Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Tabs />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders a button for each tab', () => {
    const wrapper = shallow(<Tabs tabs={tabsProp} />);
    const buttonQty = wrapper.find('button').length;
    expect(buttonQty).toEqual(tabsProp.length);
  });

  it('button text should match tab item title', ()=> {
    const wrapper = shallow(<Tabs tabs={tabsProp} />);
    const firstButtonText = wrapper.find('button').at(0).innerText;
    expect(firstButtonText).toEqual(tabsProp[0].title);
  });

  it('shows first tab content on default', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<Tabs tabs={tabsProp} />, div);
    // ReactDOM.unmountComponentAtNode(div);
    const wrapper = shallow(<Tabs tabs={tabsProp} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });


})
