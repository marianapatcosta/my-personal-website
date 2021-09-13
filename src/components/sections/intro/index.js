import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getImage } from 'gatsby-plugin-image'
import { useTheme } from 'styled-components'
import useTypeWriter from '../../../hooks/useTypewriter'
import { Toast } from '../..'
import * as Icons from '../../../icons'
import { PARTICLES_PRESETS, TOAST_TYPES } from '../../../constants'
import {
  StyledIntro,
  StyledIntroContentWrapper,
  StyledIntroContent,
  StyledText,
  StyledHello,
  StyledHand,
  StyledTitle,
  StyledSubtitle,
  StyledPhotoWrapper,
  StyledPhoto,
  StyledLinks,
  StyledLink,
  StyledShare,
  StyledParticles,
} from './styles'

const Intro = ({ authorName, authorRole, contactsInfo, introImages }) => {
  const contacts = contactsInfo.filter(({ node }) => node.label !== 'Email')
  const photos = introImages.sort((photoA, photoB) =>
    photoA.node.base < photoB.node.base ? -1 : 1
  )
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0)
  const [toastInfo, setToastInfo] = useState({
    message: '',
    type: '',
  })

  const theme = useTheme()

  const name = useTypeWriter(`I'm ${authorName}`)
  const role = useTypeWriter(authorRole, 4000)

  useEffect(() => {
    let timer
    if (selectedPhotoIndex >= photos.length - 1) {
      return clearTimeout(timer)
    }
    timer = setTimeout(
      () => setSelectedPhotoIndex(prevIndex => prevIndex + 1),
      1000
    )

    return () => clearTimeout(timer)
  }, [selectedPhotoIndex, photos])

  const handleShareClick = async () => {
    if (typeof navigator !== 'undefined' && !navigator.share) return
    const shareData = {
      title: "Check it out Mariana Costa's Personal Website!",
      text: "This is Mariana Costa's Personal Website",
      url: 'https://mariana-costa.web.app',
    }

    try {
      await navigator.share(shareData)
    } catch (error) {
      setToastInfo({
        message:
          'There was a error while trying to share this site. Please try again.',
        type: TOAST_TYPES.ALERT,
      })
    }
  }

  return (
    <StyledIntro id='intro'>
      <StyledParticles params={PARTICLES_PRESETS.bubbles(theme)} />
      <StyledIntroContentWrapper>
        <StyledIntroContent>
          <StyledText>
            <StyledHello>
              Hello World!
              <StyledHand>
                <span role='img' aria-label='waving-hand'>
                  👋
                </span>
              </StyledHand>
            </StyledHello>
            <StyledTitle stringLength={authorName.length}>{name}</StyledTitle>
            <StyledSubtitle
              delay={authorName.length + 3}
              stringLength={authorRole.length}
            >
              {role}
            </StyledSubtitle>
          </StyledText>
          <StyledPhotoWrapper>
            <StyledPhoto
              imgStyle={{
                objectFit: 'contain',
              }}
              image={getImage(photos[selectedPhotoIndex].node)}
              alt='selected intro image'
            />
          </StyledPhotoWrapper>
        </StyledIntroContent>
      </StyledIntroContentWrapper>
      <StyledLinks>
        {contacts.map(({ node }) => (
          <StyledLink
            key={`link-to-${node.label}`}
            href={node.url}
            target='_blank'
            rel='nofollow noopener noreferrer'
            aria-label={`find me on ${node.label}`}
          >
            <img src={Icons[node.icon]} alt={`${node.label} icon`} />
          </StyledLink>
        ))}
        {typeof navigator !== 'undefined' && navigator.share && (
          <StyledShare
            onClick={handleShareClick}
            aria-label={`click to share my portoólio`}
          >
            <img src={Icons.Share} alt='share icon' />
          </StyledShare>
        )}
      </StyledLinks>
      {toastInfo?.message && <Toast {...toastInfo} onClear={setToastInfo} />}
    </StyledIntro>
  )
}

Intro.propTypes = {
  authorName: PropTypes.string,
  authorRole: PropTypes.string,
  contactsInfo: PropTypes.array,
  pageImages: PropTypes.array,
}

Intro.defaultProps = {
  authorName: ``,
  authorRole: ``,
  contactsInfo: [],
  pageImages: [],
}

export default Intro
