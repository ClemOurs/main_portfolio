import Link from 'next/link';
import Image from 'next/image';
import MemojiPic from '../public/assets/memojis/memoji_3.png';

import variables from '../styles/abstracts/_variables.module.scss';

const Nav = () => {
    return (
        <header id='header' style={{backgroundColor : variables.bgDarkColor}}>
            <nav>
                <Link href="/">
                    <Image 
                        src={MemojiPic}
                        width={30}
                        alt="Memoji of me"
                    />
                </Link>
                <ul>
                    <li>
                        <Link style={{color : variables.whiteColor}} href='/about'>about me</Link>
                    </li>
                    <li>
                        <Link style={{color : variables.whiteColor}} href='/projects'>projects</Link>
                    </li>
                    <li>
                        <Link style={{color : variables.whiteColor}} href='/experiences'>experiences</Link>
                    </li>
                    <li>
                        <Link style={{color : variables.whiteColor}} href='/contact'>contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;