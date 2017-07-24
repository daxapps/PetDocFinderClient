/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import H3 from 'components/H3';
import P from 'components/P';
import ReposList from 'components/ReposList';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
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

            <CenteredSection>
              <H2>
                <FormattedMessage {...messages.trymeHeader} />
              </H2>
              <Form onSubmit={this.props.onSubmitForm}>
                <label htmlFor="register">
                  <H3>
                    <FormattedMessage {...messages.usernameMessage} />
                    <Input
                      id="username"
                      type="text"
                      // placeholder="mxstbr"
                      // value={this.props.username}
                      // onChange={this.props.onChangeUsername}
                    />
                  </H3>
                  <H3>
                    <FormattedMessage {...messages.emailMessage} />
                    <Input
                      id="email"
                      type="text"
                      // placeholder="mxstbr"
                      // value={this.props.email}
                      // onChange={this.props.onChangeEmail}
                    />
                  </H3>
                  <H3>
                    <FormattedMessage {...messages.passwordMessage} />
                    <Input
                      id="password"
                      type="text"
                    // placeholder="mxstbr"
                    // value={this.props.password}
                    // onChange={this.props.onChangePassword}
                    />
                  </H3>
                </label>
              </Form>
              <ReposList {...reposListProps} />
            </CenteredSection>
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
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  // onChangeUsername: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
