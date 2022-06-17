import React, { Component } from 'react';
import PageBanner from '../components/Common/PageBanner';
import TeamContent from '../components/Team/TeamContent';
import FreeTrialForm from '../components/Common/FreeTrialForm';

class Team extends Component {
  render() {
    return (
      <>
        <PageBanner
          pageTitle="Our Team"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Team"
          bgImgClass="item-bg1"
        />

        <TeamContent />

        <FreeTrialForm />
      </>
    );
  }
}

export default Team;
