(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Widget"] = factory();
	else
		root["Widget"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./src/server/widget.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const defaultStyles = {
    border: 'none',
    'z-index': 2147483647,
    height: '650px',
    width: '350px',
    display: 'block !important',
    visibility: 'visible',
    background: 'none transparent',
    opacity: 1,
    'pointer-events': 'auto',
    'touch-action': 'auto',
    position: 'fixed',
    right: '20px',
    bottom: '20px',
};
const Widget = {
    iframe: null,
    config: null,
    init: function (config) {
        this.config = config;
        this.load();
    },
    load: function () {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var config = {
            publicKey: url.searchParams.get('sdkKey') || url.searchParams.get('publicKey'),
            identifier: url.searchParams.get('identifier') || url.searchParams.get('email'),
            token: url.searchParams.get('token'),
            styleUrl: url.searchParams.get('styleUrl'),
            settings: url.searchParams.get('settings'),
        };
        this.config = Object.assign({}, this.config, config);
        this.createIframe();
    },
    createIframe: function () {
        this.iframe = document.createElement('iframe');
        let styles = '';
        for (const key in defaultStyles) {
            styles += key + ': ' + defaultStyles[key] + ';';
        }
        this.iframe.setAttribute('style', styles);
        this.iframe.src = `${"52.72.25.150:8080"}`;
        this.iframe.referrerPolicy = 'origin';
        document.body.appendChild(this.iframe);
        this.setupListeners();
    },
    setupListeners: function () {
        window.addEventListener('message', this.handleMessage.bind(this));
    },
    handleMessage: function (e) {
        e.preventDefault();
        if (!e.data || typeof e.data !== 'string')
            return;
        const data = JSON.parse(e.data);
        switch (data.action) {
            case 'init': {
                if (this.iframe) {
                    window.postMessage(JSON.stringify(this.config), '*');
                }
                break;
            }
            default:
                break;
        }
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Widget);

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRCxhQUFhLEVBQUUsVUFBVSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUTtZQUFFLE9BQU87UUFDbEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ25CLEtBQUssTUFBTSxDQUFDLENBQUM7Z0JBQ1gsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNmLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ3REO2dCQUNELE1BQU07YUFDUDtZQUNEO2dCQUNFLE1BQU07U0FDVDtJQUNILENBQUM7Q0FDRixDQUFDO0FBRUYsaUVBQWUsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zYXZpbmdzLXdpZGdldC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NhdmluZ3Mtd2lkZ2V0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2F2aW5ncy13aWRnZXQvLi9zcmMvc2VydmVyL3dpZGdldC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJXaWRnZXRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiV2lkZ2V0XCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZGVjbGFyZSB2YXIgX19TRVJWRVJfRE9NQUlOX186IHN0cmluZztcblxuY29uc3QgZGVmYXVsdFN0eWxlczogYW55ID0ge1xuICBib3JkZXI6ICdub25lJyxcbiAgJ3otaW5kZXgnOiAyMTQ3NDgzNjQ3LFxuICBoZWlnaHQ6ICc2NTBweCcsXG4gIHdpZHRoOiAnMzUwcHgnLFxuICBkaXNwbGF5OiAnYmxvY2sgIWltcG9ydGFudCcsXG4gIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcbiAgYmFja2dyb3VuZDogJ25vbmUgdHJhbnNwYXJlbnQnLFxuICBvcGFjaXR5OiAxLFxuICAncG9pbnRlci1ldmVudHMnOiAnYXV0bycsXG4gICd0b3VjaC1hY3Rpb24nOiAnYXV0bycsXG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxuICByaWdodDogJzIwcHgnLFxuICBib3R0b206ICcyMHB4Jyxcbn07XG5cbmludGVyZmFjZSBJQ29uZmlnIHtcbiAgcHVibGljS2V5OiBzdHJpbmcgfCBudWxsO1xuICBpZGVudGlmaWVyPzogc3RyaW5nIHwgbnVsbDtcbiAgdG9rZW4/OiBzdHJpbmcgfCBudWxsO1xuICBzdHlsZVVybD86IHN0cmluZyB8IG51bGw7XG4gIHNldHRpbmdzPzogc3RyaW5nIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIElXaWRnZXQge1xuICBjb25maWc6IElDb25maWcgfCBudWxsO1xuICBpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50IHwgbnVsbDtcbiAgaW5pdDogKGNvbmZpZzogSUNvbmZpZykgPT4gdm9pZDtcbiAgbG9hZDogKCkgPT4gdm9pZDtcbiAgc2V0dXBMaXN0ZW5lcnM6ICgpID0+IHZvaWQ7XG4gIGNyZWF0ZUlmcmFtZTogKCkgPT4gdm9pZDtcbiAgaGFuZGxlTWVzc2FnZTogKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFdpZGdldDogSVdpZGdldCA9IHtcbiAgaWZyYW1lOiBudWxsLFxuICBjb25maWc6IG51bGwsXG4gIGluaXQ6IGZ1bmN0aW9uIChjb25maWc6IElDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLmxvYWQoKTtcbiAgfSxcbiAgbG9hZDogZnVuY3Rpb24gKCkge1xuICAgIHZhciB1cmxfc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgdmFyIHVybCA9IG5ldyBVUkwodXJsX3N0cmluZyk7XG4gICAgdmFyIGNvbmZpZzogSUNvbmZpZyA9IHtcbiAgICAgIHB1YmxpY0tleTpcbiAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3Nka0tleScpIHx8IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdwdWJsaWNLZXknKSxcbiAgICAgIGlkZW50aWZpZXI6XG4gICAgICAgIHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdpZGVudGlmaWVyJykgfHwgdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ2VtYWlsJyksXG4gICAgICB0b2tlbjogdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3Rva2VuJyksXG4gICAgICBzdHlsZVVybDogdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3N0eWxlVXJsJyksXG4gICAgICBzZXR0aW5nczogdXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3NldHRpbmdzJyksXG4gICAgfTtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29uZmlnLCBjb25maWcpO1xuICAgIHRoaXMuY3JlYXRlSWZyYW1lKCk7XG4gIH0sXG4gIGNyZWF0ZUlmcmFtZTogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgbGV0IHN0eWxlcyA9ICcnO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGRlZmF1bHRTdHlsZXMpIHtcbiAgICAgIHN0eWxlcyArPSBrZXkgKyAnOiAnICsgZGVmYXVsdFN0eWxlc1trZXldICsgJzsnO1xuICAgIH1cbiAgICB0aGlzLmlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc3R5bGVzKTtcbiAgICB0aGlzLmlmcmFtZS5zcmMgPSBgJHtfX1NFUlZFUl9ET01BSU5fX31gO1xuICAgIHRoaXMuaWZyYW1lLnJlZmVycmVyUG9saWN5ID0gJ29yaWdpbic7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmlmcmFtZSk7XG4gICAgdGhpcy5zZXR1cExpc3RlbmVycygpO1xuICB9LFxuICBzZXR1cExpc3RlbmVyczogZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5oYW5kbGVNZXNzYWdlLmJpbmQodGhpcykpO1xuICB9LFxuICBoYW5kbGVNZXNzYWdlOiBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIWUuZGF0YSB8fCB0eXBlb2YgZS5kYXRhICE9PSAnc3RyaW5nJykgcmV0dXJuO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG4gICAgc3dpdGNoIChkYXRhLmFjdGlvbikge1xuICAgICAgY2FzZSAnaW5pdCc6IHtcbiAgICAgICAgaWYgKHRoaXMuaWZyYW1lKSB7XG4gICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHRoaXMuY29uZmlnKSwgJyonKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdpZGdldDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==