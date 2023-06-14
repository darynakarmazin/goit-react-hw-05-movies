import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieDetailsPage = styled.div`
  background-color: #0a0909;
  color: #e6e6e6;
  padding: 20px;
  padding-bottom: 40px;
`;

export const MovieDetailsDiv = styled.div`
  display: flex;
  gap: 40px;
`;

export const MovieDetailsGenres = styled.div`
  display: flex;
  gap: 8px;
`;

export const MovieDetailsLink = styled(NavLink)`
  color: #e6e6e6;
  margin: 0;
`;