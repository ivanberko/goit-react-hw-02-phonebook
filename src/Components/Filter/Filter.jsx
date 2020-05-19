import React from "react";

const Filter = ({contacts, filter, handleFindName}) => (
  <div>
    {contacts.length >= 2 && (
      <label>
        Find
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFindName}
        />
      </label>
    )}
  </div>
);
export default Filter;