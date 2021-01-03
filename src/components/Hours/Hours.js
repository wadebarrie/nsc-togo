import React from "react";

const day = new Date();
const currentDay = day.getDay();

// currentDay = currentDay > 0 ? n - 1 : 6; // zero is sunday, not monday in javascript
console.log(currentDay);
// eslint-disable-next-line no-lone-blocks

class Hours extends React.Component {
  state = {
    links: [
      {
        id: 0,
        name: "Monday: 9am - 5pm",
        to: "/cms",
        className: "side_nav_item"
      },
      {
        id: 2,
        name: "Link2",
        to: "/cms",
        className: "side_nav_item"
      },
      {
        id: 3,
        name: "Link3",
        to: "/cms",
        className: "side_nav_item"
      },
      {
        id: 4,
        name: "Link4",
        to: "/cms",
        className: "side_nav_item"
      }
    ],
    activeLink: null
  };

  handleClick = id => {
    this.setState({ activeLink: id });
  };

  

  render() {
    const { links, activeLink } = this.state;

    return (
      <div>
        {links.map(link => {
          return (
            <div key={link.id}>
              <ul>
                <li
                  onClick={() => this.handleClick(link.id)}
                  className={
                    link.className +
                    (link.id === activeLink ? " todaysDay" : "")
                  }
                >
                  {link.name} {link.id === activeLink}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Hours;
