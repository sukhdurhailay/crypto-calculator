import React from 'react';
import PropTypes from 'prop-types';

import { DropdownStyled, DropdownContainer } from './dropdown.styled';

function DropdownUI({ options, name, onChange }) {
  const renderedOptions = options.map(({ value, text }) => (
    <option key={value} value={value}>
      {text}
    </option>
  ));

  return (
    <DropdownContainer>
      <DropdownStyled name={name} onChange={e => onChange(e.target.value)}>
        {renderedOptions}
      </DropdownStyled>
    </DropdownContainer>
  );
}

DropdownUI.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DropdownUI;
