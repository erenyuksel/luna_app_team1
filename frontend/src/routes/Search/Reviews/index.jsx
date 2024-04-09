import React from 'react'
import { GridContainer } from '../../../styles'
import ReviewCard from './ReviewCard';

function ReviewsList() {

    const users = [
        {
          id: 1,
          photoUrl: 'https://randomuser.me/api/portraits/men/90.jpg',
          name: 'James Peterson',
          reviewsCount: 34,
          about: 'A software developer with a passion for exploring new cuisines and critiquing restaurants.',
          review: 'Visiting this place was a real revelation. Cozy atmosphere, polite staff, and, of course, the dishes that were a fusion of innovation and classic tastes left me impressed. Definitely a gem for those looking for an extraordinary culinary experience.'
        },
        {
          id: 2,
          photoUrl: 'https://randomuser.me/api/portraits/men/84.jpg',
          name: 'Ethan Murray',
          reviewsCount: 21,
          about: 'Front-end guru, loves to combine coding marathons with culinary adventures.',
          review: 'This restaurant offers a perfect blend of ambiance and exquisite cuisine. Their commitment to sustainable sourcing is evident in the freshness of their ingredients. A must-visit for any food lover.'
        },
        {
          id: 3,
          photoUrl: 'https://randomuser.me/api/portraits/men/62.jpg',
          name: 'Carlos Howard',
          reviewsCount: 45,
          about: 'Backend developer who appreciates the art of fine dining and the science of a well-crafted meal.',
          review: 'An epicurean delight! The chef’s ability to create a symphony of flavors while maintaining a minimalist approach is nothing short of genius. Every dish tells a story, making each bite a memorable one.'
        },
        {
          id: 4,
          photoUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
          name: 'Daniel Smith',
          reviewsCount: 12,
          about: 'Full-stack developer and amateur chef, enjoys reviewing restaurants for tech meetups.',
          review: 'Great spot for tech meetups, with a menu that caters to a wide array of tastes and dietary requirements. The fusion tacos are a must-try. It’s the kind of place where you can relax, eat well, and brainstorm your next big project.'
        },
        {
          id: 5,
          photoUrl: 'https://randomuser.me/api/portraits/lego/8.jpg',
          name: 'Lego Bob',
          reviewsCount: 58,
          about: 'Code enthusiast in the day, gourmet critic by night. Yes, legos can appreciate good food too.',
          review: 'Who said legos can’t enjoy gourmet food? This restaurant blew my expectations out of the water with its creative presentations and flavors that playfully combine tradition and innovation. A visual and gustatory feast!'
        },
        {
          id: 6,
          photoUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
          name: 'Emma Wilson',
          reviewsCount: 30,
          about: 'Cloud engineer with a penchant for discovering hidden restaurant gems and sharing them.',
          review: 'I stumbled upon this hidden gem while exploring the city, and what a find it was! The intimate setting and personalized service made the dining experience uniquely delightful. The chef’s specials are something not to be missed.'
        },
        {
          id: 7,
          photoUrl: 'https://randomuser.me/api/portraits/women/23.jpg',
          name: 'Sophia Johnson',
          reviewsCount: 27,
          about: 'Mobile app developer who loves to explore local eateries and write detailed reviews.',
          review: 'A local eatery that truly understands the essence of farm-to-table dining. The seasonal menu highlights the best of local produce, and the innovative dishes are both comforting and exciting. A true testament to the local culinary scene.'
        },
        {
          id: 8,
          photoUrl: 'https://randomuser.me/api/portraits/women/64.jpg',
          name: 'Olivia Lee',
          reviewsCount: 33,
          about: 'Data scientist that enjoys breaking down complex flavors as much as complex data sets.',
          review: 'This restaurant is like a data set of flavors waiting to be analyzed. The complexity of their dishes, with multiple layers of tastes and textures, provides a fascinating culinary exploration. It’s a place where food meets science in the most delicious way.'
        },
        {
          id: 9,
          photoUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
          name: 'Ava Taylor',
          reviewsCount: 18,
          about: 'Game developer with a knack for comparing game design and the culinary arts in her reviews.',
          review: 'Just as a well-designed game can be immersive and engaging, so can a meal at this restaurant. The creativity of the dishes, paired with the ambiance, offers an experience that’s both innovative and deeply satisfying. Highly recommended for those who appreciate the art of food.'
        }
      ];

  return (
    <GridContainer>
        {users.map((user) => (
          <ReviewCard key={user.id} user={user} />
        ))}
    </GridContainer>
  )
}

export default ReviewsList
