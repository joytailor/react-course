import React from 'react';

const styles = {
  select: {
    fontSize: 20,
  },
};

const CategorySelector = ({ options, value, onChange }) => (
  <select
    style={styles.select}
    value={value}
    onChange={e => onChange(e.target.value)}
  >
    {options &&
      options.map(o => (
        <option key={o.id} value={o.name}>
          {o.name}
        </option>
      ))}
  </select>
);

export default CategorySelector;
