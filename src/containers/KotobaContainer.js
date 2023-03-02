import React, { useState, useEffect } from "react";
import CategorySelect from "../components/CategorySelect";
import CategoryDetails from "../components/CategoryDetails";
import Header from "../components/Header";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Kana from "../components/Kana";
import Kanji from "../components/Kanji";

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

    const onCategorySelected = function (category){
        setSelectedCategory(category);
    }

    const GlobalStyle = createGlobalStyle`
        body{
            font-family: 'Nunito', sans-serif;
        }

    `


    // return ( 
    //     <div>
    //         <GlobalStyle />
    //         <Header />
    //         <NavBar />
    //         < CategorySelect categories = {categories} onCategorySelected={onCategorySelected}/>
    //        {selectedCategory ? <CategoryDetails selectedCategory={selectedCategory}/> : null}
          
    //     </div>
    //  );

    return(
        <Router>
            <GlobalStyle />
            <Header />
            <NavBar />
            < CategorySelect categories = {categories} onCategorySelected={onCategorySelected}/>
           {selectedCategory ? <CategoryDetails selectedCategory={selectedCategory}/> : null}
        <Routes>
            <Route path="/kana" element={<Kana/>}/>
            <Route path="/kanji" element={<Kanji/>} />

        </Routes>  
        </Router>
    )
}

export default KotobaContainer;