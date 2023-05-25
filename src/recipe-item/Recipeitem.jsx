import React from 'react';
import { useSelector } from 'react-redux';

const Recipeitem = ({recipe}) => {
    return (
        <div style={{display:'flex',justifyContent:'center',columnGap:'30px'}}>
            <h3>{recipe.name}</h3>
            <button className='button'>добавить в Иззбранные</button>
        </div>
    );
};

export default Recipeitem;