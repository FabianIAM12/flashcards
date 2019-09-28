export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';


export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        id: deck.id,
        title: deck.title
    }
}

export function addCard(deckId, question) {
    return {
        type: ADD_CARD,
        deckId,
        question: question.question,
        answer: question.answer
    }
}
