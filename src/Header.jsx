import React from 'react';
import FilterMovies from './FilterMovies';

const Header = ({filterValue, setFilterValue}) => {
    return(
        <>
            <div style={{
                height: '80px', 
                width: '100%', 
                backgroundColor: '#ffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottom: '1px solid #cecece',
                position: 'sticky',
                top: 0,
                zIndex: '999'
                }}>
                    <FilterMovies filterValue={filterValue} setFilterValue={setFilterValue} />
                </div>
        </>
    );
};

export default Header;