import React,{Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import Search from '../components/Search';

const MenuWrapper = styled.section `
  background: #2b4052;
  width: 100%;
  height: 80px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
     @media only screen and(max-width: 768px){
     width: 100%;
     position: relative;
    }
`;
const MenuLeft = styled.div`
  width: 60%;
  height: 80px;
  @media only screen and(max-width: 768px) {
     
  }
`;
const MenuCenter = styled.div `
  width: 20%;
  height: 80px;
`;
const MenuRight = styled.div `
  width: 20%;
  height: 5em;
`;
const MenuUl = styled.ul `
      width: 100%;
      height: 80px;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
`;
const MenuLi = styled.li `
      list-style: none;
      padding: 1em; 
`;

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <MenuWrapper>
             <MenuLeft>
               <MenuUl>
                <MenuLi>
                  <Link className="nav-link" to="/"><img src={logo} style={{width:100}} alt="logo" /></Link>
                </MenuLi>
                <MenuLi>
                  <Link className="nav-link" to="#"> FRAGBITEBETTING </Link>
                </MenuLi>
                <MenuLi>
                  <Link className="nav-link" to="#"> SPELTIPS </Link>
                </MenuLi>
                <MenuLi>
                  <Link className="nav-link" to="#"> SPELBOLAG </Link>
                </MenuLi>
                <MenuLi>
                  <Link className="nav-link" to="#"> VIDEO </Link>
                </MenuLi>
                <MenuLi>
                  <Link className="nav-link" to="#"> FRAGILITY </Link>
                </MenuLi>
                <MenuLi>
                  <Link className="nav-link" to="#"> FRAGBITE.SE </Link>
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
          
        );
    }
}
 
export default Menu;