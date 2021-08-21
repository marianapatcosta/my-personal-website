import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import { StyledSectionTitle } from '../../../themes/global-style'
import { Input, Textarea, Toast } from '../..'
import * as Icons from '../../../icons'
import { TOAST_TYPES } from '../../../constants'
import {
  StyledContacts,
  StyledContactsContent,
  StyledForm,
  StyledTitle,
  StyledFormItems,
  StyledFormItem,
  StyledButton,
  StyledContactLinks,
  StyledContactLinksDesktop,
  StyledContactLink,
} from './styles'

const Contacts = ({ contactsInfo }) => {
  const [toastInfo, setToastInfo] = useState({
    message: '',
    type: '',
  })

  return (
    <StyledContacts id='contacts'>
      <StyledSectionTitle>Contacts</StyledSectionTitle>
      <StyledContactsContent>
        <ContactForm setToastInfo={setToastInfo} />
        <StyledContactLinksDesktop>
          <StyledTitle>&nbsp;</StyledTitle>
          <ContactLinks contactsInfo={contactsInfo} />
        </StyledContactLinksDesktop>
        <StyledContactLinks>
          <ContactLinks contactsInfo={contactsInfo} />
        </StyledContactLinks>
      </StyledContactsContent>
      {toastInfo?.message && <Toast {...toastInfo} onClear={setToastInfo} />}
    </StyledContacts>
  )
}

const ContactForm = ({ setToastInfo }) => {
  const { register, errors, handleSubmit, reset, setValue } = useForm()

  const onSubmit = async data => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }
      const emailjs = await import('emailjs-com')
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      )
      setToastInfo({
        message:
          'Thank you for your message! I will get back to you as soon as possible.',
        type: TOAST_TYPES.SUCCESS,
      })
      reset()
    } catch (error) {
      setToastInfo({
        message: 'Your email could not be sent. Please try again.',
        type: TOAST_TYPES.ALERT,
      })
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
      <StyledTitle>Send me a message</StyledTitle>
      <StyledFormItems>
        <StyledFormItem>
          <Input
            id='name'
            name='name'
            ref={register({
              required: { value: true, message: 'Please enter your name' },
              maxLength: {
                value: 30,
                message: 'Name is limited to 30 characters',
              },
            })}
            placeholder='Name'
            errorText={errors.name?.message}
            icon={Icons.Name}
            setValue={setValue}
          />
        </StyledFormItem>
        <StyledFormItem>
          <Input
            id='email'
            name='email'
            ref={register({
              required: { value: true, message: 'Please enter your email' },
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Please enter a valid email',
              },
            })}
            placeholder='Email'
            errorText={errors.email?.message}
            icon={Icons.Email}
          />
        </StyledFormItem>
      </StyledFormItems>
      <StyledFormItem>
        <Input
          id='subject'
          name='subject'
          ref={register({
            required: { value: true, message: 'Please enter a subject' },
            maxLength: {
              value: 75,
              message: 'Subject is limited to 75 characters',
            },
          })}
          placeholder='Subject'
          errorText={errors.subject?.message}
          icon={Icons.Subject}
        />
      </StyledFormItem>
      <StyledFormItem>
        <Textarea
          id='message'
          name='message'
          ref={register({
            required: { value: true, message: 'Please enter a message' },
          })}
          placeholder='Message'
          errorText={errors.message?.message}
        />
      </StyledFormItem>
      <StyledButton type='submit' label='send' hasShaking icon={Icons.Send} />
    </StyledForm>
  )
}

const ContactLinks = ({ contactsInfo }) =>
  contactsInfo.map(({ node }) => (
    <StyledContactLink
      key={`link-to-${node.label}`}
      url={node.url}
      label={node.label}
      icon={Icons[node.icon]}
      target='_blank'
      rel='nofollow noopener noreferrer'
      aria-label={`find me on ${node.label}`}
    />
  ))

ContactForm.propTypes = {
  setToastInfo: PropTypes.func,
}

ContactForm.defaultProps = {
  setToastInfo: () => null,
}

ContactLinks.propTypes = {
  contactsInfo: PropTypes.array,
}

ContactLinks.defaultProps = {
  contactsInfo: [],
}

Contacts.propTypes = {
  contactsInfo: PropTypes.array,
}

Contacts.defaultProps = {
  contactsInfo: [],
}

export default Contacts
