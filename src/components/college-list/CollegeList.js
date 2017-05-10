import React, {Component} from 'react';
import FilterableTable from './FilterableTable.js';

class CollegeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schools: [],
            metaData: []
        }
    }

    componentDidMount() {
        fetch('https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=IU6Kpjyt8r8pjIp4CD4Vq6DaW9NmjLlx0TTlXk71&fields=id,school.name,school.state_fips,school.under_investigation,school.ownership,school.state&_per_page=25&school.state=' + this.props.match.params.stateName + '&_' + this.props.match.params.page + '&_sort=school.name')
          .then(
            res => res.json()
          )
          .then(
            schoolsData => this.setState({
              schools: schoolsData.results,
              metaData: schoolsData.metadata
            })
          );
    }

    render() {
      console.log(this.props.history);
        return (
            <div>
                <FilterableTable history={this.props.history} metaData={this.state.metaData} schools={this.state.schools} params={this.props.match.params} />
            </div>
        );
    }
}

export default CollegeList;
