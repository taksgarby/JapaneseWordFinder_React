import React, { useState, useEffect } from "react";
import CategorySelect from "../components/CategorySelect";
import CategoryDetails from "../components/CategoryDetails";
import KotobaList from "../components/KotobaList";
// import { getCategory, categoryById } from "../services/CategoryService";
// import { getKotoba, kotobaById } from "../services/KotobasService";

const  KotobaContainer= () => {

    const[categories, setCategories] = useState([]);
    const[selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = function() {
        fetch('http://localhost:8080/categories')
        .then(res => res.json())
        .then(categories => setCategories(categories))
    }

    // useEffect(() => {
    //     fetch("http://localhost:8080/categories")
    //         .then((res) => res.json())
    //         .then((categories) => setCategory(categories));
    // },[]);

    // const getCategoryById = (id) => {
    //     categories.find((category) => category.id === id);
    // }

    // useEffect( () => {
    //     fetch( 'http://localhost:8080/categories')
    //         .then( res => res.json() )
    //         .then( data => setCategory(data) )
    // }, [] )


    // const[kotobas, setKotoba]= useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:8080/kotoba")
    //         .then((res) => res.json())
    //         .then((kotobaData) => setKotoba(kotobaData));
    // },[]);


    const onCategorySelected = function (category){
        setSelectedCategory(category);
    }



    return ( 
        <div>
            <h1>Japanese Word Finder</h1>
            < CategorySelect categories = {categories} onCategorySelected={onCategorySelected}/>
           {selectedCategory ? <CategoryDetails selectedCategory={selectedCategory}/> : null}
          
        </div>
     );
}

export default KotobaContainer