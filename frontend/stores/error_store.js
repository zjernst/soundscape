const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const ErrorConstants = require('../constants/error_constants');

let _errors = [];

let ErrorStore = new Store(AppDispatcher);

function setErrors(errors) {
  _errors = errors;
}

function resetErrors() {
  _errors = [];
}

ErrorStore.all = function() {
  if (_errors.length > 0) {
    return _errors.slice();
  } else {
    return []
  }
};

ErrorStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case ErrorConstants.SHOW_ERRORS:
      setErrors(payload.errors);
      this.__emitChange();
      break;
    case ErrorConstants.RESET_ERRORS:
      resetErrors();
      this.__emitChange();
      break;
  }
};

module.exports = ErrorStore;

// let _errors = {};
// let _form = "";
//
// const ErrorStore = new Store(AppDispatcher);
//
// function setErrors(payload){
//   _errors = payload.errors;
//   _form = payload.form;
//   ErrorStore.__emitChange();
// }
//
// function clearErrors(){
//   _errors = {};
//   _form = "";
//   ErrorStore.__emitChange();
// }
//
// ErrorStore.__onDispatch = function (payload) {
//   switch (payload.actionType) {
//     case ErrorConstants.SET_ERRORS:
//       setErrors(payload);
//       break;
//     case ErrorConstants.CLEAR_ERRORS:
//       clearErrors();
//       break;
//   }
// };
//
// ErrorStore.formErrors = function (form) {
//   if (form !== _form) {
//     return {};
//   }
//
//   const result = {};
//   for (let field in _errors) {
//     result[field] = Array.from(_errors[field]);
//   }
//
//   return result;
// };
//
// ErrorStore.form = function() {
//   return _form;
// };

// module.exports = ErrorStore;
