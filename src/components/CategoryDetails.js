import react from 'react';
import KotobaList from './KotobaList'
import KotobaContainer from '../containers/KotobaContainer';

const CategoryDetails = ({selectedCategory}) => {

  


  return (
   <div>
    <h3>{selectedCategory.categoryName}</h3>
    <KotobaList selectedCategory={selectedCategory}/>
   </div>
  )
}

export default CategoryDetails