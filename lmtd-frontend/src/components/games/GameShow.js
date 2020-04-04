import React, { Component, Fragment, useState } from 'react'
import history from '../../history'
import Modal from '../Modal'

class GameShow extends Component {
    
    constructor(props){
        super(props)
        this.state = { modalCheck : false }
        
    }
    
    componentDidMount(){

    }
   
    modalShow(){
        if(this.state.modalCheck){
            return <Modal data={this.props.data} modalCheck={this.state.modalCheck}></Modal>
        }
        
    }

    
    renderShow(){
        return(
            <div className="column" onClick = {() => {this.setState({modalCheck: true})}}>
                {this.modalShow()}
                <div className="ui fluid card">
                    <div className="image" >
                        <img 
                            ref={this.props.data.thumbnail_url[0]}
                            alt={this.props.data.detail_detail_url}
                            src={this.props.data.thumbnail_url[1]}
                        />
                    </div>
                    <div className="content">
                        <a className="header" href={this.props.data.detail_detail_url}>{this.props.data.game_name}</a>
                        <div className="meta">
                            <span className="date">출시일 : {this.props.data.released_date}</span>
                        </div>
                        <div className="meta">
                            <span className="date">플랫폼 : {this.props.data.data_source}</span>
                        </div>
                        <div className="meta">
                            <span className="date">가격 : {this.props.data.price[1]}원</span>
                        </div>
                        <div className="meta">
                            <span className="date">할인율 : {this.props.data.discount*100}%</span>
                        </div>
                        <div className="description">
                            {this.props.data.game_description.slice(7,150)}...
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
    render() {
       
        return (
            this.renderShow()
        )
    }
}

export default GameShow;