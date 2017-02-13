export const loadState = () => {
  try {
    const seralizedState = localStorage.getItem('user');
    if (!seralizedState) {
      console.log('no serialized state');
      return undefined;
    }
    console.log('FOUND USER IN local-storage:', seralizedState);
    return { currentUser: JSON.parse(seralizedState) };
  } catch (err) {
    console.log('load state error:', err);
  }
};

export const saveState = (state) => {
  console.log('state sent to saveState:', state);
  if (state) {
    try {
      const seralizedState = JSON.stringify(state);
      console.log('set new state to local storage...', seralizedState);
      localStorage.setItem('user', seralizedState);
    } catch (err) {
      console.log('save state error:', err);
    }
  }
};
