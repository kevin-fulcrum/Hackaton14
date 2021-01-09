import {Text} from 'react-native';
import React from 'react';
import Button from '../src/components/button/Button';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const initialModalProps = {
    label: "name for button",
    onPress: ()=>{'hola'},
    disabled: true
};

const wrapper = shallow(<Button {...initialModalProps} />);
describe('Model Component', () => {
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('Text', () => {
    expect(wrapper.find(Text)).toHaveLength(1);
  });
  
  it('should match props', () => {
    expect(wrapper.props.item).not.toBeNull();
  });
});