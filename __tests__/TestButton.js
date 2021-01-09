import {Text} from 'react-native';
import React from 'react';
import Button from '../src/components/button/Button';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const initialModalProps = {
    label: "name for button",
    onPress: onPress(),
    disabled: true
};

const wrapper = shallow(<Card {...initialModalProps} />);
describe('Model Component', () => {
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('Text', () => {
    expect(wrapper.find(Text)).toHaveLength(7,{});
  });
  
  it('should match props', () => {
    expect(wrapper.props.item).not.toBeNull();
  });
  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});