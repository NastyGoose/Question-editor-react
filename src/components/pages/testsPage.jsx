import React, { Component } from 'react';
import Pagination from 'react-paginate';
import Grid from '../common/grid';
import TestCard from '../TestCard';
import { getTests } from '../../services/testService';
import { Page } from '../../assets/styles/index';
import './pagination.css';

class TestsPage extends Component {
  constructor(props) {
    super(props);

    let page = 1;
    if (props.location.search) {
      page = Number(props.location.search.slice(-1));
    }

    this.state = {
      tests: [],
      page,
      pagesCount: 3,
    };
  }

  async componentDidMount() {
    this.populateTests();
  }

  populateTests = async (page) => {
    const { data } = await getTests(
      (page && `?page=${page}`) || this.props.history.location.search,
    );
    const tests = this.mapToModelView(data);

    this.setState({ tests, pagesCount: data.pagesCount });
  };

  mapToModelView = tests => tests.tests.map(test => ({
    author: test.author.name,
    likes: test.likes,
    dislikes: test.dislikes,
    views: test.visits,
    verified: test.verified,
    question: test.question,
    isPatched: !!test.patch,
    id: test._id,
  }));

  handleTestCardClick = (id) => {
    if (this.props.permission > 5) {
      this.props.history.push(`tests/${id}`);
    }
  };

  handlePageClick = (data) => {
    this.populateTests(data.selected + 1);
  };

  render() {
    const { tests, pagesCount, page } = this.state;

    return (
      <Page none>
        <Grid
          component={TestCard}
          data={tests}
          onTestCardClick={this.handleTestCardClick}
          permission={this.props.permission}
          login={this.props.login}
          populateTests={this.populateTests}
        />
        {pagesCount >= 1 && (
          <Pagination
            previousLabel="previous"
            nextLabel="next"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={pagesCount}
            initialPage={page - 1}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName="pagination"
            subContainerClassName="pages pagination"
            activeClassName="active"
            pageClassName="page"
            pageLinkClassName="pageLink"
            previousClassName="previous"
            nextClassName="next"
          />
        )}
      </Page>
    );
  }
}

export default TestsPage;
