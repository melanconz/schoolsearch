import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  filterHeader: {
    backgroundColor: '#81c784',
    padding: '10px',
    borderTopRightRadius: '5px',
    borderTopLeftRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  filterInput: {
    width: '40%',
    height: '18px',
    border: '0',
    padding: '3px',
    paddingLeft: '10px',
    display: 'flex'
  },
  homeButton: {
    borderRadius: '4px',
    width: '75px',
    height: '27px',
    backgroundColor: 'white',
    border: '0'
  },

  homeText: {
    textDecoration: 'none',
    backgroundColor: 'white',
    fontSize: '15px'
  }
});


class FilterHeader extends Component {
  constructor(props){
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleFilterOptionInputChange = this.handleFilterOptionInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  handleFilterOptionInputChange(e) {
      this.props.onFilterDropDown(e.target.value);
      // this.props.router.push('/colleges/' + e.target.value);
  }

    render() {
      var homeUrl = '/';
        return (
            <div className={css(styles.filterHeader)} >
                <input
                  className={css(styles.filterInput)}
                  type="text"
                  placeholder="Filter these selections..."
                  value={this.props.filterText}
                  onChange={this.handleFilterTextInputChange}
                />
              <button className={css(styles.homeButton)}>
                <Link to={homeUrl} className={css(styles.homeText)}>Home</Link>
              </button>
            </div>
        );
    }
}

export default FilterHeader;
