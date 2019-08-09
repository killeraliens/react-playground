import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {mount, shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordian from './Accordian';

const sectionsProp = [
      {title: 'title 1', section: 'section 1 & some content'},
      {title: 'title 2', section: 'section 2 & some content'},
      {title: 'title 3', section: 'section 3 & some content'},
      {title: 'title 4', section: 'section 4 & some content'}
];

describe('Accordian component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordian />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders empty list to UI without props passed', () => {
    expect(
      renderer.create(<Accordian />).toJSON()
    ).toMatchSnapshot();
  });

  it('renders list items to UI with props passed', () => {
    expect(
      renderer.create(<Accordian sections={sectionsProp}/>).toJSON()
    ).toMatchSnapshot();
  });

  it('li buttons open section on click', () => {
    const wrapper = shallow(<Accordian sections={sectionsProp} />);
    wrapper.find('button').at(0).simulate('click', { target: {'id': 0} });
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('shows only one section at a time', () => {
    const wrapper = shallow(<Accordian sections={sectionsProp} />);
    wrapper.find('button').at(1).simulate('click', { target: {'id': 1} });
    wrapper.find('button').at(3).simulate('click', { target: {'id': 3} });
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('li button second click hides section', () => {
    const wrapper = shallow(<Accordian sections={sectionsProp} />);
    wrapper.find('button').at(0).simulate('click', { target: {'id': 0} });
    setTimeout(() => {
      wrapper.find('button').at(0).simulate('click', { target: {'id': 0} })
      const sectionContentDivText = wrapper.find('li').at(0).find('div').at(0).text();
      expect(sectionContentDivText).toEqual("");
    }, 1000);

  })

})
