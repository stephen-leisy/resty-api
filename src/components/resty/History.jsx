import React from 'react';
import PropTypes from 'prop-types';

function History({ method, url }) {
  return (
    <div>
      {method}
      <br />
      {url}
    </div>
  );
}

History.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default History;
