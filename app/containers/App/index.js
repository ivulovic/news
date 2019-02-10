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
import Jigsaw from '../Jigsaw';

import LocaleToggle from 'containers/LocaleToggle';
import Topics  from '../Topics';
import { Hand } from '../../components/Hand';
import logo from "../../images/exposed-logo.png";

export default class App extends React.Component{

  render(){
    return (
      <div>
        <Helmet titleTemplate="%s" defaultTitle="Exposed">
          <meta name="description" content="Short news" />
        </Helmet>
        <div className="content">
          <div className="left left-side">
            <div className="top-space text-center">
              <LocaleToggle />  <img className="logo-image" src={logo}/>
              <Menu />
            </div>
            <Hand />
          </div>
          <div className="dark-content">

            <div className="content-side">
              <div className="jigsaw-side">
                <Jigsaw />
              </div>
              <div className="page-content">
                <Switch>
                  <Route exact path="/" render={() => <Redirect to="/injustice-and-corruption"/>} />
                  <Route path="/online-harassment" component={Topics} />
                  <Route path="/attacks-on-free-speech" component={Topics} />
                  <Route path="/injustice-and-corruption" component={Topics} />
                  {/*<Route component={NotFoundPage} />*/}
                </Switch>
              </div>
            </div>
          </div>
          <GlobalStyle />
        </div>
      </div>
    );
  }
}
