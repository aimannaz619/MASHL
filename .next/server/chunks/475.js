"use strict";
exports.id = 475;
exports.ids = [475];
exports.modules = {

/***/ 2430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8167);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8455);
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(802);
/* harmony import */ var _mui_material_Rating__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Rating__WEBPACK_IMPORTED_MODULE_5__);
// ** MUI Imports






const CustomCard = (props)=>{
    // ** Props
    const { stats , title , subtitle , imageSrc , rating , cardStyle , cardContentStyle , imageSectionStyle , imageStyle , contentSectionStyle , description  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Card__WEBPACK_IMPORTED_MODULE_1___default()), {
        sx: cardStyle,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3___default()), {
            sx: cardContentStyle,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                    sx: imageSectionStyle,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: imageSrc,
                        alt: title,
                        style: imageStyle
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
                    sx: contentSectionStyle,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                            variant: "h5",
                            sx: {
                                mb: 1
                            },
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                            variant: "body2",
                            sx: {
                                mb: 1,
                                color: "text.disabled"
                            },
                            children: subtitle
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                            sx: {
                                mb: 1.5,
                                color: "text.secondary"
                            },
                            children: stats
                        }),
                        rating && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Rating__WEBPACK_IMPORTED_MODULE_5___default()), {
                            value: rating,
                            readOnly: true,
                            sx: {
                                mb: 1.5
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
                            variant: "body2",
                            sx: {
                                mb: 1,
                                color: "text.disabled"
                            },
                            children: description
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomCard);


/***/ }),

/***/ 6306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ dummyData),
/* harmony export */   "W": () => (/* binding */ description)
/* harmony export */ });
// title='Sample Title'
// subtitle='This is a subtitle'
// stats='Some stats'
// chipText='Chip Text'
// avatarIcon='tabler:star'
// imageSrc='/path/to/image.jpg'
// rating={4.5}
const dummyData = [
    {
        imgSrc: "https://listeo.pro/wp-content/uploads/2019/02/photo-1502672260266-1c1ef2d93688-900x500.jpg",
        title: "George Burton – Life Coach",
        subtitle: "Ocean Avenue, New York",
        rating: 4.5,
        avatarIcon: "tabler:star"
    },
    {
        imgSrc: "https://listeo.pro/wp-content/uploads/2021/08/jo-1200x800.jpeg",
        title: "George Burton – Life Coach",
        subtitle: "Ocean Avenue, New York",
        rating: 2.5,
        avatarIcon: "tabler:star"
    },
    {
        imgSrc: "https://listeo.pro/wp-content/uploads/2019/01/sdf-1200x800.jpg",
        title: "George Burton – Life Coach",
        subtitle: "Ocean Avenue, New York",
        rating: 3,
        avatarIcon: "tabler:star"
    }
];
const description = "Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae. aadddddddk ijsadkdsgklsngjs jgrehtreiytjhreyrejyrek ryjnrgmfdgnrijrheyk errm rekyjrewiyjhery dmg dirjyk ernhdf gnriyhre md gjreyij erkgndf jgreiy reknrkjynireyjrtkgnd gk dfgfhjhitryitrkyijtrkynfg  Nam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae. aadddddddk ijsadkdsgklsngjs jgrehtreiytjhreyrejyrek ryjnrgmfdgnrijrheyk errm rekyjrewiyjhery dmg dirjyk ernhdf gnriyhre md gjreyij erkgndf jgreiy reknrkjynireyjrtkgnd gk dfgfhjhitryitrkyijtrkynfg    fdhdfhdjgjrtytrf gyrturtyfg gfdhrtutruNam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae. aadddddddk ijsadkdsgklsngjs jgrehtreiytjhreyrejyrek ryjnrgmfdgnrijrheyk errm rekyjrewiyjhery dmg dirjyk ernhdf gnriyhre md gjreyij erkgndf jgreiy reknrkjynireyjrtkgnd gk dfgfhjhitryitrkyijtrkynfg    fdhdfhdjgjrtytrf gyrturtyfg gfdhrtutruNam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae. aadddddddk ijsadkdsgklsngjs jgrehtreiytjhreyrejyrek ryjnrgmfdgnrijrheyk errm rekyjrewiyjhery dmg dirjyk ernhdf gnriyhre md gjreyij erkgndf jgreiy reknrkjynireyjrtkgnd gk dfgfhjhitryitrkyijtrkynfg    fdhdfhdjgjrtytrf gyrturtyfg gfdhrtutruNam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae. aadddddddk ijsadkdsgklsngjs jgrehtreiytjhreyrejyrek ryjnrgmfdgnrijrheyk errm rekyjrewiyjhery dmg dirjyk ernhdf gnriyhre md gjreyij erkgndf jgreiy reknrkjynireyjrtkgnd gk dfgfhjhitryitrkyijtrkynfg    fdhdfhdjgjrtytrf gyrturtyfg gfdhrtutruNam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae. aadddddddk ijsadkdsgklsngjs jgrehtreiytjhreyrejyrek ryjnrgmfdgnrijrheyk errm rekyjrewiyjhery dmg dirjyk ernhdf gnriyhre md gjreyij erkgndf jgreiy reknrkjynireyjrtkgnd gk dfgfhjhitryitrkyijtrkynfg    fdhdfhdjgjrtytrf gyrturtyfg gfdhrtutruNam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae. aadddddddk ijsadkdsgklsngjs jgrehtreiytjhreyrejyrek ryjnrgmfdgnrijrheyk errm rekyjrewiyjhery dmg dirjyk ernhdf gnriyhre md gjreyij erkgndf jgreiy reknrkjynireyjrtkgnd gk dfgfhjhitryitrkyijtrkynfg    fdhdfhdjgjrtytrf gyrturtyfg gfdhrtutruNam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae. aadddddddk ijsadkdsgklsngjs jgrehtreiytjhreyrejyrek ryjnrgmfdgnrijrheyk errm rekyjrewiyjhery dmg dirjyk ernhdf gnriyhre md gjreyij erkgndf jgreiy reknrkjynireyjrtkgnd gk dfgfhjhitryitrkyijtrkynfg    fdhdfhdjgjrtytrf gyrturtyfg gfdhrtutruNam nisl lacus, dignissim ac tristique ut, scelerisque eu massa. Vestibulum ligula nunc, rutrum in malesuada vitae, tempus sed augue. Curabitur quis lectus quis augue dapibus facilisis. Vivamus tincidunt orci est, in vehicula nisi eleifend ut. Vestibulum sagittis varius orci vitae. aadddddddk ijsadkdsgklsngjs jgrehtreiytjhreyrejyrek ryjnrgmfdgnrijrheyk errm rekyjrewiyjhery dmg dirjyk ernhdf gnriyhre md gjreyij erkgndf jgreiy reknrkjynireyjrtkgnd gk dfgfhjhitryitrkyijtrkynfg    fdhdfhdjgjrtytrf gyrturtyfg gfdhrtutru  fdhdfhdjgjrtytrf gyrturtyfg gfdhrtutrurt";


/***/ })

};
;