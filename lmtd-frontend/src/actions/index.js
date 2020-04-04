import {FETCH_GAMES, FETCH_GAME} from './type'
import games from '../apis/games'


export const fetchGames = () => async dispatch => {
    const response = await games.get('')
    dispatch({ type: FETCH_GAMES, payload: response.data})
}

export const fetchGame = (id) => async dispatch => {
    const response = await games.get(`/streams/${id}`)
    dispatch({ type: FETCH_GAME, payload: response.data})
    
}