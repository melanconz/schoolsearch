import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
    filterFooter: {
        backgroundColor: '#81c784',
        padding: '10px',
        borderBottomRightRadius: '5px',
        borderBottomLeftRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between'

    },
    footerContent: {
      cursor: 'pointer',
        margin: '2px',
        textDecoration: 'none',
        color: 'white'
    },
    pageNumbersActive: {
      margin: '2px',
      textDecoration: 'none',
        color: '#616161'
    }
});

class PaginatedFooter extends Component {
    constructor(props) {
        super(props)
        this.pageNumber = this.props.params.page.match(/\d+/)[0];
        this.state = {
            footerPagination: [],
            previousPage: 0,
            nextPage: 0
        }
        this.handlePrevious = this.handlePrevious.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.handlePageSelection = this.handlePageSelection.bind(this)
    }

    handlePrevious() {
      var url = `/colleges/${this.props.params.stateName}`
      var previousUrl = url + `/page=${this.state.previousPage}`
      this.props.history.push(previousUrl);
      location.reload();
    }

    handleNext() {
      var url = `/colleges/${this.props.params.stateName}`
      var nextUrl = url + `/page=${this.state.nextPage}`
      this.props.history.push(nextUrl);
      location.reload();
    }
    handlePageSelection(e) {
      console.log(this.props);
      var pageUrl = `/colleges/${this.props.params.stateName}/page=${e.target.id}`
        this.props.history.push(pageUrl);
        location.reload();
    }

    componentWillReceiveProps(nextProps) {
        var footerPagination = [];
        for (var i = 1; i <= nextProps.pages; i++) {
            footerPagination.push({page: i});
        }
        this.setState({footerPagination: footerPagination})
        if (this.pageNumber !== 0) {
            this.setState({
                previousPage: Number(this.pageNumber) - 1
            })
        }
        if (this.pageNumber !== nextProps.pages) {
            this.setState({
                nextPage: Number(this.pageNumber) + 1
            })
        }
    }

    render() {
        var url = `/colleges/${this.props.params.stateName}`
        var previousUrl = url + `/page=${this.state.previousPage}`
        var nextUrl = url + `/page=${this.state.nextPage}`
        const previousButtonNode = () => {
            if (this.state.previousPage >= 0) {
                return (
                  <a onClick={this.handlePrevious} className={css(styles.footerContent)}>
                      &larr;
                  </a>
                )
            } else {
                return (
                  <a>

                  </a>
                )
            }
        }
        const nextButtonNode = () => {
            if (this.state.nextPage < this.state.footerPagination.length) {
                return (
                  <a onClick={this.handleNext} className={css(styles.footerContent)}>
                      &rarr;
                  </a>
                )
            } else {
                return (
                  <a>

                  </a>
                )
            }
        }
        const footerPaginationNode = this.state.footerPagination.map((page) => {
            if (Number(this.pageNumber) !== Number(page.page) - 1) {
                return (
                    <a className={css(styles.footerContent)} onClick={this.handlePageSelection} id={page.page - 1} key={page.page}>
                        {page.page}
                    </a>
                )
            } else {
                return (
                    <a className={css(styles.pageNumbersActive)} key={page.page}>
                        {page.page}
                    </a>
                )
            }
        });
        return (
            <div className={css(styles.filterFooter)}>
              <span>
                  {previousButtonNode()}
              </span>
                <span>
                    {footerPaginationNode}
                </span>
                <span>
                    {nextButtonNode()}
                </span>
            </div>
        );
    }
}

export default PaginatedFooter;
