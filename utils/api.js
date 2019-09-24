import {AsyncStorage} from 'react-native';

const startingData = {
    React: {
        title: 'React',
        id: 1,
        questions: [
            {
                question: 'Is React a Javascript UI library?',
                answer: 'Correct'
            },
            {
                question: 'Correct place to make Ajax requests is in a render method?',
                answer: 'Incorrect'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        id: 2,
        questions: [
            {
                question: 'Closure is a combination of a function and lexical environment within which that function was declared?',
                answer: 'Yes'
            },
            {
                question: 'JavaScript is considered a weakly typed (or untyped) language?',
                answer: 'Correct'
            }
        ]
    },
    Django: {
        title: 'Django',
        id: 3,
        questions: [
            {
                question: 'The Django framework is programmed in JavaScript?',
                answer: 'Incorrect'
            },
            {
                question: 'Is Angular programmed in JavaScript?',
                answer: 'Correct'
            }
        ]
    }
};

const STORAGE_KEY = 'FlashcardsXXX:data';

export const getAllDecks = () => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(startingData));

    return AsyncStorage.getItem(STORAGE_KEY).then(results => {
        return JSON.parse(results);
    });
};

export const saveDeck = deck => {
    return AsyncStorage.mergeItem(
        STORAGE_KEY,
        JSON.stringify({[deck.id]: deck})
    );
};

export const addCardToDeck = (deckId, card) =>  {
    return AsyncStorage.getItem(STORAGE_KEY).then(results => {
        const data = JSON.parse(results);

        data[deckId] = {
            ...data[deckId],
            questions: [
                ...data[deckId].questions,
                { question: card.question, answer: card.answer }
            ]
        };

        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    });
};
