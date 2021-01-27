import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  const onChange = () => 'onChange';
  const onClick = () => 'onClick';

  test('Checkbox renders with basic props', () => {
    const output = mount(<Checkbox
      className='the-class'
      onChange={onChange}
      onClick={onClick}
      tabIndex='1'
      name='name'
      value='value'
    />);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Checkbox renders with checked', () => {
    const output = mount(<Checkbox
      className='the-class'
      onChange={onChange}
      onClick={onClick}
      tabIndex='1'
      name='name'
      value='value'
      checked
    />);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Checkbox renders with disabled', () => {
    const output = mount(<Checkbox
      className='the-class'
      onChange={onChange}
      onClick={onClick}
      tabIndex='1'
      name='name'
      value='value'
      disabled
    />);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Checkbox renders with additional props', () => {
    const output = mount(<Checkbox
      className='the-class'
      onChange={onChange}
      onClick={onClick}
      tabIndex='1'
      name='name'
      value='value'

      data-additional-prop='additional-prop-test'
    />);

    expect(toJson(output)).toMatchSnapshot();
  });
});
