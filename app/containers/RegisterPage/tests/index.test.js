import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import H2 from 'components/H2';

import { RegisterPage } from '../index';
import messages from '../messages';

describe('<RegisterPage />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(
      <RegisterPage />
    );
    expect(renderedComponent.contains(
      <H2>
        <FormattedMessage {...messages.trymeHeader} />
      </H2>
    )).toBe(true);
  });
});
