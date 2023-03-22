import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                !isLoading 
                    ?
                    <div className='card-grid'>
                        {
                            images.map( image => 
                                <GifItem 
                                    key={image.id} 
                                    {...image}
                                />
                            )
                        }
                    </div>
                    : <h1 style={{display: 'flex', alignSelf: 'center'}}>Loading...</h1>

            }
        </>
    )
}

GifGrid.porpTypes = {
    category: PropTypes.string.isRequired
}