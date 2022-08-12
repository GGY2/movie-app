import React from 'react';
import './Cinema.css';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cinema = ({watchList}) => {

    let navigate = useNavigate();
    
    return(
        <>
        <div style={{
            height: '100vh',
            width: '100%',
            backgroundColor: '#2b2b2b',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '0px auto'
        }}>
           {
                watchList.map((listItem, index) => {
                    return(
                    <Card key={index} style={{
                            width: '500px',
                            height: '410px', 
                            border: 'none', 
                            borderRadius: '0px',
                            overflow: 'hidden',
                            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
                            }}>
                            <div style={{width: '100%', overflow: 'hidden', height: '100%'}}>
                            <iframe 
                                width="100%" 
                                height="100%" 
                                src={listItem.url} 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                            </div>
                            <Card.Body style={{
                                display: 'flex', 
                                alignItems: 'center', 
                                height: '100px',
                                backgroundColor: '#3a3a3a'
                                }}>
                                <Card.Text>
                                    <p style={{fontSize: '18px', margin: 0, color: '#ffff'}}>{listItem.description}</p>
                                </Card.Text>
                            </Card.Body>
                    </Card>
                    )
                })
           }         
           <Button style={{
            width: '500px', 
            height: '50px', 
            marginTop: '15px', 
            borderRadius: '0px',
            backgroundColor: 'greenyellow',
            border: 'none',
            outline: 'none',
            color: '#3a3a3a'
            }} onClick={() => {
                navigate('/');
            }}>Back</Button>
        </div>
        </>
    );
};

export default Cinema;