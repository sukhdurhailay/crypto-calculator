import React from 'react';
import PropTypes from 'prop-types';

import DropdownStyled from './dropdown.styled';

function DropdownUI({ options, name, onChange }) {
  const renderedOptions = options.map(({ value, text }) => (
    <option key={value} value={value}>
      {text}
    </option>
  ));

  return (
    <DropdownStyled name={name} onChange={e => onChange(e.target.value)}>
      {renderedOptions}
    </DropdownStyled>
  );
}

DropdownUI.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DropdownUI;
