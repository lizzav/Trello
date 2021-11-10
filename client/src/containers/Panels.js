import { Panel } from "../components";
import { connect } from "react-redux";
import React, { Fragment } from "react";
import { AddCard, AddPanel,AddDropCard,DropChange } from "../reducers/panel";


const Panels = ({items,AddCard,AddPanel,AddDropCard,DropChange}) => (
  <Fragment>
    {items.map((item, index) => (
      <Panel key={index} addCard={AddCard} AddDropCard={AddDropCard} DropChange={DropChange} {...item} />
    ))}
    <Panel isEmptyPanel={true} addPanel={AddPanel} />

  </Fragment>
);

export default connect(({ panel }) => panel,{AddCard,AddPanel,AddDropCard,DropChange})(Panels);
