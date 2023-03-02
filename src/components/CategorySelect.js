import React from 'react';
import "./static/style.css"

const CategorySelect = ({categories, onCategorySelected}) => {

  const handleChange = function (event) {
    const chosenCategory = categories[event.target.value];
    onCategorySelected(chosenCategory);
  }

  const categoryOptions = categories.map((category, id) => {
    return <option value={id} key={id}>{category.categoryName}</option>
  })

  return (
    <>
    <h3>Choose a category to start:</h3>
    <div class="form-select">
    <select  class="form-option" defaultValue="" onChange={handleChange}>
      <option value="" selected>Choose a Category</option>
      {categoryOptions}
    </select>
    </div>
    </>
  )

}

export default CategorySelect;