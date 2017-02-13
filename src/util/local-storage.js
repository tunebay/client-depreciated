export const loadState = () => {
  try {
    const seralizedState = localStorage.getItem('user');
    if (!seralizedState) {
      console.log('no user in storage');
      return undefined;
    }
    return { currentUser: JSON.parse(seralizedState) };
  } catch (err) {
    console.log('load state error:', err);
  }
};

export const saveState = (state) => {
  if (state) {
    try {
      const seralizedState = JSON.stringify(state);
      localStorage.setItem('user', seralizedState);
    } catch (err) {
      console.log('save state error:', err);
    }
  }
};
