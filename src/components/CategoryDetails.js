import React from 'react';
import KotobaList from './KotobaList'
import KotobaContainer from '../containers/KotobaContainer';

const CategoryDetails = ({selectedCategory}) => {

  


  return (
   <>
    <h5>Word list for: {selectedCategory.categoryName}</h5>
    <KotobaList selectedCategory={selectedCategory}/>
   </>
  )
}

export default CategoryDetails