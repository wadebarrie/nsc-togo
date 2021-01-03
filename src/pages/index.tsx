import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";

const IndexPage = (props: LayoutProps) => (
  <div>
    {/* Hero */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link}
        pathname={props.location.pathname}
        items={menuItems}
        inverted
      />
      <Container text>
        <Header id="fonts" inverted as="h1">
          North Shore Commissary To-Go
        </Header>
        <Header id="fonts" inverted as="h2">
          Your local cafe in the Capilano Business Park.
        </Header>
        <AnchorLink to="/#menu">
        <Button className="button" primary size="huge">
          Check out our menu!
        </Button>
        </AnchorLink>
      </Container>
    </Segment>

    {/* Features */}
    <Container>
      <Segment vertical className="stripe alternate feature no-bottom">
        <Grid
          columns="3"
          textAlign="center"
          divided
          relaxed
          stackable
          className="container"
        >
          <Grid.Row>
            <Grid.Column>
              <Header className="icon-header" id="fonts" icon>
                <Icon name="coffee"></Icon>
                Coffee
              </Header>
              <p className="blurb">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas eaque at quae cupiditate aspernatur quibusdam!
                Distinctio quod non, harum dolorum earum molestias, beatae
                expedita aliquam dolorem asperiores nemo amet quaerat.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Header className="icon-header" id="fonts" icon>
                <Icon name="utensil spoon"></Icon>
                Food
              </Header>
              <p className="blurb">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas eaque at quae cupiditate aspernatur quibusdam!
                Distinctio quod non, harum dolorum earum molestias, beatae
                expedita aliquam dolorem asperiores nemo amet quaerat.
              </p>
            </Grid.Column>
            <Grid.Column>
              <Header className="icon-header" id="fonts" icon>
                <Icon name="shopping basket"></Icon>
                Grocery
              </Header>
              <p className="blurb">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas eaque at quae cupiditate aspernatur quibusdam!
                Distinctio quod non, harum dolorum earum molestias, beatae
                expedita aliquam dolorem asperiores nemo amet quaerat.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  
    {/* Food Menu */}
    <Container id="menu">
      <Segment vertical>
      <Grid stackable verticalAlign="middle" className="container">  
        <Grid.Row>
          <Grid.Column width="8">
          <Header className="menu-header" id="fonts">Coffee</Header> 
          <ul className="leaders">
            <li><span>Latte</span> <span>$5.95</span></li>
            <li><span>Americano</span> <span>$4.95</span></li>
            <li><span>Flat White</span> <span>$4.95</span></li>
            <li><span>Drip Coffee</span> <span>$3.25</span></li>
            <li><span>Irish Coffee</span> <span>$10.95</span></li>
          </ul>
          </Grid.Column>
          <Grid.Column width="8">
          <Header className="menu-header" id="fonts">Food</Header>  
          <ul className="leaders">
            <li><span>Soup and Sandwich</span> <span>$7.95</span></li>
            <li><span>Burger and Fries</span> <span>$8.95</span></li>
            <li><span>Pasta</span> <span>$7.95</span></li>
            <li><span>Pizza</span> <span>$5.25</span></li>
            <li><span>Salad</span> <span>$10.95</span></li>
          </ul>
          </Grid.Column>
        </Grid.Row>
      </Grid>  
      </Segment>
    </Container>
  </div>
);

export default withLayout(IndexPage);
