exports.id = "component---src-pages-proof-of-reduction-page-js";
exports.ids = ["component---src-pages-proof-of-reduction-page-js"];
exports.modules = {

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);



const Navbar = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "top-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "menu-items"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/",
    className: "menu-item"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/topics",
    className: "menu-item"
  }, "Topics"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/examples",
    className: "menu-item"
  }, "Examples"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/about",
    className: "menu-item"
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/contact",
    className: "menu-item"
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    className: "search-bar",
    placeholder: "Search topics..."
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);



const Layout = ({
  children
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    style: {
      margin: "0 auto",
      maxWidth: "var(--size-content)",
      padding: "var(--space-4)",
      flex: 1
    }
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    style: {
      textAlign: "center",
      padding: "var(--space-3) var(--space-4)",
      fontSize: "var(--font-sm)",
      backgroundColor: "#f8f9fa",
      color: "#6c757d"
    }
  }, "\xA9 ", new Date().getFullYear(), " \xB7 Built with Gatsby"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/63159454.json */ "./public/page-data/sq/d/63159454.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */


function Seo({
  description,
  title,
  children
}) {
  var _site$siteMetadata, _site$siteMetadata2;
  const {
    site
  } = _public_page_data_sq_d_63159454_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = (_site$siteMetadata = site.siteMetadata) === null || _site$siteMetadata === void 0 ? void 0 : _site$siteMetadata.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, defaultTitle ? `${title} | ${defaultTitle}` : title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "description",
    content: metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:description",
    content: metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:card",
    content: "summary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:creator",
    content: ((_site$siteMetadata2 = site.siteMetadata) === null || _site$siteMetadata2 === void 0 ? void 0 : _site$siteMetadata2.author) || ``
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:description",
    content: metaDescription
  }), children);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/pages/proofOfReductionPage.js?export=default":
/*!**********************************************************!*\
  !*** ./src/pages/proofOfReductionPage.js?export=default ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");





const proofOfReductionPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "book-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Proof of Reduction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "In cryptography, computational security relies on unproven assumptions since most schemes are not information-theoretically secure. The strategy is to assume the hardness of a mathematical problem or the security of a low-level cryptographic primitive and to prove that the construction built on it is secure under this assumption."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "A proof of security for a cryptographic construction is typically achieved through a reduction. This method explicitly shows how any efficient adversary ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A"), "that can break the cryptographic scheme ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "\u03A0"), " can be transformed into an efficient algorithm ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A\u2032"), " that solves the underlying hard problem ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "X"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Steps for a Proof by Reduction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Fix some efficient (i.e., probabilistic polynomial-time) adversary ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A"), "attacking ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "\u03A0"), ". Denote this adversary\u2019s success probability by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "\u03F5(n)"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Construct an efficient algorithm ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A\u2032"), " that attempts to solve problem ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "X"), "by using adversary ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A"), " as a subroutine. An important point here is that ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A\u2032"), "knows nothing about how ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A"), " works; the only thing ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A\u2032"), " knows is that ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A"), "is expecting to attack ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "\u03A0"), ". So, given some input instance ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "x"), " of problem ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "X"), ", our algorithm ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A\u2032"), " will simulate for ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A"), " an instance of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "\u03A0"), " such that:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "As far as ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A"), " can tell, it is interacting with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "\u03A0"), ". That is, the view of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A"), "when run as a subroutine by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A\u2032"), " should be distributed identically to (or at least close to) the view of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A"), " when it interacts with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "\u03A0"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "When ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A"), " succeeds in breaking the instance of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "\u03A0"), " that is being simulated by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A\u2032"), ", this should allow ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A\u2032"), " to solve the instance ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "x"), " it was given, at least with inverse polynomial probability ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "1/p(n)"), ". In other words, we attempt to reduce the problem of solving ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "X"), " to the problem of breaking ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "\u03A0"), "."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Taken together, the above imply that ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A\u2032"), " solves ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "X"), " with probability", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "\u03F5(n)/p(n)"), ". Now, if ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "\u03F5(n)"), " is not negligible, then neither is ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "\u03F5(n)/p(n)"), ". Moreover, if ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A\u2032"), " is efficient, we obtain an efficient algorithm ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A\u2032"), " solving ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "X"), "with non-negligible probability, contradicting our initial assumption."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Given our assumption regarding ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "X"), ", we conclude that no efficient adversary ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A"), " can succeed in breaking ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "\u03A0"), " with non-negligible probability. Stated differently, ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "\u03A0"), " is computationally secure.")))));
};
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "Proof of Reduction"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (proofOfReductionPage);

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./public/page-data/sq/d/63159454.json":
/*!*********************************************!*\
  !*** ./public/page-data/sq/d/63159454.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Default Starter","description":"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.","author":"@gatsbyjs"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-proof-of-reduction-page-js.js.map