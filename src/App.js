import React, { Component } from 'react';
import Header from './components/header';
import Headline from './components/headline';
import SharedButton from './components/button';
import ListItem from './components/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './app.scss';

const tempArr = [
  {
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'joebloggs@gmail.com',
    age: 24,
    onlineStatus: true,
  },
];

const initialState = {
  hideButton: false,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
    this.state = {
      ...initialState,
    };
  }

  fetch() {
    this.props.fetchPosts();
    this.exampleMethod_updatesState();
  }

  exampleMethod_updatesState() {
    const { hideButton } = this.state;
    this.setState({ hideButton: !hideButton });
  }

  exampleMethod_returnsAValue(number) {
    return number + 1;
  }

  render() {
    const { posts } = this.props;
    const { hideButton } = this.state;

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch,
    };

    return (
      <div className='App' data-test='appComponent'>
        <Header>
          <section className='main'></section>
        </Header>
        <section className='main'>
          <Headline header='Posts' desc='Click the button to render posts' tempArr={tempArr} />
          {!hideButton && <SharedButton {...configButton} />}

          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body,
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts },
)(App);
