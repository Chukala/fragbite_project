import React, { Component } from 'react';
//import NewsItem from '../components/NewsItem';

import styled from 'styled-components';

const LayoutSection = styled.section ` 
      width: 100%;
      height: 100%;
      background: #474747;
      padding: 2rem;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
 `;

const AdWrapper = styled.div ` 
      width: 100%;
      height: auto;
      background: #474747;
      padding: 2rem;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
 `;
 const NewsItemWrapper = styled.div ` 
      width: 60%;
      height: 300px;
      background: #fff;
      color: #333;
      display: flex;
      flex-flow: row wrap;
 `;
/*const LoginWrapper = styled.div `
      width: 30%;
      height: auto;
      background:#fff;
`;
const Title = styled.h1 `
  font-size: 1.5em;
  text-align: center;
  color: #333;
`;
const TitleWrapper = styled.div `
  padding: 1em;
  background: #f8f8f8;
`;
const SubTitle = styled.h4 `
      font-size: 1.125em;
      text-align: center;
      color: #bbb;
      padding: 0.5em;
`;
*/
class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <LayoutSection>
                <AdWrapper>
                    <div className="left-bar">
                        Left Side Column     
                    </div>

                    <div className="main-bar">
                        <div className="main-left">
                        Advertisment      
                        </div>

                        <div className="main-right">
                            Livestream    
                        </div>
                    </div>

                    <NewsItemWrapper>
                        <div className="submain-left">
                            News items 
                        </div>
                        <div className="submain-right">
                            News items 
                        </div>
                    </NewsItemWrapper> 
                </AdWrapper>
                
            </LayoutSection>
            
            
            
         );
    }
}
 
export default Layout;