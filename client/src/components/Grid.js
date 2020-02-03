import React, { Component } from 'react';
import styled from 'styled-components';

const LayoutSection = styled.section ` 
      width: 100%;
      background: #474747;
      display: grid;
      grid-gap: 1.5em;
      padding: 1em;
      grid-template-columns: [main-start] 2fr [content-start] 3fr [content-end] 2fr [main-end];
      grid-template-rows: [main-start] 100px [content-start] 100px [content-end] auto [main-end];
 `;
 const LeftBar = styled.div `
        background: #383838;
        color: #fff;
        text-align: center;
        grid-column-start: main-start;
        grid-row-start: main-start;
        grid-row-end: main-end;
 `;
 const MainLeft = styled.div `
        grid-column-start: content-start;
        grid-row-start: main-start;
        grid-row-end: content-end;
        background: #383838;
        color: #fff;
        text-align: center;
 `;
 const MainRight = styled.div `
        grid-column-start: content-end;
        grid-row-start: main-start;
        grid-row-end: content-end;
        background: #383838;
        color: #fff;
        text-align: center;
 `;
 const NewsItemWrapper = styled.div`
       grid-column-start: content-start;
       grid-row-start: main-end;
       grid-row-end: content-end;
       grid-column-end: main-end;
       text-align: center; 
       display: flex;
       flex-flow: row wrap;
       justify-content: space-between;
       align-items: center;
       padding: 1em;

 `;
 const SubmainLeft = styled.div `
        width: 49.5%;
        height: 300px;
        margin-bottom: 1em;
        grid-column-start: content-start;
        grid-row-start: main-end;
        grid-row-end: content-end;
        background: #383838;
        color: #fff;
        text-align: center;
 `;
 const SubmainRight = styled.div `
        width: 49.5%;
        height: 300px;
        margin-bottom: 1em;
        grid-column-start: content-end;
        grid-row-start: main-end;
        grid-row-end: content-end;
        background: #383838;
        color: #fff;
        text-align: center;
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
class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <LayoutSection>
                    <LeftBar>
                        Left Side Column     
                    </LeftBar>

                    <MainLeft>
                        Advertisment      
                    </MainLeft>

                    <MainRight>
                        Livestream    
                    </MainRight>
                <NewsItemWrapper>
                    <SubmainLeft>
                    News items 1
                    </SubmainLeft>
                    <SubmainRight>
                    News items 2
                    </SubmainRight>
                    <SubmainLeft>
                        News items 3
                    </SubmainLeft>
                    <SubmainRight>
                        News items 4
                    </SubmainRight>
                       <ButtonWrapper>
                        <Button>
                            Läs mer
                        </Button>
                     </ButtonWrapper>
                </NewsItemWrapper>  
                {/** grid ends here */} 
                      

            </LayoutSection>
            
         );
    }
}
 
export default Grid;