import React, { Component } from 'react';
import PageBanner from '../components/Common/PageBanner';
import BlogThreeGrid from '../components/Blog/BlogThreeGrid';

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
      </>
    );
  }
}

export default Blog;
