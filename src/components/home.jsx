import React, { Component } from 'react'
import MovieItem from './item'
import axios from 'axios'

var rowsWithMovies = []
var constants = require('./constants')
var RestApiURL = constants.MovieTrailersApiURL 

export default class Home extends Component {  
    state = {
        movieList: []
    }

    getMovies = () => {
      
        var title = document.getElementById("title").value

        if (title.trim() === '') 
            return;
        
        axios.get(RestApiURL + '/movies?title=' + title)
            .then(response => {
                this.setState({
                    movieList: response.data['results']
                })
            })
    }

    redirectToMovieDetails = (movieId) =>{
        this.props.history.push("/movies/"+ movieId)
    }

    renderList(){
        rowsWithMovies = []
                var listOfMovies = this.state.movieList
         
                for (var i = 0; i < listOfMovies.length; i++) {
                    var movie = listOfMovies[i]

                    rowsWithMovies.push(
                        <MovieItem
                            key={i}
                            id={movie.id}
                            title={movie.title}
                            posterPath={movie.poster_path}
                            releaseDate={movie.release_date}
                            getMovieDetails={this.redirectToMovieDetails}
                        />
                    )
                }
                return rowsWithMovies;
    }

    render() {

        return (
            <div className="container">
                <div className="row"><h1>Movie Trailers</h1></div>
                <div className="row">
                    <div className="col">
                    <input className="form-control" id="title" type="text" />
                    <button className="search-button" onClick={this.getMovies}>Search</button>
                    </div>
                </div> 
                <div className="row">
                    {this.renderList()}  
                </div> 
            </div>
        )
    }
} 