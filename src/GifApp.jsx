import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifApp = () => {
    const [categories, setCategories] = useState([])

    const onAddCategory = (category) => {
        if (categories.find(cat=>cat.toLowerCase() === category.toLowerCase())) return;

        setCategories((categories)=>[category, ...categories])
    }

    const deleteGifs = () => {
        setCategories([])
    }

    return (
        <>
            <div className='title-bar'>
                <h1>GifApp</h1>
                {
                    categories.length > 0 && 
                        <img 
                            onClick={deleteGifs} 
                            width={40} 
                            src="https://icongr.am/fontawesome/close.svg?size=128&color=currentColor" 
                            alt="" 
                        />
                }
            </div>
            
            <AddCategory onNewCategory={ (value) => onAddCategory(value)}></AddCategory>
            {
                categories.map(category => 
                    <GifGrid 
                        key={category} 
                        category={category} 
                    /> 
                )
            }           
        </>
    )
}
