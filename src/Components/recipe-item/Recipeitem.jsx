import React from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import Header from '../Header/Header';


const Recipeitem = ({ recipe }) => {
    const { favorites } = useSelector(state => state)
    console.log(favorites)
    const { toggleToFavorites } = useActions()
    const isExists = favorites.some(r => r.id === recipe.id)
    return (
        <>
        
            <div style={{ display: 'flex', justifyContent: 'center', columnGap: '30px' }}>
                <div className="" style={{ padding: '100px', background: 'gray', color: 'white', borderRadius: '25px', marginTop: '60px' }}>
                    <h3>{recipe.name}</h3>
                    <button onClick={() => {
                        toggleToFavorites(recipe)

                    }} >{isExists ? 'Remove from' : 'Add to'} favorites</button>
                </div>

            </div>
        </>
    );
};

export default Recipeitem;