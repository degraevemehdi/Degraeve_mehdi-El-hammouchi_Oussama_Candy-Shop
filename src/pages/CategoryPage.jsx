
import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
    const { categoryName } = useParams(); 

    return (
    <div>
        <h2>Catégorie : {categoryName}</h2>
        
    </div>
    );
}

export default CategoryPage;
