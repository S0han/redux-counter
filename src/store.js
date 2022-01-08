const COUNTER_ACTION_TYPES = {
  INCREMENT: "counter/INCREMENT",
  DECREMENT: "counter/DECREMENT"
};

export const INCREMENT_ACTION = { type: COUNTER_ACTION_TYPES.INCREMENT };
export const DECREMENT_ACTION = { type: COUNTER_ACTION_TYPES.DECREMENT };

/*
  TODO: Define our reducer cases for
    - INCREMENT
    - DECREMENT
*/
export const counterReducer = (state = 0, action = {}) => {
  switch (action.type) {
    case COUNTER_ACTION_TYPES.INCREMENT:
    case COUNTER_ACTION_TYPES.DECREMENT:
    default: {
      return state;
    }
  }
};
