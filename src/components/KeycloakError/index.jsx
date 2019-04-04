import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import { KeycloakContext } from '../KeycloakWrapper';

/**
 * Render the Keycloak ERROR if there any
 */
export default class KeycloakError extends PureComponent {
  static propTypes = {
    /** The CSS class name of the wrapper element */
    className: string,
  };

  /**
   * Normalize the error into human readable string
   * @param error
   * @returns {String}
   */
  normalizeError(error) {
    if (!error) {
      return null;
    }

    return error.message || error;
  }

  render() {
    return (
      <KeycloakContext.Consumer>
        {({ error }) => this.normalizeError(error)}
      </KeycloakContext.Consumer>
    );
  }
}