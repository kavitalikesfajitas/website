import React from 'react';
import { connect } from 'react-redux';
import { sayHello } from '../store/actions/hello';

export class App extends React.PureComponent {
  /* eslint-disable no-useless-constructor */
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.hello();
  }

  render() {
    return <div>{this.props.helloState.greeting}</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  hello: () => dispatch(sayHello())
});

const mapStateToProps = state => ({
  helloState: state.hello
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
