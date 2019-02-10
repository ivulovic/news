import React from "react";
import { FormattedMessage } from 'react-intl';
import messages from "./messages";

export const Topic = (props) => (
  <div>
    <div className="left header-wrapper">
      <p className="small-header"> <FormattedMessage {...messages[props.category]}/> </p>
      <p className="header-title">{/*props.title*/}  <FormattedMessage {...messages.testTitle}/> </p>
    </div>
    <div>
      <p className="body-text">{/*props.description*/} <FormattedMessage {...messages.testDescription}/> </p>
    </div>
    <div className="link-list clear">
      <div className="link-list-item">
        <div className="link-list-projects">
         <FormattedMessage {...messages.share}/>:
        </div>
        <span className="link-url-list">
          <a href="#" className="link-list-link">Facebook</a> &nbsp;
          <a href="#" className="link-list-link">Twitter</a>
        </span>
      </div>
    </div>
    <div className="clear"/>
  </div>
)
