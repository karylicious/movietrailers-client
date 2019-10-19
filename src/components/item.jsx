import React, { Component } from 'react'

var constants = require('./constants')
var TMBDSourceImage = constants.TMmdbSourceImage

export default class MovieItem extends Component {  

    itemClickHandler = (e) => {
        var movieId =e.target.dataset.id
        this.props.getMovieDetails(movieId)        
    }

    render() {
        return (
            <div className = "col-sm-11 col-md-5 col-lg-3 item" data-id={ this.props.id } onClick={this.itemClickHandler}>
                <img src = { TMBDSourceImage + this.props.posterPath } data-id={ this.props.id } />
                <p data-id={ this.props.id } >
                    <strong data-id={ this.props.id }> 
                        { this.props.title }
                    </strong>
                </p>
            </div>
        )
    }
}