import React, {Component} from 'react';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        width: '70%',
        borderStyle: 'solid',
        borderRadius: '5px',
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: '20px',
        paddingBottom: '25px'
    },
    cardHeader: {
      color: 'black',
      borderBottomStyle: 'solid',
      borderBottomColor: '#e0e0e0'
    },
    cardText: {
        color: 'black'
    },
    tableRows: {
        padding: '0'
    },
    titles: {
        textAlign: 'left',
        fontWeight: 'bolder',
        paddingRight: '5px',
        paddingLeft: '20px'
    },
    arrow: {
        textAlign: 'left'
    },
    data: {
        fontWeight: 'lighter',
        paddingLeft: '5px'
    }
});

class InfoCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: '',
            admissionRate: '',
            carnegieBasic: '',
            levelOfInstitution: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        const localeObject = {
            11: "City: Large (population of 250,000 or more)",
            12: "City: Midsize (population of at least 100,000 but less than 250,000)",
            13: "City: Small (population less than 100,000)",
            21: "Suburb: Large (outside principal city, in urbanized area with population of 250,000 or more)",
            22: "Suburb: Midsize (outside principal city, in urbanized area with population of at least 100,000 but less than 250,000)",
            23: "Suburb: Small (outside principal city, in urbanized area with population less than 100,000)",
            31: "Town: Fringe (in urban cluster up to 10 miles from an urbanized area)",
            32: "Town: Distant (in urban cluster more than 10 miles and up to 35 miles from an urbanized area)",
            33: "Town: Remote (in urban cluster more than 35 miles from an urbanized area)",
            41: "Rural: Fringe (rural territory up to 5 miles from an urbanized area or up to 2.5 miles from an urban cluster)",
            42: "Rural: Distant (rural territory more than 5 miles but up to 25 miles from an urbanized area or more than 2.5 and up to 10 miles from an urban cluster)",
            43: "Rural: Remote (rural territory more than 25 miles from an urbanized area and more than 10 miles from an urban cluster)"
        };
        const carnegieBasicObject = {
            0: "Not classified",
            1: "Associate's Colleges: High Transfer-High Traditional",
            2: "Associate's Colleges: High Transfer-Mixed Traditional/Nontraditional",
            3: "Associate's Colleges: High Transfer-High Nontraditional",
            4: "Associate's Colleges: Mixed Transfer/Vocational & Technical-High Traditional",
            5: "Associate's Colleges: Mixed Transfer/Vocational & Technical-Mixed Traditional/Nontraditional",
            6: "Associate's Colleges: Mixed Transfer/Vocational & Technical-High Nontraditional",
            7: "Associate's Colleges: High Vocational & Technical-High Traditional",
            8: "Associate's Colleges: High Vocational & Technical-Mixed Traditional/Nontraditional",
            9: "Associate's Colleges: High Vocational & Technical-High Nontraditional",
            10: "Special Focus Two-Year: Health Professions",
            11: "Special Focus Two-Year: Technical Professions",
            12: "Special Focus Two-Year: Arts & Design",
            13: "Special Focus Two-Year: Other Fields",
            14: "Baccalaureate/Associate's Colleges: Associate's Dominant",
            15: "Doctoral Universities: Highest Research Activity",
            16: "Doctoral Universities: Higher Research Activity",
            17: "Doctoral Universities: Moderate Research Activity",
            18: "Master's Colleges & Universities: Larger Programs",
            19: "Master's Colleges & Universities: Medium Programs",
            20: "Master's Colleges & Universities: Small Programs",
            21: "Baccalaureate Colleges: Arts & Sciences Focus",
            22: "Baccalaureate Colleges: Diverse Fields",
            23: "Baccalaureate/Associate's Colleges: Mixed Baccalaureate/Associate's",
            24: "Special Focus Four-Year: Faith-Related Institutions",
            25: "Special Focus Four-Year: Medical Schools & Centers",
            26: "Special Focus Four-Year: Other Health Professions Schools",
            27: "Special Focus Four-Year: Engineering Schools",
            28: "Special Focus Four-Year: Other Technology-Related Schools",
            29: "Special Focus Four-Year: Business & Management Schools",
            30: "Special Focus Four-Year: Arts, Music & Design Schools",
            31: "Special Focus Four-Year: Law Schools",
            32: "Special Focus Four-Year: Other Special Focus Institutions",
            33: "Tribal Colleges"
        }
        const levelOfInstitutionObject = {
            1: '4-year',
            2: '2-year',
            3: 'Less than 2-year'
        }
        this.setState({location: nextProps.schoolInfo['school.city'] + ', ' + nextProps.schoolInfo['school.state']});
        this.setState({locale: localeObject[nextProps.schoolInfo['school.locale']]})
        this.setState({
            admissionRate: Math.round(nextProps.schoolInfo['2014.admissions.admission_rate.overall'] * 100) + '%'
        });
        this.setState({
            carnegieBasic: (nextProps.schoolInfo['school.carnegie_basic'] !== -2 ? carnegieBasicObject[nextProps.schoolInfo['school.carnegie_basic']] : 'N/A')
        });
    }
    render() {
      console.log(this.props.schoolInfo)
        return (
            <div className={css(styles.card)}>
              <div  className={css(styles.cardHeader)}>
                <h2>School at a Glance</h2>
              </div>
                <table className={css(styles.cardText)}>
                    <tbody>
                        <tr>
                            <td width="25%">
                                <h3 className={css(styles.titles)}>
                                    State
                                </h3>
                            </td>
                            <td width="10%">
                                <h3 className={css(styles.arrow)}>
                                    →
                                </h3>
                            </td>
                            <td width="65%">
                                <h3 className={css(styles.data)}>
                                    {this.state.location}
                                </h3>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <h3 className={css(styles.titles)}>
                                    Locale
                                </h3>
                            </td>
                            <td>
                                <h3 className={css(styles.arrow)}>
                                    →
                                </h3>
                            </td>
                            <td width="500px">
                                <h3 className={css(styles.data)}>
                                    {this.state.locale}
                                </h3>
                            </td>
                        </tr>
                        <tr>
                            <td width="250px">
                                <h3 className={css(styles.titles)}>
                                    Carnegie Classification
                                </h3>
                            </td>
                            <td>
                                <h3 className={css(styles.arrow)}>
                                    →
                                </h3>
                            </td>
                            <td width="500px">
                                <h3 className={css(styles.data)}>
                                    {this.state.carnegieBasic}
                                </h3>
                            </td>
                        </tr>
                        <tr>
                            <td width="250px">
                                <h3 className={css(styles.titles)}>
                                    Admission Rate
                                </h3>
                            </td>
                            <td>
                                <h3 className={css(styles.arrow)}>
                                    →
                                </h3>
                            </td>
                            <td width="500px">
                                <h3 className={css(styles.data)}>
                                    {this.state.admissionRate}
                                </h3>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default InfoCard;
