import React, { useState } from 'react';
import Header from './Header';
import MovieList from './MovieList';

const Home = () => {
    const [filterValue, setFilterValue] = useState('');
    return(
        <>
        <Header filterValue={filterValue} setFilterValue={setFilterValue} />
        <MovieList filterValue={filterValue} setFilterValue={setFilterValue}/>
        </>
    );
};

export default Home;