import React from 'react';
import PropTypes from 'prop-types';
import History from './History';

function HistoryList({ history }) {
    return (
        <ul>
            { history.map((last) => (
                <li key={Math.floor(Date.now() / 100000)}>
                    <History {...last} />
                </li>
            ))}
        </ul>
    )
}

HistoryList.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            method: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    )
}

export default HistoryList

