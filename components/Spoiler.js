import React from 'react';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const SpoilerBody = styled.div`
  cursor: pointer;
  margin: 20px auto;
  padding: 10px 20px;
  border-left: 5px solid ${({ theme }) => theme.mainColor};
  transition: 225ms;

  &.spoilerbody--active {
    border-left: 5px solid black;
  }

  .spoiler__content {
    padding-top: 10px;
    transition: 225ms;
    position: relative;
    max-width: 290px;
  }
  .answer{
    text-align: justify;
    line-height: 2rem;
  }
  .questionText {
    font-size: 24px;
    color: ${({ theme }) => theme.mainColor};
    max-width: 560px;
    transition: 225ms;

    &--active {
      color: black;
    }
  }

  &:active {
    transform: scale(0.97);
  }

  .spoiler__content--open {
    min-height: auto;
  }

  .slide-enter {
    top: -5px;
    opacity: 0;
  }

  .slide-enter-active {
    top: 0;
    opacity: 1;
    transition: 225ms;
  }

  .slide-leave {
    top: 0;
    opacity: 1;
  }

  .slide-leave-active {
    top: -20px;
    transition: 150ms;
    opacity: 0;
  }

  @media (min-width: ${({ theme }) => theme.tabletWidth}) {
    width: 450px;
    align-self: flex-start;
    margin: 30px 0;
  }

`;

export default class Spoiler extends React.Component {
  state = {
    isOpen: false,
  };
  flipSpoiler = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const { isOpen } = this.state;
    const { question, answer } = this.props;
    const transitionOptions = {
      transitionName: 'slide',
      transitionEnterTimeout: 225,
      transitionLeaveTimeout: 150,
    };
    return (
      <a onClick={this.flipSpoiler}>
        <SpoilerBody className={`${isOpen && 'spoilerbody--active'}`}>
          <h2 className={`questionText ${isOpen && 'questionText--active'}`}>
            {question}
          </h2>
          <ReactCSSTransitionGroup {...transitionOptions}>
            {isOpen && (
              <div className="spoiler__content">
                <p className="answer">{answer}</p>
              </div>
            )}
          </ReactCSSTransitionGroup>
        </SpoilerBody>
      </a>
    );
  }
}
