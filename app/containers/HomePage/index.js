/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
// import H3 from 'components/H3';
import P from 'components/P';
import RegisterPage from '../RegisterPage';
import CenteredSection from './CenteredSection';
// import Form from './Form';
// import Input from './Input';
import Section from './Section';
import messages from './messages';
// import { loadRepos } from '../App/actions';
// import { changeUsername } from './actions';
// import { makeSelectUsername } from './selectors';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    // if (this.props.username && this.props.username.trim().length > 0) {
    //   this.props.onSubmitForm();
    // }
  }

  render() {
    // const { loading, error, repos } = this.props;
    // const reposListProps = {
    //   loading,
    //   error,
    //   repos,
    // };

    return (
      <article>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'A React.js application homepage' },
          ]}
        />
        <div>
          <Section>
            <CenteredSection>
              <H2>
                <FormattedMessage {...messages.makedecisionHeader} />
              </H2>
              <P>
                <FormattedMessage {...messages.makedecisionMessage} />
              </P>
            </CenteredSection>
            <CenteredSection>
              <H2>
                <FormattedMessage {...messages.helpothersHeader} />
              </H2>
              <P>
                <FormattedMessage {...messages.helpothersMessage} />
              </P>
            </CenteredSection>
            <RegisterPage />
          </Section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  // repos: React.PropTypes.oneOfType([
  //   React.PropTypes.array,
  //   React.PropTypes.bool,
  // ]),
  // onSubmitForm: React.PropTypes.func,
  // username: React.PropTypes.string,
  // onChangeUsername: React.PropTypes.func,
};

// export function mapDispatchToProps(dispatch) {
//   return {
//     onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
//     onSubmitForm: (evt) => {
//       if (evt !== undefined && evt.preventDefault) evt.preventDefault();
//       dispatch(loadRepos());
//     },
//   };
// }

// const mapStateToProps = createStructuredSelector({
  // repos: makeSelectRepos(),
  // username: makeSelectUsername(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
// });

// Wrap the component to inject dispatch and state into it
export default connect(HomePage);
