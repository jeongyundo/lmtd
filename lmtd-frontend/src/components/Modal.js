import React from 'react';
import ReactDOM from 'react-dom'


const dismiss = (props) => {
    console.log(props)
    return {
        ...props, modalCheck:false
    }
}

class Modal extends React.Component {

    componentDidMount(props){
        console.log(this.props)
        console.log(212)
        this.renderModal()
    }

    
    renderModal(){
        if(this.props.modalCheck){
            return ReactDOM.createPortal(
                <div onClick = {dismiss(this.props)} className="ui dimmer modals visible active">
                    <div onClick = {(e) => e.stopPropagation()}className="ui standard modal visible active "> 
                        
                        <div>hello</div>
                    </div>
                </div>, 
                document.querySelector('#modal')
                )
        }else {
            return ReactDOM.createPortal(
                <div className="ui dimmer modals visible deactive">
                    <div onClick = {(e) => e.stopPropagation()}className="ui standard modal visible deactive "> 
                        
                        <div>hello</div>
                    </div>
                </div>, 
                document.querySelector('#modal')
                )
        }
    }
    render(){
            return this.renderModal()
        }
};

export default Modal;