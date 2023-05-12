(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ "./pages/_app.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("./node_modules/next/link.js");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/Navbar.tsx



const Navbar = ()=>{
    const navbarLinks = [
        {
            route: "/",
            name: "Home"
        },
        {
            route: "/blog",
            name: "Blog"
        },
        {
            route: "/hire-me",
            name: "Hire Me"
        }
    ];
    const navbarLinkJSX = navbarLinks.map((link)=>{
        const router = (0,router_namespaceObject.useRouter)();
        const currentPath = router.pathname.split("/")[1];
        const isActivePath = (currentPath, linkPath)=>{
            return currentPath === linkPath.replace("/", "");
        };
        return /*#__PURE__*/ jsx_runtime.jsx("li", {
            className: `list-none p-2 text-center border-b-2 font-semibold ${isActivePath(currentPath, link.route) ? ` border-gray-200` : `border-gray-800`}`,
            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                href: link.route,
                children: link.name
            })
        }, `navbar-link-to-${link.name}`);
    });
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "p-1 bg-gray-800 text-gray-200 w-full flex flex-row justify-end",
        children: /*#__PURE__*/ jsx_runtime.jsx("nav", {
            className: "max-w-xl w-full flex flex-row justify-end",
            children: navbarLinkJSX
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: ./globals.css
var globals = __webpack_require__("./globals.css");
;// CONCATENATED MODULE: ./pages/_app.tsx



function App({ Component , pageProps  }) {
    const Layout = ({ Component , pageProps  })=>{
        if (Component.getLayout) {
            return Component.getLayout(/*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            }));
        } else {
            return /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "bg-gray-50 h-full min-h-screen",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("header", {
                children: /*#__PURE__*/ jsx_runtime.jsx(components_Navbar, {})
            }),
            /*#__PURE__*/ jsx_runtime.jsx("section", {
                className: "h-full min-h-screen relative ",
                children: /*#__PURE__*/ jsx_runtime.jsx(Layout, {
                    Component: Component,
                    pageProps: pageProps
                })
            })
        ]
    });
}


/***/ }),

/***/ "./globals.css":
/***/ (() => {



/***/ }),

/***/ "../shared/lib/app-router-context":
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ "../shared/lib/router-context":
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/add-path-prefix":
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ "../shared/lib/router/utils/format-url":
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ "../shared/lib/router/utils/is-local-url":
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ "../shared/lib/router/utils/parse-path":
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ "../shared/lib/router/utils/remove-trailing-slash":
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ "../shared/lib/router/utils/resolve-href":
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ "../shared/lib/utils":
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "react":
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();