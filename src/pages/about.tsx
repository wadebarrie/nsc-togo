import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import { withLayout } from "../components/Layout";

const AboutPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>About</Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p>Put some about content here if you want to.</p>
      </Segment>
    </Container>
  );
};

export default withLayout(AboutPage);
