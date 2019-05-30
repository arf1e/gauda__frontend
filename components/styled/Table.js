import styled from 'styled-components';

const Table = styled.table`
  border-spacing: 0;
  width: 100%;
  border: 1px solid ${props => props.theme.border};
  thead {
    font-size: 16px;
    font-weight: 700 !important;
    text-transform: uppercase;
  }
  td,
  th {
    border-bottom: 1px solid ${props => props.theme.border};
    border-right: 1px solid ${props => props.theme.border};
    position: relative;
    padding: 5px;
    &:last-child {
      border-right: none;
      width: 150px;
      button {
        width: 100%;
      }
    }
  }
  tr {
    &:hover {
      background: ${props => props.theme.border};
    }
  }

  td label {
    padding: 10px 5px;
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

export default Table;
