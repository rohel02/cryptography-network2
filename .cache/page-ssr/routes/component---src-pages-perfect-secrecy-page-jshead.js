exports.id = "component---src-pages-perfect-secrecy-page-jshead";
exports.ids = ["component---src-pages-perfect-secrecy-page-jshead"];
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

/***/ "./src/pages/perfectSecrecyPage.js?export=head":
/*!*****************************************************!*\
  !*** ./src/pages/perfectSecrecyPage.js?export=head ***!
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





const perfectSecrecyPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "book-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Perfect Secrecy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Encryption Scheme Definition"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "An encryption scheme consists of three main algorithms:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Key Generation (Gen):"), " A probabilistic algorithm generating uniformly a key ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "k"), " from a key space ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "K"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Encryption Algorithm (Enc):"), " The encryption algorithm ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "Enc"), " takes a key ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "k \u2208 K"), " and a message ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "m \u2208 M"), " as input and outputs a ciphertext ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "c"), ". It can be probabilistic, meaning that encrypting the same message ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "m"), " with the same key ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "k"), "might produce different ciphertexts on different runs. This process is denoted as ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "c \u2190 Enck(m)"), ". If ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "Enc"), " is deterministic, it is denoted as ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "c := Enck(m)"), ". The set ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "C"), " represents all possible ciphertexts generated by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "Enck(m)"), ", across all choices of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "k"), ", ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "m"), ", and any randomness used by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "Enc"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Decryption Algorithm (Dec):"), " A deterministic algorithm recovering ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "m"), " from ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "c"), " using ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "k"), ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Key aspects of encryption schemes:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Perfect Correctness:"), " Decryption always recovers the original message, implying that the decryption process is deterministic."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "The distribution of keys ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "K"), " is determined by the encryption scheme, while the distribution of messages ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "M"), " reflects the context and adversary\u2019s uncertainty about which messages are likely to be sent."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "Ciphertexts ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "C"), " are determined by the joint distribution of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "K"), " and ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "M"), ", reflecting the encryption process.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Perfect Secrecy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Prerequisites:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "The adversary knows the probability distribution of messages (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "M"), "), meaning they understand the likelihood of different messages being sent."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "The adversary is aware of the encryption scheme being used."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "The key shared by the communicating parties is the only unknown to the adversary."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, "In this attack, one of the honest parties encrypts a chosen message, transmits the resulting ciphertext, and the adversary eavesdrops on the communication, gaining access to the ciphertext without any other context or information.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Perfect secrecy ensures that observing a ciphertext ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "c"), " does not provide any information about the plaintext message ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "m"), ". This means the adversary\u2019s knowledge of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "m"), ", after observing ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "c"), ", is identical to their prior knowledge."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Formal Definition"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "An encryption scheme ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "(Gen, Enc, Dec)"), " with message space ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "M"), " is perfectly secret if for every probability distribution for ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "M"), ", every message ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "m \u2208 M"), ", and every ciphertext ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "c \u2208 C"), " for which ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "Pr[C = c] > 0"), ", it holds that:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("blockquote", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "Pr[M = m | C = c] = Pr[M = m]"), "."))));
};
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
  title: "Perfect Secrecy"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (perfectSecrecyPage);

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
//# sourceMappingURL=component---src-pages-perfect-secrecy-page-jshead.js.map