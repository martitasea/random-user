import React from 'react';
import PropTypes from 'prop-types';

import ProfileCard from './ProfileCard';
import {Box} from '@material-ui/core';

const AllProfiles = ({profiles}) => {
  return (
    <Box display='flex' justifyContent='center' flexWrap='wrap'>
      {
        profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            gender={profile.gender}
            name={profile.name}
            location={profile.location}
            email={profile.email}
            login={profile.login}
            dob={profile.dob}
            registered={profile.registered}
            phone={profile.phone}
            cell={profile.cell}
            picture={profile.picture}
            nat={profile.nat}
          />
        ))
      }
    </Box>
  );
};

AllProfiles.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.shape({
    gender: PropTypes.string,
    name: PropTypes.shape({
      title: PropTypes.string,
      first: PropTypes.string,
      last: PropTypes.string,
    }),
    location: PropTypes.shape({
      street: PropTypes.shape({
        number: PropTypes.number,
        name: PropTypes.string,
      }),
      city: PropTypes.string,
      state: PropTypes.string,
      country: PropTypes.string,
      postcode: PropTypes.number,
      coordinates: PropTypes.shape({
        latitude: PropTypes.string,
        longitude: PropTypes.string,
      }),
      timezone: PropTypes.shape({
        offset: PropTypes.string,
        description: PropTypes.string,
      }),
    }),
    email: PropTypes.string,
    login: PropTypes.shape({
      username: PropTypes.string,
      password: PropTypes.string,
    }),
    dob: PropTypes.shape({
      date: PropTypes.string,
      age: PropTypes.number,
    }),
    registered: PropTypes.shape({
      date: PropTypes.string,
      age: PropTypes.number,
    }),
    phone: PropTypes.string,
    cell: PropTypes.string,
    picture: PropTypes.shape({
      large: PropTypes.string,
      medium: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
    nat: PropTypes.string
  })
  )
};

export default AllProfiles;