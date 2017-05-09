import React, {Component} from 'react';
import FilterHeader from './FilterHeader.js';
import TableList from './TableList.js';
import PaginatedFooter from './PaginatedFooter.js';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
    filterHeader: {
        borderRadius: '5px',
        margin: '5px'
    }
});

class FilterableTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            option: 'Show All',
            pages: 0
        }
        this.handleFilterDropDown = this.handleFilterDropDown.bind(this);
        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        var total = nextProps.metaData.total;
        var per_page = nextProps.metaData.per_page;
        this.setState({
            pages: Math.ceil(total / per_page)
        });
    }

    handleFilterDropDown(option) {
        this.setState({option: option});
    }

    handleFilterTextInput(filterText) {
        this.setState({filterText: filterText});
    }

    render() {
        return (
            <div className={css(styles.filterHeader)}>
                <div>
                    <FilterHeader filterText={this.state.filterText} onFilterTextInput={this.handleFilterTextInput} onFilterDropDown={this.handleFilterDropDown}/>
                </div>
                <div>
                    <TableList schools={this.props.schools} filterText={this.state.filterText} option={this.state.option}/>
                </div>
                <div className={css(styles.filterFooter)}>
                    <PaginatedFooter history={this.props.history} schools={this.props.schools} params={this.props.params} pages={this.state.pages} />
                </div>
            </div>
        );
    }
}

export default FilterableTable;
