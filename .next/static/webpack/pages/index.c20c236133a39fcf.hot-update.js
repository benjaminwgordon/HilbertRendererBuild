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

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pkg_hilbert_wasm_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pkg/hilbert_wasm_renderer */ \"../pkg/hilbert_wasm_renderer.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/utils/BufferGeometryUtils */ \"./node_modules/three/examples/jsm/utils/BufferGeometryUtils.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pkg_hilbert_wasm_renderer__WEBPACK_IMPORTED_MODULE_2__]);\n_pkg_hilbert_wasm_renderer__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst HilbertThreeRenderer = (props)=>{\n    _s();\n    const { initN , initP , initPipeThickness , initGeometryType  } = props;\n    let scene;\n    let camera;\n    let n = initN || 3;\n    let p = initP || 3;\n    let pipeThickness = initPipeThickness || 0.2;\n    let geometryType = initGeometryType || \"square\";\n    let rotation = 0;\n    // global setters\n    const updateN = (newGeometryTypeIs3D)=>{\n        n = newGeometryTypeIs3D ? 3 : 2;\n        renderHilbertGeometry();\n    };\n    const updateGeometryType = (newGeometryTypeIsSquare)=>{\n        geometryType = newGeometryTypeIsSquare ? \"square\" : \"round\";\n        renderHilbertGeometry();\n    };\n    function updateP(newP) {\n        p = newP;\n        renderHilbertGeometry();\n    }\n    const updatePipeThickness = (newPipeThickness)=>{\n        // pipe thickness is specified as integers, but is actually thousands of a unit\n        pipeThickness = newPipeThickness / 1000;\n        renderHilbertGeometry();\n    };\n    function renderHilbertGeometry() {\n        if (scene) {\n            // clear any prior geometry\n            clearScene(scene);\n            camera = new three__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);\n            const hilbert_flat_buffer = _pkg_hilbert_wasm_renderer__WEBPACK_IMPORTED_MODULE_2__.hilbert_coordinates(n, p);\n            const hilbertVectors = unflattenHilbertVectors(hilbert_flat_buffer);\n            const roundedGeometry = new three__WEBPACK_IMPORTED_MODULE_3__.CapsuleGeometry(pipeThickness, 1, 2);\n            const squareGeometry = new three__WEBPACK_IMPORTED_MODULE_3__.BoxGeometry(pipeThickness, 1 + pipeThickness, pipeThickness);\n            const pipeGeometry = geometryType == \"round\" ? roundedGeometry : squareGeometry;\n            // create a correctly rotated capsule geometry and use it like a prefab\n            const pipeMaterial = new three__WEBPACK_IMPORTED_MODULE_3__.MeshPhongMaterial({\n                color: 0xaaaaaa\n            });\n            pipeGeometry.rotateX(1.5708);\n            pipeGeometry.rotateZ(1.5708);\n            const geometries = [];\n            for(let i = 1; i < hilbertVectors.length; i++){\n                const lineInGeometry = pipeGeometry.clone();\n                const previousVertex = i == 0 ? new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0) : hilbertVectors[i - 1];\n                const lineInDirection = hilbertVectors[i].clone().sub(previousVertex).normalize();\n                lineInGeometry.lookAt(lineInDirection);\n                lineInGeometry.translate(hilbertVectors[i].x - lineInDirection.x * 0.5, hilbertVectors[i].y - lineInDirection.y * 0.5, hilbertVectors[i].z - lineInDirection.z * 0.5);\n                geometries.push(lineInGeometry);\n            }\n            const hilbertGeometries = (0,three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_4__.mergeGeometries)(geometries);\n            const hilbertMeshes = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(hilbertGeometries, pipeMaterial);\n            hilbertMeshes.geometry.center();\n            scene.add(hilbertMeshes);\n            const lightOne = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0x00ffff, 0.5);\n            const lightTwo = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0x00ff00, 0.4);\n            const lightThree = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0xff00ff, 0.5);\n            const lightFour = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0xff0000, 0.5);\n            lightOne.position.set(0, -1, 0);\n            lightTwo.position.set(0, 1, 0);\n            lightThree.position.set(-1, 0, 0);\n            lightFour.position.set(1, 0, 0);\n            for (const light of [\n                lightOne,\n                lightTwo,\n                lightThree,\n                lightFour\n            ]){\n                scene.add(light);\n            }\n            const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xffffff, 0.1);\n            scene.add(ambientLight);\n        }\n    }\n    function clearScene(scene) {\n        if (scene) {\n            while(scene.children.length > 0){\n                scene.remove(scene.children[0]);\n            }\n        }\n    }\n    function unflattenHilbertVectors(hilbertFlatBuffer) {\n        const hilbertVectors = [];\n        for(let i = 0; i < hilbertFlatBuffer.length; i += 3){\n            hilbertVectors.push(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(hilbertFlatBuffer[i], hilbertFlatBuffer[i + 1], hilbertFlatBuffer[i + 2]));\n        }\n        return hilbertVectors;\n    }\n    const THREECanvasMount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // on mount, setup THREE.js scene\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"called into useeffect\");\n        let camera;\n        const scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\n            antialias: true\n        });\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_3__.Color(0x000000));\n        renderer.setPixelRatio(window.devicePixelRatio);\n        THREECanvasMount.current.appendChild(renderer.domElement);\n        renderHilbertGeometry();\n        function animate() {\n            if (scene && camera) {\n                requestAnimationFrame(animate);\n                // throw the camera in a gentle ellipse around model center\n                rotation += 0.006;\n                camera.position.x = Math.sin(rotation) * 2 ** p * 1.5;\n                camera.position.y = 2 ** p;\n                camera.position.z = Math.cos(rotation) * 2 ** p * 1.2;\n                camera.lookAt(scene.position);\n                renderer.render(scene, camera);\n            } else {\n                console.log({\n                    scene\n                }, {\n                    camera\n                });\n            }\n        }\n        animate();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"controls\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slidecontainer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"geometryIs3D\",\n                                children: \"3D?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 175,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                name: \"isGeometry3D\",\n                                id: \"isGeometry3D\",\n                                defaultChecked: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 176,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                        lineNumber: 174,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slidecontainer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"isGeometrySquare\",\n                                children: \"Square?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 184,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                name: \"isGeometrySquare\",\n                                id: \"isGeometrySquare\",\n                                defaultChecked: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 185,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                        lineNumber: 183,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slidecontainer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"pInput\",\n                                children: \"Magnitude\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 193,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"range\",\n                                min: \"1\",\n                                max: \"6\",\n                                defaultValue: \"3\",\n                                className: \"slider\",\n                                id: \"pInput\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 194,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                        lineNumber: 192,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slidecontainer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"pipeThicknessInput\",\n                                children: \"Thickness\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 204,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"range\",\n                                min: \"1\",\n                                max: \"1000\",\n                                defaultValue: \"150\",\n                                className: \"slider\",\n                                id: \"pipeThicknessInput\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 205,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                        lineNumber: 203,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                lineNumber: 173,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: THREECanvasMount\n            }, void 0, false, {\n                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                lineNumber: 215,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n        lineNumber: 172,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HilbertThreeRenderer, \"rA5+WhA7rW3a1V3MTTlalWhnvm8=\");\n_c = HilbertThreeRenderer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HilbertThreeRenderer);\nvar _c;\n$RefreshReg$(_c, \"HilbertThreeRenderer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hpbGJlcnRUaHJlZVJlbmRlcmVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ0k7QUFDekI7QUFDZ0Q7QUFRL0UsTUFBTUssdUJBQXVCLENBQUNDLFFBQXFDOztJQUNqRSxNQUFNLEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFFQyxrQkFBaUIsRUFBRUMsaUJBQWdCLEVBQUUsR0FBR0o7SUFFOUQsSUFBSUs7SUFDSixJQUFJQztJQUNKLElBQUlDLElBQUlOLFNBQVM7SUFDakIsSUFBSU8sSUFBSU4sU0FBUztJQUNqQixJQUFJTyxnQkFBZ0JOLHFCQUFxQjtJQUN6QyxJQUFJTyxlQUFlTixvQkFBb0I7SUFDdkMsSUFBSU8sV0FBVztJQUVmLGlCQUFpQjtJQUNqQixNQUFNQyxVQUFVLENBQUNDLHNCQUF3QjtRQUN2Q04sSUFBSU0sc0JBQXNCLElBQUksQ0FBQztRQUMvQkM7SUFDRjtJQUNBLE1BQU1DLHFCQUFxQixDQUFDQywwQkFBNEI7UUFDdEROLGVBQWVNLDBCQUEwQixXQUFXLE9BQU87UUFDM0RGO0lBQ0Y7SUFDQSxTQUFTRyxRQUFRQyxJQUFJLEVBQUU7UUFDckJWLElBQUlVO1FBQ0pKO0lBQ0Y7SUFDQSxNQUFNSyxzQkFBc0IsQ0FBQ0MsbUJBQXFCO1FBQ2hELCtFQUErRTtRQUMvRVgsZ0JBQWdCVyxtQkFBbUI7UUFDbkNOO0lBQ0Y7SUFFQSxTQUFTQSx3QkFBd0I7UUFDL0IsSUFBSVQsT0FBTztZQUNULDJCQUEyQjtZQUMzQmdCLFdBQVdoQjtZQUVYQyxTQUFTLElBQUlULG9EQUF1QixDQUNsQyxJQUNBMEIsT0FBT0MsVUFBVSxHQUFHRCxPQUFPRSxXQUFXLEVBQ3RDLEtBQ0E7WUFHRixNQUFNQyxzQkFBc0I5QiwyRUFBd0IsQ0FBQ1csR0FBR0M7WUFDeEQsTUFBTW9CLGlCQUFpQkMsd0JBQXdCSDtZQUUvQyxNQUFNSSxrQkFBa0IsSUFBSWpDLGtEQUFxQixDQUFDWSxlQUFlLEdBQUc7WUFDcEUsTUFB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Q0E7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFNQyxTQUFROzBDQUFlOzs7Ozs7MENBQzlCLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTEMsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSEMsY0FBYzs7Ozs7Ozs7Ozs7O2tDQUdsQiw4REFBQ1I7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBTUMsU0FBUTswQ0FBbUI7Ozs7OzswQ0FDbEMsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIQyxjQUFjOzs7Ozs7Ozs7Ozs7a0NBR2xCLDhEQUFDUjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFNQyxTQUFROzBDQUFTOzs7Ozs7MENBQ3hCLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTEksS0FBSTtnQ0FDSkMsS0FBSTtnQ0FDSkMsY0FBYTtnQ0FDYlYsV0FBVTtnQ0FDVk0sSUFBRzs7Ozs7Ozs7Ozs7O2tDQUdQLDhEQUFDUDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFNQyxTQUFROzBDQUFxQjs7Ozs7OzBDQUNwQyw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xJLEtBQUk7Z0NBQ0pDLEtBQUk7Z0NBQ0pDLGNBQWE7Z0NBQ2JWLFdBQVU7Z0NBQ1ZNLElBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJVCw4REFBQ1A7Z0JBQUlZLEtBQUtqQzs7Ozs7Ozs7Ozs7O0FBR2hCO0dBOU1NNUU7S0FBQUE7QUFnTk4sK0RBQWVBLG9CQUFvQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hpbGJlcnRUaHJlZVJlbmRlcmVyLnRzeD85Mjc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgd2FzbSBmcm9tIFwiLi4vLi4vcGtnL2hpbGJlcnRfd2FzbV9yZW5kZXJlclwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBtZXJnZUdlb21ldHJpZXMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3V0aWxzL0J1ZmZlckdlb21ldHJ5VXRpbHNcIjtcblxudHlwZSBIaWxiZXJ0VGhyZWVSZW5kZXJlclByb3BzID0ge1xuICBpbml0TjogbnVtYmVyO1xuICBpbml0UDogbnVtYmVyO1xuICBpbml0UGlwZVRoaWNrbmVzczogbnVtYmVyO1xuICBpbml0R2VvbWV0cnlUeXBlOiBzdHJpbmc7XG59O1xuY29uc3QgSGlsYmVydFRocmVlUmVuZGVyZXIgPSAocHJvcHM6IEhpbGJlcnRUaHJlZVJlbmRlcmVyUHJvcHMpID0+IHtcbiAgY29uc3QgeyBpbml0TiwgaW5pdFAsIGluaXRQaXBlVGhpY2tuZXNzLCBpbml0R2VvbWV0cnlUeXBlIH0gPSBwcm9wcztcblxuICBsZXQgc2NlbmU7XG4gIGxldCBjYW1lcmE7XG4gIGxldCBuID0gaW5pdE4gfHwgMztcbiAgbGV0IHAgPSBpbml0UCB8fCAzO1xuICBsZXQgcGlwZVRoaWNrbmVzcyA9IGluaXRQaXBlVGhpY2tuZXNzIHx8IDAuMjtcbiAgbGV0IGdlb21ldHJ5VHlwZSA9IGluaXRHZW9tZXRyeVR5cGUgfHwgXCJzcXVhcmVcIjtcbiAgbGV0IHJvdGF0aW9uID0gMDtcblxuICAvLyBnbG9iYWwgc2V0dGVyc1xuICBjb25zdCB1cGRhdGVOID0gKG5ld0dlb21ldHJ5VHlwZUlzM0QpID0+IHtcbiAgICBuID0gbmV3R2VvbWV0cnlUeXBlSXMzRCA/IDMgOiAyO1xuICAgIHJlbmRlckhpbGJlcnRHZW9tZXRyeSgpO1xuICB9O1xuICBjb25zdCB1cGRhdGVHZW9tZXRyeVR5cGUgPSAobmV3R2VvbWV0cnlUeXBlSXNTcXVhcmUpID0+IHtcbiAgICBnZW9tZXRyeVR5cGUgPSBuZXdHZW9tZXRyeVR5cGVJc1NxdWFyZSA/IFwic3F1YXJlXCIgOiBcInJvdW5kXCI7XG4gICAgcmVuZGVySGlsYmVydEdlb21ldHJ5KCk7XG4gIH07XG4gIGZ1bmN0aW9uIHVwZGF0ZVAobmV3UCkge1xuICAgIHAgPSBuZXdQO1xuICAgIHJlbmRlckhpbGJlcnRHZW9tZXRyeSgpO1xuICB9XG4gIGNvbnN0IHVwZGF0ZVBpcGVUaGlja25lc3MgPSAobmV3UGlwZVRoaWNrbmVzcykgPT4ge1xuICAgIC8vIHBpcGUgdGhpY2tuZXNzIGlzIHNwZWNpZmllZCBhcyBpbnRlZ2VycywgYnV0IGlzIGFjdHVhbGx5IHRob3VzYW5kcyBvZiBhIHVuaXRcbiAgICBwaXBlVGhpY2tuZXNzID0gbmV3UGlwZVRoaWNrbmVzcyAvIDEwMDA7XG4gICAgcmVuZGVySGlsYmVydEdlb21ldHJ5KCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVuZGVySGlsYmVydEdlb21ldHJ5KCkge1xuICAgIGlmIChzY2VuZSkge1xuICAgICAgLy8gY2xlYXIgYW55IHByaW9yIGdlb21ldHJ5XG4gICAgICBjbGVhclNjZW5lKHNjZW5lKTtcblxuICAgICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxuICAgICAgICA3MCxcbiAgICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgIDAuMSxcbiAgICAgICAgMTAwMFxuICAgICAgKTtcblxuICAgICAgY29uc3QgaGlsYmVydF9mbGF0X2J1ZmZlciA9IHdhc20uaGlsYmVydF9jb29yZGluYXRlcyhuLCBwKTtcbiAgICAgIGNvbnN0IGhpbGJlcnRWZWN0b3JzID0gdW5mbGF0dGVuSGlsYmVydFZlY3RvcnMoaGlsYmVydF9mbGF0X2J1ZmZlcik7XG5cbiAgICAgIGNvbnN0IHJvdW5kZWRHZW9tZXRyeSA9IG5ldyBUSFJFRS5DYXBzdWxlR2VvbWV0cnkocGlwZVRoaWNrbmVzcywgMSwgMik7XG4gICAgICBjb25zdCBzcXVhcmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShcbiAgICAgICAgcGlwZVRoaWNrbmVzcyxcbiAgICAgICAgMSArIHBpcGVUaGlja25lc3MsXG4gICAgICAgIHBpcGVUaGlja25lc3NcbiAgICAgICk7XG4gICAgICBjb25zdCBwaXBlR2VvbWV0cnkgPVxuICAgICAgICBnZW9tZXRyeVR5cGUgPT0gXCJyb3VuZFwiID8gcm91bmRlZEdlb21ldHJ5IDogc3F1YXJlR2VvbWV0cnk7XG5cbiAgICAgIC8vIGNyZWF0ZSBhIGNvcnJlY3RseSByb3RhdGVkIGNhcHN1bGUgZ2VvbWV0cnkgYW5kIHVzZSBpdCBsaWtlIGEgcHJlZmFiXG4gICAgICBjb25zdCBwaXBlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHhhYWFhYWEgfSk7XG4gICAgICBwaXBlR2VvbWV0cnkucm90YXRlWCgxLjU3MDgpO1xuICAgICAgcGlwZUdlb21ldHJ5LnJvdGF0ZVooMS41NzA4KTtcblxuICAgICAgY29uc3QgZ2VvbWV0cmllcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBoaWxiZXJ0VmVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5lSW5HZW9tZXRyeSA9IHBpcGVHZW9tZXRyeS5jbG9uZSgpO1xuICAgICAgICBjb25zdCBwcmV2aW91c1ZlcnRleCA9XG4gICAgICAgICAgaSA9PSAwID8gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCkgOiBoaWxiZXJ0VmVjdG9yc1tpIC0gMV07XG4gICAgICAgIGNvbnN0IGxpbmVJbkRpcmVjdGlvbiA9IGhpbGJlcnRWZWN0b3JzW2ldXG4gICAgICAgICAgLmNsb25lKClcbiAgICAgICAgICAuc3ViKHByZXZpb3VzVmVydGV4KVxuICAgICAgICAgIC5ub3JtYWxpemUoKTtcbiAgICAgICAgbGluZUluR2VvbWV0cnkubG9va0F0KGxpbmVJbkRpcmVjdGlvbik7XG4gICAgICAgIGxpbmVJbkdlb21ldHJ5LnRyYW5zbGF0ZShcbiAgICAgICAgICBoaWxiZXJ0VmVjdG9yc1tpXS54IC0gbGluZUluRGlyZWN0aW9uLnggKiAwLjUsXG4gICAgICAgICAgaGlsYmVydFZlY3RvcnNbaV0ueSAtIGxpbmVJbkRpcmVjdGlvbi55ICogMC41LFxuICAgICAgICAgIGhpbGJlcnRWZWN0b3JzW2ldLnogLSBsaW5lSW5EaXJlY3Rpb24ueiAqIDAuNVxuICAgICAgICApO1xuICAgICAgICBnZW9tZXRyaWVzLnB1c2gobGluZUluR2VvbWV0cnkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBoaWxiZXJ0R2VvbWV0cmllcyA9IG1lcmdlR2VvbWV0cmllcyhnZW9tZXRyaWVzKTtcbiAgICAgIGNvbnN0IGhpbGJlcnRNZXNoZXMgPSBuZXcgVEhSRUUuTWVzaChoaWxiZXJ0R2VvbWV0cmllcywgcGlwZU1hdGVyaWFsKTtcbiAgICAgIGhpbGJlcnRNZXNoZXMuZ2VvbWV0cnkuY2VudGVyKCk7XG4gICAgICBzY2VuZS5hZGQoaGlsYmVydE1lc2hlcyk7XG5cbiAgICAgIGNvbnN0IGxpZ2h0T25lID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHgwMGZmZmYsIDAuNSk7XG4gICAgICBjb25zdCBsaWdodFR3byA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4MDBmZjAwLCAwLjQpO1xuICAgICAgY29uc3QgbGlnaHRUaHJlZSA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmYwMGZmLCAwLjUpO1xuICAgICAgY29uc3QgbGlnaHRGb3VyID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZjAwMDAsIDAuNSk7XG5cbiAgICAgIGxpZ2h0T25lLnBvc2l0aW9uLnNldCgwLCAtMSwgMCk7XG4gICAgICBsaWdodFR3by5wb3NpdGlvbi5zZXQoMCwgMSwgMCk7XG4gICAgICBsaWdodFRocmVlLnBvc2l0aW9uLnNldCgtMSwgMCwgMCk7XG4gICAgICBsaWdodEZvdXIucG9zaXRpb24uc2V0KDEsIDAsIDApO1xuXG4gICAgICBmb3IgKGNvbnN0IGxpZ2h0IG9mIFtsaWdodE9uZSwgbGlnaHRUd28sIGxpZ2h0VGhyZWUsIGxpZ2h0Rm91cl0pIHtcbiAgICAgICAgc2NlbmUuYWRkKGxpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZiwgMC4xKTtcbiAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyU2NlbmUoc2NlbmUpIHtcbiAgICBpZiAoc2NlbmUpIHtcbiAgICAgIHdoaWxlIChzY2VuZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNjZW5lLnJlbW92ZShzY2VuZS5jaGlsZHJlblswXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdW5mbGF0dGVuSGlsYmVydFZlY3RvcnMoaGlsYmVydEZsYXRCdWZmZXIpIHtcbiAgICBjb25zdCBoaWxiZXJ0VmVjdG9ycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGlsYmVydEZsYXRCdWZmZXIubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgIGhpbGJlcnRWZWN0b3JzLnB1c2goXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgICAgIGhpbGJlcnRGbGF0QnVmZmVyW2ldLFxuICAgICAgICAgIGhpbGJlcnRGbGF0QnVmZmVyW2kgKyAxXSxcbiAgICAgICAgICBoaWxiZXJ0RmxhdEJ1ZmZlcltpICsgMl1cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGhpbGJlcnRWZWN0b3JzO1xuICB9XG5cbiAgY29uc3QgVEhSRUVDYW52YXNNb3VudCA9IHVzZVJlZihudWxsKTtcblxuICAvLyBvbiBtb3VudCwgc2V0dXAgVEhSRUUuanMgc2NlbmVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNhbGxlZCBpbnRvIHVzZWVmZmVjdFwiKTtcbiAgICBsZXQgY2FtZXJhO1xuICAgIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgfSk7XG5cbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IobmV3IFRIUkVFLkNvbG9yKDB4MDAwMDAwKSk7XG4gICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XG5cbiAgICBUSFJFRUNhbnZhc01vdW50LmN1cnJlbnQuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICByZW5kZXJIaWxiZXJ0R2VvbWV0cnkoKTtcblxuICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICBpZiAoc2NlbmUgJiYgY2FtZXJhKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgLy8gdGhyb3cgdGhlIGNhbWVyYSBpbiBhIGdlbnRsZSBlbGxpcHNlIGFyb3VuZCBtb2RlbCBjZW50ZXJcbiAgICAgICAgcm90YXRpb24gKz0gMC4wMDY7XG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gTWF0aC5zaW4ocm90YXRpb24pICogMiAqKiBwICogMS41O1xuICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDIgKiogcDtcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSBNYXRoLmNvcyhyb3RhdGlvbikgKiAyICoqIHAgKiAxLjI7XG4gICAgICAgIGNhbWVyYS5sb29rQXQoc2NlbmUucG9zaXRpb24pO1xuICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyh7IHNjZW5lIH0sIHsgY2FtZXJhIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBhbmltYXRlKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVjb250YWluZXJcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdlb21ldHJ5SXMzRFwiPjNEPzwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgbmFtZT1cImlzR2VvbWV0cnkzRFwiXG4gICAgICAgICAgICBpZD1cImlzR2VvbWV0cnkzRFwiXG4gICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlY29udGFpbmVyXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpc0dlb21ldHJ5U3F1YXJlXCI+U3F1YXJlPzwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgbmFtZT1cImlzR2VvbWV0cnlTcXVhcmVcIlxuICAgICAgICAgICAgaWQ9XCJpc0dlb21ldHJ5U3F1YXJlXCJcbiAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVjb250YWluZXJcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBJbnB1dFwiPk1hZ25pdHVkZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICBtYXg9XCI2XCJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyXCJcbiAgICAgICAgICAgIGlkPVwicElucHV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGlwZVRoaWNrbmVzc0lucHV0XCI+VGhpY2tuZXNzPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAgIG1heD1cIjEwMDBcIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMTUwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlclwiXG4gICAgICAgICAgICBpZD1cInBpcGVUaGlja25lc3NJbnB1dFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgcmVmPXtUSFJFRUNhbnZhc01vdW50fSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGlsYmVydFRocmVlUmVuZGVyZXI7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwid2FzbSIsIlRIUkVFIiwibWVyZ2VHZW9tZXRyaWVzIiwiSGlsYmVydFRocmVlUmVuZGVyZXIiLCJwcm9wcyIsImluaXROIiwiaW5pdFAiLCJpbml0UGlwZVRoaWNrbmVzcyIsImluaXRHZW9tZXRyeVR5cGUiLCJzY2VuZSIsImNhbWVyYSIsIm4iLCJwIiwicGlwZVRoaWNrbmVzcyIsImdlb21ldHJ5VHlwZSIsInJvdGF0aW9uIiwidXBkYXRlTiIsIm5ld0dlb21ldHJ5VHlwZUlzM0QiLCJyZW5kZXJIaWxiZXJ0R2VvbWV0cnkiLCJ1cGRhdGVHZW9tZXRyeVR5cGUiLCJuZXdHZW9tZXRyeVR5cGVJc1NxdWFyZSIsInVwZGF0ZVAiLCJuZXdQIiwidXBkYXRlUGlwZVRoaWNrbmVzcyIsIm5ld1BpcGVUaGlja25lc3MiLCJjbGVhclNjZW5lIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJoaWxiZXJ0X2ZsYXRfYnVmZmVyIiwiaGlsYmVydF9jb29yZGluYXRlcyIsImhpbGJlcnRWZWN0b3JzIiwidW5mbGF0dGVuSGlsYmVydFZlY3RvcnMiLCJyb3VuZGVkR2VvbWV0cnkiLCJDYXBzdWxlR2VvbWV0cnkiLCJzcXVhcmVHZW9tZXRyeSIsIkJveEdlb21ldHJ5IiwicGlwZUdlb21ldHJ5IiwicGlwZU1hdGVyaWFsIiwiTWVzaFBob25nTWF0ZXJpYWwiLCJjb2xvciIsInJvdGF0ZVgiLCJyb3RhdGVaIiwiZ2VvbWV0cmllcyIsImkiLCJsZW5ndGgiLCJsaW5lSW5HZW9tZXRyeSIsImNsb25lIiwicHJldmlvdXNWZXJ0ZXgiLCJWZWN0b3IzIiwibGluZUluRGlyZWN0aW9uIiwic3ViIiwibm9ybWFsaXplIiwibG9va0F0IiwidHJhbnNsYXRlIiwieCIsInkiLCJ6IiwicHVzaCIsImhpbGJlcnRHZW9tZXRyaWVzIiwiaGlsYmVydE1lc2hlcyIsIk1lc2giLCJnZW9tZXRyeSIsImNlbnRlciIsImFkZCIsImxpZ2h0T25lIiwiRGlyZWN0aW9uYWxMaWdodCIsImxpZ2h0VHdvIiwibGlnaHRUaHJlZSIsImxpZ2h0Rm91ciIsInBvc2l0aW9uIiwic2V0IiwibGlnaHQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJjaGlsZHJlbiIsInJlbW92ZSIsImhpbGJlcnRGbGF0QnVmZmVyIiwiVEhSRUVDYW52YXNNb3VudCIsImNvbnNvbGUiLCJsb2ciLCJTY2VuZSIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsInNldFNpemUiLCJzZXRDbGVhckNvbG9yIiwiQ29sb3IiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImN1cnJlbnQiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiTWF0aCIsInNpbiIsImNvcyIsInJlbmRlciIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJpZCIsImRlZmF1bHRDaGVja2VkIiwibWluIiwibWF4IiwiZGVmYXVsdFZhbHVlIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HilbertThreeRenderer.tsx\n"));

/***/ })

});