import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeDiv = styled.div`
  background-color: #0a0909;
  color: #e6e6e6;
  padding-bottom: 16px;
`;

export const HomeTitle = styled.h1`
  color: #e6e6e6;
  padding: 16px;
  margin: 0;
`;

export const HomeItem = styled(NavLink)`
  color: #e6e6e6;
  margin: 0;
`;
