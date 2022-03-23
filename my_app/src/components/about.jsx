import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
import http from "./services/httpService.js";
import {useParams} from 'react-router-dom';

const About = () => {

  // componentDidMount() {
    //   http.get('http://swapi.dev/api/people/1/').then(x => {
      //     console.log(x.data);
      //   })
  // }

  const { about_who } = useParams();

  return (
    <div className="container">
      <PageHeader titleText="About Real App Home Page"/>

      <div className="row">
        <div className="col-12">
          <p>Content example text for 'about' {about_who}...</p>
        </div>
      </div>
    </div>
  );
}

export default About;