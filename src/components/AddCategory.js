import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({ setCategories }) => {

    // const [inputValue, setInputValue] = useState(); //undefined
    const [inputValue, setInputValue] = useState(''); //undefined

    const hanldeInputChange = (e) => {
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

        //console.log('Submit hecho')


    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>{inputValue}</h1>
            <input
                type='text'
                value={inputValue}
                onChange={hanldeInputChange} />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
