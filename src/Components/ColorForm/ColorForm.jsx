import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-modal';
import SliderComponent from '../Slider/SliderComponent';
import GeneralActions from '../../store/actions/general/actions';
import ConvertHex from '../../helpers/ConvertHex';
import ColorModal from '../ColorModal/ColorModal';

import './ColorForm.scss';

function ColorForm(props) {
  const dispatch = useDispatch();
  const state = useSelector(
    state => ({general: state.general}),
  );

  const colors = props.colors;
  const valueColor = props.value;

  const isModalOpen = state.general.isModalOpen;
  const [variantModal, setVariantModal] = useState();
  // const [id, setId] = useState();
  const [color, setColor] = useState(valueColor);
  const [temporaryColor, setTemporaryColor] = useState(state.general.temporaryColor);

  function handleOpenModal(typeButton) {
    const rgb = (ConvertHex.convertToRGB(color));
    dispatch(GeneralActions.setColorRgb(rgb));
    setVariantModal(typeButton);
    dispatch(GeneralActions.openModal());
    setTemporaryColor(color);
  }

  // function onClickColorContainer(color, id) {
  //   setTemporaryColor(color);
  //   setId(id);
  // }

  function handleCloseModal() {
    // setId();
    setTemporaryColor(state.general.temporaryColor);
    dispatch(GeneralActions.closeModal());
  }

  // function clickColor(color) {
  //   dispatch(GeneralActions.setManualColor(color));
  //   const rgb = (ConvertHex.convertToRGB(color));
  //   dispatch(GeneralActions.setColorRgb(rgb));
  //   handleCloseModal();
  // }

  useEffect(() => {
    setColor(state.general.color);
    setTemporaryColor(state.general.temporaryColor);
  },[state.general.color, state.general.temporaryColor])

  return(
    <div className="color-form">
      <div className="color-form__container">
        <div className="color-form__container-text">{color}</div>
        <div className="color-form__container-dropdown">
          <button className="color-form__btn-color" onClick={() => handleOpenModal('rgb')}>
            <div className="color-form__btn-in" style={{ backgroundColor: `${color === (temporaryColor === '' ? color : temporaryColor ) ? color : temporaryColor}`}}></div>
          </button>
          <button className="color-form__btn-rgb" onClick={() => handleOpenModal('color')}>
            <div className="color-form__arrow"></div>
          </button>
        </div>
      </div>
      <Modal 
        isOpen={isModalOpen}
        className={`modal-container`}
        appElement={document.getElementById('root')}
        onRequestClose={handleCloseModal}
      >
        <div className={`modal-list-${variantModal}`}>
          {variantModal === 'color' ?
            colors.map((colorItem) => {
              return (
                <ColorModal 
                  key={colorItem.id}
                  value={colorItem.value}
                  id={colorItem.id}
                  color={colorItem.color}
                />
                // <div 
                //   type="button"
                //   className="modal-list-color__container"
                //   key={colorItem.id}
                //   onClick={() => onClickColorContainer(colorItem.color, colorItem.id)}
                //   style={{ backgroundColor: `${id === colorItem.id ? '#79b4ec99' : ''}`}}
                // >
                //   <div className="color-form__color-name">{colorItem.value}</div>
                //   <div>
                //     <div
                //       className="color-form__btn-in"
                //       style={{ backgroundColor: `${colorItem.color}`}}
                //       onClick={() => clickColor(colorItem.color)}
                //     ></div>
                //   </div>
                // </div>
              )
            })              
            :
            <SliderComponent
              value={valueColor}
            />
          }
        </div>  
      </Modal>
    </div>
  )
}

export default ColorForm;