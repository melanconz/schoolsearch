import React, {Component} from 'react';
import StateSelection from './StateSelection.js';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    home: {
        backgroundColor: '#81c784',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        textAlign: 'center',
        paddingTop: '185px',
        fontFamily: "'Josefin Slab', serif"
    }
});


class FilterableTable extends Component {
    constructor(props) {
      super(props);
      this.state = {
        option: 'Show All'
      }
      this.handleFilterDropDown = this.handleFilterDropDown.bind(this);
    }

    handleFilterDropDown(option) {
      this.setState({
        option: option
      });
      this.props.history.push('/colleges/' + option + '/page=0');
    }

    render() {
        return (
              <div className={css(styles.home)}>
                <div>
                  <h1>College Scorecard Searcher</h1>
                <h1>Get the Data Associated with a School You're Interested In</h1>
                </div>
                <div>
                  <h3>Start your search by choosing a state</h3>
                  <StateSelection
                    option={this.state.option}
                    onFilterDropDown={this.handleFilterDropDown}
                  />
                </div>
              </div>
        );
    }
}

export default FilterableTable;
