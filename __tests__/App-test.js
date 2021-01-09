/**
 * @format
 */

import 'react-native';
import React from 'react';
import ModalMensajeExitoso from '../src/components/modal/ModalMensajeExitoso';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

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
  it('Text', () => {
    expect(wrapper.find('Text')).toHaveLength(1);
  });
  
  it('should match props', () => {
    expect(wrapper.props.visible).not.toBeNull();
    expect(wrapper.props.setVisible).not.toBeNull();
    expect(wrapper.props.label).not.toBeNull();
    expect(wrapper.props.setOpacado).not.toBeNull();
  });
});