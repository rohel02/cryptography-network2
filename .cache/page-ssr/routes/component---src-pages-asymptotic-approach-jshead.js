exports.id = "component---src-pages-asymptotic-approach-jshead";
exports.ids = ["component---src-pages-asymptotic-approach-jshead"];
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

/***/ "./src/pages/asymptoticApproach.js?export=head":
/*!*****************************************************!*\
  !*** ./src/pages/asymptoticApproach.js?export=head ***!
  \*****************************************************/
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





const asymptoticApproachPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "book-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "The Asymptotic Approach"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Due to the limitations of the concrete approach, such as difficulties in providing precise guarantees and accounting for evolving computational capabilities, the asymptotic approach offers a more flexible and theoretical framework for analyzing cryptographic security."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Rooted in complexity theory, this approach uses a security parameter (n), which acts as a central variable that both defines the cryptographic scheme itself and influences the resources available to all parties involved, including attackers."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Security Parameter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "The security parameter n"), " is an integer value that typically represents the size of the cryptographic key. In practical terms, this value correlates to the amount of resources or effort required to break the scheme."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "For example, a larger n implies a stronger cryptographic system, as the effort to break the system increases as the size of the security parameter increases.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Polynomial"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "A function ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "f"), " from the natural numbers to the non-negative real numbers is polynomial if there exists a constant ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "c"), " such that:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("blockquote", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "f(n) < n", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("sup", null, "c"), " for all n.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "An algorithm ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A"), " runs in polynomial time if there exists a polynomial ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "p"), " such that, for every input ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "x"), ", the computation of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "A(x)"), " terminates within at most ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "p(|x|)"), " steps, where ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "|x|"), " denotes the length of the input ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "x"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "In the asymptotic approach, adversaries are modeled as probabilistic algorithms that run in polynomial time relative to the security parameter ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "n"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "A polynomial function ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "p(n)"), " describes the maximum amount of time or resources an adversary can use to attack the system.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Negligible Probability of Success"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "A negligible function is one that is asymptotically smaller than any inverse polynomial function. Formally:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("blockquote", null, "A function ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "f"), " is negligible if, for every polynomial ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "p"), ", there exists an ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "N"), " such that for all ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "n > N"), ", it holds that:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("blockquote", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "f(n) < 1/p(n).")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "In simpler terms, this ensures that the chance of an adversary succeeding is so small that, for practical purposes, it can be ignored."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Security Definition in the Asymptotic Model"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "A cryptographic scheme is considered secure in the asymptotic approach if any probabilistic polynomial-time (PPT) adversary has a negligible probability of successfully breaking the scheme. As ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "n"), " grows, the likelihood of an adversary succeeding diminishes significantly, ensuring long-term security."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "This perspective makes the asymptotic approach valuable for understanding the scalability of cryptographic systems."))));
};
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "The Asymptotic Approach"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (asymptoticApproachPage);

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
//# sourceMappingURL=component---src-pages-asymptotic-approach-jshead.js.map