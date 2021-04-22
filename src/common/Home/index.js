import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { getHomeList } from "./store/actions";
import styles from "./style.css";
import withStyle from "../withStyle";

class Home extends Component {
  componentDidMount() {
    !this.props.list.length && this.props.getList();
    console.log("mount");
  }

  render() {
    const { list } = this.props;
    console.log("render");
    console.log(list);
    return (
      <div
        style={{
          padding: 10,
          fontSize: 20,
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        <div>I am React Component</div>
        <button
          onClick={() => alert("you clicked")}
          style={{ fontSize: 20, padding: 10 }}
        >
          click
        </button>
        {list?.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.home.list,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getList() {
    dispatch(getHomeList());
  },
});

const exportHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyle(Home, styles));

exportHome.loadData = (store) => {
  console.log("server loadData");
  return store.dispatch(getHomeList());
};

export default exportHome;
