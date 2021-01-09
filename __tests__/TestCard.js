import {Text} from 'react-native';
import React from 'react';
import Card from '../src/components/card/Card';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const initialModalProps = {
  item: [{fecha_reg: "2020-12-24",
          ultrafil: "20"}
    ],
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
});