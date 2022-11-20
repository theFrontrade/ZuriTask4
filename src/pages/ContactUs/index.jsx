import React, { useState } from 'react';
import styles from './styles.module.css';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const ContactUs = () => {
  return (
    <div className={styles.contact_wrap}>
      <Header />
    <div className={styles.contact_first_wrap}>
        <p>Contact Us</p>
        <span>
          Speak with a wide array of service professionals to answer your
          plethora of questions on any subject matter
        </span>
      </div>
      <div className={styles.contact_form_container}>
        <div className={styles.contactus_form_wrap}>
          <div className={styles.contact_text_wrap}>
            {descriptionText.map((item) => (
              <div className={styles.contactus_form_wrap1} key={item.key}>
                <p>{item.header}</p>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <ContactUsForm />
      </div>
      <div className={styles.contact_team_wrap}>
        <p>Teams that excel with DevAsk</p>
        <div className={styles.contact_logo_images}>
          {contactLogo.map((item) => (
            <img key={item.key} src={item.src} alt='img' />
          ))}
        </div>
      </div>
      <ContactMarketing />
      <Footer />
    </div>
  );
};
export default ContactUs;

export const descriptionText = [
  {
    key: 1,
    header: 'Brilliant Coding Experience',
    text: 'Debug as you code with instant reviews to code questions for optimum performance',
  },
  {
    key: 2,
    header: 'Real Time Incident Resolution',
    text: 'Fix incidents faster on  a secure collaborative platform and enhance overall dev performance',
  },
  {
    key: 3,
    header: 'Safe and Secure Platform',
    text: 'Our platform accesses, prioritizes and managies enterprise-wide cyber risk in real time.',
  },
];

export const ContactUsForm = () => {
  const [contactUsForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    businessName: '',
    phoneNumber: '',
    message: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const handleContactSendMessage = (e) => {
    e.preventDefault();
  };
  return (
    <form className={styles.form_wrap} >
      <p>Talk to an Expert</p>
      <input
        name='firstName'
        type='text'
        className={styles.contact_name_input}
        placeholder='First name'
        onChange={handleChange}
        value={contactUsForm.firstName}
      />
      <input
        name='lastName'
        type='text'
        className={styles.contact_name_input}
        placeholder='Last name'
        onChange={handleChange}
        value={contactUsForm.lastName}
      />
      <input
        name='companyName'
        type='text'
        className={styles.contact_name_input}
        placeholder='Company Name'
        onChange={handleChange}
        value={contactUsForm.companyName}
      />
      <input
        name='businessName'
        type='text'
        className={styles.contact_name_input}
        placeholder='Business Name (optional)'
        onChange={handleChange}
        value={contactUsForm.businessName}
      />
      <input
        name='phoneNumber'
        type='text'
        className={styles.contact_name_input}
        placeholder='Phone Number (optional)'
        onChange={handleChange}
        value={contactUsForm.phoneNumber}
      />
      <textarea
        name='message'
        type='textarea'
        className={styles.contact_input_message}
        placeholder='Message'
        onChange={handleChange}
        value={contactUsForm.mesage}
      ></textarea>
      <span>3000 characters remaining</span>
      <button
        id='btn__submit'
        type='submit'
        className={styles.send_message_button}
        onClick={handleContactSendMessage}
      >
        Send Message
      </button>
    </form>
  )
};
const contactLogo = [
  {
    key: 1,
    src: '/img/contact-hng-logo.svg',
  },
  {
    key: 2,
    src: '/img/contact-ingressive-logo.svg',
  },
  {
    key: 3,
    src: '/img/contact-devask-logo.svg',
  },
  {
    key: 4,
    src: '/img/contact-google-logo.svg',
  },
  {
    key: 5,
    src: '/img/contact-genesys-logo.svg',
  },
  {
    key: 6,
    src: '/img/contact-snowflake-logo.svg',
  },
  {
    key: 7,
    src: '/img/contact-purestorage-logo.svg',
  },
  {
    key: 8,
    src: '/img/contact-box-logo.svg',
  },
];
export const ContactMarketing = () => {
  return (
    <div className={styles.contact_marketing_wrap}>
    <div>
      <img src='/img/contact-marketing-img.svg' className={styles.contact_marketing_img} alt='img' />
    </div>
    <div>
      <p className={styles.contact_head_text}>Get in touch with us at Devask</p>
      <span className={styles.contact_sub_text}>
        Here at Devask, we take great delight in responding to enquiries and
        reaching out to our clients. We are here to help you answer any
        questions you might have and we look forward to hear from you.
      </span>
      <br />
      <section className={styles.contact_marketing_text_wrap}>
        <span className={styles.contact_marketing_text_head}>What you get when asking your question</span>
        <ul className={styles.contact_marketing_ul}>
          <li>
            <img src='/img/contact-user-octagon.svg' alt='img' />{' '}
            <span>Response by a qualified professional.</span>
          </li>
          <li>
            <img src='/img/contact-sms-star.svg' alt='img' />{' '}
            <span>An Email Follow up</span>
          </li>
          <li>
            <img src='/img/contact-clock-logo.svg' alt='img' />{' '}
            <span>Less than 24 hours response to your question.</span>
          </li>
        </ul>
        <p>
          Send us an email at{' '}
          <a href='mailto:devask.dev@gmail.com' className={styles.marketing_mail_link}>devask.dev@gmail.com</a>
        </p>
      </section>
    </div>
  </div>
  )
}
