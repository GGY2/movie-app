import React from 'react';
import { Form } from 'react-bootstrap';
import './FilterMovies.css';

const FilterMovies = ({filterValue, setFilterValue}) => {
    
    return(
        <>
            <Form>
                <Form.Group>
                    <Form.Control className='place'
                    type="text" 
                    placeholder="Search..." 
                    value={filterValue} 
                    onChange={(e) => setFilterValue(e.target.value.toLowerCase())} 
                    />
                </Form.Group>
            </Form>
        </>
    );
};
export default FilterMovies;