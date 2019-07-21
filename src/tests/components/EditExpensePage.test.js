import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let onSubmit, onRemove, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  onRemove = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      onSubmit={onSubmit}
      onRemove={onRemove}
      history={history}
      expense={expenses[2]}
    />
  );
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onSubmit).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle onRemove', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(onRemove).toHaveBeenLastCalledWith({
    id: expenses[2].id
  });
});