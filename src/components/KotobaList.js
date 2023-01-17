import React from 'react';
import './KotobaList.css';
import Kotoba from './Kotoba';
import styled from "styled-components";

const KotobaList = ({selectedCategory}) => {

  const KotobaCard = styled.div`
  width: 20rem;
  position: relative;
`;

  const KotobaResult = selectedCategory.kotobas.map((kotoba, id) => {
    if (selectedCategory.kotobas) {
      return (
  
    <>
    <KotobaCard key={id}>
        <h3>{kotoba.name}</h3>
    
        <h4>{kotoba.pronunciation}</h4>

        </KotobaCard>
    </>
      )
    }
  })
  

    return (
        <>
          <section id="kotobas">
        <div id="kotoba-wrapper">
        {KotobaResult}
        </div>
           </section>
        </>
      );
}
 
export default KotobaList;