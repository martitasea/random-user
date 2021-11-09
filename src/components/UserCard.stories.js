import React from 'react';
import UserCard from './UserCard';

export default {
  title: 'Common/UserCard',
  component: UserCard
};

const Template = args => <UserCard {...args}/>;

export const Default = Template.bind({});
Default.args = {
  gender: 'female',
  name: {
    title: 'Ms',
    first: 'Eusébia',
    last: 'Rezende',
  },
  location: {
    street: {
      number: 2038,
      name: 'Rua Paraná',
    },
    city: 'Colombo',
    state: 'Sao Paulo',
    country: 'Brazil',
    postcode: 7579,
    coordinates:{
      latitude: '-77.9074',
      longitude: '88.6356',
    },
    timezone: {
      offset: '-1:00',
      description: 'Brussels, Copenhagen, Madrid, Paris',
    },
  },
  email: 'eusebia.rezende@example.com',
  login: {
    username: 'crazypanda695',
    password: 'bigguns',
  },
  dob: {
    date: '1952-02-13T15:32:17.381Z',
    age: 69,
  },
  registered: {
    date: '2012-04-28T01:28:51.144Z',
    age: 9,
  },
  phone: '(48) 7990-7952',
  cell: '(81) 0923-5348',
  picture: {
    large: 'https://randomuser.me/api/portraits/women/6.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/6.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/6.jpg',
  },
  nat: 'BR'
};