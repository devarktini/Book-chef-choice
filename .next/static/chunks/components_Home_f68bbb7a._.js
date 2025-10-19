(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Home/Hero/HeroSection.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "HeroSection-module__sYBn9a__active",
  "button": "HeroSection-module__sYBn9a__button",
  "hero": "HeroSection-module__sYBn9a__hero",
  "heroText": "HeroSection-module__sYBn9a__heroText",
  "heroText1": "HeroSection-module__sYBn9a__heroText1",
  "heroText2": "HeroSection-module__sYBn9a__heroText2",
  "overlay": "HeroSection-module__sYBn9a__overlay",
  "overlayBackground": "HeroSection-module__sYBn9a__overlayBackground",
  "slide": "HeroSection-module__sYBn9a__slide",
  "videoBackground": "HeroSection-module__sYBn9a__videoBackground",
  "videoWrapper": "HeroSection-module__sYBn9a__videoWrapper",
});
}),
"[project]/components/Home/Hero/HeroSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Hero$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Home/Hero/HeroSection.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Optimized Cloudinary video URL
const videoSrc = "https://res.cloudinary.com/dzvvb0z0h/video/upload/f_auto,q_auto/v1760203198/8626668-hd_1920_1080_25fps_xxekee.mp4";
// Poster image for LCP
const posterSrc = "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1760203335/Screenshot_2025-10-11_225051_rk9kfd.png";
// Slideshow images (fallback for mobile/video error)
const slides = [
    "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953143/1_eofr2u.jpg",
    "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953145/28_fcqdux.jpg"
];
function HeroSection() {
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [videoError, setVideoError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Slideshow fallback if video not loaded
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            if (videoError) {
                const interval = setInterval({
                    "HeroSection.useEffect.interval": ()=>{
                        setCurrentSlide({
                            "HeroSection.useEffect.interval": (prev)=>(prev + 1) % slides.length
                        }["HeroSection.useEffect.interval"]);
                    }
                }["HeroSection.useEffect.interval"], 3000);
                return ({
                    "HeroSection.useEffect": ()=>clearInterval(interval)
                })["HeroSection.useEffect"];
            }
        }
    }["HeroSection.useEffect"], [
        videoError
    ]);
    // Responsive switch (video on desktop, slideshow on mobile)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const handleResize = {
                "HeroSection.useEffect.handleResize": ()=>{
                    if (window.innerWidth < 768) {
                        setVideoError(true); // force slideshow on small screens
                    } else {
                        setVideoError(false); // allow video on larger screens
                    }
                }
            }["HeroSection.useEffect.handleResize"];
            handleResize(); // run once on mount
            window.addEventListener("resize", handleResize);
            return ({
                "HeroSection.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Hero$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero,
        children: [
            !videoError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                autoPlay: true,
                loop: true,
                muted: true,
                playsInline: true,
                preload: "none",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Hero$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoBackground,
                poster: posterSrc,
                onError: ()=>setVideoError(true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                        src: videoSrc,
                        type: "video/mp4"
                    }, void 0, false, {
                        fileName: "[project]/components/Home/Hero/HeroSection.jsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    "Your browser does not support the video tag."
                ]
            }, void 0, true, {
                fileName: "[project]/components/Home/Hero/HeroSection.jsx",
                lineNumber: 54,
                columnNumber: 9
            }, this),
            videoError && slides.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: src,
                    alt: "Slide ".concat(index + 1),
                    fetchPriority: index === 0 ? "high" : undefined,
                    decoding: "async",
                    loading: index === 0 ? "eager" : "lazy",
                    className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Hero$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slide, " ").concat(index === currentSlide ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Hero$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : "")
                }, index, false, {
                    fileName: "[project]/components/Home/Hero/HeroSection.jsx",
                    lineNumber: 72,
                    columnNumber: 13
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Hero$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlayBackground
            }, void 0, false, {
                fileName: "[project]/components/Home/Hero/HeroSection.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Hero$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Hero$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroText,
                        children: "Delightful Experiences, Anytime, Anywhere"
                    }, void 0, false, {
                        fileName: "[project]/components/Home/Hero/HeroSection.jsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953148/deco_e7k5e4.png",
                        alt: "decorative",
                        loading: "lazy",
                        decoding: "async"
                    }, void 0, false, {
                        fileName: "[project]/components/Home/Hero/HeroSection.jsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Hero$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroText1,
                        children: "Welcome to Chef Choice Menu"
                    }, void 0, false, {
                        fileName: "[project]/components/Home/Hero/HeroSection.jsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Hero$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroText2,
                        children: "Discover the finest dishes crafted with love"
                    }, void 0, false, {
                        fileName: "[project]/components/Home/Hero/HeroSection.jsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953148/deco2_wzy8rn.png",
                        alt: "decorative",
                        loading: "lazy",
                        decoding: "async"
                    }, void 0, false, {
                        fileName: "[project]/components/Home/Hero/HeroSection.jsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/occasion",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Hero$2f$HeroSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                            children: "Book Your Chef"
                        }, void 0, false, {
                            fileName: "[project]/components/Home/Hero/HeroSection.jsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Home/Hero/HeroSection.jsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Home/Hero/HeroSection.jsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Home/Hero/HeroSection.jsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "4Rwna4TfFs8S1DHKruLS8fx6+Lc=");
_c = HeroSection;
const __TURBOPACK__default__export__ = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Home/SecondSection/SecondSection.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "backgroundImage": "SecondSection-module__wJVuZa__backgroundImage",
  "cardContainer": "SecondSection-module__wJVuZa__cardContainer",
  "heading": "SecondSection-module__wJVuZa__heading",
  "iconWrapper": "SecondSection-module__wJVuZa__iconWrapper",
  "section": "SecondSection-module__wJVuZa__section",
});
}),
"[project]/components/Home/SecondSection/ActionAreaCard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "ActionAreaCard-module__wA_Pgq__card",
  "cardMedia": "ActionAreaCard-module__wA_Pgq__cardMedia",
  "description": "ActionAreaCard-module__wA_Pgq__description",
  "title": "ActionAreaCard-module__wA_Pgq__title",
});
}),
"[project]/components/Home/SecondSection/ActionAreaCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActionAreaCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Card/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardContent/CardContent.js [app-client] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardMedia$2f$CardMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardMedia$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardMedia/CardMedia.js [app-client] (ecmascript) <export default as CardMedia>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardActionArea$2f$CardActionArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardActionArea$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardActionArea/CardActionArea.js [app-client] (ecmascript) <export default as CardActionArea>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$SecondSection$2f$ActionAreaCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Home/SecondSection/ActionAreaCard.module.css [app-client] (css module)");
"use client";
;
;
;
;
function ActionAreaCard(param) {
    let { image, title, description } = param;
    // Ensure Cloudinary images are optimized
    const optimizedImage = image.includes("cloudinary.com") ? "".concat(image, "?f_auto,q_auto,w_600") : image;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$SecondSection$2f$ActionAreaCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardActionArea$2f$CardActionArea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardActionArea$3e$__["CardActionArea"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardMedia$2f$CardMedia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardMedia$3e$__["CardMedia"], {
                    component: "img",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$SecondSection$2f$ActionAreaCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardMedia,
                    image: optimizedImage,
                    alt: title,
                    loading: "lazy"
                }, void 0, false, {
                    fileName: "[project]/components/Home/SecondSection/ActionAreaCard.jsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$SecondSection$2f$ActionAreaCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContent,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$SecondSection$2f$ActionAreaCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            gutterBottom: true,
                            variant: "h5",
                            component: "div",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/Home/SecondSection/ActionAreaCard.jsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$SecondSection$2f$ActionAreaCard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                            variant: "body2",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/components/Home/SecondSection/ActionAreaCard.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Home/SecondSection/ActionAreaCard.jsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Home/SecondSection/ActionAreaCard.jsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Home/SecondSection/ActionAreaCard.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = ActionAreaCard;
var _c;
__turbopack_context__.k.register(_c, "ActionAreaCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Home/SecondSection/SecondSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$SecondSection$2f$SecondSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Home/SecondSection/SecondSection.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$SecondSection$2f$ActionAreaCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Home/SecondSection/ActionAreaCard.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const SecondSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$SecondSection$2f$SecondSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$SecondSection$2f$SecondSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heading,
                children: "Our Services"
            }, void 0, false, {
                fileName: "[project]/components/Home/SecondSection/SecondSection.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$SecondSection$2f$SecondSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconWrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953148/deco23_oucobt.png",
                    alt: "Decoration Icon"
                }, void 0, false, {
                    fileName: "[project]/components/Home/SecondSection/SecondSection.jsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Home/SecondSection/SecondSection.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$SecondSection$2f$SecondSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$SecondSection$2f$ActionAreaCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        image: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953167/PR2_nfaxdv.jpg",
                        title: "Private chefs",
                        description: "Handpicked chefs who bring restaurant-quality dining to your kitchen. Perfect for intimate gatherings, anniversaries, or cozy get-togethers."
                    }, void 0, false, {
                        fileName: "[project]/components/Home/SecondSection/SecondSection.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$SecondSection$2f$ActionAreaCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        image: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953143/03_tqlqtq.jpg",
                        title: "Catering services",
                        description: "Seamless catering solutions for weddings, corporate events, birthdays, and festivals—crafted with precision and warmth."
                    }, void 0, false, {
                        fileName: "[project]/components/Home/SecondSection/SecondSection.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$SecondSection$2f$ActionAreaCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        image: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953143/04_glszua.jpg",
                        title: "Chef’s table",
                        description: "An exclusive fine-dining experience where you watch our culinary masters create exquisite dishes right in front of you."
                    }, void 0, false, {
                        fileName: "[project]/components/Home/SecondSection/SecondSection.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$SecondSection$2f$ActionAreaCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        image: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953144/10_sn5shz.png",
                        title: "Bartender",
                        description: "From classic cocktails to refreshing mocktails, our bartenders ensure your guests enjoy every sip at your celebration."
                    }, void 0, false, {
                        fileName: "[project]/components/Home/SecondSection/SecondSection.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Home/SecondSection/SecondSection.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$SecondSection$2f$SecondSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backgroundImage
            }, void 0, false, {
                fileName: "[project]/components/Home/SecondSection/SecondSection.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Home/SecondSection/SecondSection.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SecondSection;
const __TURBOPACK__default__export__ = SecondSection;
var _c;
__turbopack_context__.k.register(_c, "SecondSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Home/Sixth Section/FaqSection.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "answer": "FaqSection-module__lIzBdW__answer",
  "button": "FaqSection-module__lIzBdW__button",
  "decor": "FaqSection-module__lIzBdW__decor",
  "icon": "FaqSection-module__lIzBdW__icon",
  "item": "FaqSection-module__lIzBdW__item",
  "list": "FaqSection-module__lIzBdW__list",
  "open": "FaqSection-module__lIzBdW__open",
  "qText": "FaqSection-module__lIzBdW__qText",
  "title": "FaqSection-module__lIzBdW__title",
  "wrapper": "FaqSection-module__lIzBdW__wrapper",
});
}),
"[project]/components/Home/Sixth Section/FaqSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FaqSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Sixth__Section$2f$FaqSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Home/Sixth Section/FaqSection.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const FAQ_DATA = [
    {
        question: "What cuisines do your chefs specialize in?",
        answer: "From North Indian, South Indian, Bengali, and Gujarati to Continental, Chinese, and Italian, our chefs can prepare a wide variety of cuisines."
    },
    {
        question: "Can I book chefs for festivals like Diwali or Holi?",
        answer: "Absolutely! We specialize in festive catering and ensure menus reflect traditional flavors with a modern twist."
    },
    {
        question: "Are your chefs available across India?",
        answer: "Yes, Book My Chef services are available in major cities like Delhi, Mumbai, Bengaluru, Hyderabad, Jaipur, and expanding rapidly."
    },
    {
        question: "Can I book a chef for just a small gathering?",
        answer: "Of course. Whether it’s a dinner for two, a birthday for 10, or a wedding for 500+, we’ve got you covered."
    },
    {
        question: "How can I hire a chef through Chef Choice Menu?",
        answer: "Simply create an account, browse available chefs, choose your date, and book directly through our site."
    }
];
function FaqSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Sixth__Section$2f$FaqSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Sixth__Section$2f$FaqSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: "Frequently Asked Questions"
            }, void 0, false, {
                fileName: "[project]/components/Home/Sixth Section/FaqSection.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953159/image_reswea.png",
                alt: "",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Sixth__Section$2f$FaqSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].decor
            }, void 0, false, {
                fileName: "[project]/components/Home/Sixth Section/FaqSection.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Sixth__Section$2f$FaqSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                children: FAQ_DATA.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaqItem, {
                        ...item
                    }, idx, false, {
                        fileName: "[project]/components/Home/Sixth Section/FaqSection.jsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Home/Sixth Section/FaqSection.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Home/Sixth Section/FaqSection.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = FaqSection;
function FaqItem(param) {
    let { question, answer } = param;
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggle = ()=>setOpen((o)=>!o);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Sixth__Section$2f$FaqSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item, " ").concat(open ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Sixth__Section$2f$FaqSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].open : ""),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Sixth__Section$2f$FaqSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                onClick: toggle,
                "aria-expanded": open,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Sixth__Section$2f$FaqSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].qText,
                        children: question
                    }, void 0, false, {
                        fileName: "[project]/components/Home/Sixth Section/FaqSection.jsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: open ? "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953160/minus_u6sygs.png" : "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953146/add_t8ntek.png",
                        alt: open ? "Collapse" : "Expand",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Sixth__Section$2f$FaqSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon
                    }, void 0, false, {
                        fileName: "[project]/components/Home/Sixth Section/FaqSection.jsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Home/Sixth Section/FaqSection.jsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Home$2f$Sixth__Section$2f$FaqSection$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].answer,
                children: answer
            }, void 0, false, {
                fileName: "[project]/components/Home/Sixth Section/FaqSection.jsx",
                lineNumber: 71,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Home/Sixth Section/FaqSection.jsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(FaqItem, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c1 = FaqItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "FaqSection");
__turbopack_context__.k.register(_c1, "FaqItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_Home_f68bbb7a._.js.map