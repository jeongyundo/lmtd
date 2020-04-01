import {FETCH_GAMES, FETCH_GAME} from './type'
import {games} from '../apis/games'


export const fetchStreams = () => async dispatch => {
    const response = await games.get('/streams')
    dispatch({ type: FETCH_GAMES, payload: response.data})
}

export const fetchStream = (id) => async dispatch => {
    const response = await games.get(`/streams/${id}`)
    dispatch({ type: FETCH_GAME, payload: response.data})
    
}