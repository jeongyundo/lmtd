import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import { fetchGames } from '../../actions'
import GameShow from './GameShow'

class GameList extends Component {
    
    
 
    componentDidMount(){
        this.props.fetchGames();

    }
    
    renderList(){

        return this.props.games.map(game => {
                return(
                    
                        <GameShow className="item" key={game.game_name} data={game}>
                        
                        </GameShow>
                  
                    )
                }
            )
        
    }

    render() {
        console.log(this.props.games)
        return (
            <div className="ui three column grid">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = state =>{

    return {
        games: Object.values(state.games), 
    }
    
}

export default connect(mapStateToProps, { fetchGames })(GameList);