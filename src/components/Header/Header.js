import Link from 'next/link';
import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            marginBottom: 20,
          }}
        >
          <img
            src="/images/brand-logo.png"
            alt="brand-logo"
            className="brand-logo"
          />
          <Span className="brand-name">Manuel Cufré</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li id="nav-projects">
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
        <div className="nav-effect projects"></div>
      </li>
      <li id="nav-tech">
        <Link href="#tech">
          <NavLink>About</NavLink>
        </Link>
        <div className="nav-effect tech"></div>
      </li>
      <li id="nav-contact">
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
        <div className="nav-effect contact"></div>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/ManuC84" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/manuel-cufre/"
        target="_blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
