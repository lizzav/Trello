import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Card, AddForm } from "../index";

import "./Panel.scss";

const Panel = ({
  id,
  title,
  cards,
  isEmptyPanel,
  addCard,
  addPanel,
  AddDropCard,
  DropChange
}) => {
  const dragStartHandler = (e, idCard, idPanel) => {
    AddDropCard(idCard, idPanel);
  };
  const dragEndHandler = e => {};
  const dragOverHandler = e => {
    e.preventDefault();
  };
  const dragDropHandler = (e, id) => {
    e.preventDefault();
    DropChange(id);
  };
  return (
    <div>
      <div
        onDrop={!isEmptyPanel ? e => dragDropHandler(e, id) : () => {}}
        onDragEnd={!isEmptyPanel ? e => dragEndHandler(e) : () => {}}
        onDragLeave={!isEmptyPanel ? e => dragEndHandler(e) : () => {}}
        onDragOver={!isEmptyPanel ? e => dragOverHandler(e) : () => {}}
        className={classNames("panel", { "panel--empty": !cards })}
      >
        {title && <b className={"panel__title"}>{title}</b>}

        {cards && (
          <div className="panel-items">
            {cards.map((el, index) => (
              <div
                draggable={true}
                onDragStart={e => dragStartHandler(e, el.id, id)}
              >
                <Card key={index}>{el.text}</Card>
              </div>
            ))}
          </div>
        )}
        <AddForm
          isEmptyPanel={isEmptyPanel}
          addCard={addCard}
          addPanel={addPanel}
          panelId={id}
        />
      </div>
    </div>
  );
};

Panel.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.node
};

export default Panel;
