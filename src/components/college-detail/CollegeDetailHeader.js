import React, {Component} from 'react';
import InfoCard from './InfoCard.js';
import GraphCard from './GraphCard.js';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    collegeDetailTitle: {
      marginBottom: '0'
    },
    link: {
      color: 'white',
      textDecoration: 'none'
    }
});

class CollegeDetailHeader extends Component {
  constructor(props) {
      super(props)
      this.state = {
        schoolInfoObject: [],
        schoolName: '',
        schoolUrl: ''
      }
  }

  componentWillReceiveProps(nextProps) {
      this.setState({schoolName: nextProps.schoolInfo['school.name']});
      this.setState({schoolUrl: nextProps.schoolInfo['school.school_url']});
      this.setState({schoolInfoObject: nextProps.schoolInfo})

  }

    render() {
        return (
            <div>
              <div>
                <h1 className={css(styles.collegeDetailTitle)}>{this.state.schoolName}</h1>
              <a href={'https://' + this.state.schoolUrl} className={css(styles.link)}>{this.state.schoolUrl}</a>
              </div>
              <div>
                <InfoCard schoolInfo={this.state.schoolInfoObject}/>
              </div>
              <div>
                {/* <GraphCard schoolInfo={this.state.schoolInfoObject}/> */}
              </div>
            </div>
        );
    }
}

export default CollegeDetailHeader;
