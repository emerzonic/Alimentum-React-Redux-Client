webpackHotUpdate("main",{

/***/ "./src/reducers/deleteRecipeReducer.js":
/*!*********************************************!*\
  !*** ./src/reducers/deleteRecipeReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");

var initialState = {};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["DELETE_RECIPE"]:
      return action.payload;

    default:
      return state.favoriteRecipes.filter(function (recipe) {
        return recipe.id !== action.payload;
      });
  }
});

/***/ })

})
//# sourceMappingURL=main.768b4f700b66949dd638.hot-update.js.map