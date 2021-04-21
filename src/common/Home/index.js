import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { getHomeList } from "./store/actions";

class Home extends Component {
  componentDidMount() {
    this.props.getList();
  }

  render() {
    const { list } = this.props;
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
        {list?.map((item) => (
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
