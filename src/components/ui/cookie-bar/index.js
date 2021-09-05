import React from 'react'
import CookieConsent from 'react-cookie-consent'
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import { useLocation } from '@reach/router'
import { StyledCookieConsentWrapper } from './styles'

const CookieBar = () => {
  const location = useLocation()
  return (
    <StyledCookieConsentWrapper>
      <CookieConsent
        location='bottom'
        buttonText='Accept'
        declineButtonText='Decline'
        enableDeclineButton={true}
        flipButtons={true}
        cookieName='gatsby-gdpr-google-analytics'
        disableStyles={true}
        onAccept={() => initializeAndTrack(location)}
      >
        This website uses cookies 🍪.<br></br>
        These cookies are stored in your browser and exclusively used to collect
        information about how you interact with this website. This information
        is exclusively used to improve and customize your browsing experience
        and for metrics about this website's visitors. <br></br>
        If you decline, your information will not be tracked in this website and
        a cookie will be stored in your browser to register your preferences
      </CookieConsent>
    </StyledCookieConsentWrapper>
  )
}

export default CookieBar
