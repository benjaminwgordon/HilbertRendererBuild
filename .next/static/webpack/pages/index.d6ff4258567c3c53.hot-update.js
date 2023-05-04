"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/HilbertThreeRenderer.tsx":
/*!*********************************************!*\
  !*** ./components/HilbertThreeRenderer.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pkg_hilbert_wasm_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pkg/hilbert_wasm_renderer */ \"../pkg/hilbert_wasm_renderer.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/utils/BufferGeometryUtils */ \"./node_modules/three/examples/jsm/utils/BufferGeometryUtils.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pkg_hilbert_wasm_renderer__WEBPACK_IMPORTED_MODULE_2__]);\n_pkg_hilbert_wasm_renderer__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst HilbertThreeRenderer = (props)=>{\n    _s();\n    const { initN , initP , initPipeThickness , initGeometryType  } = props;\n    let n = initN || 3;\n    let p = initP || 3;\n    let pipeThickness = initPipeThickness || 0.2;\n    let geometryType = initGeometryType || \"square\";\n    let rotation = 0;\n    const THREECanvasMount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let camera;\n    const scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\n        antialias: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_3__.Color(0x000000));\n    renderer.setPixelRatio(window.devicePixelRatio);\n    THREECanvasMount.current.appendChild(renderer.domElement);\n    // global setters\n    const updateN = (newGeometryTypeIs3D)=>{\n        n = newGeometryTypeIs3D ? 3 : 2;\n        renderHilbertGeometry();\n    };\n    const updateGeometryType = (newGeometryTypeIsSquare)=>{\n        geometryType = newGeometryTypeIsSquare ? \"square\" : \"round\";\n        renderHilbertGeometry();\n    };\n    function updateP(newP) {\n        p = newP;\n        renderHilbertGeometry();\n    }\n    const updatePipeThickness = (newPipeThickness)=>{\n        // pipe thickness is specified as integers, but is actually thousands of a unit\n        pipeThickness = newPipeThickness / 1000;\n        renderHilbertGeometry();\n    };\n    function renderHilbertGeometry() {\n        // clear any prior geometry\n        clearScene(scene);\n        camera = new three__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);\n        const hilbert_flat_buffer = _pkg_hilbert_wasm_renderer__WEBPACK_IMPORTED_MODULE_2__.hilbert_coordinates(n, p);\n        const hilbertVectors = unflattenHilbertVectors(hilbert_flat_buffer);\n        const roundedGeometry = new three__WEBPACK_IMPORTED_MODULE_3__.CapsuleGeometry(pipeThickness, 1, 2);\n        const squareGeometry = new three__WEBPACK_IMPORTED_MODULE_3__.BoxGeometry(pipeThickness, 1 + pipeThickness, pipeThickness);\n        const pipeGeometry = geometryType == \"round\" ? roundedGeometry : squareGeometry;\n        // create a correctly rotated capsule geometry and use it like a prefab\n        const pipeMaterial = new three__WEBPACK_IMPORTED_MODULE_3__.MeshPhongMaterial({\n            color: 0xaaaaaa\n        });\n        pipeGeometry.rotateX(1.5708);\n        pipeGeometry.rotateZ(1.5708);\n        const geometries = [];\n        for(let i = 1; i < hilbertVectors.length; i++){\n            const lineInGeometry = pipeGeometry.clone();\n            const previousVertex = i == 0 ? new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0) : hilbertVectors[i - 1];\n            const lineInDirection = hilbertVectors[i].clone().sub(previousVertex).normalize();\n            lineInGeometry.lookAt(lineInDirection);\n            lineInGeometry.translate(hilbertVectors[i].x - lineInDirection.x * 0.5, hilbertVectors[i].y - lineInDirection.y * 0.5, hilbertVectors[i].z - lineInDirection.z * 0.5);\n            geometries.push(lineInGeometry);\n        }\n        const hilbertGeometries = (0,three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_4__.mergeGeometries)(geometries);\n        const hilbertMeshes = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(hilbertGeometries, pipeMaterial);\n        hilbertMeshes.geometry.center();\n        scene.add(hilbertMeshes);\n        const lightOne = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0x00ffff, 0.5);\n        const lightTwo = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0x00ff00, 0.4);\n        const lightThree = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0xff00ff, 0.5);\n        const lightFour = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0xff0000, 0.5);\n        lightOne.position.set(0, -1, 0);\n        lightTwo.position.set(0, 1, 0);\n        lightThree.position.set(-1, 0, 0);\n        lightFour.position.set(1, 0, 0);\n        for (const light of [\n            lightOne,\n            lightTwo,\n            lightThree,\n            lightFour\n        ]){\n            scene.add(light);\n        }\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xffffff, 0.1);\n        scene.add(ambientLight);\n    }\n    function clearScene(scene) {\n        if (scene) {\n            while(scene.children.length > 0){\n                scene.remove(scene.children[0]);\n            }\n        }\n    }\n    function unflattenHilbertVectors(hilbertFlatBuffer) {\n        const hilbertVectors = [];\n        for(let i = 0; i < hilbertFlatBuffer.length; i += 3){\n            hilbertVectors.push(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(hilbertFlatBuffer[i], hilbertFlatBuffer[i + 1], hilbertFlatBuffer[i + 2]));\n        }\n        return hilbertVectors;\n    }\n    // on mount, setup THREE.js scene\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"called into useeffect\");\n        renderHilbertGeometry();\n        function animate() {\n            if (scene && camera) {\n                requestAnimationFrame(animate);\n                // throw the camera in a gentle ellipse around model center\n                rotation += 0.006;\n                camera.position.x = Math.sin(rotation) * 2 ** p * 1.5;\n                camera.position.y = 2 ** p;\n                camera.position.z = Math.cos(rotation) * 2 ** p * 1.2;\n                camera.lookAt(scene.position);\n                renderer.render(scene, camera);\n            } else {\n                console.log({\n                    scene\n                }, {\n                    camera\n                });\n            }\n        }\n        animate();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"controls\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slidecontainer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"geometryIs3D\",\n                                children: \"3D?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 171,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                name: \"isGeometry3D\",\n                                id: \"isGeometry3D\",\n                                defaultChecked: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 172,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                        lineNumber: 170,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slidecontainer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"isGeometrySquare\",\n                                children: \"Square?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 180,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                name: \"isGeometrySquare\",\n                                id: \"isGeometrySquare\",\n                                defaultChecked: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 181,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                        lineNumber: 179,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slidecontainer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"pInput\",\n                                children: \"Magnitude\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 189,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"range\",\n                                min: \"1\",\n                                max: \"6\",\n                                defaultValue: \"3\",\n                                className: \"slider\",\n                                id: \"pInput\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 190,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                        lineNumber: 188,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slidecontainer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"pipeThicknessInput\",\n                                children: \"Thickness\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 200,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"range\",\n                                min: \"1\",\n                                max: \"1000\",\n                                defaultValue: \"150\",\n                                className: \"slider\",\n                                id: \"pipeThicknessInput\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 201,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                        lineNumber: 199,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                lineNumber: 169,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: THREECanvasMount\n            }, void 0, false, {\n                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                lineNumber: 211,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n        lineNumber: 168,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HilbertThreeRenderer, \"rA5+WhA7rW3a1V3MTTlalWhnvm8=\");\n_c = HilbertThreeRenderer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HilbertThreeRenderer);\nvar _c;\n$RefreshReg$(_c, \"HilbertThreeRenderer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hpbGJlcnRUaHJlZVJlbmRlcmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ0k7QUFDekI7QUFDZ0Q7QUFRL0UsTUFBTUssdUJBQXVCLENBQUNDLFFBQXFDOztJQUNqRSxNQUFNLEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFFQyxrQkFBaUIsRUFBRUMsaUJBQWdCLEVBQUUsR0FBR0o7SUFFOUQsSUFBSUssSUFBSUosU0FBUztJQUNqQixJQUFJSyxJQUFJSixTQUFTO0lBQ2pCLElBQUlLLGdCQUFnQkoscUJBQXFCO0lBQ3pDLElBQUlLLGVBQWVKLG9CQUFvQjtJQUN2QyxJQUFJSyxXQUFXO0lBQ2YsTUFBTUMsbUJBQW1CZiw2Q0FBTUEsQ0FBQyxJQUFJO0lBRXBDLElBQUlnQjtJQUNKLE1BQU1DLFFBQVEsSUFBSWYsd0NBQVc7SUFDN0IsTUFBTWlCLFdBQVcsSUFBSWpCLGdEQUFtQixDQUFDO1FBQ3ZDbUIsV0FBVyxJQUFJO0lBQ2pCO0lBRUFGLFNBQVNHLE9BQU8sQ0FBQ0MsT0FBT0MsVUFBVSxFQUFFRCxPQUFPRSxXQUFXO0lBQ3RETixTQUFTTyxhQUFhLENBQUMsSUFBSXhCLHdDQUFXLENBQUM7SUFDdkNpQixTQUFTUyxhQUFhLENBQUNMLE9BQU9NLGdCQUFnQjtJQUU5Q2QsaUJBQWlCZSxPQUFPLENBQUNDLFdBQVcsQ0FBQ1osU0FBU2EsVUFBVTtJQUV4RCxpQkFBaUI7SUFDakIsTUFBTUMsVUFBVSxDQUFDQyxzQkFBd0I7UUFDdkN4QixJQUFJd0Isc0JBQXNCLElBQUksQ0FBQztRQUMvQkM7SUFDRjtJQUNBLE1BQU1DLHFCQUFxQixDQUFDQywwQkFBNEI7UUFDdER4QixlQUFld0IsMEJBQTBCLFdBQVcsT0FBTztRQUMzREY7SUFDRjtJQUNBLFNBQVNHLFFBQVFDLElBQUksRUFBRTtRQUNyQjVCLElBQUk0QjtRQUNKSjtJQUNGO0lBQ0EsTUFBTUssc0JBQXNCLENBQUNDLG1CQUFxQjtRQUNoRCwrRUFB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Q0FBTUMsU0FBUTswQ0FBZTs7Ozs7OzBDQUM5Qiw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLGNBQWM7Ozs7Ozs7Ozs7OztrQ0FHbEIsOERBQUNSO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQU1DLFNBQVE7MENBQW1COzs7Ozs7MENBQ2xDLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTEMsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSEMsY0FBYzs7Ozs7Ozs7Ozs7O2tDQUdsQiw4REFBQ1I7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBTUMsU0FBUTswQ0FBUzs7Ozs7OzBDQUN4Qiw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xJLEtBQUk7Z0NBQ0pDLEtBQUk7Z0NBQ0pDLGNBQWE7Z0NBQ2JWLFdBQVU7Z0NBQ1ZNLElBQUc7Ozs7Ozs7Ozs7OztrQ0FHUCw4REFBQ1A7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBTUMsU0FBUTswQ0FBcUI7Ozs7OzswQ0FDcEMsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMSSxLQUFJO2dDQUNKQyxLQUFJO2dDQUNKQyxjQUFhO2dDQUNiVixXQUFVO2dDQUNWTSxJQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSVQsOERBQUNQO2dCQUFJWSxLQUFLbEc7Ozs7Ozs7Ozs7OztBQUdoQjtHQTFNTVg7S0FBQUE7QUE0TU4sK0RBQWVBLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hpbGJlcnRUaHJlZVJlbmRlcmVyLnRzeD85Mjc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgd2FzbSBmcm9tIFwiLi4vLi4vcGtnL2hpbGJlcnRfd2FzbV9yZW5kZXJlclwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBtZXJnZUdlb21ldHJpZXMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3V0aWxzL0J1ZmZlckdlb21ldHJ5VXRpbHNcIjtcblxudHlwZSBIaWxiZXJ0VGhyZWVSZW5kZXJlclByb3BzID0ge1xuICBpbml0TjogbnVtYmVyO1xuICBpbml0UDogbnVtYmVyO1xuICBpbml0UGlwZVRoaWNrbmVzczogbnVtYmVyO1xuICBpbml0R2VvbWV0cnlUeXBlOiBzdHJpbmc7XG59O1xuY29uc3QgSGlsYmVydFRocmVlUmVuZGVyZXIgPSAocHJvcHM6IEhpbGJlcnRUaHJlZVJlbmRlcmVyUHJvcHMpID0+IHtcbiAgY29uc3QgeyBpbml0TiwgaW5pdFAsIGluaXRQaXBlVGhpY2tuZXNzLCBpbml0R2VvbWV0cnlUeXBlIH0gPSBwcm9wcztcblxuICBsZXQgbiA9IGluaXROIHx8IDM7XG4gIGxldCBwID0gaW5pdFAgfHwgMztcbiAgbGV0IHBpcGVUaGlja25lc3MgPSBpbml0UGlwZVRoaWNrbmVzcyB8fCAwLjI7XG4gIGxldCBnZW9tZXRyeVR5cGUgPSBpbml0R2VvbWV0cnlUeXBlIHx8IFwic3F1YXJlXCI7XG4gIGxldCByb3RhdGlvbiA9IDA7XG4gIGNvbnN0IFRIUkVFQ2FudmFzTW91bnQgPSB1c2VSZWYobnVsbCk7XG5cbiAgbGV0IGNhbWVyYTogVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgfCBudWxsO1xuICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICBhbnRpYWxpYXM6IHRydWUsXG4gIH0pO1xuXG4gIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIHJlbmRlcmVyLnNldENsZWFyQ29sb3IobmV3IFRIUkVFLkNvbG9yKDB4MDAwMDAwKSk7XG4gIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuXG4gIFRIUkVFQ2FudmFzTW91bnQuY3VycmVudC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAvLyBnbG9iYWwgc2V0dGVyc1xuICBjb25zdCB1cGRhdGVOID0gKG5ld0dlb21ldHJ5VHlwZUlzM0QpID0+IHtcbiAgICBuID0gbmV3R2VvbWV0cnlUeXBlSXMzRCA/IDMgOiAyO1xuICAgIHJlbmRlckhpbGJlcnRHZW9tZXRyeSgpO1xuICB9O1xuICBjb25zdCB1cGRhdGVHZW9tZXRyeVR5cGUgPSAobmV3R2VvbWV0cnlUeXBlSXNTcXVhcmUpID0+IHtcbiAgICBnZW9tZXRyeVR5cGUgPSBuZXdHZW9tZXRyeVR5cGVJc1NxdWFyZSA/IFwic3F1YXJlXCIgOiBcInJvdW5kXCI7XG4gICAgcmVuZGVySGlsYmVydEdlb21ldHJ5KCk7XG4gIH07XG4gIGZ1bmN0aW9uIHVwZGF0ZVAobmV3UCkge1xuICAgIHAgPSBuZXdQO1xuICAgIHJlbmRlckhpbGJlcnRHZW9tZXRyeSgpO1xuICB9XG4gIGNvbnN0IHVwZGF0ZVBpcGVUaGlja25lc3MgPSAobmV3UGlwZVRoaWNrbmVzcykgPT4ge1xuICAgIC8vIHBpcGUgdGhpY2tuZXNzIGlzIHNwZWNpZmllZCBhcyBpbnRlZ2VycywgYnV0IGlzIGFjdHVhbGx5IHRob3VzYW5kcyBvZiBhIHVuaXRcbiAgICBwaXBlVGhpY2tuZXNzID0gbmV3UGlwZVRoaWNrbmVzcyAvIDEwMDA7XG4gICAgcmVuZGVySGlsYmVydEdlb21ldHJ5KCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVuZGVySGlsYmVydEdlb21ldHJ5KCkge1xuICAgIC8vIGNsZWFyIGFueSBwcmlvciBnZW9tZXRyeVxuICAgIGNsZWFyU2NlbmUoc2NlbmUpO1xuXG4gICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxuICAgICAgNzAsXG4gICAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgIDAuMSxcbiAgICAgIDEwMDBcbiAgICApO1xuXG4gICAgY29uc3QgaGlsYmVydF9mbGF0X2J1ZmZlciA9IHdhc20uaGlsYmVydF9jb29yZGluYXRlcyhuLCBwKTtcbiAgICBjb25zdCBoaWxiZXJ0VmVjdG9ycyA9IHVuZmxhdHRlbkhpbGJlcnRWZWN0b3JzKGhpbGJlcnRfZmxhdF9idWZmZXIpO1xuXG4gICAgY29uc3Qgcm91bmRlZEdlb21ldHJ5ID0gbmV3IFRIUkVFLkNhcHN1bGVHZW9tZXRyeShwaXBlVGhpY2tuZXNzLCAxLCAyKTtcbiAgICBjb25zdCBzcXVhcmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShcbiAgICAgIHBpcGVUaGlja25lc3MsXG4gICAgICAxICsgcGlwZVRoaWNrbmVzcyxcbiAgICAgIHBpcGVUaGlja25lc3NcbiAgICApO1xuICAgIGNvbnN0IHBpcGVHZW9tZXRyeSA9XG4gICAgICBnZW9tZXRyeVR5cGUgPT0gXCJyb3VuZFwiID8gcm91bmRlZEdlb21ldHJ5IDogc3F1YXJlR2VvbWV0cnk7XG5cbiAgICAvLyBjcmVhdGUgYSBjb3JyZWN0bHkgcm90YXRlZCBjYXBzdWxlIGdlb21ldHJ5IGFuZCB1c2UgaXQgbGlrZSBhIHByZWZhYlxuICAgIGNvbnN0IHBpcGVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweGFhYWFhYSB9KTtcbiAgICBwaXBlR2VvbWV0cnkucm90YXRlWCgxLjU3MDgpO1xuICAgIHBpcGVHZW9tZXRyeS5yb3RhdGVaKDEuNTcwOCk7XG5cbiAgICBjb25zdCBnZW9tZXRyaWVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBoaWxiZXJ0VmVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGluZUluR2VvbWV0cnkgPSBwaXBlR2VvbWV0cnkuY2xvbmUoKTtcbiAgICAgIGNvbnN0IHByZXZpb3VzVmVydGV4ID1cbiAgICAgICAgaSA9PSAwID8gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkgOiBoaWxiZXJ0VmVjdG9yc1tpIC0gMV07XG4gICAgICBjb25zdCBsaW5lSW5EaXJlY3Rpb24gPSBoaWxiZXJ0VmVjdG9yc1tpXVxuICAgICAgICAuY2xvbmUoKVxuICAgICAgICAuc3ViKHByZXZpb3VzVmVydGV4KVxuICAgICAgICAubm9ybWFsaXplKCk7XG4gICAgICBsaW5lSW5HZW9tZXRyeS5sb29rQXQobGluZUluRGlyZWN0aW9uKTtcbiAgICAgIGxpbmVJbkdlb21ldHJ5LnRyYW5zbGF0ZShcbiAgICAgICAgaGlsYmVydFZlY3RvcnNbaV0ueCAtIGxpbmVJbkRpcmVjdGlvbi54ICogMC41LFxuICAgICAgICBoaWxiZXJ0VmVjdG9yc1tpXS55IC0gbGluZUluRGlyZWN0aW9uLnkgKiAwLjUsXG4gICAgICAgIGhpbGJlcnRWZWN0b3JzW2ldLnogLSBsaW5lSW5EaXJlY3Rpb24ueiAqIDAuNVxuICAgICAgKTtcbiAgICAgIGdlb21ldHJpZXMucHVzaChsaW5lSW5HZW9tZXRyeSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGlsYmVydEdlb21ldHJpZXMgPSBtZXJnZUdlb21ldHJpZXMoZ2VvbWV0cmllcyk7XG4gICAgY29uc3QgaGlsYmVydE1lc2hlcyA9IG5ldyBUSFJFRS5NZXNoKGhpbGJlcnRHZW9tZXRyaWVzLCBwaXBlTWF0ZXJpYWwpO1xuICAgIGhpbGJlcnRNZXNoZXMuZ2VvbWV0cnkuY2VudGVyKCk7XG4gICAgc2NlbmUuYWRkKGhpbGJlcnRNZXNoZXMpO1xuXG4gICAgY29uc3QgbGlnaHRPbmUgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweDAwZmZmZiwgMC41KTtcbiAgICBjb25zdCBsaWdodFR3byA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4MDBmZjAwLCAwLjQpO1xuICAgIGNvbnN0IGxpZ2h0VGhyZWUgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmMDBmZiwgMC41KTtcbiAgICBjb25zdCBsaWdodEZvdXIgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmMDAwMCwgMC41KTtcblxuICAgIGxpZ2h0T25lLnBvc2l0aW9uLnNldCgwLCAtMSwgMCk7XG4gICAgbGlnaHRUd28ucG9zaXRpb24uc2V0KDAsIDEsIDApO1xuICAgIGxpZ2h0VGhyZWUucG9zaXRpb24uc2V0KC0xLCAwLCAwKTtcbiAgICBsaWdodEZvdXIucG9zaXRpb24uc2V0KDEsIDAsIDApO1xuXG4gICAgZm9yIChjb25zdCBsaWdodCBvZiBbbGlnaHRPbmUsIGxpZ2h0VHdvLCBsaWdodFRocmVlLCBsaWdodEZvdXJdKSB7XG4gICAgICBzY2VuZS5hZGQobGlnaHQpO1xuICAgIH1cblxuICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYsIDAuMSk7XG4gICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclNjZW5lKHNjZW5lKSB7XG4gICAgaWYgKHNjZW5lKSB7XG4gICAgICB3aGlsZSAoc2NlbmUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBzY2VuZS5yZW1vdmUoc2NlbmUuY2hpbGRyZW5bMF0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVuZmxhdHRlbkhpbGJlcnRWZWN0b3JzKGhpbGJlcnRGbGF0QnVmZmVyKSB7XG4gICAgY29uc3QgaGlsYmVydFZlY3RvcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpbGJlcnRGbGF0QnVmZmVyLmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICBoaWxiZXJ0VmVjdG9ycy5wdXNoKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgICAgICBoaWxiZXJ0RmxhdEJ1ZmZlcltpXSxcbiAgICAgICAgICBoaWxiZXJ0RmxhdEJ1ZmZlcltpICsgMV0sXG4gICAgICAgICAgaGlsYmVydEZsYXRCdWZmZXJbaSArIDJdXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBoaWxiZXJ0VmVjdG9ycztcbiAgfVxuXG4gIC8vIG9uIG1vdW50LCBzZXR1cCBUSFJFRS5qcyBzY2VuZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2FsbGVkIGludG8gdXNlZWZmZWN0XCIpO1xuXG4gICAgcmVuZGVySGlsYmVydEdlb21ldHJ5KCk7XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgaWYgKHNjZW5lICYmIGNhbWVyYSkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIC8vIHRocm93IHRoZSBjYW1lcmEgaW4gYSBnZW50bGUgZWxsaXBzZSBhcm91bmQgbW9kZWwgY2VudGVyXG4gICAgICAgIHJvdGF0aW9uICs9IDAuMDA2O1xuICAgICAgICBjYW1lcmEucG9zaXRpb24ueCA9IE1hdGguc2luKHJvdGF0aW9uKSAqIDIgKiogcCAqIDEuNTtcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAyICoqIHA7XG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gTWF0aC5jb3Mocm90YXRpb24pICogMiAqKiBwICogMS4yO1xuICAgICAgICBjYW1lcmEubG9va0F0KHNjZW5lLnBvc2l0aW9uKTtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coeyBzY2VuZSB9LCB7IGNhbWVyYSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgYW5pbWF0ZSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlY29udGFpbmVyXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJnZW9tZXRyeUlzM0RcIj4zRD88L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIG5hbWU9XCJpc0dlb21ldHJ5M0RcIlxuICAgICAgICAgICAgaWQ9XCJpc0dlb21ldHJ5M0RcIlxuICAgICAgICAgICAgZGVmYXVsdENoZWNrZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaXNHZW9tZXRyeVNxdWFyZVwiPlNxdWFyZT88L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIG5hbWU9XCJpc0dlb21ldHJ5U3F1YXJlXCJcbiAgICAgICAgICAgIGlkPVwiaXNHZW9tZXRyeVNxdWFyZVwiXG4gICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlY29udGFpbmVyXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwSW5wdXRcIj5NYWduaXR1ZGU8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgbWF4PVwiNlwiXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCIzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlclwiXG4gICAgICAgICAgICBpZD1cInBJbnB1dFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVjb250YWluZXJcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBpcGVUaGlja25lc3NJbnB1dFwiPlRoaWNrbmVzczwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICBtYXg9XCIxMDAwXCJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjE1MFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXJcIlxuICAgICAgICAgICAgaWQ9XCJwaXBlVGhpY2tuZXNzSW5wdXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHJlZj17VEhSRUVDYW52YXNNb3VudH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhpbGJlcnRUaHJlZVJlbmRlcmVyO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIndhc20iLCJUSFJFRSIsIm1lcmdlR2VvbWV0cmllcyIsIkhpbGJlcnRUaHJlZVJlbmRlcmVyIiwicHJvcHMiLCJpbml0TiIsImluaXRQIiwiaW5pdFBpcGVUaGlja25lc3MiLCJpbml0R2VvbWV0cnlUeXBlIiwibiIsInAiLCJwaXBlVGhpY2tuZXNzIiwiZ2VvbWV0cnlUeXBlIiwicm90YXRpb24iLCJUSFJFRUNhbnZhc01vdW50IiwiY2FtZXJhIiwic2NlbmUiLCJTY2VuZSIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJzZXRDbGVhckNvbG9yIiwiQ29sb3IiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImN1cnJlbnQiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJ1cGRhdGVOIiwibmV3R2VvbWV0cnlUeXBlSXMzRCIsInJlbmRlckhpbGJlcnRHZW9tZXRyeSIsInVwZGF0ZUdlb21ldHJ5VHlwZSIsIm5ld0dlb21ldHJ5VHlwZUlzU3F1YXJlIiwidXBkYXRlUCIsIm5ld1AiLCJ1cGRhdGVQaXBlVGhpY2tuZXNzIiwibmV3UGlwZVRoaWNrbmVzcyIsImNsZWFyU2NlbmUiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsImhpbGJlcnRfZmxhdF9idWZmZXIiLCJoaWxiZXJ0X2Nvb3JkaW5hdGVzIiwiaGlsYmVydFZlY3RvcnMiLCJ1bmZsYXR0ZW5IaWxiZXJ0VmVjdG9ycyIsInJvdW5kZWRHZW9tZXRyeSIsIkNhcHN1bGVHZW9tZXRyeSIsInNxdWFyZUdlb21ldHJ5IiwiQm94R2VvbWV0cnkiLCJwaXBlR2VvbWV0cnkiLCJwaXBlTWF0ZXJpYWwiLCJNZXNoUGhvbmdNYXRlcmlhbCIsImNvbG9yIiwicm90YXRlWCIsInJvdGF0ZVoiLCJnZW9tZXRyaWVzIiwiaSIsImxlbmd0aCIsImxpbmVJbkdlb21ldHJ5IiwiY2xvbmUiLCJwcmV2aW91c1ZlcnRleCIsIlZlY3RvcjMiLCJsaW5lSW5EaXJlY3Rpb24iLCJzdWIiLCJub3JtYWxpemUiLCJsb29rQXQiLCJ0cmFuc2xhdGUiLCJ4IiwieSIsInoiLCJwdXNoIiwiaGlsYmVydEdlb21ldHJpZXMiLCJoaWxiZXJ0TWVzaGVzIiwiTWVzaCIsImdlb21ldHJ5IiwiY2VudGVyIiwiYWRkIiwibGlnaHRPbmUiLCJEaXJlY3Rpb25hbExpZ2h0IiwibGlnaHRUd28iLCJsaWdodFRocmVlIiwibGlnaHRGb3VyIiwicG9zaXRpb24iLCJzZXQiLCJsaWdodCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImNoaWxkcmVuIiwicmVtb3ZlIiwiaGlsYmVydEZsYXRCdWZmZXIiLCJjb25zb2xlIiwibG9nIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIk1hdGgiLCJzaW4iLCJjb3MiLCJyZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiaWQiLCJkZWZhdWx0Q2hlY2tlZCIsIm1pbiIsIm1heCIsImRlZmF1bHRWYWx1ZSIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/HilbertThreeRenderer.tsx\n"));

/***/ })

});