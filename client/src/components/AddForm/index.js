import React, { Fragment, useState, useRef, useEffect } from "react";

import "./AddForm.scss";
import { Button, Card } from "../index";
import { ReactComponent as Add } from "../../svg/add.svg";

const AddForm = ({ children, isEmptyPanel, addCard, panelId, addPanel }) => {
  const [showForm, setShowForm] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");
  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [showForm]);

  const addCardFunction = () => {
    addCard(panelId, textareaValue);
    setTextareaValue("");
    setShowForm(false);
  };
  const addPanelFunction = () => {
    addPanel(textareaValue);
    setTextareaValue("");
    setShowForm(false);
  };

  const clauseButton = () => {
    setTextareaValue("");
    setShowForm(false);
  };

  return (
    <Fragment>
      {showForm ? (
        <div className="add-form">
          <div className="add-form__input">
            <Card>
              <textarea
                placeholder={
                  isEmptyPanel
                    ? "Введите название колонки"
                    : "Введите название карточки"
                }
                onChange={e => setTextareaValue(e.target.value)}
                value={textareaValue}
                ref={textareaRef}
                rows="3"
              />
            </Card>
            <div className="add-form__bottom">
              <div
                onClick={
                  !isEmptyPanel
                    ? () => addCardFunction()
                    : () => addPanelFunction()
                }
              >
                {" "}
                <Button>
                  {isEmptyPanel ? " Добавить колонку" : "Добавить карточку"}
                </Button>
              </div>
              <div onClick={() => clauseButton()} className="clear-button">
                <Add />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="panel__bottom" onClick={() => setShowForm(true)}>
          <div className="panel__bottom-add-btn">
            <Add />
            <span>
              {isEmptyPanel
                ? "Добавить еще одну колонку"
                : "Добавить еще одну карточку"}
            </span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AddForm;
