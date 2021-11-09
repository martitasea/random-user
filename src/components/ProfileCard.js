import React from 'react';
import PropTypes from 'prop-types';

import {makeStyles} from '@material-ui/core/styles';
import {
  Accordion, AccordionDetails,
  AccordionSummary,
  Avatar, Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography
} from '@material-ui/core';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import MapIcon from '@material-ui/icons/Map';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import FaceIcon from '@material-ui/icons/Face';
import AddIcon from '@material-ui/icons/Add';
import FlagIcon from '@material-ui/icons/Flag';
import CakeIcon from '@material-ui/icons/Cake';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import EventIcon from '@material-ui/icons/Event';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const useStyles = makeStyles( {
  card: {
    height: 480,
    width: 376,
    margin: 16,
    position: 'relative'
  },
  cardMedia: {
    paddingTop: 250,
    height: 200
  },
  genderContent: {
    position: 'absolute',
    top: 16,
    right: 16
  },
  coordinatesContent: {
    backgroundColor: 'white',
    opacity: 0.75,
    padding: 4,
    margin: 0,
    position: 'absolute',
    top: 300,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  timeContent: {
    width: 100,
    backgroundColor: 'white',
    border: '2px solid black',
    borderRadius: 4,
    opacity: 0.75,
    marginLeft: 6,
    padding: '2px 8px',
    position: 'absolute',
    top: 80,
    left: 0,
    display: 'flex',
    justifyContent: 'center'
  },
  row: {
    display: 'flex',
    margin: '8px 0px',
  },
  icon: {
    marginRight: 10,
    paddingBottom: 4,
  },
  iconSecondary: {
    marginRight: 10,
    paddingBottom: 4,
    color: 'grey'
  },
  accordionSummary: {
    fontWeight: 'bolder'
  },
  accordionDetails: {
    border: '1px solid lightgrey',
    borderRadius: '4px'
  },
  typographyData: {
    color: 'grey'
  }
});

const ProfileCard = ({gender, name, location, email, login, dob, registered, phone, cell, picture, nat}) => {
  const classes = useStyles();

  const userHour = parseInt(location.timezone.offset.slice(0,2));
  const hour = new Date().getHours()+userHour;
  const minutes = new Date().getMinutes().toString().length === 2 ? new Date().getMinutes() : `0${new Date().getMinutes()}`;

  return <Card className={classes.card}>
    <CardHeader
      avatar={
        <Avatar aria-label="user" src={picture.thumbnail}/>
      }
      title={`${name.title} ${name.first} ${name.last}`}
      subheader={`${location.state} ${location.country.toUpperCase()}`}
    />
    <CardMedia
      className={classes.cardMedia}
      image='https://media.istockphoto.com/vectors/city-street-map-vector-id1095421732?k=20&m=1095421732&s=612x612&w=0&h=6wRJMyaM76R-UXvtjcKbmfuCSRxl-33apOVK5OiJVT8='
      title='Location-map'
    />
    <CardContent>
      <div className={classes.genderContent}>
        <FaceIcon fontSize='large' color={gender === 'female' ? 'primary' : 'secondary'}/>
      </div>
      <div className={classes.coordinatesContent}>
        <Typography variant='caption'>{`${location.coordinates.latitude}, ${location.coordinates.longitude}`}</Typography>
      </div>
      <div className={classes.timeContent}>
        <AccessAlarmsIcon/>
        <Typography variant='h5'>{`${hour}:${minutes}`}</Typography>
      </div>
      <Accordion elevation={0}>
        <AccordionSummary expandIcon={<AddIcon />} className={classes.accordionSummary}>
          <PersonIcon className={classes.icon}/>
          <Typography>PERFIL</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Box display='flex' flexDirection='column'>
            <Box display='flex'>
              <Box display='flex' my={1}>
                <FlagIcon className={classes.iconSecondary}/>
                <Typography className={classes.typographyData}>{nat}</Typography>
              </Box>
              <Box display='flex' my={1}>
                <CakeIcon className={classes.iconSecondary}/>
                <Typography className={classes.typographyData}>{`${dob.date.slice(0,10)} (${dob.age} años)`}</Typography>
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary expandIcon={<AddIcon />}>
          <PhoneIcon className={classes.icon}/>
          <Typography>CONTACTO</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Box display='flex' flexDirection='column' justifyContent='flex-start'>
            <Box display='flex' my={1}>
              <MapIcon className={classes.iconSecondary}/>
              <Box display='flex' flexDirection='column'>
                <Typography className={classes.typographyData}>{`${location.street.name} ${location.street.number}`}</Typography>
                <Typography className={classes.typographyData}>{`${location.postcode} ${location.city}`}</Typography>
                <Typography className={classes.typographyData}>{`${location.state} ${location.country}`}</Typography>
              </Box>
            </Box>
            <Box display='flex' justifyContent='space-between'>
              <Box display='flex' my={1}>
                <PhoneIcon className={classes.iconSecondary}/>
                <Typography className={classes.typographyData}>{phone}</Typography>
              </Box>
              <Box display='flex' my={1}>
                <PhoneAndroidIcon className={classes.iconSecondary}/>
                <Typography className={classes.typographyData}>{cell}</Typography>
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion elevation={0}>
        <AccordionSummary expandIcon={<AddIcon />}>
          <LockOpenIcon className={classes.icon}/>
          <Typography>REGISTRO</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <Box display='flex' flexDirection='column'>
            <Box display='flex' my={1}>
              <MailIcon className={classes.iconSecondary}/>
              <Typography className={classes.typographyData}>{email}</Typography>
            </Box>
            <Box display='flex' justifyContent='space-between'>
              <Box display='flex' my={1}>
                <AccountBoxIcon className={classes.iconSecondary}/>
                <Typography className={classes.typographyData}>{login.username}</Typography>
              </Box>
              <Box display='flex' my={1}>
                <VpnKeyIcon className={classes.iconSecondary}/>
                <Typography className={classes.typographyData}>{login.password}</Typography>
              </Box>
            </Box>
            <Box display='flex' my={1}>
              <EventIcon className={classes.iconSecondary}/>
              <Typography className={classes.typographyData}>{`${registered.date.slice(0,10)} (${registered.age} años)`}</Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </CardContent>
  </Card>;
};

ProfileCard.propTypes = {
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
};

ProfileCard.defaultProps = {};

export default ProfileCard;