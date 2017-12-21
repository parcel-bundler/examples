import React from "react";
import ListBox from "./ListBox";
import uuid from "uuid";

class MainApp extends React.Component {
  constructor() {
    super();
    this.state = {
      store: [
        { name: "Car", id: uuid() },
        { name: "Bike", id: uuid() },
        { name: "Truck", id: uuid() },
        { name: "Bus", id: uuid() },
        { name: "Train", id: uuid() },
        { name: "Aeroplane", id: uuid() }
      ],
      selected: [],
      active: {
        section: null,
        item: {}
      }
    };
  }
  handleItemSelect(section) {
    return item => () =>
      this.setState({
        ...this.state,
        active: {
          section,
          item
        }
      });
  }
  moveItem(section) {
    return () => {
      if (!this.state.active.section)
        return alert("Please select item to move");
      const selected = this.state[section];
      selected.push(this.state.active.item);
      const itemToRemoveFrom = section === "store" ? "selected" : "store";
      this.state[itemToRemoveFrom].splice(
        this.state[itemToRemoveFrom].findIndex(
          item => item.id === this.state.active.item.id
        ),
        1
      );
      this.setState({
        ...this.state,
        active: {
          item: {},
          section: null
        }
      });
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-default">
            <a href="/" className="navbar-brand">
              Home
            </a>
          </nav>
        </div>
        <div className="row jumbotron">
          <h3>Select Product</h3>
          <div className="col-md-4">
            <ListBox
              active={this.state.active}
              items={this.state.store}
              handleItemSelect={this.handleItemSelect("store")}
            />
          </div>
          <div className="col-md-2">
            <ul className="list-group">
              <li className="list-group-item">
                <button
                  className="btn btn-default"
                  onClick={this.moveItem("selected")}
                >
                  >>
                </button>
              </li>
              <li className="list-group-item">
                <button
                  className="btn btn-default"
                  onClick={this.moveItem("store")}
                >
                  {" "}
                  &#60; &#60;
                </button>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            {" "}
            <ListBox
              active={this.state.active}
              items={this.state.selected}
              handleItemSelect={this.handleItemSelect("selected")}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default MainApp;
