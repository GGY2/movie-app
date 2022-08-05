import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import MovieCard from './MovieCard';
import './MovieList.css';

const movies = [
    {
        title: 'Morbius',
        description: `Biochemist Michael Morbius...`,
        posterURL: 'images/one.png',
        rating: 4
    },
    {
        title: 'Spider Man',
        description: `Peter Parker seeks Doctor...`,
        posterURL: '/images/two.png',
        rating: 5
    },
    {
        title: 'Avengers',
        description: `The Avengers must...`,
        posterURL: '/images/three.png',
        rating: 3
    },
    {
        title: 'Venom',
        description: `Eddie Brock tries to...`,
        posterURL: 'images/four.png',
        rating: 2
    },
    {
        title: 'Doctor Strange',
        description: `In an accident, Stephen...`,
        posterURL: 'images/five.png',
        rating: 2
    },
    {
        title: 'Black Panther',
        description: `T'Challa returns home...`,
        posterURL: '/images/six.png',
        rating: 5
    },
    {
        title: 'Deadpool',
        description: `Ajax, a twisted scientist...`,
        posterURL: '/images/seven.png',
        rating: 3
    },
    {
        title: 'X-Men',
        description: `The all-powerful mutant...`,
        posterURL: 'images/eight.png',
        rating: 2
    },
    {
        title: 'Logan',
        description: `Logan comes out of...`,
        posterURL: '/images/nine.png',
        rating: 3
    },
    {
        title: 'Thor',
        description: `Thor is exiled by his...`,
        posterURL: 'images/ten.png',
        rating: 4
    }
]; 

const MovieList = ({filterValue}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(0);
    const [films, setFilms] = useState([]);

    const addMovie = () => {
        if(title == '' || description == '' || rating == 0){
            alert('Please fill in the three fields below')
        }
        else{
            setFilms([{title: title, description: description, rating: rating}, ...films]);
            setTitle('');
            setDescription('');
            setRating('');
        }
    };

    return(
        <>
        <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
        <div className='movies-wrapper'>
            {
                films.filter((item) => {
                    if(filterValue === ''){
                        return item;
                    }
                    else if(item.title.toLowerCase().includes(filterValue.toLowerCase())){
                        return item;
                    }
                }).map((film, index) => {
                    return(
                        <MovieCard  
                        key={index}
                        title={film.title}
                        description={film.description}
                        rating={film.rating}
                        posterURL={'images/five.png'}
                        />
                    )
                })
            }
            {
                movies.filter((val) => {
                    if(filterValue === ''){
                        return val;
                    }
                    else if(val.title.toLowerCase().includes(filterValue.toLowerCase())){
                        return val;
                    }
                }).map((movie, index) => {
                    return(
                        <MovieCard
                        key={index} 
                        title={movie.title}
                        description={movie.description}
                        rating={movie.rating}
                        posterURL={movie.posterURL}
                        />
                    )
                })
            }            
        </div>
        <div style={{
            position: 'fixed',
            top: '80px',
            right: '0px',
            width: '50%',
            height: 'calc(100vh - 80px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#f1f1f1'
        }}>
            <div style={{
                position: 'fixed', 
                top: '35%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center'
            }}>
            <h4>Add movies to your collection</h4>
            <Form>
                <Form.Group>
                    <Form.Control value={title} maxLength="20" onChange={(e) => setTitle(e.target.value)} className='addMovie'
                    type="text" 
                    placeholder="Title..." 
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control value={description} maxLength="70" onChange={(e) => setDescription(e.target.value)} className='addMovie'
                    type="text" 
                    placeholder="Description..."  
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Select id='rates' value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
                        <option>Rate your experience...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </Form.Select>
                    </Form.Group>
            </Form>
            <Button variant="primary" onClick={addMovie}>Add movie</Button></div>
        </div>
        </div>

        </>
    );
};

export default MovieList;