import React from "react";
import {NavLink} from "react-router-dom";
import messages from './messages';
import { FormattedMessage } from 'react-intl';

export const Menu = (props) => (
  <ul className="nav-list">
    <li className="nav-item"><NavLink to="/online-harassment" activeClassName="nav-link-active" className="nav-link">
      <FormattedMessage {...messages.onlineHarassment}/>
    </NavLink></li>
    <li className="nav-item"><NavLink to="/attacks-on-free-speech" activeClassName="nav-link-active" className="nav-link">
      <FormattedMessage {...messages.attacksOnFreeSpeech}/>
    </NavLink></li>
    <li className="nav-item"><NavLink to="/injustice-and-corruption" activeClassName="nav-link-active" className="nav-link">
      <FormattedMessage {...messages.injusticeAndCorruption}/>
    </NavLink></li>
  </ul>
)
