import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    collegeDetailTitle: {
      marginBottom: '0'
    }
});

class CollegeDetailHeader extends Component {
  constructor(props) {
      super(props)
      this.state = {
        schoolName: '',
        schoolRul: '',
        levelOfInstitution: ''
      }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    var levelOfInstitutionObject = {
      1: '4-year',
      2: '2-year',
      3: 'Less than 2-year'
    }
      this.setState({schoolName: nextProps.schoolInfo['school.name']});
      this.setState({schoolUrl: nextProps.schoolInfo['school.school_url']});
      this.setState({levelOfInstitution: levelOfInstitutionObject[nextProps.schoolInfo['school.institutional_characteristics.level']]});


  }

    render() {
        return (
            <div>
              <div>
                <h1 className={css(styles.collegeDetailTitle)}>{this.state.schoolName}</h1>
                <a href={'https://' + this.state.schoolUrl}>{this.state.schoolUrl}</a>
                <h3>Level of Institution: {this.state.levelOfInstitution}</h3>
              </div>
              <div>
              </div>
            </div>
        );
    }
}

export default CollegeDetailHeader;
