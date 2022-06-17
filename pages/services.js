import React, { Component } from 'react';
import PageBanner from '../components/Common/PageBanner';
import ServicesContent from '../components/Services/ServicesContent';
import FeedbackSlider from '../components/Common/FeedbackSlider';

class Services extends Component {
  render() {
    return (
      <>
        <PageBanner
          pageTitle="Services"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Services"
          bgImgClass="item-bg1"
        />

        <ServicesContent />

        <FeedbackSlider />
      </>
    );
  }
}

export default Services;
