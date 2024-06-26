import React from 'react';
import './header.css';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='text-n-links'>
                <div className='text-cotainer'>
                    <h1>Khawla Zahi</h1>
                    <h2>Front-end Developer & UI/UX Designer</h2>
                    <p>I build elegant and user friendy interfaces <br /> for the web and what's beyond</p>
                </div>

                <div className='links'>
                    <Link activeClass='active' to='About' spy={true} smooth={true} offset={-100} className='menu-item'>About</Link>
                    <Link activeClass='active' to='Experiance' spy={true} smooth={true} offset={-60} className='menu-item'>Experience</Link>
                    <Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-10} className='menu-item'>Projects</Link>
                    <Link activeClass='active' to='zahikhawla20@gmail.com' onClick={(e) => { window.location.href = 'mailto:zahikhawla20@gmail.com'; }} spy={true} smooth={true} offset={-100} className='menu-item'>Contact</Link>
                </div>
            </div>
            <div className='social-links'>
                <a href="https://github.com/khawla-14/"><i class="fa-brands fa-github    fa-xl"></i></a>
                <a href="https://www.instagram.com/khawla_info/"><i class="fa-brands fa-instagram fa-xl"></i></a>
                <a href="https://www.linkedin.com/in/khawlazhi/"><i class="fa-brands fa-linkedin  fa-xl"></i></a>
                <a href="https://twitter.com/khawla_zhi"><i class="fa-brands fa-twitter   fa-xl"></i></a>
            </div>

        </div>
    )
}

export default Header
