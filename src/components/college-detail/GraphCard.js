import React, {Component} from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  card: {
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderRadius: '5px',
      marginTop: '20px',
      paddingBottom: '25px'
  }
});

class GraphCard extends Component {
  constructor(props) {
      super(props)
      this.state = {
        // schoolInfoObject: [],
        // schoolName: '',
        // schoolUrl: ''
      }
  }

  componentWillReceiveProps(nextProps) {
      // this.setState({schoolName: nextProps.schoolInfo['school.name']});
      // this.setState({schoolUrl: nextProps.schoolInfo['school.school_url']});
      // this.setState({schoolInfoObject: nextProps.schoolInfo})

  }

    render() {
        return (
            <div className={css(styles.card)}>
            </div>
        );
    }
}

export default GraphCard;
