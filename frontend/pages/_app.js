/*
  Этот файл нужен для доступа к самому старшему компоненту приложения.
  В основном его смысл заключается в управлении состоянием.
  https://nextjs.org/docs/#custom-app
*/
import App, { Container } from 'next/app';
import Page from '../components/Page';

class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <Container>
        <Page>
          <Component />
        </Page>
      </Container>
    );
  }
}

export default MyApp;
