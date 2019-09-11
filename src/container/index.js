import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { RowStyled } from '../row';
import { ColStyled } from '../col';

const ContainerStyled = styled.div(
  ({ gutter, padding, size }) => ({
    margin: '0 auto',
    paddingLeft: parseFloat(padding) || gutter / 2,
    paddingRight: parseFloat(padding) || gutter / 2,
    maxWidth: size,
    [`& > ${RowStyled}`]: {
      marginLeft: -gutter / 2,
      marginRight: -gutter / 2,
      [`& > ${ColStyled}`]: {
        paddingLeft: gutter / 2,
        paddingRight: gutter / 2,
      },
    },
  }),
);

const Container = ({
  children, gutter, padding, size, ...props
}) => (
  <ContainerStyled
    gutter={gutter}
    padding={padding}
    size={size}
    {...props}
  >
    {children}
  </ContainerStyled>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  gutter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Container.defaultProps = {
  gutter: 32,
  size: 1346,
  padding: null,
};

export default Container;
