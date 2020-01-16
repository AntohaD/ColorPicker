import React, { useEffect, useState } from 'react';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import SliderHelper from '../../helpers/SliderHelper';
import { connect } from 'react-redux';
import GeneralActions from '../../store/actions/general/actions';

import './Slider.scss';

const mapStateToProps = state => {
  return {
    general: state.general,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setColor: (value, type) => {
      dispatch(GeneralActions.setColor(value, type))
    },
  }
}

function SliderComponent(props) {
  const [value, setValue] = useState(0);
  const type = props.type;

  const onSliderChange = value => {
    setValue(Math.abs(value));
    console.log(Math.abs(value)); 
    props.setColor(value, type);
  };

  // useEffect(() => {
  //   props.setColor(value, type);
  // });


  return (
    <div className="modal-rgb">
      <p className="modal-rgb__text">R</p>
      <div className="modal-rgb__line">
        <Slider 
          min={-255}
          max={0}
          defaultValue={-255}
          handle={SliderHelper.handle} 
          onChange={onSliderChange}
          className={type === 'red' ? 'red-slider' : (type === 'green' ? 'green-slider' : 'blue-slider')}/>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SliderComponent);

