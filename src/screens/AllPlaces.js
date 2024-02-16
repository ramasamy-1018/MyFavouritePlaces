import { useContext } from 'react';
import { PlaceContext } from '../../store/PlaceContext';
import PlaceList from '../components/PlaceList';

const AllPlaces = () => {

  const {places} = useContext(PlaceContext);
  
  return (
    <PlaceList places={places}/>
  );
};

export default AllPlaces;
