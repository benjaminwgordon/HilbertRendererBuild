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

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pkg_hilbert_wasm_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pkg/hilbert_wasm_renderer */ \"../pkg/hilbert_wasm_renderer.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/utils/BufferGeometryUtils */ \"./node_modules/three/examples/jsm/utils/BufferGeometryUtils.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pkg_hilbert_wasm_renderer__WEBPACK_IMPORTED_MODULE_2__]);\n_pkg_hilbert_wasm_renderer__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst HilbertThreeRenderer = (props)=>{\n    _s();\n    const { initN , initP , initPipeThickness , initGeometryType  } = props;\n    let n = initN || 3;\n    let p = initP || 3;\n    let pipeThickness = initPipeThickness || 0.2;\n    let geometryType = initGeometryType || \"square\";\n    let rotation = 0;\n    const THREECanvasMount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    let camera;\n    const scene = new three__WEBPACK_IMPORTED_MODULE_3__.Scene();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const renderer = new three__WEBPACK_IMPORTED_MODULE_3__.WebGLRenderer({\n            antialias: true\n        });\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_3__.Color(0x000000));\n        renderer.setPixelRatio(window.devicePixelRatio);\n        THREECanvasMount.current.appendChild(renderer.domElement);\n        console.log(\"called into useeffect\");\n        renderHilbertGeometry();\n        function animate() {\n            if (scene && camera) {\n                requestAnimationFrame(animate);\n                // throw the camera in a gentle ellipse around model center\n                rotation += 0.006;\n                camera.position.x = Math.sin(rotation) * 2 ** p * 1.5;\n                camera.position.y = 2 ** p;\n                camera.position.z = Math.cos(rotation) * 2 ** p * 1.2;\n                camera.lookAt(scene.position);\n                renderer.render(scene, camera);\n            } else {\n                console.log({\n                    scene\n                }, {\n                    camera\n                });\n            }\n        }\n        animate();\n    }, []);\n    // global setters\n    const updateN = (newGeometryTypeIs3D)=>{\n        n = newGeometryTypeIs3D ? 3 : 2;\n        renderHilbertGeometry();\n    };\n    const updateGeometryType = (newGeometryTypeIsSquare)=>{\n        geometryType = newGeometryTypeIsSquare ? \"square\" : \"round\";\n        renderHilbertGeometry();\n    };\n    function updateP(newP) {\n        p = newP;\n        renderHilbertGeometry();\n    }\n    const updatePipeThickness = (newPipeThickness)=>{\n        // pipe thickness is specified as integers, but is actually thousands of a unit\n        pipeThickness = newPipeThickness / 1000;\n        renderHilbertGeometry();\n    };\n    function renderHilbertGeometry() {\n        // clear any prior geometry\n        clearScene(scene);\n        camera = new three__WEBPACK_IMPORTED_MODULE_3__.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);\n        const hilbert_flat_buffer = _pkg_hilbert_wasm_renderer__WEBPACK_IMPORTED_MODULE_2__.hilbert_coordinates(n, p);\n        const hilbertVectors = unflattenHilbertVectors(hilbert_flat_buffer);\n        const roundedGeometry = new three__WEBPACK_IMPORTED_MODULE_3__.CapsuleGeometry(pipeThickness, 1, 2);\n        const squareGeometry = new three__WEBPACK_IMPORTED_MODULE_3__.BoxGeometry(pipeThickness, 1 + pipeThickness, pipeThickness);\n        const pipeGeometry = geometryType == \"round\" ? roundedGeometry : squareGeometry;\n        // create a correctly rotated capsule geometry and use it like a prefab\n        const pipeMaterial = new three__WEBPACK_IMPORTED_MODULE_3__.MeshPhongMaterial({\n            color: 0xaaaaaa\n        });\n        pipeGeometry.rotateX(1.5708);\n        pipeGeometry.rotateZ(1.5708);\n        const geometries = [];\n        for(let i = 1; i < hilbertVectors.length; i++){\n            const lineInGeometry = pipeGeometry.clone();\n            const previousVertex = i == 0 ? new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(0, 0, 0) : hilbertVectors[i - 1];\n            const lineInDirection = hilbertVectors[i].clone().sub(previousVertex).normalize();\n            lineInGeometry.lookAt(lineInDirection);\n            lineInGeometry.translate(hilbertVectors[i].x - lineInDirection.x * 0.5, hilbertVectors[i].y - lineInDirection.y * 0.5, hilbertVectors[i].z - lineInDirection.z * 0.5);\n            geometries.push(lineInGeometry);\n        }\n        const hilbertGeometries = (0,three_examples_jsm_utils_BufferGeometryUtils__WEBPACK_IMPORTED_MODULE_4__.mergeGeometries)(geometries);\n        const hilbertMeshes = new three__WEBPACK_IMPORTED_MODULE_3__.Mesh(hilbertGeometries, pipeMaterial);\n        hilbertMeshes.geometry.center();\n        scene.add(hilbertMeshes);\n        const lightOne = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0x00ffff, 0.5);\n        const lightTwo = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0x00ff00, 0.4);\n        const lightThree = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0xff00ff, 0.5);\n        const lightFour = new three__WEBPACK_IMPORTED_MODULE_3__.DirectionalLight(0xff0000, 0.5);\n        lightOne.position.set(0, -1, 0);\n        lightTwo.position.set(0, 1, 0);\n        lightThree.position.set(-1, 0, 0);\n        lightFour.position.set(1, 0, 0);\n        for (const light of [\n            lightOne,\n            lightTwo,\n            lightThree,\n            lightFour\n        ]){\n            scene.add(light);\n        }\n        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_3__.AmbientLight(0xffffff, 0.1);\n        scene.add(ambientLight);\n    }\n    function clearScene(scene) {\n        if (scene) {\n            while(scene.children.length > 0){\n                scene.remove(scene.children[0]);\n            }\n        }\n    }\n    function unflattenHilbertVectors(hilbertFlatBuffer) {\n        const hilbertVectors = [];\n        for(let i = 0; i < hilbertFlatBuffer.length; i += 3){\n            hilbertVectors.push(new three__WEBPACK_IMPORTED_MODULE_3__.Vector3(hilbertFlatBuffer[i], hilbertFlatBuffer[i + 1], hilbertFlatBuffer[i + 2]));\n        }\n        return hilbertVectors;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"controls\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slidecontainer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"geometryIs3D\",\n                                children: \"3D?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 170,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                name: \"isGeometry3D\",\n                                id: \"isGeometry3D\",\n                                defaultChecked: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 171,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                        lineNumber: 169,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slidecontainer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"isGeometrySquare\",\n                                children: \"Square?\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 179,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                name: \"isGeometrySquare\",\n                                id: \"isGeometrySquare\",\n                                defaultChecked: true\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 180,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                        lineNumber: 178,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slidecontainer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"pInput\",\n                                children: \"Magnitude\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 188,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"range\",\n                                min: \"1\",\n                                max: \"6\",\n                                defaultValue: \"3\",\n                                className: \"slider\",\n                                id: \"pInput\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 189,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                        lineNumber: 187,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slidecontainer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"pipeThicknessInput\",\n                                children: \"Thickness\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 199,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"range\",\n                                min: \"1\",\n                                max: \"1000\",\n                                defaultValue: \"150\",\n                                className: \"slider\",\n                                id: \"pipeThicknessInput\",\n                                onChange: (e)=>updatePipeThickness(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                                lineNumber: 200,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                        lineNumber: 198,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                lineNumber: 168,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: THREECanvasMount\n            }, void 0, false, {\n                fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n                lineNumber: 211,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/code/hilbert-wasm-renderer/www/components/HilbertThreeRenderer.tsx\",\n        lineNumber: 167,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HilbertThreeRenderer, \"rA5+WhA7rW3a1V3MTTlalWhnvm8=\");\n_c = HilbertThreeRenderer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HilbertThreeRenderer);\nvar _c;\n$RefreshReg$(_c, \"HilbertThreeRenderer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQztnQ0FBTUMsU0FBUTswQ0FBZTs7Ozs7OzBDQUM5Qiw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLGNBQWM7Ozs7Ozs7Ozs7OztrQ0FHbEIsOERBQUNSO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQU1DLFNBQVE7MENBQW1COzs7Ozs7MENBQ2xDLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTEMsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSEMsY0FBYzs7Ozs7Ozs7Ozs7O2tDQUdsQiw4REFBQ1I7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBTUMsU0FBUTswQ0FBUzs7Ozs7OzBDQUN4Qiw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xJLEtBQUk7Z0NBQ0pDLEtBQUk7Z0NBQ0pDLGNBQWE7Z0NBQ2JWLFdBQVU7Z0NBQ1ZNLElBQUc7Ozs7Ozs7Ozs7OztrQ0FHUCw4REFBQ1A7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBTUMsU0FBUTswQ0FBcUI7Ozs7OzswQ0FDcEMsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMSSxLQUFJO2dDQUNKQyxLQUFJO2dDQUNKQyxjQUFhO2dDQUNiVixXQUFVO2dDQUNWTSxJQUFHO2dDQUNISyxVQUFVLENBQUNDLElBQU03RCxvQkFBb0I2RCxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJekQsOERBQUNmO2dCQUFJZ0IsS0FBS3RHOzs7Ozs7Ozs7Ozs7QUFHaEI7R0ExTU1YO0tBQUFBO0FBNE1OLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IaWxiZXJ0VGhyZWVSZW5kZXJlci50c3g/OTI3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIHdhc20gZnJvbSBcIi4uLy4uL3BrZy9oaWxiZXJ0X3dhc21fcmVuZGVyZXJcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgbWVyZ2VHZW9tZXRyaWVzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS91dGlscy9CdWZmZXJHZW9tZXRyeVV0aWxzXCI7XG5cbnR5cGUgSGlsYmVydFRocmVlUmVuZGVyZXJQcm9wcyA9IHtcbiAgaW5pdE46IG51bWJlcjtcbiAgaW5pdFA6IG51bWJlcjtcbiAgaW5pdFBpcGVUaGlja25lc3M6IG51bWJlcjtcbiAgaW5pdEdlb21ldHJ5VHlwZTogc3RyaW5nO1xufTtcbmNvbnN0IEhpbGJlcnRUaHJlZVJlbmRlcmVyID0gKHByb3BzOiBIaWxiZXJ0VGhyZWVSZW5kZXJlclByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaW5pdE4sIGluaXRQLCBpbml0UGlwZVRoaWNrbmVzcywgaW5pdEdlb21ldHJ5VHlwZSB9ID0gcHJvcHM7XG5cbiAgbGV0IG4gPSBpbml0TiB8fCAzO1xuICBsZXQgcCA9IGluaXRQIHx8IDM7XG4gIGxldCBwaXBlVGhpY2tuZXNzID0gaW5pdFBpcGVUaGlja25lc3MgfHwgMC4yO1xuICBsZXQgZ2VvbWV0cnlUeXBlID0gaW5pdEdlb21ldHJ5VHlwZSB8fCBcInNxdWFyZVwiO1xuICBsZXQgcm90YXRpb24gPSAwO1xuICBjb25zdCBUSFJFRUNhbnZhc01vdW50ID0gdXNlUmVmKG51bGwpO1xuXG4gIGxldCBjYW1lcmE6IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhIHwgbnVsbDtcbiAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgYW50aWFsaWFzOiB0cnVlLFxuICAgIH0pO1xuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcihuZXcgVEhSRUUuQ29sb3IoMHgwMDAwMDApKTtcbiAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcblxuICAgIFRIUkVFQ2FudmFzTW91bnQuY3VycmVudC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgIGNvbnNvbGUubG9nKFwiY2FsbGVkIGludG8gdXNlZWZmZWN0XCIpO1xuXG4gICAgcmVuZGVySGlsYmVydEdlb21ldHJ5KCk7XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgaWYgKHNjZW5lICYmIGNhbWVyYSkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIC8vIHRocm93IHRoZSBjYW1lcmEgaW4gYSBnZW50bGUgZWxsaXBzZSBhcm91bmQgbW9kZWwgY2VudGVyXG4gICAgICAgIHJvdGF0aW9uICs9IDAuMDA2O1xuICAgICAgICBjYW1lcmEucG9zaXRpb24ueCA9IE1hdGguc2luKHJvdGF0aW9uKSAqIDIgKiogcCAqIDEuNTtcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAyICoqIHA7XG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gTWF0aC5jb3Mocm90YXRpb24pICogMiAqKiBwICogMS4yO1xuICAgICAgICBjYW1lcmEubG9va0F0KHNjZW5lLnBvc2l0aW9uKTtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coeyBzY2VuZSB9LCB7IGNhbWVyYSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgYW5pbWF0ZSgpO1xuICB9LCBbXSk7XG5cbiAgLy8gZ2xvYmFsIHNldHRlcnNcbiAgY29uc3QgdXBkYXRlTiA9IChuZXdHZW9tZXRyeVR5cGVJczNEKSA9PiB7XG4gICAgbiA9IG5ld0dlb21ldHJ5VHlwZUlzM0QgPyAzIDogMjtcbiAgICByZW5kZXJIaWxiZXJ0R2VvbWV0cnkoKTtcbiAgfTtcbiAgY29uc3QgdXBkYXRlR2VvbWV0cnlUeXBlID0gKG5ld0dlb21ldHJ5VHlwZUlzU3F1YXJlKSA9PiB7XG4gICAgZ2VvbWV0cnlUeXBlID0gbmV3R2VvbWV0cnlUeXBlSXNTcXVhcmUgPyBcInNxdWFyZVwiIDogXCJyb3VuZFwiO1xuICAgIHJlbmRlckhpbGJlcnRHZW9tZXRyeSgpO1xuICB9O1xuICBmdW5jdGlvbiB1cGRhdGVQKG5ld1ApIHtcbiAgICBwID0gbmV3UDtcbiAgICByZW5kZXJIaWxiZXJ0R2VvbWV0cnkoKTtcbiAgfVxuICBjb25zdCB1cGRhdGVQaXBlVGhpY2tuZXNzID0gKG5ld1BpcGVUaGlja25lc3MpID0+IHtcbiAgICAvLyBwaXBlIHRoaWNrbmVzcyBpcyBzcGVjaWZpZWQgYXMgaW50ZWdlcnMsIGJ1dCBpcyBhY3R1YWxseSB0aG91c2FuZHMgb2YgYSB1bml0XG4gICAgcGlwZVRoaWNrbmVzcyA9IG5ld1BpcGVUaGlja25lc3MgLyAxMDAwO1xuICAgIHJlbmRlckhpbGJlcnRHZW9tZXRyeSgpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJlbmRlckhpbGJlcnRHZW9tZXRyeSgpIHtcbiAgICAvLyBjbGVhciBhbnkgcHJpb3IgZ2VvbWV0cnlcbiAgICBjbGVhclNjZW5lKHNjZW5lKTtcblxuICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcbiAgICAgIDcwLFxuICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAwLjEsXG4gICAgICAxMDAwXG4gICAgKTtcblxuICAgIGNvbnN0IGhpbGJlcnRfZmxhdF9idWZmZXIgPSB3YXNtLmhpbGJlcnRfY29vcmRpbmF0ZXMobiwgcCk7XG4gICAgY29uc3QgaGlsYmVydFZlY3RvcnMgPSB1bmZsYXR0ZW5IaWxiZXJ0VmVjdG9ycyhoaWxiZXJ0X2ZsYXRfYnVmZmVyKTtcblxuICAgIGNvbnN0IHJvdW5kZWRHZW9tZXRyeSA9IG5ldyBUSFJFRS5DYXBzdWxlR2VvbWV0cnkocGlwZVRoaWNrbmVzcywgMSwgMik7XG4gICAgY29uc3Qgc3F1YXJlR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoXG4gICAgICBwaXBlVGhpY2tuZXNzLFxuICAgICAgMSArIHBpcGVUaGlja25lc3MsXG4gICAgICBwaXBlVGhpY2tuZXNzXG4gICAgKTtcbiAgICBjb25zdCBwaXBlR2VvbWV0cnkgPVxuICAgICAgZ2VvbWV0cnlUeXBlID09IFwicm91bmRcIiA/IHJvdW5kZWRHZW9tZXRyeSA6IHNxdWFyZUdlb21ldHJ5O1xuXG4gICAgLy8gY3JlYXRlIGEgY29ycmVjdGx5IHJvdGF0ZWQgY2Fwc3VsZSBnZW9tZXRyeSBhbmQgdXNlIGl0IGxpa2UgYSBwcmVmYWJcbiAgICBjb25zdCBwaXBlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHhhYWFhYWEgfSk7XG4gICAgcGlwZUdlb21ldHJ5LnJvdGF0ZVgoMS41NzA4KTtcbiAgICBwaXBlR2VvbWV0cnkucm90YXRlWigxLjU3MDgpO1xuXG4gICAgY29uc3QgZ2VvbWV0cmllcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaGlsYmVydFZlY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmVJbkdlb21ldHJ5ID0gcGlwZUdlb21ldHJ5LmNsb25lKCk7XG4gICAgICBjb25zdCBwcmV2aW91c1ZlcnRleCA9XG4gICAgICAgIGkgPT0gMCA/IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApIDogaGlsYmVydFZlY3RvcnNbaSAtIDFdO1xuICAgICAgY29uc3QgbGluZUluRGlyZWN0aW9uID0gaGlsYmVydFZlY3RvcnNbaV1cbiAgICAgICAgLmNsb25lKClcbiAgICAgICAgLnN1YihwcmV2aW91c1ZlcnRleClcbiAgICAgICAgLm5vcm1hbGl6ZSgpO1xuICAgICAgbGluZUluR2VvbWV0cnkubG9va0F0KGxpbmVJbkRpcmVjdGlvbik7XG4gICAgICBsaW5lSW5HZW9tZXRyeS50cmFuc2xhdGUoXG4gICAgICAgIGhpbGJlcnRWZWN0b3JzW2ldLnggLSBsaW5lSW5EaXJlY3Rpb24ueCAqIDAuNSxcbiAgICAgICAgaGlsYmVydFZlY3RvcnNbaV0ueSAtIGxpbmVJbkRpcmVjdGlvbi55ICogMC41LFxuICAgICAgICBoaWxiZXJ0VmVjdG9yc1tpXS56IC0gbGluZUluRGlyZWN0aW9uLnogKiAwLjVcbiAgICAgICk7XG4gICAgICBnZW9tZXRyaWVzLnB1c2gobGluZUluR2VvbWV0cnkpO1xuICAgIH1cblxuICAgIGNvbnN0IGhpbGJlcnRHZW9tZXRyaWVzID0gbWVyZ2VHZW9tZXRyaWVzKGdlb21ldHJpZXMpO1xuICAgIGNvbnN0IGhpbGJlcnRNZXNoZXMgPSBuZXcgVEhSRUUuTWVzaChoaWxiZXJ0R2VvbWV0cmllcywgcGlwZU1hdGVyaWFsKTtcbiAgICBoaWxiZXJ0TWVzaGVzLmdlb21ldHJ5LmNlbnRlcigpO1xuICAgIHNjZW5lLmFkZChoaWxiZXJ0TWVzaGVzKTtcblxuICAgIGNvbnN0IGxpZ2h0T25lID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHgwMGZmZmYsIDAuNSk7XG4gICAgY29uc3QgbGlnaHRUd28gPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweDAwZmYwMCwgMC40KTtcbiAgICBjb25zdCBsaWdodFRocmVlID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZjAwZmYsIDAuNSk7XG4gICAgY29uc3QgbGlnaHRGb3VyID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZjAwMDAsIDAuNSk7XG5cbiAgICBsaWdodE9uZS5wb3NpdGlvbi5zZXQoMCwgLTEsIDApO1xuICAgIGxpZ2h0VHdvLnBvc2l0aW9uLnNldCgwLCAxLCAwKTtcbiAgICBsaWdodFRocmVlLnBvc2l0aW9uLnNldCgtMSwgMCwgMCk7XG4gICAgbGlnaHRGb3VyLnBvc2l0aW9uLnNldCgxLCAwLCAwKTtcblxuICAgIGZvciAoY29uc3QgbGlnaHQgb2YgW2xpZ2h0T25lLCBsaWdodFR3bywgbGlnaHRUaHJlZSwgbGlnaHRGb3VyXSkge1xuICAgICAgc2NlbmUuYWRkKGxpZ2h0KTtcbiAgICB9XG5cbiAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAwLjEpO1xuICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJTY2VuZShzY2VuZSkge1xuICAgIGlmIChzY2VuZSkge1xuICAgICAgd2hpbGUgKHNjZW5lLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2NlbmUucmVtb3ZlKHNjZW5lLmNoaWxkcmVuWzBdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1bmZsYXR0ZW5IaWxiZXJ0VmVjdG9ycyhoaWxiZXJ0RmxhdEJ1ZmZlcikge1xuICAgIGNvbnN0IGhpbGJlcnRWZWN0b3JzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoaWxiZXJ0RmxhdEJ1ZmZlci5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgaGlsYmVydFZlY3RvcnMucHVzaChcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgICAgICAgaGlsYmVydEZsYXRCdWZmZXJbaV0sXG4gICAgICAgICAgaGlsYmVydEZsYXRCdWZmZXJbaSArIDFdLFxuICAgICAgICAgIGhpbGJlcnRGbGF0QnVmZmVyW2kgKyAyXVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gaGlsYmVydFZlY3RvcnM7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xzXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVjb250YWluZXJcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImdlb21ldHJ5SXMzRFwiPjNEPzwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgbmFtZT1cImlzR2VvbWV0cnkzRFwiXG4gICAgICAgICAgICBpZD1cImlzR2VvbWV0cnkzRFwiXG4gICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlY29udGFpbmVyXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpc0dlb21ldHJ5U3F1YXJlXCI+U3F1YXJlPzwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgbmFtZT1cImlzR2VvbWV0cnlTcXVhcmVcIlxuICAgICAgICAgICAgaWQ9XCJpc0dlb21ldHJ5U3F1YXJlXCJcbiAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVjb250YWluZXJcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBJbnB1dFwiPk1hZ25pdHVkZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgbWluPVwiMVwiXG4gICAgICAgICAgICBtYXg9XCI2XCJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjNcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpZGVyXCJcbiAgICAgICAgICAgIGlkPVwicElucHV0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGlwZVRoaWNrbmVzc0lucHV0XCI+VGhpY2tuZXNzPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAgIG1heD1cIjEwMDBcIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMTUwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlclwiXG4gICAgICAgICAgICBpZD1cInBpcGVUaGlja25lc3NJbnB1dFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwZGF0ZVBpcGVUaGlja25lc3MoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHJlZj17VEhSRUVDYW52YXNNb3VudH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhpbGJlcnRUaHJlZVJlbmRlcmVyO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsIndhc20iLCJUSFJFRSIsIm1lcmdlR2VvbWV0cmllcyIsIkhpbGJlcnRUaHJlZVJlbmRlcmVyIiwicHJvcHMiLCJpbml0TiIsImluaXRQIiwiaW5pdFBpcGVUaGlja25lc3MiLCJpbml0R2VvbWV0cnlUeXBlIiwibiIsInAiLCJwaXBlVGhpY2tuZXNzIiwiZ2VvbWV0cnlUeXBlIiwicm90YXRpb24iLCJUSFJFRUNhbnZhc01vdW50IiwiY2FtZXJhIiwic2NlbmUiLCJTY2VuZSIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJzZXRDbGVhckNvbG9yIiwiQ29sb3IiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsImN1cnJlbnQiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwicmVuZGVySGlsYmVydEdlb21ldHJ5IiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBvc2l0aW9uIiwieCIsIk1hdGgiLCJzaW4iLCJ5IiwieiIsImNvcyIsImxvb2tBdCIsInJlbmRlciIsInVwZGF0ZU4iLCJuZXdHZW9tZXRyeVR5cGVJczNEIiwidXBkYXRlR2VvbWV0cnlUeXBlIiwibmV3R2VvbWV0cnlUeXBlSXNTcXVhcmUiLCJ1cGRhdGVQIiwibmV3UCIsInVwZGF0ZVBpcGVUaGlja25lc3MiLCJuZXdQaXBlVGhpY2tuZXNzIiwiY2xlYXJTY2VuZSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwiaGlsYmVydF9mbGF0X2J1ZmZlciIsImhpbGJlcnRfY29vcmRpbmF0ZXMiLCJoaWxiZXJ0VmVjdG9ycyIsInVuZmxhdHRlbkhpbGJlcnRWZWN0b3JzIiwicm91bmRlZEdlb21ldHJ5IiwiQ2Fwc3VsZUdlb21ldHJ5Iiwic3F1YXJlR2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsInBpcGVHZW9tZXRyeSIsInBpcGVNYXRlcmlhbCIsIk1lc2hQaG9uZ01hdGVyaWFsIiwiY29sb3IiLCJyb3RhdGVYIiwicm90YXRlWiIsImdlb21ldHJpZXMiLCJpIiwibGVuZ3RoIiwibGluZUluR2VvbWV0cnkiLCJjbG9uZSIsInByZXZpb3VzVmVydGV4IiwiVmVjdG9yMyIsImxpbmVJbkRpcmVjdGlvbiIsInN1YiIsIm5vcm1hbGl6ZSIsInRyYW5zbGF0ZSIsInB1c2giLCJoaWxiZXJ0R2VvbWV0cmllcyIsImhpbGJlcnRNZXNoZXMiLCJNZXNoIiwiZ2VvbWV0cnkiLCJjZW50ZXIiLCJhZGQiLCJsaWdodE9uZSIsIkRpcmVjdGlvbmFsTGlnaHQiLCJsaWdodFR3byIsImxpZ2h0VGhyZWUiLCJsaWdodEZvdXIiLCJzZXQiLCJsaWdodCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImNoaWxkcmVuIiwicmVtb3ZlIiwiaGlsYmVydEZsYXRCdWZmZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiaWQiLCJkZWZhdWx0Q2hlY2tlZCIsIm1pbiIsIm1heCIsImRlZmF1bHRWYWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HilbertThreeRenderer.tsx\n"));

/***/ })

});