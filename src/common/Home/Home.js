import React, { Component } from "react";
import { connect } from "react-redux";
import { getHomeList } from "./store/actions";

const Home = (props) => {
  const { list } = props;

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
      {list.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
      <button
        onClick={() => alert("you clicked")}
        style={{ fontSize: 20, padding: 10 }}
      >
        click
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.home.newsList,
});

const mapDispatchToProps = (dispatch) => ({
  getHomeList() {
    dispatch(getHomeList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
