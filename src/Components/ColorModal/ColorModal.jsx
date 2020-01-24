import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GeneralActions from '../../store/actions/general/actions';
import ConvertHex from '../../helpers/ConvertHex';

import "./ColorModal.scss";
import { useEffect } from "react";


function ColorModal(props) {
  const dispatch = useDispatch();
  const state = useSelector(
    state => ({general: state.general}),
  );

  const [id, setId] = useState(state.general.id);

  useEffect(() => {
    setId(state.general.id);
  },[state.general.id]);

  function onClickColorContainer(color, id) {
    dispatch(GeneralActions.setTemporaryColor(color));
    dispatch(GeneralActions.selectedId(id));
  }
  
  function clickColor(color, e) {
    e.preventDefault();
    dispatch(GeneralActions.setManualColor(color));
    const rgb = (ConvertHex.convertToRGB(color));
    dispatch(GeneralActions.setColorRgb(rgb));
    handleCloseModal();
  }

  function handleCloseModal() {
    dispatch(GeneralActions.setTemporaryColor(state.general.temporaryColor));
    dispatch(GeneralActions.closeModal());
  }

  return (
    <div
      type="button"
      className="modal-list-color__container"
      key={props.id}
      onClick={() => onClickColorContainer(props.color, props.id)}
      style={{ backgroundColor: `${id === props.id ? "#79b4ec99" : ""}` }}
    >
      <div className="color-form__color-name">{props.value}</div>
      <div>
        <div
          className="color-form__btn-in"
          style={{ backgroundColor: `${props.color}` }}
          onClick={(e) => clickColor(props.color, e)}
        ></div>
      </div>
    </div>
  );
}

export default ColorModal;
