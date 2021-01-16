import React from 'react'

const initialState = {favorites: []}
const ViewedReducer = (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        case 'ADD':
            nextState = {
                ...state,
                favorites: [...state.favorites, action.value]
            }
            return nextState || state;
        case 'DEL':
            const favIndex = state.favorites.findIndex(item => item.id === action.value.id)
            if(favIndex !== -1){
                nextState = {
                    ...state,
                    favorites: state.favorites.filter((item, index) => index !== favIndex)
                }
            }
            return nextState || state;
        default :
            return state;
    }
}

export default ViewedReducer