import React, { useEffect, useState } from 'react';
import SliderComponent from '../Slider/SliderComponent';

import Modal from 'react-modal';
import { DataColors } from '../../Data/';

import './ColorForm.scss';

function ColorForm() {
  const [showMobile, setShowMobile] = useState(false);
  const [variantModal, setVariantModal] = useState();
  const [color, setColor] = useState('#A9A9A9');
  const [textColor, setTextColor] = useState('#A9A9A9');
  const [id, setId] = useState();

  function handleOpenModal(typeButton) {
    setShowMobile(true);
    setVariantModal(typeButton);
  }

  function onClickColorContainer(color, id) {
    setColor(color);
    setTextColor(color);
    setId(id);
  }

  function handleCloseModal() {
    setShowMobile(false);
    setId();
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
            DataColors.colors.map((colorItem) => {
              return (
                <div 
                  type="button"
                  className="modal-list-color__container"
                  key={colorItem.id}
                  onClick={() => onClickColorContainer(colorItem.color, colorItem.id)}
                  style={{ backgroundColor: `${id === colorItem.id && '#79b4ec99'}`}}
                >
                  <div>{colorItem.value}</div>
                  <div>
                    <div
                      className="color-form__btn-in"
                      style={{ backgroundColor: `${colorItem.color}`}}
                      onClick={() => setShowMobile(false)}
                    ></div>
                  </div>
                </div>
              )
            })              
            :
            <div className="modal-list-rgb__container">
              <div className="modal-list-rgb__container-colors">
                <SliderComponent
                  type={'red'}
                />
                <SliderComponent
                  type={'green'}
                />
                <SliderComponent
                  type={'blue'}
                />
              </div>
              <div className="modal-list-rgb__container-buttons">
                <button className="modal-list-rgb__btn-cancel">CANCEL</button>
                <button className="modal-list-rgb__btn-ok">OK</button>
              </div>
            </div>
          }
        </div>  
      </Modal>
    </div>
  )
}

export default ColorForm;