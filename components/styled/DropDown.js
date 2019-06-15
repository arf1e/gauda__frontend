import styled, { keyframes } from 'styled-components';

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;
  border: 1px solid ${props => props.theme.border};
`;

const DropDownItem = styled.div`
  border-bottom: 1px solid ${props => props.theme.border};
  background: ${props => (props.highlighted ? '#f7f7f7' : 'white')};
  padding: 10px;
  transition: all 0.2s;
  ${props => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  border-left: 10px solid
    ${props => (props.highlighted ? props.theme.mainColor : 'white')};
  img {
    margin-right: 10px;
  }
  cursor: pointer;
`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px ${({ theme }) => theme.mainVioletColor};
  }

  to {
    box-shadow: 0 0 10px 1px ${({ theme }) => theme.mainVioletColor};
  }
`;

const SearchStyles = styled.div`
  margin-top:${props => props.theme.mobileMarginTopHeaderElement};
  margin-right:2%;
  position: relative;
  input {
    width: 100%;
    padding: 10px;
    border: 0;
    font-size: 12px;
    font-weight: 700;
    border-bottom: 3px solid ${({ theme }) => theme.border};
    transition: 225ms;
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }

    &:active,
    &:focus {
      outline: none;
      border-bottom-color: ${({ theme }) => theme.mainColor};
    }
  }
  @media (min-width: ${({ theme }) => theme.tabletWidth}) {
    margin-top:0;
    input{
      font-size:16px;
    }
  }
`;

export { DropDown, DropDownItem, SearchStyles };
