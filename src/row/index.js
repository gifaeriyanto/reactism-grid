import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { ColStyled } from '../col';

export const RowStyled = styled.div(
  {
    display: 'flex',
    flexWrap: 'wrap',
  },
  ({ noGutter }) => {
    if (noGutter) {
      return ({
        marginLeft: '0 !important',
        marginRight: '0 !important',
        [`& > ${ColStyled}`]: {
          paddingLeft: '0 !important',
          paddingRight: '0 !important',
        },
      });
    }
    return null;
  },
);

const Row = ({ children, noGutter, ...props }) => (
  <RowStyled
    noGutter={noGutter}
    {...props}
  >
    {children}
  </RowStyled>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
  noGutter: PropTypes.bool,
};

Row.defaultProps = {
  noGutter: false,
};

export default Row;
