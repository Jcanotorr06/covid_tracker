import React from 'react';
import { Grid } from '@material-ui/core';

import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Cards = ({ data: { TotalConfirmed, TotalDeaths, TotalRecovered, Date } }) => {
  if (!TotalConfirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected"
          value={TotalConfirmed}
          lastUpdate={Date}
          cardSubtitle="Number of active cases of COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={TotalRecovered}
          lastUpdate={Date}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className={styles.dead}
          cardTitle="Deaths"
          value={TotalDeaths}
          lastUpdate={Date}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Cards

