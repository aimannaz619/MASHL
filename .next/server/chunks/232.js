"use strict";
exports.id = 232;
exports.ids = [232];
exports.modules = {

/***/ 9878:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_1__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// ** Icon Imports


const IconifyIcon = ({ icon , ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
        icon: icon,
        fontSize: "1.375rem",
        ...rest
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconifyIcon);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6042);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3__);
// ** React Import


// ** MUI Imports


const TextFieldStyled = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_material_TextField__WEBPACK_IMPORTED_MODULE_3___default()))(({ theme  })=>({
        alignItems: "flex-start",
        "& .MuiInputLabel-root": {
            transform: "none",
            lineHeight: 1.154,
            position: "relative",
            marginBottom: theme.spacing(1),
            fontSize: theme.typography.body2.fontSize,
            color: `${theme.palette.text.primary} !important`
        },
        "& .MuiInputBase-root": {
            borderRadius: 8,
            backgroundColor: "transparent !important",
            border: `1px solid rgba(${theme.palette.customColors.main}, 0.2)`,
            transition: theme.transitions.create([
                "border-color",
                "box-shadow"
            ], {
                duration: theme.transitions.duration.shorter
            }),
            "&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error):hover": {
                borderColor: `rgba(${theme.palette.customColors.main}, 0.28)`
            },
            "&:before, &:after": {
                display: "none"
            },
            "&.MuiInputBase-sizeSmall": {
                borderRadius: 6
            },
            "&.Mui-error": {
                borderColor: theme.palette.error.main
            },
            "&.Mui-focused": {
                boxShadow: theme.shadows[2],
                "& .MuiInputBase-input:not(.MuiInputBase-readOnly):not([readonly])::placeholder": {
                    transform: "translateX(4px)"
                },
                "&.MuiInputBase-colorPrimary": {
                    borderColor: theme.palette.primary.main
                },
                "&.MuiInputBase-colorSecondary": {
                    borderColor: theme.palette.secondary.main
                },
                "&.MuiInputBase-colorInfo": {
                    borderColor: theme.palette.info.main
                },
                "&.MuiInputBase-colorSuccess": {
                    borderColor: theme.palette.success.main
                },
                "&.MuiInputBase-colorWarning": {
                    borderColor: theme.palette.warning.main
                },
                "&.MuiInputBase-colorError": {
                    borderColor: theme.palette.error.main
                },
                "&.Mui-error": {
                    borderColor: theme.palette.error.main
                }
            },
            "&.Mui-disabled": {
                backgroundColor: `${theme.palette.action.selected} !important`
            },
            "& .MuiInputAdornment-root": {
                marginTop: "0 !important"
            }
        },
        "& .MuiInputBase-input": {
            color: theme.palette.text.secondary,
            "&:not(textarea)": {
                padding: "15.5px 13px"
            },
            "&:not(textarea).MuiInputBase-inputSizeSmall": {
                padding: "7.5px 13px"
            },
            "&:not(.MuiInputBase-readOnly):not([readonly])::placeholder": {
                transition: theme.transitions.create([
                    "opacity",
                    "transform"
                ], {
                    duration: theme.transitions.duration.shorter
                })
            },
            // ** For Autocomplete
            "&.MuiInputBase-inputAdornedStart:not(.MuiAutocomplete-input)": {
                paddingLeft: 0
            },
            "&.MuiInputBase-inputAdornedEnd:not(.MuiAutocomplete-input)": {
                paddingRight: 0
            }
        },
        "& .MuiFormHelperText-root": {
            lineHeight: 1.154,
            margin: theme.spacing(1, 0, 0),
            color: theme.palette.text.secondary,
            fontSize: theme.typography.body2.fontSize,
            "&.Mui-error": {
                color: theme.palette.error.main
            }
        },
        // ** For Select
        "& .MuiSelect-select:focus, & .MuiNativeSelect-select:focus": {
            backgroundColor: "transparent"
        },
        "& .MuiSelect-filled .MuiChip-root": {
            height: 22
        },
        // ** For Autocomplete
        "& .MuiAutocomplete-input": {
            paddingLeft: "6px !important",
            paddingTop: "7.5px !important",
            paddingBottom: "7.5px !important",
            "&.MuiInputBase-inputSizeSmall": {
                paddingLeft: "6px !important",
                paddingTop: "2.5px !important",
                paddingBottom: "2.5px !important"
            }
        },
        "& .MuiAutocomplete-inputRoot": {
            paddingTop: "8px !important",
            paddingLeft: "8px !important",
            paddingBottom: "8px !important",
            "&:not(.MuiInputBase-sizeSmall).MuiInputBase-adornedStart": {
                paddingLeft: "13px !important"
            },
            "&.MuiInputBase-sizeSmall": {
                paddingTop: "5px !important",
                paddingLeft: "5px !important",
                paddingBottom: "5px !important",
                "& .MuiAutocomplete-tag": {
                    margin: 2,
                    height: 22
                }
            }
        },
        // ** For Textarea
        "& .MuiInputBase-multiline": {
            padding: "15.25px 13px",
            "&.MuiInputBase-sizeSmall": {
                padding: "7.25px 13px"
            },
            "& textarea.MuiInputBase-inputSizeSmall:placeholder-shown": {
                overflowX: "hidden"
            }
        },
        // ** For Date Picker
        "& + .react-datepicker__close-icon": {
            top: 11,
            "&:after": {
                fontSize: "1.6rem !important"
            }
        }
    }));
const CustomTextField = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    // ** Props
    const { size ="small" , InputLabelProps , ...rest } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextFieldStyled, {
        size: size,
        inputRef: ref,
        ...rest,
        variant: "filled",
        InputLabelProps: {
            ...InputLabelProps,
            shrink: true
        }
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomTextField);


/***/ }),

/***/ 8441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9868);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
// ** MUI Components



// Styled Components
const MaskImg = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("img")(({ theme  })=>({
        bottom: 0,
        height: 300,
        width: "100%",
        position: "absolute",
        [theme.breakpoints.down(1540)]: {
            height: 250
        }
    }));
const FooterIllustrationsV2 = (props)=>{
    // ** Props
    const { image , height , className  } = props;
    // ** Hook
    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    // ** Vars
    const hidden = _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_1___default()(theme.breakpoints.down("md"));
    if (!hidden) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: !image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MaskImg, {
                alt: "mask",
                className: className,
                ...height && {
                    height
                },
                src: `/images/pages/auth-v2-mask-${theme.palette.mode}.png`
            }) : typeof image === "string" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MaskImg, {
                alt: "mask",
                src: image,
                className: className,
                ...height && {
                    height
                }
            }) : image
        });
    } else {
        return null;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterIllustrationsV2);


/***/ })

};
;