import React from "react";
import { Topic } from 'containers/Topic';

const Topics = (props) => {
  let {pathname} = props.location;
  let cateogry = pathname.slice(1).split('-').map((i, j)=>j>0 ? i.charAt(0).toUpperCase()+i.slice(1):i).join("");
  return (
    <div>
      <Topic id={"3214"} category={cateogry} title={"Neki naslov sad nebitan"} description={"lorem200k"}/>
    </div>
  )
}

export default Topics;
