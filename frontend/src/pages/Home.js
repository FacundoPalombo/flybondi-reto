import React from 'react';
import { Link } from '@reach/router'
export const Home = () => {
  return (
    <main>
      <h1>Home Page</h1>
      <article>
        <section>
          <h2>Promotions</h2>
        </section>
        <section>
          <Link to="/search">
            Search
          </Link>
        </section>
      </article>
    </main>
  );
};
