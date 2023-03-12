export interface SpGraphqlAuthenticationError {
  type: 'AUTHENTICATION';
}
export interface SpGraphqlAuthorisationError {
  type: 'AUTHORISATION';
}

export interface SpGraphqlValidationError {
  type: 'VALIDATION';
  details: SpGraphqlValidationErrorDetails[];
}

export interface SpGraphqlValidationErrorDetails {
  attribute: string;
  error: string;
}

export type SpGraphqlKnownError = SpGraphqlAuthenticationError | SpGraphqlAuthorisationError | SpGraphqlValidationError;

export interface SpGraphqlRequestErrorData {
  [key: string]: any;
  displayMessage: string;
  query: string;
  details?: SpGraphqlValidationErrorDetails;
}

export class SpGraphqlRequestError extends Error {
  readonly data: any;
  readonly details?: SpGraphqlValidationErrorDetails;
  readonly displayMessage: string;
  readonly errorCode: string;

  constructor(errorCode: string, data: SpGraphqlRequestErrorData) {
    super(errorCode);

    this.name = 'GraphqlError';

    this.data = data;
    this.details = data?.details;
    this.displayMessage = data?.displayMessage;
    this.errorCode = errorCode;

    //logger.error(errorCode, data);
  }

  toString(): string {
    return this.displayMessage;
  }
}
