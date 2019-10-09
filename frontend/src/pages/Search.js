import React, { useState } from 'react';
import { Link } from '@reach/router';
import { Section, Article, Main } from '../assets/styles/styles'
import { Routes } from '../components/Routes'

import { useAirportsData } from '../hooks/useAirportsData'

export const Search = () => {
  const [isOpen, setIsOpen] = useState(true);
  const airportData = useAirportsData()
  return (
    <Main>
      <Article>
        <h1>Select your origin</h1>
        <Section>
          <p>
            Here should be a card approach list of all available origin
            airports. When an origin airport is selected, the list should
            display all available destination for given selection. The card
            should have:
          </p>
          <Routes {...airportData} isOpen={isOpen}>
            Hello routes!
          </Routes>
        </Section>
        <Link to="/flights">
        Start your journey
        </Link>
      </Article>
    </Main>
  );
}
