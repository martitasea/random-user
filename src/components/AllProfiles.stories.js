import React from 'react';
import AllProfiles from './AllProfiles';

export default {
  title: 'Common/AllProfiles',
  component: AllProfiles
};

const Template = args => <AllProfiles {...args}/>;

export const Default = Template.bind({});
Default.args = {
  profiles :
  [
    {
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
        coordinates: {
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
    },
    {
      gender: 'female',
      name: {
        title: 'Mrs',
        first: 'ستایش',
        last: 'محمدخان'
      },
      location: {
        street: {
          number: 9539,
          name: 'قدس'
        },
        city: 'بابل',
        state: 'البرز',
        country: 'Iran',
        postcode: 93512,
        coordinates: {
          latitude: '33.4248',
          longitude: '128.7501'
        },
        timezone: {
          offset: '+3:30',
          description: 'Tehran'
        }
      },
      email: 'stysh.mhmdkhn@example.com',
      login: {
        uuid: '7979f922-eb11-4163-b187-ec1ecf8d8f61',
        username: 'heavywolf829',
        password: 'kimball',
        salt: 'ReghAm8g',
        md5: 'bb6fc151dd7b284fb7ff9fd766b91ed7',
        sha1: 'cbd362339ff35b3c3833ea6bb55e911552910c34',
        sha256: 'eaddf20bbb1d3e66ed919b6de645ad57bbd0578db4cf0a2e584bad5b16092052'
      },
      dob: {
        date: '1950-10-23T09:49:34.038Z',
        age: 71
      },
      registered: {
        date: '2018-03-24T11:54:25.174Z',
        age: 3
      },
      phone: '095-85931871',
      cell: '0997-979-6123',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/77.jpg',
        Medium: 'https://randomuser.me/api/portraits/med/women/77.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/77.jpg'
      },
      nat: 'IR'
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Hemaxi',
        last: 'da Rocha'
      },
      location: {
        street: {
          number: 9028,
          name: 'Rua São Francisco '
        },
        city: 'Ourinhos',
        state: 'Rio Grande do Norte',
        country: 'Brazil',
        postcode: 87101,
        coordinates: {
          latitude: '68.3088',
          longitude: '97.4846'
        },
        timezone: {
          offset: '0:00',
          description: 'Western Europe Time, London, Lisbon, Casablanca'
        }
      },
      email: 'hemaxi.darocha@example.com',
      login: {
        uuid: '2fcfbe92-4510-4757-ab9b-d99c169e5c18',
        username: 'beautifullion590',
        password: 'ronaldo',
        salt: 'LJWhzI4w',
        md5: 'a41858dae597e261c809200df4611255',
        sha1: '946d033cca21cd2dd8448b8630e310a21bd3050e',
        sha256: '1bf2990e7e4a051c0067ed5f8cd1606e5aa0682da79489e4d21bb9398c80c3c7'
      },
      dob: {
        date: '1992-09-11T10:04:59.457Z',
        age: 29
      },
      registered: {
        date: '2009-10-15T04:04:54.678Z',
        age: 12
      },
      phone: '(69) 0117-6676',
      cell: '(11) 5648-3052',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/92.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/92.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/92.jpg'
      },
      nat: 'BR'
    },
    {
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
        coordinates: {
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
    },
    {
      gender: 'female',
      name: {
        title: 'Mrs',
        first: 'ستایش',
        last: 'محمدخان'
      },
      location: {
        street: {
          number: 9539,
          name: 'قدس'
        },
        city: 'بابل',
        state: 'البرز',
        country: 'Iran',
        postcode: 93512,
        coordinates: {
          latitude: '33.4248',
          longitude: '128.7501'
        },
        timezone: {
          offset: '+3:30',
          description: 'Tehran'
        }
      },
      email: 'stysh.mhmdkhn@example.com',
      login: {
        uuid: '7979f922-eb11-4163-b187-ec1ecf8d8f61',
        username: 'heavywolf829',
        password: 'kimball',
        salt: 'ReghAm8g',
        md5: 'bb6fc151dd7b284fb7ff9fd766b91ed7',
        sha1: 'cbd362339ff35b3c3833ea6bb55e911552910c34',
        sha256: 'eaddf20bbb1d3e66ed919b6de645ad57bbd0578db4cf0a2e584bad5b16092052'
      },
      dob: {
        date: '1950-10-23T09:49:34.038Z',
        age: 71
      },
      registered: {
        date: '2018-03-24T11:54:25.174Z',
        age: 3
      },
      phone: '095-85931871',
      cell: '0997-979-6123',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/77.jpg',
        Medium: 'https://randomuser.me/api/portraits/med/women/77.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/77.jpg'
      },
      nat: 'IR'
    },
    {
      gender: 'male',
      name: {
        title: 'Mr',
        first: 'Hemaxi',
        last: 'da Rocha'
      },
      location: {
        street: {
          number: 9028,
          name: 'Rua São Francisco '
        },
        city: 'Ourinhos',
        state: 'Rio Grande do Norte',
        country: 'Brazil',
        postcode: 87101,
        coordinates: {
          latitude: '68.3088',
          longitude: '97.4846'
        },
        timezone: {
          offset: '0:00',
          description: 'Western Europe Time, London, Lisbon, Casablanca'
        }
      },
      email: 'hemaxi.darocha@example.com',
      login: {
        uuid: '2fcfbe92-4510-4757-ab9b-d99c169e5c18',
        username: 'beautifullion590',
        password: 'ronaldo',
        salt: 'LJWhzI4w',
        md5: 'a41858dae597e261c809200df4611255',
        sha1: '946d033cca21cd2dd8448b8630e310a21bd3050e',
        sha256: '1bf2990e7e4a051c0067ed5f8cd1606e5aa0682da79489e4d21bb9398c80c3c7'
      },
      dob: {
        date: '1992-09-11T10:04:59.457Z',
        age: 29
      },
      registered: {
        date: '2009-10-15T04:04:54.678Z',
        age: 12
      },
      phone: '(69) 0117-6676',
      cell: '(11) 5648-3052',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/92.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/92.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/92.jpg'
      },
      nat: 'BR'
    }
  ],
};