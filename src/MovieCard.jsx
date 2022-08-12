import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({title, description, posterURL, rating, addToWatchlist}) => {
    
    let navigate = useNavigate();
    return(
        <>
        <Card 
            style={{
            width: '280px', 
            border: 'none', 
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            backgroundColor: '#3a3a3a',
            color: '#ffff'
            }}>
            <div style={{width: '100%', overflow: 'hidden', height: '200px'}}>
            <iframe width="280" height="200" src={posterURL} title="YouTube video player" frameborder="0" allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture" allowfullscreen></iframe>
            {/* <Card.Img style={{objectFit: 'cover'}} variant="top" src={posterURL} /> */}
            </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p>{description}</p>
                        {Array(rating).fill().map((_, i) => (
                            <span><img style={{width: '15px', height: '15px'}} src='/images/star.png'/></span>
                        ))}
                    </Card.Text>
                    <Button 
                    onClick={() => {addToWatchlist(posterURL, description); navigate('/cinema')}}
                    style={{
                        margin: '10px 0px 15px 0px',
                        height: '40px',
                        boxShadow: '0 2px 5px 1px rgb(64 60 67 / 16%)',
                        backgroundColor: 'greenyellow',
                        border: 'none',
                        outline: 'none',
                        color: '#3a3a3a'
                    }}
                    >Watch now</Button>
                </Card.Body>
        </Card>
        </>
    );
};

export default MovieCard;

