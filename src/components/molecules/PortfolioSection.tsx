import React, { useState } from "react";
import styled, { css } from "styled-components";
import portfolio_1 from "../../assets/icons/portfolio_1.jpg";
import portfolio_2 from "../../assets/icons/portfolio_2.jpg";
import portfolio_3 from "../../assets/icons/portfolio_3.jpg";
import portfolio_4 from "../../assets/icons/portfolio_4.jpg";
import portfolio_5 from "../../assets/icons/portfolio_5.jpg";
import portfolio_6 from "../../assets/icons/portfolio_6.jpg";
import { Paragraph, Section } from "../../pages/MainPage";

type ImageProps = {
    hoovered?: boolean;
}

const PortfolioImage = styled.img<ImageProps>`
    opacity: ${({ hoovered }) => (hoovered ? '0.1' : '1')};
    transition: 0.3s;
`

const ContentWrapper = styled.div(() => css`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(350px, 1fr));
    gap: 1.5rem;
    padding-left: 3vw; 
    padding-right: 3vw;
`)

const BoxWrapper = styled.div(() => css`
    flex: 1 1 400px; 
    position: relative; 
    cursor: pointer;
    text-align: center
`)


const PortfolioSection = (): JSX.Element => {
    const [hoveringID, setHoveringID] = useState(0);
    const handleMouseOver = (id) => {
        setHoveringID(id);
    };
    const handleMouseOut = () => {
        setHoveringID(0);
    };

    return <>
        <Section>
            <ContentWrapper>
                <BoxWrapper onMouseOver={() => handleMouseOver(1)} onMouseOut={handleMouseOut}>
                    <PortfolioImage src={portfolio_2} style={{ width: '100%', height: '100%' }} hoovered={hoveringID === 1 ? true : false} />
                    <Paragraph hoovered={hoveringID === 1 ? true : false} onMouseOver={() => handleMouseOver(1)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Ut faucibus pulvinar elementum integer enim neque volutpat.</Paragraph>
                </BoxWrapper>
                <BoxWrapper onMouseOver={() => handleMouseOver(2)} onMouseOut={handleMouseOut}>
                    <PortfolioImage src={portfolio_3} style={{ width: '100%', height: '100%' }} hoovered={hoveringID === 2 ? true : false} />
                    <Paragraph hoovered={hoveringID === 2 ? true : false} onMouseOver={() => handleMouseOver(2)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Ut faucibus pulvinar elementum integer enim neque volutpat.</Paragraph>
                </BoxWrapper>
                <BoxWrapper onMouseOver={() => handleMouseOver(3)} onMouseOut={handleMouseOut}>
                    <PortfolioImage src={portfolio_6} style={{ width: '100%', height: '100%' }} hoovered={hoveringID === 3 ? true : false} />
                    <Paragraph hoovered={hoveringID === 3 ? true : false} onMouseOver={() => handleMouseOver(3)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Ut faucibus pulvinar elementum integer enim neque volutpat.</Paragraph>
                </BoxWrapper>
                <BoxWrapper onMouseOver={() => handleMouseOver(4)} onMouseOut={handleMouseOut}>
                    <PortfolioImage src={portfolio_4} style={{ width: '100%', height: '100%' }} hoovered={hoveringID === 4 ? true : false} />
                    <Paragraph hoovered={hoveringID === 4 ? true : false} onMouseOver={() => handleMouseOver(4)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Ut faucibus pulvinar elementum integer enim neque volutpat.</Paragraph>
                </BoxWrapper>
                <BoxWrapper onMouseOver={() => handleMouseOver(5)} onMouseOut={handleMouseOut}>
                    <PortfolioImage src={portfolio_5} style={{ width: '100%', height: '100%' }} hoovered={hoveringID === 5 ? true : false} />
                    <Paragraph hoovered={hoveringID === 5 ? true : false} onMouseOver={() => handleMouseOver(5)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Ut faucibus pulvinar elementum integer enim neque volutpat.</Paragraph>
                </BoxWrapper>
                <BoxWrapper onMouseOver={() => handleMouseOver(6)} onMouseOut={handleMouseOut}>
                    <PortfolioImage src={portfolio_1} style={{ width: '100%', height: '100%' }} hoovered={hoveringID === 6 ? true : false} />
                    <Paragraph hoovered={hoveringID === 6 ? true : false} onMouseOver={() => handleMouseOver(6)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Ut faucibus pulvinar elementum integer enim neque volutpat.</Paragraph>
                </BoxWrapper>
            </ContentWrapper>
        </Section>
    </>
}

export default PortfolioSection