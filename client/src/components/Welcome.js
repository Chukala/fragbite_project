import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section `
       width: 100%;
       height: auto;
       display: flex;
       justify-content: center;
`;
const Wrapper = styled.div `
      width: 40%;
      height: auto;
      padding: 2.5em 1em;
      background: #28405A;
      border-radius: 0.5em;
      @media only screen and (max-width: 768px){
           width: 100%;
           height: auto;
       }
`;
const TitleWrapper = styled.div ` 
     width: 100%;
     padding: 1em; 
`;
const Title = styled.h1 `
     font-size: 2.25em;
     color: #fff;
     @media only screen and (max-width: 768px){
       font-size: 2em;
     }
`;
const SubTitle = styled.h4 `
      font-size: 1em;
      color: #fff;
      font-weight: 400;
`;
const ButtonWrapper = styled.div `
      width: 100%; 
      padding: 1em;
`;
const Button = styled.button `
      width: 80%;
      padding: 0.75em 1.5em;
      font-size: 1em;
      color: #fff;
      outline: none;
      border-radius: 3px;
      border: none;
      outline: none;
      background: #EB5E0B;
      cursor: pointer;
      &:hover{
         background: #EC5D0B;
      }
`;
const CloseButtonWrapper = styled.div `
      text-align: right;
      margin: 0;
`;
const CloseButton = styled.button `
      padding: 0.75em 1em;
      border: none;
      background: transparent;
      color: #fff;
      font-size: 1.5em;
      cursor: pointer;
      &:hover{
          color: orange;
      }
      &:focus,
      &:active {
          outline: none;
      }
      
`;

 const Welcome = () => {
    return (
        <SectionWrapper>
            <Wrapper>
               <CloseButtonWrapper><CloseButton>x</CloseButton></CloseButtonWrapper>
              <TitleWrapper>
                  <Title>
                     Välkommen till fragbiteBetting 
                  </Title>
              </TitleWrapper>
              <TitleWrapper>
                  <SubTitle>
                      Här kan du dagligen ta del av speltips från våra experter och analyser.
                      Välkommen in i värmen!
                  </SubTitle>
              </TitleWrapper>
                <ButtonWrapper>
                    <Button>
                        Text
                    </Button>
                </ButtonWrapper>
            </Wrapper>
        </SectionWrapper>
        
    )
}

export default Welcome;