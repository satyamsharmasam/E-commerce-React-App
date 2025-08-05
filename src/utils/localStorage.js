// save to Localstorage
export const saveState = (state) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem('reduxState', serialized);
  } catch (err) {
    console.log('could not save state', err);
  }
};

// Load to Localstorage
export const loadState = () => {
  try {
    const serialized = localStorage.getItem('reduxState');
    if (serialized == null) return undefined;
    return JSON.parse(serialized);
  } catch (err) {
    console.error('Failed to load state:', err);
    return undefined;
  }
};
