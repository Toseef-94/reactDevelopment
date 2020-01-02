import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { PostData } from "../../services/PostData";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";


class Dashboard extends Component {
    constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

    componentWillMount(){
    if (sessionStorage.getItem("userData")){
      console.log("call user feed");
    }
    else {
      this.setState({redirect: true});
    }

    }

  render() {
        if (this.state.redirect) {
          return <Redirect to={"/login"} />;
        }
    return( <div> Welcome </div>);
  }
}

export default Dashboard;
