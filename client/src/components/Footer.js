import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram,faTwitch } from '@fortawesome/free-brands-svg-icons' 
library.add(faFacebookF, faInstagram,faTwitch,faTwitter);


const FooterSection = styled.section`
      width: 100%;
      height: 20rem;
      background: #383838;
      display: flex;
      justify-content: center;
      align-items: center;
      @media only screen and (max-width: 768px){
           width: 100%;
           height: auto;
      }
`;
const FooterWrapper = styled.div `
      width: 80%;
      height: auto;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
       @media only screen and (max-width: 768px){
           width: 100%;
           display: flex;
           flex-flow: column wrap;
           margin: 1em;
           padding: 1em;
    }
`;
/**
 * This a repeate styled component from login
 */
const Title = styled.h2 `
  font-size: 1em;
  text-align: left;
  color: #FFF;
`;
const TitleWrapper = styled.div `
  padding: 1em 0em;
  text-align: left;  
`;
const FooterColumn = styled.div `
     width: 20%;
     height: 100%;
     display: flex;
     flex-flow: column wrap;
     justify-content: flex-start;
     text-align: left;
     @media only screen and (max-width: 768px){
         width: 100%;
         height: auto;
         padding: 0.5em;
    }
`;
const SocialMediaIcon = styled.div `
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      
`;

 const Footer = () => {
    return (
        <FooterSection>
            <FooterWrapper>
                <FooterColumn>
                    <TitleWrapper>
                        <Title>Information</Title>
                    </TitleWrapper>
                    <Link to="#" className="nav-link">Annonsering</Link>
                    <Link to="#" className="nav-link">Använder avtal</Link>
                    <Link to="#" className="nav-link">Cookies</Link>
                    <Link to="#" className="nav-link">Kontakt</Link>
                </FooterColumn>
             <FooterColumn>
                 
                 <TitleWrapper>
                     <Title>Om Fragbite</Title>
                 </TitleWrapper>
                  <Link to="#" className="nav-link">fragbite</Link>
                  <Link to="#" className="nav-link">fragbiteBetting</Link>
                  <Link to="#" className="nav-link">Yalecup</Link>
                  <Link to="#" className="nav-link">fragleagu</Link>
             </FooterColumn>
             <FooterColumn>
                 <TitleWrapper>
                     <Title>Account</Title>
                 </TitleWrapper>
                  <Link to="#" className="nav-link">Login</Link>
                  <Link to="#" className="nav-link">Register</Link>
                  <Link to="#" className="nav-link">Copyright</Link>
             </FooterColumn>

             <FooterColumn>
                  <TitleWrapper>
                     <Title>Följa oss</Title>
                 </TitleWrapper>
                 <SocialMediaIcon>
                  <Link to="#" className="nav-link"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></Link>
                  <Link to="#" className="nav-link"><FontAwesomeIcon icon={['fab', 'twitter']} /></Link>
                  <Link to="#" className="nav-link"><FontAwesomeIcon icon={['fab', 'instagram']} /></Link>
                  <Link to="#" className="nav-link"><FontAwesomeIcon icon={['fab', 'twitch']} /></Link>
                </SocialMediaIcon>
             </FooterColumn>

            </FooterWrapper>
        </FooterSection>
    )
}

export default Footer;