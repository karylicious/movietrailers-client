import React, { Component } from 'react'
import axios from 'axios'

var constants = require('./constants')
var RestApiURL = constants.MovieTrailersApiURL 
var youTubeBaseURL = constants.YouTubeBaseURL
var TMBDSourceImage = constants.TMmdbSourceImage

export default class MovieDetails extends Component {

    state = {
        title: "",
        posterPath:"",
        rate: "",
        overview: "",
        releaseDate: "",
        genres:[],
        trailerId:""
    }

    componentDidMount() {    
       
        axios.get(RestApiURL + '/movies/' + this.props.match.params.id)
            .then(response => {
                console.log(response.data);
                this.setState({
                    title: response.data['title'],
                    posterPath:response.data['poster_path'],
                    rate: response.data['vote_average'],
                    overview: response.data['overview'],
                    releaseDate: response.data['release_date'],
                    trailerId:response.data['trailer_id']
               })
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row"><h1>Movie Trailers</h1></div>
                <div className="row movie-first-row">
                    <div className="col-sm-5 ">
                        <img className="responsiveImage" src = { TMBDSourceImage + this.state.posterPath }  />
                    </div>
                    <div className="col-sm-5">
                        <h3>{this.state.title}</h3>
                        <p>Rate:{this.state.rate}</p>
                        <p>Overview</p>
                        <p>{this.state.overview}</p>
                        <p>Genres:</p>
                        <p>Release: {this.state.releaseDate}</p>
                    </div>
                </div>
                <div className="row movie-first-row">
                <div className="col">
                <div className="container">
                <div className="row">
                <h4>Trailer</h4>
                </div>
                <div className="row">
                <iframe width="100%" height="500" src={youTubeBaseURL + this.state.trailerId} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>
                </div>
                </div>
            </div>
        )
    }
} 