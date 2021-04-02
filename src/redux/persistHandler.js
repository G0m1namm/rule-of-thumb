/**
 * Method that load redux state from localStorage if exist
 * @returns parsed state from localStorage
 */
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
}

/**
 * Method that save redux state in localStorage
 * @param {Object} state Redux state
 */
export const persistState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (error) { }
}