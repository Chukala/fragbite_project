import React, { Component } from 'react';
import styled from 'styled-components';

const LayoutSection = styled.section ` 
      width: 100%;
      background: #474747;
      display: grid;
      grid-gap: 1.5em;
      padding: 1em;
      grid-template-columns: repeat(12, [col-start] 1fr);
 `;
 const LeftBar = styled.div `
        grid-column: col-start / span 2;
        height: 300px;
        background: #383838;
        color: #fff;
        text-align: center;
 `;
 const MainLeft = styled.div `
        grid-column: col-start 3 / span 7;
        height: 300px;
        background: #383838;
        color: #fff;
        text-align: center;
 `;
 const MainRight = styled.div `
        grid-column: col-start 10 / span 3;
        height: 300px;
        background: #383838;
        color: #fff;
        text-align: center;
 `;
 const SubmainLeft = styled.div `
        grid-column: col-start 3 / span 6;
        height: 300px;
        grid-row: 2;
        background: #383838;
        color: #fff;
        text-align: center;
 `;
 const SubmainRight = styled.div `
        grid-column: col-start 9 / span 6;
        height: 300px;
        grid-row: 2;
        background: #383838;
        color: #fff;
        text-align: center;
 `;

class GridLayout extends Component {
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
                    
                    <SubmainLeft>
                        News items 
                    </SubmainLeft>

                    <SubmainRight>
                        News items 
                    </SubmainRight>
            </LayoutSection>
            
         );
    }
}
 
export default GridLayout;