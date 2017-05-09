import React, {Component} from 'react';
import CollegeDetailHeader from './CollegeDetailHeader.js';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    collegeDetail: {
        backgroundColor: '#81c784',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        textAlign: 'center',
        fontFamily: "'Josefin Slab', serif"
    }
});

class CollegeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schoolInfo: [],
            metaData: []
        }
    }

    componentDidMount() {
      var schoolId = this.props.match.params.schoolId;
        fetch('https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=IU6Kpjyt8r8pjIp4CD4Vq6DaW9NmjLlx0TTlXk71&fields=id,school.name,school.ownership,school.under_investigation,school.school_url,school.state,school.city,school.locale,school.carnegie_basic,2014.admissions.admission_rate.overall&id=' + schoolId)
          .then(
            res => res.json()
          )
          .then(
            schoolsData => this.setState({
              schoolInfo: schoolsData.results,
              metaData: schoolsData.metadata
            })
          );
    }

    render() {
        return (
            <div className={css(styles.collegeDetail)}>
              <CollegeDetailHeader schoolInfo={this.state.schoolInfo[0]} />
            </div>
        );
    }
}

export default CollegeDetail;
