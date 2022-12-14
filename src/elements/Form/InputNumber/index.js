import React, { useState } from 'react';

import propTypes from 'prop-types';
import './index.scss';

export default function Number(props) {
  const {
    value,
    placeholder,
    name,
    min,
    max,
    prefix,
    suffix,
    outerClassName,
    isSuffixPlural,
  } = props;
  const [inputValue, setInputValue] = useState(`${prefix}${value}${suffix}`);

  const onChange = (e) => {
    let value = String(e.target.value);
    if (prefix) {
      value = value.replace(prefix);
    }

    if (suffix) {
      value = value.replace(suffix);
    }

    const patternNumeric = RegExp('[0-9]*');
    const isNumeric = patternNumeric.test(value);

    if (isNumeric && +value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });

      setInputValue(
        `${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? 's' : ''}`
      );
    }
  };

  const minus = () => {
    if (value > min) {
      onChange({
        target: {
          name: name,
          value: value - 1,
        },
      });
    }
  };

  const plus = () => {
    if (value < max) {
      onChange({
        target: {
          name: name,
          value: value + 1,
        },
      });
    }
  };

  return (
    <div className={['input-number mb-3', outerClassName].join(' ')}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text minus" onClick={minus}>
            -
          </span>
        </div>
        <input
          min={min}
          max={max}
          name={name}
          pattern="[0-9]*"
          className="form-control"
          placeholder={placeholder ? placeholder : 0}
          value={String(inputValue)}
          onChange={onChange}
        />
        <div className="input-group-append">
          <span className="input-group-text plus" onClick={plus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
}

Number.defaultProps = {
  min: 0,
  max: 1,
  prefix: '',
  suffix: '',
};

Number.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  min: propTypes.number,
  max: propTypes.number,
  name: propTypes.string,
  prefix: propTypes.string,
  suffix: propTypes.string,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  isSuffixPlural: propTypes.bool,
};
