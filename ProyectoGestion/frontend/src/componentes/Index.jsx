import { Container } from "@material-ui/core";
import React from "react";
import homeBanner from '../img/homeBanner.webp';
import {container,Row,Col,Image} from 'react-bootstrap';

const index = () => {
  return (
    <div className="container">
      <h1>Bienvenidos a cultivos la planicie</h1>
      <img src={homeBanner} alt="logo" width={1200}/>
    </div>
  );
};

export default index;
