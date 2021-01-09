import {Text} from 'react-native';
import React from 'react';
import Principal from '../src/core/Principal';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const initialModalProps = {
    navigation: "Profile",
    route:[{params: "hola"},]
};

const wrapper = shallow(<Principal {...initialModalProps} />);
describe('Model Component', () => {
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('Text', () => {
    expect(wrapper.find(Text)).toHaveLength(6,{});
  });
  
  it('should match props', () => {
    expect(wrapper.props.navigation).not.toBeNull();
  });
});