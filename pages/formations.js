import React, { Component } from 'react';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsContent from '../components/Services/ServiceDetailsContent';

class ServiceDetails extends Component {
  render() {
    return (
      <>
        <PageBanner
          pageTitle="Security & Surveillance"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Service Details"
          bgImgClass="item-bg2"
        />
        <ServiceDetailsContent />
      </>
    );
  }
}

export default ServiceDetails;
