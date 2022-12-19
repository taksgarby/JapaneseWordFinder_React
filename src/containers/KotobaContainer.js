import React, { useState, useEffect } from "react";
import CategorySelect from "../components/CategorySelect";
import CategoryDetails from "../components/CategoryDetails";
// import { getCategory, categoryById } from "../services/CategoryService";
// import { getKotoba, kotobaById } from "../services/KotobasService";

const  KotobaContainer= () => {

    const[categories, setCategory] = useState([]);
    const[selectedCategory, setSelectedCategory] = useState(null);
    const[kotobas, setKotoba]= useState([]);


    // useEffect(() => {
    //     getCategory()
    //         .then((info) =>
    //             setCategory(info)
    //         )
    //     getKotoba()
    //         .then((info) =>
    //             setKotoba(info))

    // }, [])



    useEffect( () => {
        fetch( 'http://localhost:8080/categories' )
            .then( res => res.json() )
            .then( data => setCategory(data) )
    }, [] )

    const handleSelectChange = ( category ) => {
        const kotobaPromises = category.kotobas.map( ( kotoba ) => {
            return fetch( kotoba ).then( res => res.json() );
        } )
        Promise.all( kotobaPromises )
            .then( ( data ) => {
                setKotoba(data);
                setSelectedCategory(category);
            } )
        }



    return ( 
        <div>
            <h1>Japanese Word Finder</h1>
            < CategorySelect categories = {categories} handleSelectChange={handleSelectChange}/>
            { selectedCategory ? <CategoryDetails category={ selectedCategory} kotobas ={kotobas}/>  : null}
        </div>
     );
}

export default KotobaContainer