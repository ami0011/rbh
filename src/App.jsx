import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { useSelector } from 'react-redux';
import Routes from './Routes';
import LoaderOverlay from './shared/components/LoaderOverlay';
import { select } from './store';

function App() {
  const isLoading = useSelector(state => select.loader.isLoading(state));

  return (
    <React.Fragment>
      <CssBaseline />
      <LoaderOverlay open={isLoading} />
      <Routes />
    </React.Fragment>
  );
}

export default App;
