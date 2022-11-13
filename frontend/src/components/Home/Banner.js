import React from "react";
import logo from "../../imgs/logo.png";
import { connect } from "react-redux";
import agent from "../../agent";

const mapStateToProps = (state) => ({
  ...state.itemList
});

const mapDispatchToProps = (dispatch) => ({
  
});



const Banner = (props) => {
console.log('props: ', props);

  const handleSearch = (ev) => {
    const title = ev.target.value;
    if (title.length >=3 ) {
    props.onSearchTitle(
      title,
       (page) => agent.Items.byTitle(title, page),
       agent.Items.byTitle(title))
    }
    else if (title.length === 0) {
      props.onSearchTitle(title, 
        (page) => agent.Items.all(page),
      agent.Items.all())
    }
  }

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <span><input type="text" id="search-box" minLength="3" 
          onChange={handleSearch}/></span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
