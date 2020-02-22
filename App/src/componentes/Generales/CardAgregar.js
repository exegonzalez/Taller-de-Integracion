import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './CargAgregar.css'

class CardAgregar extends Component {
    render() {
        return (
            <div className="cardAgregar" 
            
            style={{width: '18rem'}}
            >
            <img src={this.props.imagen} className="card-img-top" alt=""/>
            <div className="card-body">
                <div className="col text-center"> 
                    <Link to={this.props.url} className="btn btn-secondary">{this.props.titulo}</Link>
                </div>   
            </div>
            </div>
        );
    }
}

export default CardAgregar;