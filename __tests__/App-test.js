/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Button from '../src/components/button/Button'
import ModalMensajeExitoso from '../src/components/modal/ModalMensajeExitoso'
import {shallow} from 'enzyme'
import {View, Text} from 'react-native'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
it('renders correctly', () => {
  renderer.create(<Button />);
});
it('renders correctly', () => {
  renderer.create(<ModalMensajeExitoso />);
});

const initialModalProps = {
  visible: true,
  setVisible: true,
  label: 'algo',
  setOpacado: 0.5,
};

const wrapper = shallow(<ModalMensajeExitoso {...initialModalProps} />);
describe('Model Component', () => {
  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should label element in component', () => {
    expect(wrapper.find(View).length).toBe(1);
    expect(wrapper.find(Text).length).toBe(2);
  });
  it('should match props', () => {
    expect(wrapper.props.visible).not.toBeNull();
    expect(wrapper.props.setVisible).not.toBeNull();
    expect(wrapper.props.label).not.toBeNull();
    expect(wrapper.props.setOpacado).not.toBeNull();
  });

  it('should match snapshot', () => {
    expect(wrapper.find(Label)).toMatchSnapshot();
  });
});