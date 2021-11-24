import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { sayHello } from '../store/actions/hello';
import '../../styles/app.css';

import bgImage from '../../images/kavita_background.jpg';

const FlexDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: white;
`;

export class App extends React.PureComponent {
  /* eslint-disable no-useless-constructor */
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.hello();
  }

  render() {
    return (
      <div className={'container'}>
        <div className={'parent-header-div'}>
          <FlexDiv>
            <div className={'top-caption-header'}>
              “LIFE IS EITHER A DARING ADVENTURE OR NOTHING AT ALL.” - HELEN
              KELLER
            </div>
          </FlexDiv>
          <div className={'header-div'}>
            <div className={'test'}>
              <div className={'navigation-header'}>
                KAVITA CHAUDHRY
                <div>
                  <img src={'../../images/icons/hamburger.svg'} id={'show-hamburger'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  hello: () => dispatch(sayHello())
});

const mapStateToProps = state => ({
  helloState: state.hello
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
