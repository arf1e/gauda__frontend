import styled from 'styled-components';
const StyledQuestions = styled.div`
  .headingTwo {
    position: relative;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    border: 4px double rgba(255, 255, 255, 0.25);
    border-width: 4px 0;
    margin: 1.5em 0em;
    line-height: 2em;
  }
  .category {
    text-transform: uppercase;
    margin: 30px 0;
  }
  .headingFour {
    text-transform: uppercase;
    padding: 0rem 1em;
    margin: 2rem 0;
    &:hover {
      cursor: pointer;
    }
    &__text {
      margin: 1rem 0;
      padding: 0rem 2rem;
      text-align: justify;
      font-size: 20px;
      line-height: 2rem;
    }
    .toggle-button {
      display: block;
      position: relative;
      padding-left: 35px;
      outline: none;
      background: none;
      border: none;
      padding: 0;
      margin: 0;
    }
  }
`;
export default StyledQuestions;