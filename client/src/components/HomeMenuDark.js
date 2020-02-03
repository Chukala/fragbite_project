import React,{Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import Search from '../components/Search';

const MenuSectionWrapper = styled.section `
  width: 100%;
  height: 100px;
  display: flex;
  background: #000;
  justify-content: center;
`;

const MenuWrapper = styled.section `
  width: 1920px;
  height: 100px;
  display: flex;
  background:#22313d;
  flex-flow: row wrap;
  justify-content: space-between;
  @media only screen and(max-width: 768 px) {
      width: 100%;
      position: relative;
  }
`;
const MenuLeft = styled.div`
  width: 60%;
  height: 100px;
  
  @media only screen and(max-width: 768px) {
     
  }
`;
const MenuCenter = styled.div `
  width: 20%;
  height: 100px;
`;
const MenuRight = styled.div `
  width: 20%;
  height: 6.25em;
`;
const MenuUl = styled.ul `
      width: 100%;
      height: 100px;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center;
`;
const MenuLi = styled.li `
      list-style: none;
      padding: 1em; 
`;

class HomeMenuDark extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
         <MenuSectionWrapper>   
            <MenuWrapper>
             <MenuLeft>
               <MenuUl>
                <MenuLi>
                  <Link className="nav-link" to="/"><img src={logo} style={{width:100}} alt="logo" /></Link>
                </MenuLi>
                <MenuLi>
                  <Link className="nav-link" to="#"> FORUM </Link>
                </MenuLi>
                <MenuLi>
                  <Link className="nav-link" to="#"> VIDEO </Link>
                </MenuLi>
                <MenuLi>
                  <Link className="nav-link" to="#"> ARKIV </Link>
                </MenuLi>
                <MenuLi>
                  <Link className="nav-link" to="#"> EVENTS </Link>
                </MenuLi>
                <MenuLi>
                  <Link className="nav-link" to="#"> LIVESTREAM </Link>
                </MenuLi>
                <MenuLi>
                  <Link className="nav-link" to="#"> HJÄLP </Link>
                </MenuLi>
              </MenuUl>
             </MenuLeft> 
             <MenuCenter>
               <MenuUl>
                 <MenuLi>
                    <Search />
                 </MenuLi>
               </MenuUl>       
             </MenuCenter> 
             <MenuRight>
                <MenuUl>
                 <MenuLi>
                   <Link className="nav-link" to="#">Login</Link>  
                 </MenuLi>
               </MenuUl>      
             </MenuRight>          
          </MenuWrapper>
         </MenuSectionWrapper> 
          
        );
    }
}
 
export default HomeMenuDark;