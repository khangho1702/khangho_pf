import React from 'react';
import {GITHUB_USERNAME, RESUME_PATH} from '../root.link';

const Header = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 p-4 bg-cyan-300/5 backdrop-blur-sm shadow-md'>
      <ul className='flex flex-row items-center justify-center space-x-4 md:space-x-10 md:text-xl font-thin'>
        <li>
          <a href='#Experience' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Education
          </a>
        </li>
        <li>
          <a href='#Projects' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Projects
          </a>
        </li>
        <li>
          <a href='#Skill' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Skill
          </a>
        </li>
        <li>
          <a href='#contact' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Contact
          </a>
        </li>
        
        <li>
          <a href={`https://github.com/${GITHUB_USERNAME}`} target='_blank' rel='noreferrer' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
