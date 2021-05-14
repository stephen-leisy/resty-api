import React from 'react'
import PropTypes from 'prop-types'

function Sidebar({ history }) {
    return (
        <ul>
            { history.map((last) => (
                <li>
                    {last.method}<br></br>
                    {last.url}
                </li>
            ))}
        </ul>
    )
}

Sidebar.propTypes = {

}

export default Sidebar

