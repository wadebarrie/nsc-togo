import { Link } from "gatsby";
import * as React from "react";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import {
  Segment,
  Icon,
  Container,
  Sidebar,
  Grid,
  List,
  Header,
} from "semantic-ui-react";
import "../css/styles.css";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";
import { Provider } from "react-redux";
import { store } from "../store";

export const menuItems = [
  { name: "Home", path: "/", exact: true, icon: "home", inverted: true },
  { name: "About", path: "/about/", exact: true, icon: "info circle" },
  { name: "Blog", path: "/blog/", exact: false, icon: "newspaper" },
];

export interface LayoutProps {
  location: {
    pathname: string;
  };
  children: any;
}

const Layout = (props: LayoutProps) => {
  const { pathname } = props.location;
  const isHome = pathname === "/";

  return (
    <Provider store={store}>
      <Sidebar.Pushable as={Segment}>
        <SidebarMenu
          Link={Link}
          pathname={pathname}
          items={menuItems}
          visible={false}
        />

        <Sidebar.Pusher style={{ minHeight: "100vh" }}>
          {/* Header */}
          {isHome ? null : (
            <HeaderMenu Link={Link} pathname={pathname} items={menuItems} />
          )}

          {/* Render children pages */}
          <div style={{ paddingBottom: 60 }}>{props.children}</div>

          {/* Footer */}
          <Segment inverted vertical style={{ padding: "5em 0em" }}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header id="fonts" inverted as="h4" content="Contact" />
                    <List link inverted>
                      <List.Item as="a">(604) 786-2034</List.Item>
                      <List.Item as="a">Email Us</List.Item>
                      <List.Item as="a">
                        222 McKay Road, North Vancouver, BC <br /> V7P 3H4
                      </List.Item>
                      <List.Item as="a">North Vancouver, BC</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header id="fonts" inverted as="h4" content="Hours" />
                    <List className="hours-list" link inverted>
                      <List.Item className="hours mon" as="a">
                        Monday: 9am - 5pm
                      </List.Item>
                      <List.Item className="hours tue" as="a">
                        Tuesday: 9am - 5pm
                      </List.Item>
                      <List.Item className="hours wed" as="a">
                        Wednesday: 9am - 5pm
                      </List.Item>
                      <List.Item className="hours thu" as="a">
                        Thursday: 9am - 5pm
                      </List.Item>
                      <List.Item className="hours fri" as="a">
                        Friday: 9am - 5pm
                      </List.Item>
                      <List.Item className="hours sat" as="a">
                        Saturday: 9am - 5pm
                      </List.Item>
                      <List.Item className="hours sun" as="a">
                        Sunday: Closed
                      </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <Header id="fonts" as="h4" inverted>
                      Footer Header
                    </Header>
                    {/* <Hours/> */}
                    <p>
                      Extra space for a call to action or promo space that could
                      help re-engage customers.
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Provider>
  );
};

export default Layout;

export const withLayout = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) =>
  class WithLayout extends React.Component<P & LayoutProps> {
    render() {
      return (
        <Layout location={this.props.location}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };
