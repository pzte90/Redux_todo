import React from 'react';

const RemoveButton = ({children, handleBtn}) => {
    return (
        <button onClick={handleBtn}>{children}</button>
    );
}

export default RemoveButton;
