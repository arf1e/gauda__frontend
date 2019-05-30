import React from 'react';
import styled from 'styled-components';
import StyledButton from './styled/StyledButton';

const ImageContainer = styled.article`
  width: 100%;
  display: flex;
  background-image: url(${props => props.img || '/static/img/cheese.png'});
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${props => props.sizing || '1150px auto'};
  min-height: 400px;
  padding: 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-top: 140px;
  padding-bottom: 25px;

  .inner {
    width: 320px;
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => theme.tabletWidth}) {
    padding-bottom: 60px;

    .inner {
      width: 668px;
    }
  }

  @media (min-width: ${({ theme }) => theme.desktopWidth}) {
    padding-bottom: 160px;

    .inner {
      width: 1050px;
    }
  }
`;

const Message = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 15px;
  max-width: 320px;

  .message-inner {
    border: 1px solid black;
    padding: 10px 20px;

    h2 {
      font-size: 24px;
      max-width: 225px;
      margin-bottom: 30px;
    }

    p {
      margin-bottom: 25px;
    }
  }

  @media (min-width: ${({ theme }) => theme.tabletWidth}) {
    max-width: 440px;

    .message-inner {
      border: 2px solid black;

      h2 {
        font-size: 28px;
        max-width: 320px;
      }

      p {
        font-size: 16px;
        max-width: 335px;
        margin-bottom: 10px;
      }

      button {
        font-size: 16px;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.desktopWidth}) {
    .message-inner {
      border: 3px solid black;

      h2 {
        font-size: 28px;
        max-width: 300px;
      }

      p {
        font-size: 18px;
      }

      button {
        font-size: 18px;
        padding: 10px 40px;
      }
    }
  }
`;

const MessageBlock = ({
  title = 'Say cheese, say gouda!',
  content,
  action,
  sizing,
}) => (
  <Message>
    <div className="message-inner">
      <h2>{title}</h2>
      {content && <p>{content}</p>} 
      {action && <StyledButton>{action}</StyledButton>}
    </div>
  </Message>
);

const Promo = props => (
  <ImageContainer img={props.img} sizing={props.sizing}>
    <div className="inner">
      <MessageBlock {...props} />
    </div>
  </ImageContainer>
);

export default Promo;
