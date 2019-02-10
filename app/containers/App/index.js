/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, Redirect } from 'react-router-dom';

import GlobalStyle from '../../global-styles';
import { Menu } from '../../components/Menu/Menu';
import { InjusticeAndCorruption } from '../InjusticeAndCorruption';
import { OnlineHarassment } from '../OnlineHarassment';
import { AttacksOnFreeSpeech } from '../AttacksOnFreeSpeech';
import Jigsaw from '../Jigsaw';

import LocaleToggle from 'containers/LocaleToggle';
import Topics  from '../Topics';
import { Hand } from '../../components/Hand';

export default class App extends React.Component{

  render(){
    return (
      <div>
        <Helmet titleTemplate="%s" defaultTitle="Critic">
          <meta name="description" content="Short news" />
        </Helmet>
        <div className="content">
          <div className="left left-side">
            <Menu />
            <LocaleToggle />
            <Hand />
          </div>
          <div className="dark-content">
            <div className="jigsaw-side">
              <Jigsaw />
            </div>
            <div className="content-side">
              <Switch>
                <Route exact path="/" render={() => <Redirect to="/injustice-and-corruption"/>} />
                <Route path="/online-harassment" component={Topics} />
                <Route path="/attacks-on-free-speech" component={Topics} />
                <Route path="/injustice-and-corruption" component={Topics} />
                {/*<Route component={NotFoundPage} />*/}
              </Switch>
            </div>
          </div>
          <GlobalStyle />
        </div>
      </div>
    );
  }
}
