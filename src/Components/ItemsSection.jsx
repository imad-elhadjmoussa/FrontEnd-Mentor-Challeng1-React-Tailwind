import img2 from './../huddle-landing-page-with-alternating-feature-blocks-master/images/illustration-flowing-conversation.svg'
import img1 from './../huddle-landing-page-with-alternating-feature-blocks-master/images/illustration-grow-together.svg'
import img3 from './../huddle-landing-page-with-alternating-feature-blocks-master/images/illustration-your-users.svg'
import React from 'react'
import { Card } from './Card'

export const ItemsSection = () => {
    const items = [
        {
            id: 1,
            img: img1,
            header: "Grow Together",
            text: `Generate meaningful discussions with your audience and build a strong, loyal community. 
                Think of the insightful conversations you miss out on with a feedback form.`
        },
        {
            id: 2,
            img: img2,
            header: "Flowing Conversations",
            text: `You wouldn't paginate a conversation in real life, so why do it online? Our threads 
            have just-in-time loading for a more natural flow.`
        },
        {
            id: 3,
            img: img3,
            header: "Your Users",
            text: `It takes no time at all to integrate Huddle with your app's authentication solution. 
            This means, once signed in to your app, your users can start chatting immediately.`,
        }
    ]
    return (
        <div className='p-16 mb-20 md:p-20'>
            {
                items.map((ele) => {
                    return (
                        <Card
                            key={ele.id}
                            id={ele.id}
                            img={ele.img}
                            header={ele.header}
                            text={ele.text}
                        />
                    )
                })
            }
        </div>
    )
}
