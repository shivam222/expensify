import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
      const action = removeExpense({id: '123abc'});
      expect(action).toEqual({
         type: 'REMOVE_EXPENSE',
         id: '123abc'
      });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', {description: 'sample'});
    expect(action).toEqual({
       type: 'EDIT_EXPENSE',
       id: '123abc',
       updates: {description: 'sample'}
    });
}); 

test('should setup add expense action with provided values', () => {
     const expenseData = {
        description: 'Rent',
        amount: '109',
        createdAt: 1000,
        note: 'sample expense'
     };
     const action = addExpense(expenseData);
     expect(action).toEqual({
         type: 'ADD_EXPENSE',
         expense: {
             ...expenseData,
             id: expect.any(String)
         }
     });
});

test('should setup add expense action with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});