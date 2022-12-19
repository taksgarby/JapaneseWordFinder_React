import react from 'react';
import KotobaList from './KotobaList'
// import './CategoryDetail.css'

const CategoryDetails = ({category, kotobas}) => {

  return (
    <div  id="categoryDetail">

          <h2>{category.categoryName}</h2>
          <p><span>Category</span>: {category.categoryName}</p>
        



    <div id="kotoba-list-wrapper">
      <KotobaList kotobas={kotobas}/>
    </div>

  </div>
  )
}

export default CategoryDetails