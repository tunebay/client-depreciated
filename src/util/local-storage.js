export const loadState = () => {
  try {
    const seralizedState = localStorage.getItem('user');
    if (!seralizedState) {
      console.log('no serialized state');
      return {};
    }
    console.log('FOUND USER IN local-storage');
    return JSON.parse(seralizedState);
  } catch (err) {
    console.log('No user in local storage:', err);
  }
};

export const saveState = (state) => {
  try {
    const seralizedState = JSON.stringify(state);
    console.log('setting...', seralizedState);
    localStorage.setItem('user', seralizedState);
  } catch (err) {
    console.log(err);
  }
};
