import React from 'react';
import PropTypes from 'prop-types';

function Controls({ urlSubmit, urlSearch, onChange, method }) {
  return (
    <div onSubmit={urlSubmit}>
      <form>
        <input
          type="text"
          placeholder="URL"
          name="url"
          value={urlSearch}
          onChange={onChange}
        />
        <input
          type="radio"
          id="get"
          name="method"
          value="GET"
          onChange={onChange}
        />
        <label htmlFor="get">GET</label>
        <input
          type="radio"
          id="post"
          name="method"
          value="POST"
          onChange={onChange}
        />
        <label htmlFor="post">POST</label>
        <input
          type="radio"
          id="put"
          name="method"
          value="PUT"
          onChange={onChange}
        />
        <label htmlFor="put">PUT</label>
        <input
          type="radio"
          id="patch"
          name="method"
          value="PATCH"
          onChange={onChange}
        />
        <label htmlFor="patch">PATCH</label>
        <input
          type="radio"
          id="delete"
          name="method"
          value="DELETE"
          onChange={onChange}
        />
        <label htmlFor="delete">DELETE</label>
        <button aria-label="go-button">Go!</button>
      </form>
    </div>
  );
}

Controls.propTypes = {};

export default Controls;
