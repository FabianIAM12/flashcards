import {ADD_CARD, ADD_DECK, RECEIVE_DECKS} from "../actions";

function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            };
        case ADD_DECK: {
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    title: action.title,
                    questions: []
                }
            };
        }
        case ADD_CARD: {
            return {
                ...state,
                [action.deckId]: {
                    ...state[action.deckId],
                    questions: [
                        ...state[action.deckId].questions,
                        { question: action.question, answer: action.answer }
                    ]
                }
            };
        }
        default:
            return state;
    }
};

export default decks;
