import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

const HeaderSocial = (props) => {
  return (
    <div className='social'>
      <a href='https://www.linkedin.com' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='https://www.github.com' target='_blank'><FaGithub /></a>
      <a href='https://www.dribbble.com' target='_blank'><FiDribbble /></a>
    </div>
  )
}
