import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import MovieCard from './MovieCard';
import './MovieList.css';



const MovieList = ({filterValue, addToWatchlist}) => {

    const [movies] = useState([
        {
            title: 'Morbius',
            description: ` Biochemist Michael Morbius Biochemist Michael Morbius...`,
            posterURL: 'https://www.youtube.com/embed/oZ6iiRrz1SY?controls=0',
            rating: 4
        },
        {
            title: 'Spider Man',
            description: `Peter Parker seeks Doctor Peter Parker seeks Doctor...`,
            posterURL: 'https://www.youtube.com/embed/rk-dF1lIbIg?controls=0',
            rating: 5
        },
        {
            title: 'Avengers',
            description: `The Avengers must The Avengers must...`,
            posterURL: 'https://www.youtube.com/embed/eOrNdBpGMv8?controls=0',
            rating: 3
        },
        {
            title: 'Venom',
            description: `Eddie Brock tries to Eddie Brock tries to...`,
            posterURL: 'https://www.youtube.com/embed/xLCn88bfW1o?controls=0',
            rating: 2
        },
        {
            title: 'Doctor Strange',
            description: `In an accident, Stephen In an accident, Stephen...`,
            posterURL: 'https://www.youtube.com/embed/Rt_UqUm38BI?controls=0',
            rating: 2
        },
        {
            title: 'Black Panther',
            description: `T'Challa returns home T'Challa returns home...`,
            posterURL: 'https://www.youtube.com/embed/xjDjIWPwcPU?controls=0',
            rating: 5
        },
        {
            title: 'Deadpool',
            description: `Ajax, a twisted scientist Ajax, a twisted scientist...`,
            posterURL: 'https://www.youtube.com/embed/WRlGteWa1cY?controls=0',
            rating: 3
        },
        {
            title: 'X-Men',
            description: `The all-powerful mutant The all-powerful mutant...`,
            posterURL: 'https://www.youtube.com/embed/pK2zYHWDZKo?controls=0',
            rating: 2
        },
        {
            title: 'Logan',
            description: `Logan comes out of Logan comes out of...`,
            posterURL: 'https://www.youtube.com/embed/LCkyW7RE6Wk?controls=0',
            rating: 3
        },
        {
            title: 'Thor',
            description: `Thor is exiled by his Thor is exiled by his...`,
            posterURL: 'https://www.youtube.com/embed/Go8nTmfrQd8?controls=0',
            rating: 4
        }
    ]); 


    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(0);
    const [films, setFilms] = useState([]);
    const [posterURL, setPosterURL] = useState('');

    const addMovie = () => {
        if(title == '' || description == '' || posterURL == '' || rating == 0){
            alert('Please fill in all fields below')
        }
        else{
            setFilms([{title: title, description: description, rating: rating, posterURL: posterURL}, ...films]);
            setTitle('');
            setDescription('');
            setRating('');
            setPosterURL('');
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
                        addToWatchlist={addToWatchlist}
                        key={index}
                        title={film.title}
                        description={film.description}
                        rating={film.rating}
                        posterURL={film.posterURL}
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
                        addToWatchlist={addToWatchlist}
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
            position: 'sticky',
            top: '80px',
            right: '0px',
            width: '50%',
            height: 'calc(100vh - 80px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            backgroundColor: '#3a3a3a'
        }}>
            <div style={{
                top: '30%', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                color: '#ffff'
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
                    <Form.Control value={description} maxLength="100" onChange={(e) => setDescription(e.target.value)} className='addMovie'
                    type="text" 
                    placeholder="Description..."  
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control value={posterURL} maxLength="70" onChange={(e) => setPosterURL(e.target.value)} className='addMovie'
                    type="text" 
                    placeholder="Embed link"  
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
            <Button style={{
                marginTop: '40px',
                height: '40px',
                boxShadow: '0 2px 5px 1px rgb(64 60 67 / 16%)',
                backgroundColor: 'greenyellow',
                border: 'none',
                outline: 'none',
                color: '#3a3a3a'
            }} onClick={addMovie}>Add movie</Button></div>
        </div>
        </div>
        </>
    );
};

export default MovieList;


