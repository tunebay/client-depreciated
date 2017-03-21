const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      console.log('STATE', state);
      return state;
  }
};
