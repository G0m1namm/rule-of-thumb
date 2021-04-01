import { SET_TYPE_VIEW } from "./actionTypes";

const initialState = {
    typeView: 'grid',

}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case SET_TYPE_VIEW: {
            return { ...state, typeView: actions.payload }
        }
        default: return { ...state };
    }
}