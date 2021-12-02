import React from 'react'

import 
{
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
} from 'react-icons/fa';

import 
{
    FooterContainer,
    FooterWrap,
    FooterMedia,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

function Footer() {
    return (
        
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Sushi</SocialLogo>
                        <SocialIcons>
                                        <SocialIconLink href='/' target="_blank" aira-label="Facebook" rel="noopener noferrer">
                                            <FaFacebook />
                                        </SocialIconLink>
                                        <SocialIconLink href='/' target="_blank" aira-label="Instagram" rel="noopener noferrer">
                                            <FaInstagram />
                                        </SocialIconLink>
                                        <SocialIconLink href='/' target="_blank" aira-label="Youtube" rel="noopener noferrer">
                                            <FaYoutube />
                                        </SocialIconLink>
                                        <SocialIconLink href='/' target="_blank" aira-label="Twitter" rel="noopener noferrer">
                                            <FaTwitter />
                                        </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>

    )
}

export default Footer
