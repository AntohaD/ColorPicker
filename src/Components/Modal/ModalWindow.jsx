import React from 'react';
import Modal from 'react-modal';

import { DataColors } from '../../Data/';

import './ModalWindow.scss';
import '../ColorForm/ColorForm.scss';

function ModalWindow(props) {
  const showMobile = props.showMobile;
  const handleCloseModal = props.handleCloseModal;
  const variantModal = props.variantModal;

  function onClickColorContainer(color, id) {
  }

  return (
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
                  // style={{ backgroundColor: `${id === colorItem.id && '#79b4ec99'}`}}
                >
                  <div>{colorItem.value}</div>
                  <div>
                    <div
                      className="color-form__btn-in"
                      style={{ backgroundColor: `${colorItem.color}`}}
                      // onClick={() => setShowMobile(false)}
                    ></div>
                  </div>
                </div>
              )
            })              
            :
            <div></div>
          }
        </div>  
      </Modal>
  );
}

export default ModalWindow;