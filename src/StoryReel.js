import React from 'react'
import './StoryReel.css'
import Story from './Story'
import Sefie from './Sefie.png'
import Background from './Background.jpg'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story image={Background} profileSrc={Sefie} title='Yihan Jiang'></Story>
            <Story image={Background} profileSrc={Sefie} title='Yihan Jiang'></Story>
            <Story image={Background} profileSrc={Sefie} title='Yihan Jiang'></Story>
            <Story image={Background} profileSrc={Sefie} title='Yihan Jiang'></Story>


        </div>
    )
}

export default StoryReel
