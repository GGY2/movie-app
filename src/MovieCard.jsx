import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({title, description, posterURL, rating}) => {
    return(
        <>
        <Card style={{width: '280px', border: 'none', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'}}>
            <div style={{width: '100%', overflow: 'hidden', height: '200px'}}>
            <Card.Img style={{objectFit: 'cover'}} variant="top" src={posterURL} />
            </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <p>{description}</p>
                        {Array(rating).fill().map((_, i) => (
                            <span><img style={{width: '15px', height: '15px'}} src='/images/star.png'/></span>
                        ))}
                    </Card.Text>
                </Card.Body>
        </Card>
        </>
    );
};

export default MovieCard;

