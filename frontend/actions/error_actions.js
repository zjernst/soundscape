const AppDispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants');

module.exports = {
  setErrors(form, errors) {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.SET_ERRORS,
      form: form,
      errors: errors
    });
  },

  clearErrors() {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS
    });
  },

  receiveErrors: function(errors) {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.SHOW_ERRORS,
      errors: errors
    });
  },

  resetErrors: function() {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.RESET_ERRORS
    });
  }
};
