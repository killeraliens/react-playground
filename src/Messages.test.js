import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Messages from './Messages';


describe( 'Message component', () => {

    it('renders messages component', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Messages />, div);
      ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the UI as expected', () => {
      const tree = renderer.create(<Messages name='Messages' unreadQty={4}/>).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('does not render badge if unreadQty is zero', () => {
      const tree = renderer.create(<Messages name='Messages' unreadQty={0}/>).toJSON();
      expect(tree).toMatchSnapshot();
    });

});

