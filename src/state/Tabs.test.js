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
    const div = document.createElement('div');
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders a button for each tab', () => {
    const wrapper = shallow(<Tabs tabs={tabsProp} />);
    const buttonQty = wrapper.find('button').length;
    expect(buttonQty).toEqual(tabsProp.length);
  });

  it('renders empty with no tab props passed', () => {
    const wrapper = shallow(<Tabs />);
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('button text should match tab item title', ()=> {
    const wrapper = shallow(<Tabs tabs={tabsProp} />);
    const firstButtonText = wrapper.find('button').at(0).innerText;
    expect(firstButtonText).toEqual(tabsProp[0].title);
  });

  it('shows first tab content on default', () => {
    const wrapper = shallow(<Tabs tabs={tabsProp} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('clicking tab button shows matching content', () => {
    const wrapper = shallow(<Tabs tabs={tabsProp} />);
    // console.log('>>> WRAPPER <<<')
    // console.log(wrapper.debug())
    wrapper.find('button').at(2).simulate('click');
    // console.log('>>> BUTTON <<<')
    // console.log(wrapper.find('button').at(2).debug())
    const contentText = wrapper.find('div.tab-content').text();
    // console.log('>>> CONTENT <<<')
    // console.log(wrapper.find('div.tab-content').debug())
    expect(contentText).toEqual(tabsProp[2].content);
  })

})
