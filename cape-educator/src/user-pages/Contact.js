
import React from 'react'

import UserHeader from '../layouts/user-layout/UserHeader';
import UserFooter from '../layouts/user-layout/UserFooter';
import ContactForm from '../components/ContactForm';
const Contact = () => {
  return (
    <>
      <UserHeader></UserHeader>
      <ContactForm></ContactForm>
      <UserFooter></UserFooter>
    </>
  )
}

export default Contact