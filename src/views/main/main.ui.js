import React from 'react';

import Dropdown from '../../components/dropdown';

function MainUI() {
  return (
    <div>
      <h1>CryptoCalc</h1>
      <p>Check your crypto rates</p>
      <Dropdown
        name="dropdown"
        options={[
          { value: 'BTC', text: 'Bitcoin' },
          { value: 'BCH', text: 'Bitcoin Cash' },
          { value: 'ETH', text: 'Ethereum' },
          { value: 'LTC', text: 'Litecoin' }
        ]}
        onChange={value => console.log(value)}
      />
    </div>
  );
}

export default MainUI;
