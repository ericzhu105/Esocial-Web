import React from "react"
import { BannerContent, BannerTextGroup, ProfileImage, StyledBanner } from '@styles/components/Banner'

type BannerProps = {
  title: string
  description: string
  backgroundUrl: string
  profileUrl: string
}

// Uses the Next.js Image component for rendering the profile image
// Using images from a CDN will require a tiny bit more configuration
// https://nextjs.org/docs/api-reference/next/image
export default function Banner({
  title,
  description,
  backgroundUrl,
  profileUrl,
}: BannerProps) {
  return (
    <StyledBanner backgroundUrl={backgroundUrl}>
      <BannerContent>
        <ProfileImage
          src={profileUrl}
          alt="Profile picture for school"
          width={87}
          height={87}
        />
        <BannerTextGroup>
          <h1>{title}</h1>
          <p>{description}</p>
        </BannerTextGroup>
      </BannerContent>
    </StyledBanner>
  )
}
