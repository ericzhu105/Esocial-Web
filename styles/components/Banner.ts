import Image from "next/image"
import styled from "styled-components"

type StyledBannerProps = {
    backgroundUrl: string
}

export const StyledBanner = styled.div<StyledBannerProps>`
    min-height: 300px;
    width: 100%;
    margin: 1rem 0;
    padding: 2rem;
    background: ${(props: StyledBannerProps): string =>
        props.backgroundUrl
            ? `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.backgroundUrl})`
            : "#c4c4c4"};
    background-position: center;
    background-size: cover;
    border-radius: 30px;
  `

export const BannerContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `

export const ProfileImage = styled(Image)`
    border-radius: 50%;
  `
export const BannerTextGroup = styled.div`
    margin-left: 1rem;
    color: #fff;
    font-family: 'Poppins', sans-serif;
  
    h1 {
      font-size: 24px;
      margin: 0;
    }
  
    p {
      font-size: 16px;
      margin: 0;
    }
  `
