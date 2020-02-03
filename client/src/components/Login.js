import React, { Component } from 'react';
import styled from 'styled-components';

const LoginSectionWrapper = styled.section ` 
      width: 100%;
      height: auto;
      background: #f3f3f3;
      padding: 2rem;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
 `;
const LoginWrapper = styled.div `
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
const SubTitleWrapper = styled.div `
     padding: 1em;
     display: flex;
     padding: 1em;
     flex-flow: row wrap;
     justify-content: center;
     align-items: center;
`;
const Input = styled.input `
  width: 90%;
  padding: 0.5em;
  margin: 1em;
  color: #333;
  background: #f4f4f4;
  border: none;
  border-radius: 3px;
`;
const Button = styled.button `
  width: 90%;
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  border-radius: 3px;
  color: #333;
  border: 1px solid #f3f3f3;
  outline: none;
`;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.inputRef = React.createRef();
    }
    render() { 
        return ( 
            <LoginSectionWrapper>
            <LoginWrapper>
                <TitleWrapper>
                    <Title>Login</Title>
                </TitleWrapper>
                <SubTitleWrapper>
                    <div><SubTitle>Login</SubTitle></div>
                    <div><SubTitle>Register</SubTitle></div>
                    <div><SubTitle>Glömt lösnord</SubTitle></div>
                </SubTitleWrapper>
                <TitleWrapper>
                  <SubTitleWrapper>
                     <div><Button><SubTitle>Ansulut med Facebook</SubTitle></Button></div>
                     <div><Button><SubTitle>Ansulut med Faceit</SubTitle></Button></div>
                   </SubTitleWrapper>
                </TitleWrapper>
                <SubTitleWrapper><h3>Eller</h3></SubTitleWrapper>
                <form id="login-form">
                 <div className="login-input-wrapper">
                 <Input type="text"
                        ref={this.inputRef}
                        placeholder="Användarnamen"
                        onMouseEnter={() => { this.inputRef.current.focus() }}
                  />

                 <Input type="text"
                        ref={this.inputRef}
                        placeholder="Lösnorde"
                        onMouseEnter={() => { this.inputRef.current.focus() }}
                 />
                 <Button type="submit">Login</Button>
                 </div>
                </form>  
            </LoginWrapper>
            </LoginSectionWrapper>
         );
    }
}
 
export default Login;