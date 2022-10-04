import React, { useState } from 'react';
import InputDate from 'elements/Form/InputDate';

export default function Example() {
  const [value, setValue] = useState(0);

  return (
    <InputDate
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
