import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('ExpensesSummary - 1 expense - $9,523.40', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} totalAmount={952340} />);
  expect(wrapper).toMatchSnapshot();
});

