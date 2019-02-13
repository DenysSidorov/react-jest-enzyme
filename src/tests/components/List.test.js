import React from 'react';
import {shallow, mount, render} from '../enzyme';

import List from './List';

describe('List tests', () => {
  it('renders list-items', () => {
    const items = ['one', 'two', 'three'];

    // Replace shallow iwth mount
    const wrapper = mount(<List items={items} />);

    // Let's check what wrong in our instance
    console.log(wrapper.debug());

    // Expect the wrapper object to be defined
    expect(wrapper.find('.list-items')).toBeDefined();
    expect(wrapper.find('.item')).toHaveLength(items.length);
    expect(items.length).toBe(3);
  });

  it('renders list-items static', () => {
    const items = ['one', 'two', 'three'];
    const wrapper = render(<List items={items} />);
    wrapper.addClass('foo');
    // Expect the wrapper object to be defined
    expect(wrapper.find('.list-items')).toBeDefined();
    expect(wrapper.find('.item')).toHaveLength(items.length);
  });
});

describe('List tests', () => {
  // it('renders correct text in item', () => {
  //   const items = ['John', 'James', 'Luke'];
  //   const wrapper = shallow(<List items={items} />);
  //
  //   // Expect the child of the first item to be an array
  //   expect(wrapper.find('.item').get(0).props.children).toEqual('John');
  // });

  it('renders empty state', () => {
    const items = [];
    const wrapper = shallow(<List items={items} />);

    // Expect the child of the first item to be an array
    expect(wrapper.find('.empty-message')).toBeDefined();
  });
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
