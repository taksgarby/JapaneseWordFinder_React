import React from 'react';
import Kotoba from './Kotoba';
import styled from "styled-components";

const KotobaList = ({selectedCategory}) => {

  const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 2rem;
  `
  const KotobaCard = styled.div`
    width: 10rem;
    background-color: lightpink;
    length: 10rem;
    margin: 1rem;
    position: relative;
    padding: 0.8rem;
    border-radius: 10%;
    `;

  const KeywordWrapper = styled.div`
    font-size: 0.8rem;
    color: #355E3B;

    `

  const AnswerWrapper = styled.div`
    color: 	#383838;
    margin-bottom: 0.5rem;
    `

  const KotobaResult = selectedCategory.kotobas.map((kotoba, id) => {
    if (selectedCategory.kotobas) {
      return (
        <>
        <KotobaCard key={id}>
        <KeywordWrapper>Japanese word for:</KeywordWrapper>
        <AnswerWrapper>{kotoba.name}</AnswerWrapper>
        <KeywordWrapper>Pronunciation:</KeywordWrapper>
        <AnswerWrapper> {kotoba.pronunciation}</AnswerWrapper>
        <KeywordWrapper>Kana writing: </KeywordWrapper>
        <AnswerWrapper>{kotoba.hiragana_katakana}</AnswerWrapper>
        <KeywordWrapper>Kanji writing: </KeywordWrapper>
        <AnswerWrapper>{kotoba.kanji}</AnswerWrapper>
        </KotobaCard>

    </>
      )
    }
  })
  

    return (
        <>
        <CardContainer>
        {KotobaResult}
        </CardContainer>
        </>
      );
}
 
export default KotobaList;