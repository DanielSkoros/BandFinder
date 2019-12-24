import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';
import { Typography } from '@material-ui/core';


export default class HomePage extends React.PureComponent { // eslint--line react/prefer-stateless-function
  render() {
    return (
      <>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div className="home-page">
          <div className="home__image">
            <div className="home__headings">
              <Typography variant={'h1'}>
                BandFinder
              </Typography>
              <Typography variant={'h2'}>
                Best place to do something
              </Typography>
            </div>
          </div>
        </div>
      </>
    );
  }
}
