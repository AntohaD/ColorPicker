import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ColorForm from '../../Components/ColorForm/ColorForm';
import { DataColors } from '../../Data/';

import './MainPage.scss';

function MainPage() {
  return (
    <>
      <Jumbotron className="main-jumb">
        <h3 className="main-jumb__title">Color Picker</h3>
        <ColorForm value={"#A9A9A9"} onChange colors={DataColors.colors} />
      </Jumbotron>
      <a
        className="link-github"
        href="https://github.com/AntohaD/ColorPicker"
        target="_blank"
      >
        Project on GitHub
      </a>
    </>
  );
}

export default MainPage;