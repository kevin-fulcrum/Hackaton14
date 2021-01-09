import {Text,TouchableOpacity,Image} from 'react-native';
import React from 'react';
import Profile from '../src/core/Profile';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const initialModalProps = {
    navigation: "Principal",
    route:[{params: "hola"},]
};

const wrapper = shallow(<Profile {...initialModalProps} />);
describe('Model Component', () => {
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('Text', () => {
    expect(wrapper.find(Text)).toHaveLength(1,{});
  });
  it('TouchableOpacity', () => {
    expect(wrapper.find(TouchableOpacity)).toHaveLength(2,{});
  });
  it('Image', () => {
    expect(wrapper.find(Image)).toHaveLength(2,{});
  });
  it('should match props', () => {
    expect(wrapper.props.navigation).not.toBeNull();
  });
});