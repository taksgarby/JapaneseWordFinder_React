import react from 'react';
import KotobaList from './KotobaList'
import KotobaContainer from '../containers/KotobaContainer';

const CategoryDetails = ({selectedCategory}) => {

  


  return (
   <div>
    <h5>Word list for: {selectedCategory.categoryName}</h5>
    <KotobaList selectedCategory={selectedCategory}/>
   </div>
  )
}

export default CategoryDetails