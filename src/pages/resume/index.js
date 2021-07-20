import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { Layout, SEO as Seo } from '../../components'
import * as Icons from '../../icons'
import {
  StyledModalDownloadIcon,
  StyledCv,
  StyledThinColumn,
  StyledThickColumn,
  StyledProfile,
  StyledImage,
  StyledImagePrint,
  StyledSection,
  StyledItem,
  StyledBorder,
  StyledBorder2,
  StyledTitle,
  StyledProfileText,
  StyledText,
  StyledBoldText,
  StyledItalicText,
  StyledName,
  StyledRole,
  StyledContact,
  StyledContactLink,
  StyledGrid,
  StyledSkill,
  StyledProgressBar,
  StyledLocationIcon,
  StyleSkillText,
} from './styles'

const MAX_SKILL_LEVEL = 5

const Cv = () => {
  const cvData = useStaticQuery(graphql`
    query ResumePageQuery {
      site {
        siteMetadata {
          title
          authorName
          authorRole
        }
      }
      allCvJson {
        edges {
          node {
            name
            role
            intro
            profileImage
            gitAvatarUrl
            contacts {
              label
              icon
              contact
              url
            }
            experience {
              role
              company
              timePeriod
              description
              responsabilities
              technologies
            }
            education {
              institution
              timePeriod
              degree
              description
            }
            skills {
              label
              icon
              level
            }
            otherInfo {
              languages {
                name
                level
              }
            }
          }
        }
      }
      images: allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
      resume: file(name: { eq: "resume" }) {
        publicURL
        name
      }
    }
  `)

  const {
    name,
    role,
    intro,
    profileImage,
    gitAvatarUrl,
    contacts,
    experience,
    education,
    skills,
    otherInfo,
  } = cvData?.allCvJson?.edges[0].node

  const pageImages = cvData.images?.edges
  const resume = cvData.resume
  const profilePhoto = getImage(
    pageImages.find(image => image.node.base === profileImage)?.node
  )

  return (
    <Layout>
      <Seo title='Resume' />
      <StyledCv>
        <StyledModalDownloadIcon
          aria-label='download my CV resume in pdf'
          download
          href={resume?.publicURL}
        >
          <img src={Icons.Download} alt='download icon' /> Download
        </StyledModalDownloadIcon>
        <StyledThinColumn>
          <StyledProfile>
            {/* Fallback image using github avatar for printing purposes; this solution is a workaround
             to overcome the fact that puppeteer (used by gatsby-plugin-pdf) do not load local images for security reasons */}
            <StyledImagePrint src={gitAvatarUrl} />
            <StyledImage
              imgStyle={{ borderRadius: '50%' }}
              image={profilePhoto}
              alt='profile photo'
            />
            <StyledName>{name}</StyledName>
            <StyledRole>{role}</StyledRole>
          </StyledProfile>
          <StyledSection>
            <address>
              {contacts.map(contact => (
                <ContactItem
                  key={`contact-${contact.label}`}
                  contactInfo={contact}
                />
              ))}
            </address>
          </StyledSection>
          <StyledSection>
            <StyledTitle>Profile</StyledTitle>
            <StyledProfileText>{intro}</StyledProfileText>
          </StyledSection>
          <StyledSection>
            <StyledBorder src={Icons.Border} alt='border' />
            <StyledTitle>Education</StyledTitle>
            {education.map(item => (
              <EducationItem
                key={`skill-${item.degree}`}
                educationInfo={item}
              />
            ))}
          </StyledSection>
        </StyledThinColumn>
        <StyledThickColumn>
          <StyledSection>
            <StyledTitle>Experience</StyledTitle>
            <StyledBorder2 src={Icons.Border2} alt='border' />
            {experience.map(item => (
              <ExperienceItem
                key={`experience-${item.company}`}
                experienceInfo={item}
              />
            ))}
          </StyledSection>
          <StyledSection style={{ marginBottom: '0.5rem' }}>
            <StyledTitle>Main Technical Skills</StyledTitle>
            <StyledGrid>
              {skills.map(skill => (
                <Skill key={`skill-${skill.label}`} skill={skill} />
              ))}
            </StyledGrid>
          </StyledSection>
          <StyledSection>
            <StyledTitle>Languages</StyledTitle>
            <StyledGrid style={{ gridRowGap: 0 }}>
              {otherInfo.languages.map(({ name, level }) => (
                <StyledText key={`language-${name}`}>
                  <b>{name}</b>
                  {!!level && ` | ${level}`}
                </StyledText>
              ))}
            </StyledGrid>
          </StyledSection>
        </StyledThickColumn>
      </StyledCv>
    </Layout>
  )
}

const ContactItem = ({ contactInfo: { label, icon, contact, url } }) =>
  !!url ? (
    <StyledContactLink
      key={`contact-${label}`}
      href={url}
      rel='nofollow noopener noreferrer'
    >
      <img src={Icons[icon]} alt={`${label} icon`} />
      <span>{contact}</span>
    </StyledContactLink>
  ) : (
    <StyledContact key={`contact-${label}`}>
      <img src={Icons[icon]} alt={`${label} icon`} />
      <span>{contact}</span>
    </StyledContact>
  )

const ExperienceItem = ({
  experienceInfo: { role, company, timePeriod, description, technologies },
}) => (
  <StyledItem key={`experience-${timePeriod}`}>
    <StyledBoldText>
      <StyledLocationIcon
        src={Icons.Location}
        alt='mark icon'
        style={{
          transform: `rotate(-45deg)`,
        }}
      />
      {role}
    </StyledBoldText>
    <StyledItalicText>{`${company} | ${timePeriod}`}</StyledItalicText>
    {description && <StyledText>{description}</StyledText>}
    {technologies && (
      <StyledText>
        <i>Main technologies: </i>
        {technologies}
      </StyledText>
    )}
  </StyledItem>
)

const EducationItem = ({
  educationInfo: { institution, timePeriod, degree, description },
}) => (
  <StyledItem key={`education-${timePeriod}`}>
    <StyledBoldText>
      <StyledLocationIcon
        src={Icons.Location}
        alt='mark icon'
        style={{
          transform: `rotate(-45deg)`,
        }}
      />
      {degree}
    </StyledBoldText>
    <StyledItalicText>{`${institution} | ${timePeriod}`}</StyledItalicText>
    {description && <StyledText>{description}</StyledText>}
  </StyledItem>
)

const Skill = ({ skill: { label, icon, level } }) => (
  <StyledSkill key={`skill-${label}`}>
    <StyleSkillText>
      <img src={Icons[icon]} alt={`${label} icon`} />
      {label}
    </StyleSkillText>
    <StyledProgressBar
      role='progressbar'
      value={level}
      max={MAX_SKILL_LEVEL}
      aria-valuemin={0}
      aria-valuenow={level}
      aria-valuemax={MAX_SKILL_LEVEL}
    />
  </StyledSkill>
)

ExperienceItem.propTypes = {
  experienceInfo: PropTypes.object,
}

ExperienceItem.defaultProps = {
  experienceInfo: {},
}

EducationItem.propTypes = {
  educationInfo: PropTypes.object,
}

EducationItem.defaultProps = {
  educationInfo: {},
}

Skill.propTypes = {
  skill: PropTypes.object,
}

Skill.defaultProps = {
  skill: {},
}

export default Cv
