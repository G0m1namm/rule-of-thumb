import { SET_TYPE_VIEW, UPDATE_CARD_DATA } from "./actionTypes";
import { data } from '../assets/data.json';

const initialState = {
    typeView: 'grid',
    cardsData: data,
}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case SET_TYPE_VIEW: {
            return { ...state, typeView: actions.payload }
        }

        case UPDATE_CARD_DATA: {
            const newData = state.cardsData.map(card => {
                if (actions.id === card.id) {
                    let newPositiveVotes = card.votes.positive;
                    let newNegativeVotes = card.votes.negative;
                    if (actions.selectedOption === "positive") {
                        newPositiveVotes++;
                    }
                    if (actions.selectedOption === "negative") {
                        newNegativeVotes++;
                    }
                    const newVotes = {
                        positive: newPositiveVotes,
                        negative: newNegativeVotes
                    }
                    return { ...card, votes: newVotes };
                }
                return card;
            })
            return { ...state, cardsData: newData };
        }
        default: return { ...state };
    }
}