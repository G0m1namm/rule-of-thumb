import { SET_TYPE_VIEW, UPDATE_CARD_DATA } from "./actionTypes";

export const setTypeView = payload => ({
    type: SET_TYPE_VIEW,
    payload
})

export const updateVotes = (id, selectedOption) => ({
    type: UPDATE_CARD_DATA,
    id,
    selectedOption
})