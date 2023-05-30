import React, { useState } from "react"
import styled, { css } from "styled-components"
import about from "../assets/icons/about.jpg"
import mainImg from "../assets/icons/main.jpg"

import { Header } from "../components/atoms/Header"
import DiplomasSection from "../components/molecules/DiplomasSection"
import NavBar from "../components/molecules/MainNavbar"
import PortfolioSection from "../components/molecules/PortfolioSection"


export const Section = styled.section(() => css`
    display: flex;
    flex-direction: row; /*domyślna*/
    align-items: center; /*domyślna stretch*/
    justify-content: center; /*domyślna ?*/
    scroll-margin-top: 55px;
`)

const Content = styled.div(() => css`
    display:flex;
    max-width: 100%;
    box-sizing: border-box;
    padding-left: 3vw;
    padding-right: 3vw;
    gap: 1.5rem;
    flex-wrap: wrap;
`)
const ContentForm = styled.div(() => css`
    max-width: 100%;
    box-sizing: border-box;
    gap: 5vw;
    flex-wrap: wrap;
`)

type ParagraphProps = {
    hoovered?: boolean;
}

export const Paragraph = styled.p<ParagraphProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: ${({ hoovered }) => (hoovered ? '1' : '0')};
    transition: 0.1s;
`

type ImageProps = {
    hoovered?: boolean;
}

const PortfolioImage = styled.img<ImageProps>`
    opacity: ${({ hoovered }) => (hoovered ? '0.1' : '1')};
    transition: 0.3s;
`

const FooterLinks = styled.p(() => css`
    margin: 0;
    a {
        text-decoration: none;
        color: #000;
    }
`)

const InputContainer = styled.input(({ width }) => css`
    border:1px solid black;
    padding:0.5rem;
    margin-bottom:0.5rem;
    font-family:inherit;
    box-sizing:border-box;
    resize: vertical;
    width: ${width};
`)

const TextAreaContainer = styled.textarea(({ width }) => css`
    border:1px solid black;
    padding:0.5rem;
    margin-bottom:0.5rem;
    font-family:inherit;
    width:${width};
    box-sizing:border-box;
    resize: vertical;
`)


const MainPage = (): JSX.Element => {
    const [hoveringID, setHoveringID] = useState(0);
    const handleMouseOver = (id) => {
        setHoveringID(id);
    };
    const handleMouseOut = () => {
        setHoveringID(0);
    };
    return <>
        <NavBar />
        <Section>
            <Content>
                <img src={mainImg} style={{ width: '100%', marginTop: '16vh' }} />
            </Content>
        </Section>
        <Header type='h4' margin='3vh 3rem' scrollMarginTop='12vh' id="diplomas"> DIPLOMAS </Header>
        <DiplomasSection></DiplomasSection>
        <Header type='h4' margin='3vh 3rem' scrollMarginTop='12vh' id="portfolio"> PORTFOLIO </Header>
        <PortfolioSection />
        <Section>
            <div style={{ paddingLeft: '3vw', paddingRight: '3vw', display: 'flex', flexDirection: 'row', boxSizing: 'border-box' }}>
                <div>
                    <h4 id='about' style={{ scrollMarginTop: '12vh' }}> ABOUT </h4>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <PortfolioImage src={about} style={{ flex: '2', height: '70%', maxWidth: '100%', minWidth: '66%' }} />
                        <p style={{ textAlign: 'justify', minWidth: '300px', flex: '1', margin: '0' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Ut faucibus pulvinar elementum integer enim neque volutpat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
        <Section style={{ 'alignItems': 'normal', marginBottom: '30px', flexWrap: 'wrap', paddingLeft: '3vw', paddingRight: '3vw', paddingTop: '10px' }}>
            <ContentForm style={{ flex: '1' }}>
                <Header type='h4'> DANE KONTAKTOWE </Header>
                <FooterLinks> Jędrzej Fiett</FooterLinks>
                <FooterLinks> <a href="callto:XXX XXX XXX">XXX XXX XXX</a></FooterLinks>
                <FooterLinks> <a href="mailto:tempmail@gmail.com">tempmail@gmail.com</a></FooterLinks>
            </ContentForm>
            <ContentForm style={{ flex: '1' }}>
                <Header type='h4'> SOCIAL MEDIA </Header>
                <FooterLinks> <a href="https:facebook.com">facebook</a></FooterLinks>
                <FooterLinks> <a href="instagram.com">instagram</a></FooterLinks>
                <FooterLinks> <a href="twitter.com">twitter</a></FooterLinks>
            </ContentForm>
            <ContentForm style={{ flex: '1' }}>
                <Header type='h4'>SKONTAKTUJ SIĘ ZE MNĄ</Header>
                <form style={{ display: 'flex', flexDirection: 'column' }}>
                    <InputContainer type="text" placeholder="Imię" required></InputContainer>
                    <InputContainer type="text" placeholder="Nazwisko"></InputContainer>
                    <InputContainer type="email" placeholder="E-mail" required></InputContainer>
                    <TextAreaContainer placeholder="Wiadomość" required>Treść wiadomości</TextAreaContainer>
                    <div style={{ display: 'flex', gap: '1vw' }}>
                        <InputContainer width='10vw' type="reset" />
                        <InputContainer width='10vw' type="submit" value="Wyślij" />
                    </div>
                </form>
            </ContentForm>
        </Section>
    </>

}

export default MainPage

