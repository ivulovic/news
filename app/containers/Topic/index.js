import React from "react";
import { FormattedMessage } from 'react-intl';
import messages from "./messages";

export const Topic = (props) => (
  <div className="topic">
    <div className="left header-wrapper">
      <p className="small-header"> <FormattedMessage {...messages[props.category]}/> </p>
      <p className="header-title">{/*props.title*/}  <FormattedMessage {...messages.testTitle}/> </p>
      <div className="separator"/>
    </div>
    <div>
      <p className="body-text">{/*props.description*/} <FormattedMessage {...messages.testDescription}/> </p>
    </div>
    <div className="small-header">
     <FormattedMessage {...messages.share}/>: &nbsp;
      <a href="#" className="small-header">Facebook</a> &nbsp;
      <a href="#" className="small-header">Twitter</a>
    </div>
  </div>
)
