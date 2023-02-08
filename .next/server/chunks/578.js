"use strict";
exports.id = 578;
exports.ids = [578];
exports.modules = {

/***/ 3412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_joy_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4026);
/* harmony import */ var _mui_joy_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_joy_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_joy_Sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6645);
/* harmony import */ var _mui_joy_Sheet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_joy_Sheet__WEBPACK_IMPORTED_MODULE_3__);




function Root(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_joy_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        ...props,
        sx: [
            {
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    sm: "minmax(64px, 200px) minmax(450px, 1fr)",
                    md: "minmax(160px, 300px) minmax(300px, 500px) minmax(500px, 1fr)"
                },
                gridTemplateRows: "64px 1fr",
                minHeight: "100vh"
            },
            ...Array.isArray(props.sx) ? props.sx : [
                props.sx
            ]
        ]
    });
}
function Header(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_joy_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        component: "header",
        className: "Header",
        ...props,
        sx: [
            {
                p: 2,
                gap: 2,
                bgcolor: "background.surface",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gridColumn: "1 / -1",
                borderBottom: "1px solid",
                borderColor: "divider",
                position: "sticky",
                top: 0,
                zIndex: 1100
            },
            ...Array.isArray(props.sx) ? props.sx : [
                props.sx
            ]
        ]
    });
}
function SideNav(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_joy_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        component: "nav",
        className: "Navigation",
        ...props,
        sx: [
            {
                p: 2,
                bgcolor: "background.surface",
                borderRight: "1px solid",
                borderColor: "divider",
                display: {
                    xs: "none",
                    sm: "initial"
                }
            },
            ...Array.isArray(props.sx) ? props.sx : [
                props.sx
            ]
        ]
    });
}
function SidePane(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_joy_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: "Inbox",
        ...props,
        sx: [
            {
                bgcolor: "background.surface",
                borderRight: "1px solid",
                borderColor: "divider",
                display: {
                    xs: "none",
                    md: "initial"
                }
            },
            ...Array.isArray(props.sx) ? props.sx : [
                props.sx
            ]
        ]
    });
}
function Main(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_joy_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        component: "main",
        className: "Main",
        ...props,
        sx: [
            {
                p: 2
            },
            ...Array.isArray(props.sx) ? props.sx : [
                props.sx
            ]
        ]
    });
}
function SideDrawer({ onClose , ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_joy_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
        ...props,
        sx: [
            {
                position: "fixed",
                zIndex: 1200,
                width: "100%",
                height: "100%"
            },
            ...Array.isArray(props.sx) ? props.sx : [
                props.sx
            ]
        ],
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_joy_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
                role: "button",
                onClick: onClose,
                sx: {
                    position: "absolute",
                    inset: 0,
                    bgcolor: (theme)=>`rgba(${theme.vars.palette.neutral.darkChannel} / 0.8)`
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_joy_Sheet__WEBPACK_IMPORTED_MODULE_3___default()), {
                sx: {
                    minWidth: 256,
                    width: "max-content",
                    height: "100%",
                    p: 2,
                    boxShadow: "lg",
                    bgcolor: "background.surface"
                },
                children: props.children
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    Root,
    Header,
    SideNav,
    SidePane,
    SideDrawer,
    Main
});


/***/ }),

/***/ 1385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_joy_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7981);
/* harmony import */ var _mui_joy_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_joy_Menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_joy_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9417);
/* harmony import */ var _mui_joy_MenuItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_joy_MenuItem__WEBPACK_IMPORTED_MODULE_3__);




function Menu({ control , menus , id  }) {
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    const isOpen = Boolean(anchorEl);
    const buttonRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const menuActions = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    const handleButtonClick = (event)=>{
        if (isOpen) {
            setAnchorEl(null);
        } else {
            setAnchorEl(event.currentTarget);
        }
    };
    const handleButtonKeyDown = (event)=>{
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            setAnchorEl(event.currentTarget);
            if (event.key === "ArrowUp") {
                menuActions.current?.highlightLastItem();
            }
        }
    };
    const close = ()=>{
        setAnchorEl(null);
        buttonRef.focus();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(control, {
                type: "button",
                onClick: handleButtonClick,
                onKeyDown: handleButtonKeyDown,
                ref: buttonRef,
                "aria-controls": isOpen ? id : undefined,
                "aria-expanded": isOpen || undefined,
                "aria-haspopup": "menu"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_joy_Menu__WEBPACK_IMPORTED_MODULE_2___default()), {
                id: id,
                placement: "bottom-end",
                actions: menuActions,
                open: isOpen,
                onClose: close,
                anchorEl: anchorEl,
                sx: {
                    minWidth: 120
                },
                children: menus.map(({ label , active , ...item })=>{
                    const menuItem = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_joy_MenuItem__WEBPACK_IMPORTED_MODULE_3___default()), {
                        selected: active,
                        variant: active ? "soft" : "plain",
                        onClick: close,
                        ...item,
                        children: label
                    });
                    if (item.href) {
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            role: "none",
                            children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(menuItem, {
                                component: "a"
                            })
                        }, label);
                    }
                    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(menuItem, {
                        key: label
                    });
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);


/***/ })

};
;