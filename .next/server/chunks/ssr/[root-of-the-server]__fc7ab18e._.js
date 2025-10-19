module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Components/Components/Navigation.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backdrop": "Navigation-module__vOqpDa__backdrop",
  "bg": "Navigation-module__vOqpDa__bg",
  "bg1": "Navigation-module__vOqpDa__bg1",
  "bg2": "Navigation-module__vOqpDa__bg2",
  "bg3": "Navigation-module__vOqpDa__bg3",
  "bg4": "Navigation-module__vOqpDa__bg4",
  "bg5": "Navigation-module__vOqpDa__bg5",
  "bg6": "Navigation-module__vOqpDa__bg6",
  "bg7": "Navigation-module__vOqpDa__bg7",
  "bg8": "Navigation-module__vOqpDa__bg8",
  "button": "Navigation-module__vOqpDa__button",
  "closeBtn": "Navigation-module__vOqpDa__closeBtn",
  "container": "Navigation-module__vOqpDa__container",
  "decoImg": "Navigation-module__vOqpDa__decoImg",
  "header": "Navigation-module__vOqpDa__header",
  "hide": "Navigation-module__vOqpDa__hide",
  "linkDivider": "Navigation-module__vOqpDa__linkDivider",
  "logo": "Navigation-module__vOqpDa__logo",
  "menuHeading": "Navigation-module__vOqpDa__menuHeading",
  "menuIcon": "Navigation-module__vOqpDa__menuIcon",
  "nav": "Navigation-module__vOqpDa__nav",
  "navLink": "Navigation-module__vOqpDa__navLink",
  "open": "Navigation-module__vOqpDa__open",
  "right": "Navigation-module__vOqpDa__right",
  "show": "Navigation-module__vOqpDa__show",
  "sidebar": "Navigation-module__vOqpDa__sidebar",
  "sidebarInner": "Navigation-module__vOqpDa__sidebarInner",
  "sidebarItem": "Navigation-module__vOqpDa__sidebarItem",
  "sidebarLink": "Navigation-module__vOqpDa__sidebarLink",
  "sidebarNav": "Navigation-module__vOqpDa__sidebarNav",
});
}),
"[project]/Components/Components/Navigation.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Components/Components/Navigation.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
const routes = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "About Us",
        href: "/about"
    },
    {
        name: "Service",
        href: "/service"
    },
    {
        name: "Blog",
        href: "/blog"
    },
    {
        name: "Contact Us",
        href: "/contact"
    }
];
const Navigation = ()=>{
    const [showHeader, setShowHeader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>{
            const curr = window.scrollY;
            if (curr > lastScrollY.current && curr > 80) setShowHeader(false);
            else setShowHeader(true);
            lastScrollY.current = curr;
        };
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header} ${!showHeader ? __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hide : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953170/removeb_sxbskt.png",
                                alt: "Chef Choice Menu"
                            }, void 0, false, {
                                fileName: "[project]/Components/Components/Navigation.jsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Components/Components/Navigation.jsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nav,
                            children: routes.map((route, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: route.href,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLink,
                                    onClick: ()=>console.log('nav click', route.href),
                                    children: route.name
                                }, i, false, {
                                    fileName: "[project]/Components/Components/Navigation.jsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Components/Components/Navigation.jsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].right,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/book-chef",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button,
                                children: "Book Chef"
                            }, void 0, false, {
                                fileName: "[project]/Components/Components/Navigation.jsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Components/Components/Navigation.jsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuIcon,
                            onClick: ()=>setMenuOpen(true),
                            "aria-label": "Open menu",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953159/icons8_ykt3tj.gif",
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/Components/Components/Navigation.jsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Components/Components/Navigation.jsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Components/Components/Navigation.jsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Components/Components/Navigation.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].backdrop} ${menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].show : ""}`,
                onClick: ()=>setMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/Components/Components/Navigation.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebar} ${menuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].open : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953146/56325_vulakb.png",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bg} ${__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bg1}`,
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/Components/Components/Navigation.jsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953144/08_or6jqw.png",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bg} ${__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bg2}`,
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/Components/Components/Navigation.jsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953159/Group33_xfqtx4.png",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bg} ${__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bg3}`,
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/Components/Components/Navigation.jsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953153/Group27_vdqdh6.png",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bg} ${__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bg4}`,
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/Components/Components/Navigation.jsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953177/s-icon-2_1_uops5f.png",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bg} ${__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bg5}`,
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/Components/Components/Navigation.jsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953148/chef4_aissby.png",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bg} ${__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bg6}`,
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/Components/Components/Navigation.jsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953177/s-icon-4_1_ow08kr.png",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bg} ${__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bg7}`,
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/Components/Components/Navigation.jsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953146/bg-131_pb6ir0.png",
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bg} ${__TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bg8}`,
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/Components/Components/Navigation.jsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebarInner,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].closeBtn,
                                onClick: ()=>setMenuOpen(false),
                                "aria-label": "Close menu",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/Components/Components/Navigation.jsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953148/deco_e7k5e4.png",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].decoImg,
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/Components/Components/Navigation.jsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menuHeading,
                                children: "Menu"
                            }, void 0, false, {
                                fileName: "[project]/Components/Components/Navigation.jsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953148/deco2_wzy8rn.png",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].decoImg,
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/Components/Components/Navigation.jsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebarNav,
                                children: [
                                    routes.map((route, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebarItem,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: route.href,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebarLink,
                                                    onClick: ()=>{
                                                        console.log('sidebar click', route.href);
                                                        setMenuOpen(false);
                                                    },
                                                    children: route.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Components/Components/Navigation.jsx",
                                                    lineNumber: 160,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953159/image_reswea.png",
                                                    alt: "",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].linkDivider
                                                }, void 0, false, {
                                                    fileName: "[project]/Components/Components/Navigation.jsx",
                                                    lineNumber: 170,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Components/Components/Navigation.jsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/book-chef",
                                        onClick: ()=>setMenuOpen(false),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Components$2f$Components$2f$Navigation$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].button,
                                            children: "Book Your Chef"
                                        }, void 0, false, {
                                            fileName: "[project]/Components/Components/Navigation.jsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Components/Components/Navigation.jsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Components/Components/Navigation.jsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Components/Components/Navigation.jsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Components/Components/Navigation.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Navigation;
}),
"[project]/Components/Components/PathLogger.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PathLogger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
function PathLogger() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("PathLogger client pathname:", pathname);
    }, [
        pathname
    ]);
    return null;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fc7ab18e._.js.map