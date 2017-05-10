import React, {Component} from 'react';
import ListRow from './ListRow.js';
// import { StyleSheet, css } from 'aphrodite';

class TableList extends Component {
  constructor(props) {
      super(props);
      this.state = {
          schools: []
      }
  }

  render() {
    var even = false;
    var rows = [];
    var filterText = this.props.filterText;
      this.props.schools.forEach((school) => {
        if (school['school.name'].toUpperCase().indexOf(filterText.toUpperCase()) === -1) {
            return;
        }
        rows.push(
          <ListRow
            history={this.props.history}
            even={even}
            state={school['school.state']}
            name={school['school.name']}
            ownership={school['school.ownership']}
            investigation={school['school.under_investigation']}
            id={school.id}
            key={school.id} />
        );
        even = !even;
      });
    return (
        <table>
            <thead>
                <tr>
                    <th>School</th>
                    <th>Ownership</th>
                    <th>Under Investigation</th>
                </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
        </table>
    );
  }
}

export default TableList;
