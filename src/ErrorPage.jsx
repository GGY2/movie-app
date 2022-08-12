import React from 'react';

const ErrorPage = () => {
    return(
        <div style={{
            backgroundColor: '#ffff',
            width: '100vw',
            height: '100vh',
            margin: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
            backgroundColor: 'red',
            width: '300px',
            height: '300px',
            margin: '0',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            flexWrap: 'wrap',
            flexDirection: 'column'
        }}>
            <span style={{
                fontSize: '30px', 
                textTransform: 'uppercase', 
                letterSpacing: 0, 
                lineHeight: 1.1, 
                fontWeight: 'bolder'
                }}>Error!</span>
            <span style={{
                fontSize: '30px', 
                textTransform: 'uppercase', 
                letterSpacing: 0, 
                lineHeight: 1.1, 
                fontWeight: 'bolder'
                }}>Error!</span>
            <span style={{
                fontSize: '30px', 
                textTransform: 'uppercase', 
                letterSpacing: 0, 
                lineHeight: 1.1, 
                fontWeight: 'bolder'
                }}>Error!</span>
        </div>
        </div>
    );
};

export default ErrorPage;