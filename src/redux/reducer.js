import {
    ADD_FAV,
    REMOVE_FAV
} from './actions'


const initialState = {     
    myFavorites: []
   
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }

        case REMOVE_FAV:
            const newFav = state.myFavorites.filter((ch) => ch.id !== action.payload );
            return {
                ...state,
                myFavorites: newFav

            };

        default:
            return { ...state }
    }
};




