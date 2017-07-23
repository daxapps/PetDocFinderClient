import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import H2 from 'components/H2';
import H3 from 'components/H3';
import messages from './messages';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';

export class RegisterPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    // if (this.props.username && this.props.username.trim().length > 0) {
    //   this.props.onSubmitForm();
    // }
  }
  render() {
    return (
      <div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
          <Form onSubmit={this.props.onSubmitForm}>
            <label htmlFor="username">
              <H3>
                <FormattedMessage {...messages.usernameMessage} />
                <Input
                  id="username"
                  type="text"
                />
              </H3>
              <H3>
                <FormattedMessage {...messages.emailMessage} />
                <Input
                  id="email"
                  type="text"
                />
              </H3>
              <H3>
                <FormattedMessage {...messages.passwordMessage} />
                <Input
                  id="password"
                  type="text"
                />
              </H3>
            </label>
          </Form>
        </CenteredSection>
      </div>
    );
  }
}
RegisterPage.propTypes = {
  onSubmitForm: React.PropTypes.func,
};
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
export default connect(null, mapDispatchToProps)(RegisterPage);
