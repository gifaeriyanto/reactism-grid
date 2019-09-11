import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { MediaQuery } from '../utilities';

const gridColumns = 12;
const percentage = number => number * 100;

export const ColStyled = styled.div(
  ({
    sm, md, lg, xl, offset,
  }) => {
    let cssTmp = {
      position: 'relative',
      width: '100%',
    };

    if (!sm && !md && !lg && !xl) {
      cssTmp = {
        ...cssTmp,
        flexBasis: 0,
        flexGrow: 1,
      };
    }

    if (offset) {
      const num = offset / gridColumns;
      cssTmp = {
        ...cssTmp,
        marginLeft: num === 0 ? 0 : `${percentage(num)}%`,
      };
    }

    if (sm) {
      cssTmp = {
        ...cssTmp,
        [MediaQuery.smMin]: {
          flex: `0 0 ${percentage(sm / gridColumns)}%`,
          maxWidth: `${percentage(sm / gridColumns)}%`,
        },
      };
    }

    if (md) {
      cssTmp = {
        ...cssTmp,
        [MediaQuery.mdMin]: {
          flex: `0 0 ${percentage(md / gridColumns)}%`,
          maxWidth: `${percentage(md / gridColumns)}%`,
        },
      };
    }

    if (lg) {
      cssTmp = {
        ...cssTmp,
        [MediaQuery.lgMin]: {
          flex: `0 0 ${percentage(lg / gridColumns)}%`,
          maxWidth: `${percentage(lg / gridColumns)}%`,
        },
      };
    }

    if (xl) {
      cssTmp = {
        ...cssTmp,
        [MediaQuery.xlMin]: {
          flex: `0 0 ${percentage(xl / gridColumns)}%`,
          maxWidth: `${percentage(xl / gridColumns)}%`,
        },
      };
    }

    return cssTmp;
  },
);

const Col = ({
  children, sm, md, lg, xl, offset, ...props
}) => (
  <ColStyled
    sm={sm}
    md={md}
    lg={lg}
    xl={xl}
    offset={offset}
    {...props}
  >
    {children}
  </ColStyled>
);

Col.propTypes = {
  children: PropTypes.node.isRequired,
  sm: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  md: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  lg: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  xl: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  offset: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

Col.defaultProps = {
  sm: null,
  md: null,
  lg: null,
  xl: null,
  offset: null,
};

export default Col;
