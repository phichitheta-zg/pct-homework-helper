import React from "react";
import LoginButton from "../components/LoginButton";
import QueueTab from "../components/QueueTab";
import QueueButton from "../components/QueueButton";

export default class Queue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onlineUsers: [
        {
          name: "Carley Peldiak",
          loggedIn: true
        },
        { name: null, loggedIn: null }
      ],
      queue: [
        {
          name: "Lam Tran",
          loggedIn: false
        },
        {
          name: "Evan Eckels",
          loggedIn: false
        }
      ]
    };
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          overflowY: "scroll",
          padding: 10
        }}
      >
        <p style={{ marginTop: 100 }}> Currently Online </p>
        {this.state.onlineUsers.map(user => (
          <LoginButton user={user} />
        ))}

        <p> Up Next </p>
        {this.state.queue.map(user => (
          <QueueTab user={user} />
        ))}
        <QueueButton />
      </div>
    );
  }
}