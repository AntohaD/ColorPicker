import React, { useRef, useEffect, useState } from 'react';
import Modal from 'react-modal';
import './ColorForm.scss';
import { DataColors } from '../../Data/';

function ColorForm() {
  const [showMobile, setShowMobile] = useState(false);
  const [selectColor, setSelectColor] = useState(false);
  const [variantModal, setVariantModal] = useState();
  const [color, setColor] = useState('#A9A9A9');
  const [textColor, setTextColor] = useState('#A9A9A9');

  function handleOpenModal(typeButton) {
    setShowMobile(true);
    setVariantModal(typeButton);
  }

  function onClickColorContainer(color) {
    setColor(color);
    setTextColor(color);
    setSelectColor(true);
  }

  function handleCloseModal() {
    setShowMobile(false);
    setSelectColor(false);
  }

  return(
    <div className="color-form">
      <div className="color-form__container">
        <div className="color-form__container-text">{textColor}</div>
        <div className="color-form__container-dropdown">
          <button className="color-form__btn-color" onClick={() => handleOpenModal('rgb')}>
            <div className="color-form__btn-in" style={{ backgroundColor: `${color}`}}></div>
          </button>
          <button className="color-form__btn-rgb" onClick={() => handleOpenModal('color')}>
            <div className="color-form__arrow"></div>
          </button>
        </div>
      </div>
      <Modal 
        isOpen={showMobile}
        className={`modal-container`}
        appElement={document.getElementById('root')}
        onRequestClose={handleCloseModal}
      >
        <div className={`modal-list-${variantModal}`}>
          {variantModal === 'color' ?
            DataColors.colors.map((color) => {
              return (
                <div 
                  type="button"
                  className="modal-list-color__container"
                  key={color.id} onClick={() => onClickColorContainer(color.color)}
                  style={{ backgroundColor: `${selectColor && 'blue'}`}}
                >
                  <div className="modal-list-color__name">{color.value}</div>
                  <div className="modal-list-color__color">
                    <div
                      className="color-form__btn-in"
                      style={{ backgroundColor: `${color.color}`}}
                      onClick={() => setShowMobile(false)}
                    ></div>
                  </div>
                </div>
              )
            })              
            :
            <div className="modal-list-color__container"></div>
          }
        </div>  
      </Modal>
    </div>
  )
}

export default ColorForm;