import React, { Component } from 'react';
import PageBanner from '../components/Common/PageBanner';
import BlogThreeGrid from '../components/Blog/BlogThreeGrid';
import Footer from '../components/Layouts/Footer';

class Blog extends Component {
  render() {
    return (
      <>
        <PageBanner
          pageTitle="Blog Grid"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Blog Grid"
          bgImgClass="item-bg2"
        />

        <BlogThreeGrid />

        <Footer />
      </>
    );
  }
}

export default Blog;
