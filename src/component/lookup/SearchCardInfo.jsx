import React, { Component, Fragment } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';


export default class SearchCardInfo extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        
        if(this.state !== nextState){
            return true;
        }
        return this.props.info !== nextProps.info;
    }

    handleRemove =()=> {
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    handleChange =(e)=> {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    

    render() {
        const { id, name, server, service} = this.props.info
        
        const { onRemove } = this.props;

        return (
            <div>
               <div>{id}</div>
               <div>{name}</div>
               <div>{server}</div>
               <div>{service}</div>
               <IconButton onClick={
                   () => {onRemove(id)}
               }>
                  <CloseIcon />
                </IconButton>       
            </div>
        )
    }
}
