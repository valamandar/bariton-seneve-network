import React, { Component } from 'react';
import PageBanner from '../components/Common/PageBanner';
import AboutContact from '../components/About/AboutContent';
import Services from '../components/HomeOne/Services';
import Team from '../components/Common/Team';
import PartnerContent from '../components/Common/PartnerContent';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import PricingCard from '../components/Common/PricingCard';
import FreeTrialForm from '../components/Common/FreeTrialForm';

class About extends Component {
  render() {
    return (
      <>
        <PageBanner
          pageTitle="About Us"
          homePageUrl="/"
          homePageText="Home"
          activePageText="About Us"
          bgImgClass="item-bg1"
        />
        <AboutContact />
        <Services />
        <Team />
        <PartnerContent />
        <FeedbackSlider />
        <PricingCard />
        <FreeTrialForm />
      </>
    );
  }
}

export default About;
