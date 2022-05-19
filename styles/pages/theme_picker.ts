import styled from "styled-components";

export const ThemeChoicesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;

    @media (orientation: portrait) {
    flex-direction: column;
    margin-top: 0;
    }
`;

export const ThemeChoiceWrapper = styled.div`
    display: inline-table;
    margin-left: auto;
    margin-right: auto;
`;

export const ThemeChoiceBorder = styled.div`
    width: 106%;
    height: 107%;
    top: -4%;
    left: -3%;
    position: absolute;
    border: ${props => props.theme.main};
    border-radius: 20px;
    box-shadow: ${props => props.theme.shadow};
    z-index: -1;
    transition: all 0.35s;
`;

export const ThemeChoice = styled.div`
    position: relative;
    margin: 15px;

    &:hover {
        cursor: pointer;
    }

    &:hover ${ThemeChoiceBorder} {
        border: ${props => props.theme.hover};
    }
`;

export const ContinueButton = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 8vh;
    height: 70px;
    width: 320px;
    font-size: 36px;
    font-family: Poppins;
    color: white;
    justify-content: center;
    align-items: center;
    background: #FF3E3E;
    border-radius: 20px;
    transition: all 0.35s;

    &:hover {
        cursor: pointer;
        background: #db2323;
    }
`;

export const ThemePickerHeader = styled.h1`
    font-family: Poppins;
    font-weight: bold;
    font-size: 5vh;
`;

export const ThemePickerSubtitle = styled.h3`
    font-family: Poppins;
    font-size: 2.5vh;
`;

export const Spacer3vh = styled.div`
    height: 3vh;
`;

export const Spacer5vh = styled.div`
    height: 5vh;
`;

export const Spacer10vh = styled.div`
    height: 10vh;
`;