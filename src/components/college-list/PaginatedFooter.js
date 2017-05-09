import React, {Component} from 'react';
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
        const footerPaginationNode = this.state.footerPagination.map((page) => {
            var pageUrl = `/colleges/${this.props.params.stateName}/page=${ (page.page - 1)}`
            if (Number(this.pageNumber) !== Number(page.page) - 1) {
                return (
                    <a href={pageUrl} className={css(styles.footerContent)} key={page.page}>
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
                <a href={previousUrl} className={css(styles.footerContent)}>
                    &larr;
                </a>
                <span>
                    {footerPaginationNode}
                </span>
                <a href={nextUrl} className={css(styles.footerContent)}>
                    &rarr;
                </a>
            </div>
        );
    }
}

export default PaginatedFooter;
