import React from 'react'
import { getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { StyledSectionTitle } from '../../../themes/global-style'
import * as Icons from '../../../icons'
import {
  StyledAbout,
  StyledAboutMe,
  StyledSectionMain,
  StyledAboutText,
  StyledAboutPhoto,
  StyledSkills,
  StyledInterests,
  StyledInterestsTitle,
  StyledInterestsContent,
  StyledButton,
} from './styles'

const About = ({
  aboutInfo: { aboutMe, profileImage, skills, onRadar, otherInterests },
  pageImages,
}) => {
  const profilePhoto = getImage(
    pageImages.find(image => image.node.base === profileImage).node
  )

  const handleCvClick = () => navigate('/resume')

  return (
    <StyledAbout id='about'>
      <StyledSectionTitle>About me</StyledSectionTitle>
      <StyledSectionMain>
        <StyledAboutMe>
          <StyledAboutPhoto
            imgStyle={{ borderRadius: '50%' }}
            image={profilePhoto}
            alt='profile photo'
          />
          <StyledAboutText>{aboutMe}</StyledAboutText>
        </StyledAboutMe>
        <StyledSkills>
          <Interests
            interests={skills}
            title='Main skills'
            titleIcon={Icons.Skills}
          />
          <Interests
            interests={onRadar}
            title='Interested in learn more about'
            titleIcon={Icons.Radar}
          />
          <Interests
            interests={otherInterests}
            title='Other interests'
            titleIcon={Icons.Like}
          />
        </StyledSkills>
      </StyledSectionMain>
      <StyledButton label='resume' icon={Icons.Cv} onClick={handleCvClick} />
    </StyledAbout>
  )
}

const Interests = ({ interests, title, titleIcon }) => (
  <StyledInterests>
    <StyledInterestsTitle>
      <img src={titleIcon} alt={`${title} icon`} />
      <h3>{title}</h3>
    </StyledInterestsTitle>
    <StyledInterestsContent>
      {interests.map(({ label, icon }) => (
        <span key={`interests-${label}`}>
          <img src={Icons[icon]} alt={`${label} icon`} />
          <span>{label}</span>
        </span>
      ))}
    </StyledInterestsContent>
  </StyledInterests>
)

Interests.propTypes = {
  interests: PropTypes.arrayOf(Object),
  title: PropTypes.string,
  titleIcon: PropTypes.string,
}

Interests.defaultProps = {
  interests: [],
  title: '',
  titleIcon: '',
}

About.propTypes = {
  aboutInfo: PropTypes.object,
  cvInfo: PropTypes.object,
  pageImages: PropTypes.array,
}

About.defaultProps = {
  aboutInfo: {},
  cvInfo: {},
  pageImages: [],
}

export default About
