import React from 'react';

const styles = {
  select: {
    fontSize: 20,
  },
};

const CategorySelector = ({ options, value, onChange = () => null }) => (
  <select
    style={styles.select}
    value={value}
    onChange={e => onChange(e.target.value)}
  >
    {options.map(o => (
      <option key={o} value={o}>
        {o}
      </option>
    ))}
  </select>
);

export default CategorySelector;
