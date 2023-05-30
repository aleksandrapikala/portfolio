import React, { useState } from "react";
import styled, { css } from "styled-components";
import dyplom_1 from "../../assets/icons/dyplom_1.jpg";
import dyplom_2 from "../../assets/icons/dyplom_2.jpg";
import { Paragraph, Section } from "../../pages/MainPage";

type ImageProps = {
    hoovered?: boolean;
}

const DiplomImage = styled.img<ImageProps>`
    opacity: ${({ hoovered }) => (hoovered ? '0.1' : '1')};
    transition: 0.3s;
    width: 100%;
`

const ContentWrapper = styled.div(() => css`
    display: flex;
    gap: 1.5rem;
    padding-left: 3vw; 
    padding-right: 3vw;
    flex-wrap: wrap
`)

const BoxWrapper = styled.div(() => css`
    flex: 1 1 500px;
    position: relative; 
    textAlign: center
`)


const DiplomasSection = (): JSX.Element => {
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
                <BoxWrapper>
                    <DiplomImage src={dyplom_1} hoovered={hoveringID === 7 ? true : false} onMouseOver={() => handleMouseOver(7)} onMouseOut={handleMouseOut} />
                    <Paragraph hoovered={hoveringID === 7 ? true : false} onMouseOver={() => handleMouseOver(7)}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Ut faucibus pulvinar elementum integer enim neque volutpat. </Paragraph>
                </BoxWrapper>
                <BoxWrapper>
                    <DiplomImage src={dyplom_2} hoovered={hoveringID === 8 ? true : false} onMouseOver={() => handleMouseOver(8)} onMouseOut={handleMouseOut} />
                    <Paragraph hoovered={hoveringID === 8 ? true : false} onMouseOver={() => handleMouseOver(8)}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Ut faucibus pulvinar elementum integer enim neque volutpat. </Paragraph>
                </BoxWrapper>
            </ContentWrapper>
        </Section>
    </>
}

export default DiplomasSection