import React, { useEffect, useState } from 'react';
import { Flight as FlightComponent } from '../components/Flight';
import { useAirportsData } from '../hooks/useAirportsData';

export const Flight = ({ originCode, destinationCode }) => {
  const flight = useAirportsData();
  return <FlightComponent {...flight}/>;
};
