import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle';
import React, { Component } from 'react';

import FeaturedImage from 'parts/FeaturedImage';
import PageDetailDescription from 'parts/PageDetailDescription';
import BookingForm from 'parts/BookingForm';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';

import { checkoutBooking } from 'store/actions/checkout';
import { connect } from 'react-redux';
import { withRouter } from 'hooks';

import { fetchPage } from 'store/actions/page';
import Activities from 'parts/Acitvities';
class DetailsPage extends Component {
  componentDidMount() {
    const { params } = this.props.router;
    window.title = 'Details Page';
    window.scrollTo(0, 0);

    if (!this.props.page[params.id]) {
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/detail-page/${params.id}`,
        params.id
      );
    }
  }

  render() {
    const { page } = this.props;
    const { params } = this.props.router;
    
    if (!page[params.id]) return null;

    const breadcrumb = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'Home Details', pageHref: '' },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={page[params.id]} />
        <FeaturedImage data={page[params.id].imageId} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={page[params.id]} />
            </div>
            <div className="col-5">
              <BookingForm
                itemDetails={page[params.id]}
                startBooking={this.props.checkoutBooking}
              />
            </div>
          </div>
        </section>
        <Activities data={page[params.id].activityId} />
        <Testimony data={page[params.id].testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  withRouter(DetailsPage)
);
