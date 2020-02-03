import React, { Component } from 'react';
import styled from 'styled-components';

const HomeSectionWrapper = styled.section`
      width: 100%;
      background: #1e2e38;
      padding: 1em 0;
      display: flex;
      justify-content: center;  
`;
const Wrapper = styled.div`
      width: 1920px;
      height: auto;
      background: #1e2e38;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
`;
const LeftWrapper = styled.div`
      width: 384px;
      height: auto;
      margin-bottom: 1em;
      display: flex;
      flex-flow: row wrap;
`;
const CenterColumnWraper = styled.div `
      width: 520px;
      height: auto;
      margin-right: 64px;
`;
const CenterWrapper = styled.div `
      width: 496px;
      height: auto;
      margin-bottom: 1em;
      display: flex;
      flex-flow: row wrap;
`;
 const CenterFirstRowWrapper = styled.div`
       width: 496px;
       height: 400px;
       display: flex;
       flex-direction: column;
       margin-bottom: 2em;
 `;
const CenterFirstRow = styled.div`
      width: 496px;
      height: 60px;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: center;
      margin: 1em auto;
`;
const CenterRectangle = styled.div`
      width: 230px;
      height: 35px;
      background:#fff;
      text-align: center;
`;   
const CenterRectangleTwo = styled.div `
      width: 100px;
      height: 20px;
      background:#fff;
      text-align: center;
`;                          
                            
const CenterSecondRow = styled.div`
      width: 496px;
      height: 350px;
      display: flex;
      flex-flow: column wrap;
      border-radius: 3px;
`;
const CenterSecondRowImg = styled.div`
      width: 496px;
      height: 200px;
      background: #d9d9d9;
      text-align: center;
`;
const CenterSecondRowText = styled.div`
      width: 496px;
      height: 150px;
      background: #24455A;
      text-align: center;
      color: #fff;
`;                                              
                                            
const RightColumnWraper = styled.div `
      width: 300px;
      height: auto;
`;
const RightWrapper = styled.div `
      width: 300px;
      height: auto;
      margin-bottom: 1em;
      display: flex;
      flex-flow: row wrap;
`;
const RightFirstRowWrapper = styled.div`
      width: 272px;
      height: 230px;
      background: #24455A;
      display: flex;
      flex-flow: column wrap;
      justify-content: space-around;
      border-radius: 5px;  
`;
const RightSecondRowWrapper = styled.div`
       width: 272px;
       height: 100%;
       border-radius: 5px;  
`;
const RectangleBox = styled.div`
       width: 272px;
       height: 45px;
       background: #24455A;
       border-radius: 5px; 
       text-align: center;
       color: #fff; 
`;
const RightFirstRow = styled.div`
      width: 272px;
      height: 60px;
      display: flex;
      justify-content: space-between; 
      padding: 0.5em 1em;
`;
const RightSecondrow = styled.div`
      width: 100%;
      padding: 0.5em 1em;
      color: #fff;
      display: flex;
      justify-content: center;  
`;
const TextRectangle = styled.div`
      width: 272px;
      height: 100%;
`;
const RightFourthRowWrapper = styled.div`
       width: 272px;
       height: 210px;
       border-radius: 5px; 
       background: #24455A; 
       margin-top: 1em;
`;
const RightFourthRow = styled.div`
       width: 272px;
       height: 70px;
       border-bottom: 1px solid #e8e8e8;
`;
const RightFourthRowBox = styled.div`
      width: 272px;
      height: auto;
      display: flex;
      justify-content: space-around; 
      align-items: center;
      padding: 0.5em;   
`;
const BoxRectangle = styled.div`
       width: 50px;
       height: 50px; 
       text-align: center;
       color: #333; 
       background: #fff;       
`;
const RightFifthRowWrapper = styled.div `
       width: 272px;
       height: auto;
       border-radius: 5px; 
       margin-top: 1em;
       display: flex;
       flex-flow: column;
       align-items: center;
`;
const RightFifthRow = styled.div`
       background: #24455A; 
       width: 272px;
       height: 80px;
       margin-bottom: 1em;
       display: flex;
       flex-flow: row wrap;
       justify-content: space-around;
       align-items: center;
`;
const BoxFifthRectangle = styled.div`
      width: 170px;
      height: 50px;
      background:#fff;
      color: #333;
      text-align: center;
      border-radius: 5px;
`;
const TitleWrapper = styled.div ` 
     width: 100%;
     padding: 1em 0; 
`;
const Title = styled.h1 `
     font-size: 1em;
     color: #fff;
     @media only screen and (max-width: 768px){
       font-size: 0.75em;
     }
`;
const LeftColumnWraper = styled.div`
      width: 390px;
      height: auto;
      margin-right: 64px;
`;
const LeftFirstRowWrapper = styled.div`
      width: 384px;
      height: 150px;
      background: #24455A;
      display: flex;
      flex-flow: column wrap;
      border-radius: 3px;
`;
const LeftFirstRow = styled.div`
      width: 100%;
      height: 54px;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      margin: 1em auto;
`;
const CircleImgWrapper = styled.div `
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #fff;
`;
const RightCircleImgWrapper = styled.div`
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #fff;
`;
const Rectangle = styled.div`
      width: 270px;
      height: 54px;
      background: #fff;
      text-align: center;
`;
const ButtonWrapper = styled.div `
      width: 270px;
      height: 40px; 
      display: flex;
      justify-content: center;
      align-items: center;
`;
const Button = styled.button `
      width: 100px;
      height: 40px;
      padding: 0.75em 1.5em;
      margin-left: 0.375em;
      font-size: 1em;
      text-align: center;
      color: #fff;
      outline: none;
      border-radius: 3px;
      border: none;
      background: #EB5E0B;
      cursor: pointer;
      &:hover{
         background: #EC5D0B;
      }
`;
const ButtonRight = styled.button`
      width: 232px;
      height: 40px;
      padding: 0.75em 1.5em;
      margin-left: 0.375em;
      font-size: 1em;
      text-align: center;
      color: #fff;
      outline: none;
      border-radius: 3px;
      border: none;
      background: #EB5E0B;
      cursor: pointer;
      &:hover{
         background: #333;
      }

`;

class FragbiteHome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <HomeSectionWrapper>
              <Wrapper>
                <LeftColumnWraper>
                {/** left side bar begins here */}
                    <LeftWrapper>
                        <TitleWrapper><Title>EVENT & TURNERINGAR</Title></TitleWrapper>
                        <LeftFirstRowWrapper>
                                <LeftFirstRow>
                                    <CircleImgWrapper>
                                        48x48
                                    </CircleImgWrapper>
                                    <Rectangle>
                                    270x54
                                    </Rectangle>
                                </LeftFirstRow>
                                <ButtonWrapper>
                                    <Button>100x26</Button>
                                </ButtonWrapper>
                        </LeftFirstRowWrapper>
                    </LeftWrapper>
                    { /** left side bar ends here for dynamic */ }
                    <LeftWrapper>
                        <LeftFirstRowWrapper>
                                <LeftFirstRow>
                                    <CircleImgWrapper>
                                        48x48
                                    </CircleImgWrapper>
                                    <Rectangle>
                                    270x54
                                    </Rectangle>
                                </LeftFirstRow>
                                <ButtonWrapper>
                                    <Button>100x26</Button>
                                </ButtonWrapper>
                        </LeftFirstRowWrapper>
                    </LeftWrapper>

                    <LeftWrapper>
                        <LeftFirstRowWrapper>
                                <LeftFirstRow>
                                    <CircleImgWrapper>
                                        48x48
                                    </CircleImgWrapper>
                                    <Rectangle>
                                    270x54
                                    </Rectangle>
                                </LeftFirstRow>
                                <ButtonWrapper>
                                    <Button>100x26</Button>
                                </ButtonWrapper>
                        </LeftFirstRowWrapper>
                    </LeftWrapper>

                    <LeftWrapper>
                        <LeftFirstRowWrapper>
                                <LeftFirstRow>
                                    <CircleImgWrapper>
                                        48x48
                                    </CircleImgWrapper>
                                    <Rectangle>
                                    270x54
                                    </Rectangle>
                                </LeftFirstRow>
                                <ButtonWrapper>
                                    <Button>100x26</Button>
                                </ButtonWrapper>
                        </LeftFirstRowWrapper>
                    </LeftWrapper>

                    <LeftWrapper>
                        <LeftFirstRowWrapper>
                                <LeftFirstRow>
                                    <CircleImgWrapper>
                                        48x48
                                    </CircleImgWrapper>
                                    <Rectangle>
                                    270x54
                                    </Rectangle>
                                </LeftFirstRow>
                                <ButtonWrapper>
                                    <Button>100x26</Button>
                                </ButtonWrapper>
                        </LeftFirstRowWrapper>
                    </LeftWrapper>

                    <LeftWrapper>
                   <LeftFirstRowWrapper>
                        <LeftFirstRow>
                            <CircleImgWrapper>
                                48x48
                            </CircleImgWrapper>
                            <Rectangle>
                               270x54
                            </Rectangle>
                        </LeftFirstRow>
                        <ButtonWrapper>
                            <Button>100x26</Button>
                        </ButtonWrapper>
                </LeftFirstRowWrapper>
              </LeftWrapper>
            </LeftColumnWraper>
          {/**Center section starts here */}
              <CenterColumnWraper>
                <CenterWrapper>
                   <TitleWrapper><Title>NYHETER</Title></TitleWrapper>
                  <CenterFirstRowWrapper>
                        <CenterFirstRow>
                            <CircleImgWrapper>
                                48x48
                            </CircleImgWrapper>
                            <CenterRectangle>
                               230x35
                            </CenterRectangle>
                            <CenterRectangleTwo>
                               100x20
                            </CenterRectangleTwo>
                        </CenterFirstRow>
                        <CenterSecondRow>
                            <CenterSecondRowImg>img 496x200</CenterSecondRowImg>
                            <CenterSecondRowText>Text 496x150</CenterSecondRowText>
                        </CenterSecondRow>
                  </CenterFirstRowWrapper>
                {/** repetition of center column repetion */}
                  <CenterFirstRowWrapper>
                        <CenterFirstRow>
                            <CircleImgWrapper>
                                48x48
                            </CircleImgWrapper>
                            <CenterRectangle>
                               230x35
                            </CenterRectangle>
                            <CenterRectangleTwo>
                               100x20
                            </CenterRectangleTwo>
                        </CenterFirstRow>
                        <CenterSecondRow>
                            <CenterSecondRowImg>img 496x200</CenterSecondRowImg>
                            <CenterSecondRowText>Text 496x150</CenterSecondRowText>
                        </CenterSecondRow>
                  </CenterFirstRowWrapper>
                  <CenterFirstRowWrapper>
                        <CenterFirstRow>
                            <CircleImgWrapper>
                                48x48
                            </CircleImgWrapper>
                            <CenterRectangle>
                               230x35
                            </CenterRectangle>
                            <CenterRectangleTwo>
                               100x20
                            </CenterRectangleTwo>
                        </CenterFirstRow>
                        <CenterSecondRow>
                            <CenterSecondRowImg>img 496x200</CenterSecondRowImg>
                            <CenterSecondRowText>Text 496x150</CenterSecondRowText>
                        </CenterSecondRow>
                  </CenterFirstRowWrapper>
               </CenterWrapper>
             </CenterColumnWraper>    
         {/** end of center section  */}
              {/* Right section */}
              <RightColumnWraper>
                <RightWrapper>
                   <TitleWrapper><Title>JUST NU</Title></TitleWrapper>
                   <RightFirstRowWrapper>
                        <RightFirstRow>
                            <RightCircleImgWrapper>
                                50x50
                            </RightCircleImgWrapper>
                            <Title>
                             Yale cup!
                            </Title>
                        </RightFirstRow>
                        <RightSecondrow>
                           <TextRectangle>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          </TextRectangle> 
                       </RightSecondrow>
                        <ButtonWrapper>
                           <ButtonRight>232x40</ButtonRight>
                        </ButtonWrapper>                            
                  </RightFirstRowWrapper>

                  <RightSecondRowWrapper>
                     <TitleWrapper><Title>Kommande matcher</Title></TitleWrapper>
                        <RectangleBox>
                            272x45
                        </RectangleBox>
                  </RightSecondRowWrapper>

                  <RightSecondRowWrapper>
                     <TitleWrapper><Title>Spelade matcher</Title></TitleWrapper>
                        <RectangleBox>
                            272x45
                        </RectangleBox>
                  </RightSecondRowWrapper>

                  <RightFourthRowWrapper>
                     <RightFourthRow>
                        <RightFourthRowBox>
                            <BoxRectangle>50x50</BoxRectangle>
                            <BoxRectangle>50x50</BoxRectangle>
                        </RightFourthRowBox>
                     </RightFourthRow> 

                     <RightFourthRow>
                        <RightFourthRowBox>
                            <BoxRectangle>50x50</BoxRectangle>
                            <BoxRectangle>50x50</BoxRectangle>
                        </RightFourthRowBox>
                     </RightFourthRow>

                     <RightFourthRow>
                        <RightFourthRowBox>
                            <BoxRectangle>50x50</BoxRectangle>
                            <BoxRectangle>50x50</BoxRectangle>
                        </RightFourthRowBox>
                     </RightFourthRow>
                     
                  </RightFourthRowWrapper>

{/**last row */}
                  <RightFifthRowWrapper>     
                <TitleWrapper><Title>Nytt i forumet </Title></TitleWrapper>
                     <RightFifthRow>
                        <RightCircleImgWrapper>50x50</RightCircleImgWrapper>
                        <BoxFifthRectangle>170x50</BoxFifthRectangle>
                     </RightFifthRow>
                {/**redundent block */}
                      <RightFifthRow>
                        <RightCircleImgWrapper>50x50</RightCircleImgWrapper>
                        <BoxFifthRectangle>170x50</BoxFifthRectangle>
                     </RightFifthRow>

                     <RightFifthRow>
                        <RightCircleImgWrapper>50x50</RightCircleImgWrapper>
                        <BoxFifthRectangle>170x50</BoxFifthRectangle>
                     </RightFifthRow>
                  </RightFifthRowWrapper>
                </RightWrapper>
             </RightColumnWraper>

             
            {/*
              <div className="right-section">
                <div className="right-first-row">
                    <div>JUST NU</div>
                    <div>circle 50x50</div>
                    <div>rectangle 272 x230</div>
                    <div>button 232x40</div>
                </div>
                <div className="right-second-row">
                    <div>Kommande Matcher</div>
                    <div>rectangle 272x45</div>
                </div>
                <div className="right-third-row">
                  <div>Spelad matcher</div>
                  <div>rectangle 272x45</div>
                </div>
                <div className="right-fourth-row">
                   <div className="first-row">
                      <div>rectangle 50x50</div>
                      <div>rectangle 50x50</div>
                        272x210
                   </div>
                   <div className="first-row">
                      <div>rectangle 50x50</div>
                      <div>rectangle 50x50</div>
                        272x210
                   </div>
                   <div className="first-row">
                      <div>rectangle 50x50</div>
                      <div>rectangle 50x50</div>
                        272x210
                   </div>
                </div>
                <div className="right-fifth-row">
                    <div>Nytt i forumet</div>
                    <div className="second-row">
                      <div>circle 50x50</div>
                      <div>rectangle 170x50</div>
                       272x80
                    </div>

                    <div className="second-row">
                      <div>circle 50x50</div>
                      <div>rectangle 170x50</div>
                       272x80
                    </div>

                    <div className="second-row">
                      <div>circle 50x50</div>
                      <div>rectangle 170x50</div>
                       272x80
                    </div>

                </div>
              </div>*/}
               </Wrapper>
            </HomeSectionWrapper>
         );
    }
}
 
export default FragbiteHome;