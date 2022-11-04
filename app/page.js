'use client';
import Image from 'next/image';
import MemojiPicWaitingPage from '../public/assets/memojis/memoji_1.png'
import variables from '../styles/abstracts/_variables.module.scss'

export default function Page() {
    return(
        <section id='waitScreen' style={{backgroundColor : variables.blackColor}}>
            <div className='inProgress'>
                <Image 
                    src={MemojiPicWaitingPage}
                    alt="my avatar"
                    width={200}
                />
                <h1><span className='gradientEffect'>in dev <br /> comeback soon.. </span></h1>
                <div className="btns">
                    <a  
                        style={{
                            backgroundColor : variables.primaryColor, 
                            color : variables.whiteColor
                        }} 
                        href="https://www.linkedin.com/in/clementduvivier/" 
                        target="_blank"
                    >
                        linkedin
                    </a>
                    <a  
                        style={{
                            backgroundColor : variables.primaryColor, 
                            color : variables.whiteColor
                        }} 
                        href="https://www.github.com/ClemOurs" 
                        target="_blank"
                    >
                        github
                    </a>
                </div>
            </div>
            <footer style={{color : variables.whiteColor}}>Copyright © 2022 Clément Duvivier All rights reserved.</footer>
        </section>
    );
}