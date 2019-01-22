import oldOnes from './data/oldones';

const SELECT_OLD_ONE = 'SELECT_OLD_ONE';

export const selectOldOne = oldOne => {
  return {
    type: SELECT_OLD_ONE,
    oldOne,
  };
};

export default function(
  state = { oldOnes: oldOnes, selectedOldOne: {} },
  action
) {
  switch (action.type) {
    case SELECT_OLD_ONE:
      return {
        ...state,
        selectedOldOne: action.oldOne,
      };
    default:
      return state;
  }
}
