import React from 'react'

const Filter = ({filter, onFilterChange}) => (
    <>
        find countries <input value={filter} onChange={onFilterChange}/>
    </>)

export default Filter