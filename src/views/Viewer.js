import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { getProfiles } from '../modules/api/selectors';

import {apiGetProfiles} from '../modules/api/actions';
import AllProfiles from '../components/AllProfiles';



const Viewer = () => {
  const dispatch = useDispatch();
  const profiles = useSelector(getProfiles);
  useEffect(() => {
    dispatch(apiGetProfiles());
  }, []);

  return (
    <>
      <AllProfiles profiles={profiles}/>
    </>
  );
};
export default Viewer;