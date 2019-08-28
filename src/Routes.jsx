import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import RoutesPrivate from './RoutesPrivate';
import RoutesPublic from './RoutesPublic';
import { getDefaultLanguage, languageOptions } from './shared/config/languages';

const defaultLanguage = getDefaultLanguage();

function App() {
  const currentUser = useSelector(state => state.currentUser);

  return (
    <Switch>
      <Route path={languageOptions.map(language => `/${language.id}`)} component={RoutesPublic} />
      {currentUser ? <Route component={RoutesPrivate} /> : <Redirect to={`/${defaultLanguage.id}`} />}
    </Switch>
  );
}

export default App;
