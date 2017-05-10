import React, {Component} from 'react';
import FilterHeader from './FilterHeader.js';
import TableList from './TableList.js';
import PaginatedFooter from './PaginatedFooter.js';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
    table: {
      padding: "10px",
      fontFamily: "'Josefin Slab', serif"
    },
    header: {
      display: "grid",
      textAlign: "center",
      padding: "10px"
    },
    stateName: {
      fontSize: "x-large",
      fontWeight: 'bolder'
    }

});

class FilterableTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            option: 'Show All',
            stateName: '',
            totalSchools: '',
            pages: 0
        }
        this.handleFilterDropDown = this.handleFilterDropDown.bind(this);
        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const stateNameObject = {
            1: "Alabama",
            2: "Alaska",
            4: "Arizona",
            5: "Arkansas",
            6: "California",
            8: "Colorado",
            9: "Connecticut",
            10: "Delaware",
            11: "District of Columbia",
            12: "Florida",
            13: "Georgia",
            15: "Hawaii",
            16: "Idaho",
            17: "Illinois",
            18: "Indiana",
            19: "Iowa",
            20: "Kansas",
            21: "Kentucky",
            22: "Louisiana",
            23: "Maine",
            24: "Maryland",
            25: "Massachusetts",
            26: "Michigan",
            27: "Minnesota",
            28: "Mississippi",
            29: "Missouri",
            30: "Montana",
            31: "Nebraska",
            32: "Nevada",
            33: "New Hampshire",
            34: "New Jersey",
            35: "New Mexico",
            36: "New York",
            37: "North Carolina",
            38: "North Dakota",
            39: "Ohio",
            40: "Oklahoma",
            41: "Oregon",
            42: "Pennsylvania",
            44: "Rhode Island",
            45: "South Carolina",
            46: "South Dakota",
            47: "Tennessee",
            48: "Texas",
            49: "Utah",
            50: "Vermont",
            51: "Virginia",
            53: "Washington",
            54: "West Virginia",
            55: "Wisconsin",
            56: "Wyoming",
            60: "American Samoa",
            64: "Federated States of Micronesia",
            66: "Guam",
            69: "Northern Mariana Islands",
            70: "Palau",
            72: "Puerto Rico",
            78: "Virgin Islands"
        }
        var total = nextProps.metaData.total;
        var per_page = nextProps.metaData.per_page;
        this.setState({
            stateName: stateNameObject[nextProps.schools[0]['school.state_fips']],
            totalSchools: total,
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
            <div className={css(styles.table)}>
                <div className={css(styles.header)}>
                  <span className={css(styles.stateName)}>{this.state.stateName}</span>
                <span className={css(styles.totalSchools)}>{this.state.totalSchools + ' schools'}</span>
                </div>
                <div>
                    <FilterHeader schools={this.props.schools} filterText={this.state.filterText} onFilterTextInput={this.handleFilterTextInput} onFilterDropDown={this.handleFilterDropDown}/>
                </div>
                <div>
                    <TableList history={this.props.history} schools={this.props.schools} filterText={this.state.filterText} option={this.state.option}/>
                </div>
                <div className={css(styles.filterFooter)}>
                    <PaginatedFooter history={this.props.history} schools={this.props.schools} params={this.props.params} pages={this.state.pages} />
                </div>
            </div>
        );
    }
}

export default FilterableTable;
