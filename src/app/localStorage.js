// try and load state from browser local storage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if ( serializedState === null ) {
      return undefined
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined
  }
}

// save current state to browser local storage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state',serializedState);
  } catch (err) {
    console.log("error setting state");
  }
}
