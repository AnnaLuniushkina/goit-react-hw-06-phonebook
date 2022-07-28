import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions-contacts';
import shortid from "shortid";

const items = createReducer([], {
    [actions.addContact]: (state, { payload: { name, number } }) => {
        return [
        ...state,
            {
                id: shortid(),
                name,
                number,
            },
        ];
        
    },

    [actions.deleteContact]: (state, { payload }) =>
        state.filter(({id}) => id !== payload),
});

const filter = createReducer('', {
    [actions.filterChange]: (_, { payload }) => payload,
});

export default combineReducers({
        items,
        filter,
    });
