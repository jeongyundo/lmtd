import _ from 'lodash'
import { FETCH_GAME, FETCH_GAMES } from '../actions/type'

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_GAMES :
            return {...state, ..._.mapKeys(action.payload, 'game_name')}
        case FETCH_GAME :
            return {...state, [action.payload.id]:action.payload };
        default :
            return state;

    }
}