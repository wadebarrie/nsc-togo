import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Menu,
  Message,
} from "semantic-ui-react";

const HeroBanner = () =>

<Message size="massive">
          <Container>
            <Header size="huge" as="h1">
              Hello, world!
            </Header>
            <p>
              This is a template for a simple marketing or informational
              website. It includes a large callout called a jumbotron and three
              supporting pieces of content. Use it as a starting point to create
              something more unique.
            </p>
            <Button size="large" primary>
              Learn more &raquo;
            </Button>
          </Container>
        </Message>;

export default HeroBanner;
