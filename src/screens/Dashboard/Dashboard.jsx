import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import React from 'react';
import PageHeader from '../../shared/components/PageHeader';
// import DbdAccountOverview from './components/DbdAccountOverview';
// import DbdLatestTransactions from './components/DbdLatestTransactions';
// import MyFavouriteFeatures from './components/DbdMyFavouriteFeatures';
// import DbdWeRecommend from './components/DbdWeRecommend';

function Dashboard() {
  return (
    <div>
      <Container>
        <PageHeader>Accounts overview</PageHeader>
        {/* <DbdAccountOverview />
        <MyFavouriteFeatures />
        <DbdWeRecommend /> */}
      </Container>
      {/* <DbdLatestTransactions /> */}
      <Box pt={4} />
    </div>
  );
}

export default Dashboard;
