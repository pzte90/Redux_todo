import React from 'react';

const FilterButton = ({children, disabled, handleFilter}) => {
    return (
        <button onClick={handleFilter} disabled={disabled}>{children}</button>
    );
}

export default FilterButton;
