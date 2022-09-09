import React, { useState } from 'react';
import InputNumber from 'elements/Form/InputNumber';

export default function Example() {
  const [value, setValue] = useState(0);

  return (
    <InputNumber
      max={30}
      value={value}
      name="value"
      suffix=' hotel'
      isSuffixPlural
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
