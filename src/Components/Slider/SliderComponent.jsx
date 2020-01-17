import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import SliderHelper from '../../helpers/SliderHelper';
import GeneralActions from '../../store/actions/general/actions';
import ConvertHex from '../../helpers/ConvertHex';
import { DataColors } from '../../Data/';

import './Slider.scss';

function SliderComponent() {
  const dispatch = useDispatch();
  const state = useSelector(
    state => ({general: state.general}),
  );

  const [redValue, setRedValue] = useState(state.general.redColor);
  const [greenValue, setGreenValue] = useState(state.general.greenColor);
  const [blueValue, setBlueValue] = useState(state.general.blueColor);

  function onSliderChange(value, type) {
    if (type === 'red') {
      setRedValue(Math.abs(value));
    } else if (type === 'green') {
      setGreenValue(Math.abs(value));
    } else if (type === 'blue') {
      setBlueValue(Math.abs(value));
    }

    const hex = ConvertHex.convertToHex(redValue, greenValue, blueValue);
    dispatch(GeneralActions.setTemporaryColor(hex));
  };

  function closeModal() {
    dispatch(GeneralActions.closeModal());
  }

  function confirmColor() {
    const hex = ConvertHex.convertToHex(redValue, greenValue, blueValue);
    DataColors.colors.push({
      id: new Date().getTime(),
      value: hex,
      color: hex,
    })
    dispatch(GeneralActions.setColor(redValue, greenValue, blueValue));
    dispatch(GeneralActions.setManualColor(hex));
    closeModal();
  }

  return (
    <div className="modal-list-rgb__container">
      <div className="modal-list-rgb__container-colors">
        <div className="modal-rgb">
          <p className="modal-rgb__text">R</p>
          <div className="modal-rgb__line">
            <Slider 
              min={-255}
              max={0}
              defaultValue={-redValue}
              handle={SliderHelper.handle} 
              onChange={(value) => onSliderChange(value, 'red')}
              className={'red-slider'}/>
          </div>
        </div>
        <div className="modal-rgb">
          <p className="modal-rgb__text">G</p>
          <div className="modal-rgb__line">
            <Slider 
              min={-255}
              max={0}
              defaultValue={-greenValue}
              handle={SliderHelper.handle} 
              onChange={(value) => onSliderChange(value, 'green')}
              className={'green-slider'}/>
          </div>
        </div>
        <div className="modal-rgb">
          <p className="modal-rgb__text">B</p>
          <div className="modal-rgb__line">
            <Slider 
              min={-255}
              max={0}
              defaultValue={-blueValue}
              handle={SliderHelper.handle} 
              onChange={(value) => onSliderChange(value, 'blue')}
              className={'blue-slider'}/>
          </div>
        </div>
        <div className="modal-list-rgb__container-buttons">
          <button className="modal-list-rgb__btn-cancel" onClick={closeModal}>CANCEL</button>
          <button className="modal-list-rgb__btn-ok" onClick={confirmColor}>OK</button>
        </div>
      </div>
    </div>
  );
}

export default SliderComponent;

