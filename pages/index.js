import React from 'react';
import { connect } from 'react-redux';
import Main from '../components/Main/Main';

const Home = () => {
  return <Main />;
};

export default connect()(Home);
