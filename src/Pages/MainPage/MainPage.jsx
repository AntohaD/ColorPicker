import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ColorForm from '../../Components/ColorForm/ColorForm';
import './MainPage.scss';

function MainPage() {
  return (
    <Jumbotron className="main-jumb">
      <h3 className="main-jumb__title">Color Picker</h3>
      <ColorForm />
    </Jumbotron>
  )
}

export default MainPage;