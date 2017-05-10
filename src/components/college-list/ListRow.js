import React, {Component} from 'react';
import {Redirect} from 'react-router';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
    listRow: {
        cursor: 'pointer',
        ':hover': {
            borderStyle: 'solid',
            borderColor: '#b3e5fc',
            borderWidth: '4px'
        }
    },
    listRow_Color1: {
        borderStyle: 'solid',
        borderColor: '#f5f5f5',
        backgroundColor: '#f5f5f5'
    },
    listRow_Color2: {
        borderStyle: 'solid',
        borderColor: '#e0e0e0',
        backgroundColor: '#e0e0e0'
    },
    underInvestigationColor: {
        borderStyle: 'solid',
        borderColor: '#fff59d',
        backgroundColor: '#fff59d'
    },
    listCell: {
        padding: '2px',
        textAlign: 'center'
    }
});

class ListRow extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
      this.props.history.push('/college/' + this.props.id);
    }

    render() {
        const ownershipObject = {
            1: 'Public',
            2: 'Private (Nonprofit)',
            3: 'Private (For-profit)'
        }
        var school = this.props.name;
        var ownership = ownershipObject[this.props.ownership];
        var investigation = this.props.investigation;
        if (investigation === 0) {
            investigation = '❕'
            if (this.props.even) {
                var backgroundColor = css(styles.listRow, styles.listRow_Color2);
            } else {
                var backgroundColor = css(styles.listRow, styles.listRow_Color1);
            }
        } else {
            investigation = '❗️'
            var backgroundColor = css(styles.listRow, styles.underInvestigationColor);
        }
        return (
            <tr className={backgroundColor} onClick={this.handleSubmit}>
                <td className={css(styles.listCell)}>
                    {school}
                </td>
                <td className={css(styles.listCell)}>
                    {ownership}
                </td>
                <td className={css(styles.listCell)}>
                    {investigation}
                </td>
            </tr>
        );
    }
}

export default ListRow;
