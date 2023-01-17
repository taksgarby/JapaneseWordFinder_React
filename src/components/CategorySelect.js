import React from 'react';


const CategorySelect = ({categories, onCategorySelected}) => {

  const handleChange = function (event) {
    const chosenCategory = categories[event.target.value];
    onCategorySelected(chosenCategory);
  }

  const categoryOptions = categories.map((category, id) => {
    return <option value={id} key={id}>{category.categoryName}</option>
  })

  return (
    <select defaultValue="" onChange={handleChange}>
      <option value="" selected>Choose a Category</option>
      {categoryOptions}
    </select>
  )

}

export default CategorySelect;