import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

function Display({ display }) {
  return (
    <div data-testid="display">
      <ReactJson src={display} theme={'solarized'} />
    </div>
  );
}

Display.propTypes = {
  display: PropTypes.object.isRequired,
};

export default Display;
