import React from 'react';


const CategorySelect = ({categories, handleSelectChange}) => {

    const handleChange = (event) => {
      const index = event.target.value;
      handleSelectChange(categories[index]);
    }

    const categoryOptions = categories.map((category, index) => {
      return <option key={index} value={index}>{category.categoryName}</option>
    });

    return (
        <select onChange={handleChange}>
            {categoryOptions}
        </select>
    )
  
}

export default CategorySelect;