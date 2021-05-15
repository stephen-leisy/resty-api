import React from 'react'
import PropTypes from 'prop-types'

function History({ method, url }) {
    return (
        <div>
            {method}
            <br />{url}
        </div>
    )
}

History.propTypes = {

}

export default History

