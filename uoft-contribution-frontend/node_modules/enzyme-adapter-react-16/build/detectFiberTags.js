"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _enzymeAdapterUtils = require("enzyme-adapter-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function getFiber(element) {
  var container = global.document.createElement('div');
  var inst = null;

  var Tester = /*#__PURE__*/function (_React$Component) {
    _inherits(Tester, _React$Component);

    var _super = _createSuper(Tester);

    function Tester() {
      _classCallCheck(this, Tester);

      return _super.apply(this, arguments);
    }

    _createClass(Tester, [{
      key: "render",
      value: function render() {
        inst = this;
        return element;
      }
    }]);

    return Tester;
  }(_react["default"].Component);

  _reactDom["default"].render(_react["default"].createElement(Tester), container);

  return inst._reactInternalFiber.child;
}

function getLazyFiber(LazyComponent) {
  var container = global.document.createElement('div');
  var inst = null; // eslint-disable-next-line react/prefer-stateless-function

  var Tester = /*#__PURE__*/function (_React$Component2) {
    _inherits(Tester, _React$Component2);

    var _super2 = _createSuper(Tester);

    function Tester() {
      _classCallCheck(this, Tester);

      return _super2.apply(this, arguments);
    }

    _createClass(Tester, [{
      key: "render",
      value: function render() {
        inst = this;
        return _react["default"].createElement(LazyComponent);
      }
    }]);

    return Tester;
  }(_react["default"].Component); // eslint-disable-next-line react/prefer-stateless-function


  var SuspenseWrapper = /*#__PURE__*/function (_React$Component3) {
    _inherits(SuspenseWrapper, _React$Component3);

    var _super3 = _createSuper(SuspenseWrapper);

    function SuspenseWrapper() {
      _classCallCheck(this, SuspenseWrapper);

      return _super3.apply(this, arguments);
    }

    _createClass(SuspenseWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(_react["default"].Suspense, {
          fallback: false
        }, _react["default"].createElement(Tester));
      }
    }]);

    return SuspenseWrapper;
  }(_react["default"].Component);

  _reactDom["default"].render(_react["default"].createElement(SuspenseWrapper), container);

  return inst._reactInternalFiber.child;
}

module.exports = function detectFiberTags() {
  var supportsMode = typeof _react["default"].StrictMode !== 'undefined';
  var supportsContext = typeof _react["default"].createContext !== 'undefined';
  var supportsForwardRef = typeof _react["default"].forwardRef !== 'undefined';
  var supportsMemo = typeof _react["default"].memo !== 'undefined';
  var supportsProfiler = typeof _react["default"].unstable_Profiler !== 'undefined' || typeof _react["default"].Profiler !== 'undefined';
  var supportsSuspense = typeof _react["default"].Suspense !== 'undefined';
  var supportsLazy = typeof _react["default"].lazy !== 'undefined';

  function Fn() {
    return null;
  } // eslint-disable-next-line react/prefer-stateless-function


  var Cls = /*#__PURE__*/function (_React$Component4) {
    _inherits(Cls, _React$Component4);

    var _super4 = _createSuper(Cls);

    function Cls() {
      _classCallCheck(this, Cls);

      return _super4.apply(this, arguments);
    }

    _createClass(Cls, [{
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return Cls;
  }(_react["default"].Component);

  var Ctx = null;
  var FwdRef = null;
  var LazyComponent = null;

  if (supportsContext) {
    Ctx = _react["default"].createContext();
  }

  if (supportsForwardRef) {
    // React will warn if we don't have both arguments.
    // eslint-disable-next-line no-unused-vars
    FwdRef = _react["default"].forwardRef(function (props, ref) {
      return null;
    });
  }

  if (supportsLazy) {
    LazyComponent = _react["default"].lazy(function () {
      return (0, _enzymeAdapterUtils.fakeDynamicImport)(function () {
        return null;
      });
    });
  }

  return {
    HostRoot: getFiber('test')["return"]["return"].tag,
    // Go two levels above to find the root
    ClassComponent: getFiber(_react["default"].createElement(Cls)).tag,
    Fragment: getFiber([['nested']]).tag,
    FunctionalComponent: getFiber(_react["default"].createElement(Fn)).tag,
    MemoSFC: supportsMemo ? getFiber(_react["default"].createElement(_react["default"].memo(Fn))).tag : -1,
    MemoClass: supportsMemo ? getFiber(_react["default"].createElement(_react["default"].memo(Cls))).tag : -1,
    HostPortal: getFiber(_reactDom["default"].createPortal(null, global.document.createElement('div'))).tag,
    HostComponent: getFiber(_react["default"].createElement('span')).tag,
    HostText: getFiber('text').tag,
    Mode: supportsMode ? getFiber(_react["default"].createElement(_react["default"].StrictMode)).tag : -1,
    ContextConsumer: supportsContext ? getFiber(_react["default"].createElement(Ctx.Consumer, null, function () {
      return null;
    })).tag : -1,
    ContextProvider: supportsContext ? getFiber(_react["default"].createElement(Ctx.Provider, {
      value: null
    }, null)).tag : -1,
    ForwardRef: supportsForwardRef ? getFiber(_react["default"].createElement(FwdRef)).tag : -1,
    Profiler: supportsProfiler ? getFiber(_react["default"].createElement(_react["default"].Profiler || _react["default"].unstable_Profiler, {
      id: 'mock',
      onRender: function onRender() {}
    })).tag : -1,
    Suspense: supportsSuspense ? getFiber(_react["default"].createElement(_react["default"].Suspense, {
      fallback: false
    })).tag : -1,
    Lazy: supportsLazy ? getLazyFiber(LazyComponent).tag : -1
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZXRlY3RGaWJlclRhZ3MuanMiXSwibmFtZXMiOlsiZ2V0RmliZXIiLCJlbGVtZW50IiwiY29udGFpbmVyIiwiZ2xvYmFsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5zdCIsIlRlc3RlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJfcmVhY3RJbnRlcm5hbEZpYmVyIiwiY2hpbGQiLCJnZXRMYXp5RmliZXIiLCJMYXp5Q29tcG9uZW50IiwiU3VzcGVuc2VXcmFwcGVyIiwiU3VzcGVuc2UiLCJmYWxsYmFjayIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZXRlY3RGaWJlclRhZ3MiLCJzdXBwb3J0c01vZGUiLCJTdHJpY3RNb2RlIiwic3VwcG9ydHNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInN1cHBvcnRzRm9yd2FyZFJlZiIsImZvcndhcmRSZWYiLCJzdXBwb3J0c01lbW8iLCJtZW1vIiwic3VwcG9ydHNQcm9maWxlciIsInVuc3RhYmxlX1Byb2ZpbGVyIiwiUHJvZmlsZXIiLCJzdXBwb3J0c1N1c3BlbnNlIiwic3VwcG9ydHNMYXp5IiwibGF6eSIsIkZuIiwiQ2xzIiwiQ3R4IiwiRndkUmVmIiwicHJvcHMiLCJyZWYiLCJIb3N0Um9vdCIsInRhZyIsIkNsYXNzQ29tcG9uZW50IiwiRnJhZ21lbnQiLCJGdW5jdGlvbmFsQ29tcG9uZW50IiwiTWVtb1NGQyIsIk1lbW9DbGFzcyIsIkhvc3RQb3J0YWwiLCJjcmVhdGVQb3J0YWwiLCJIb3N0Q29tcG9uZW50IiwiSG9zdFRleHQiLCJNb2RlIiwiQ29udGV4dENvbnN1bWVyIiwiQ29uc3VtZXIiLCJDb250ZXh0UHJvdmlkZXIiLCJQcm92aWRlciIsInZhbHVlIiwiRm9yd2FyZFJlZiIsImlkIiwib25SZW5kZXIiLCJMYXp5Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLFFBQVQs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R0FEWixHQUUxQixDQUFDLENBekJBO0FBMEJMWCxJQUFBQSxRQUFRLEVBQUVGLGdCQUFnQixHQUN0QjlCLFFBQVEsQ0FBQ1Esa0JBQU1ILGFBQU4sQ0FBcUJHLGtCQUFNd0IsUUFBTixJQUFrQnhCLGtCQUFNdUIsaUJBQTdDLEVBQWlFO0FBQUU2QixNQUFBQSxFQUFFLEVBQUUsTUFBTjtBQUFjQyxNQUFBQSxRQUFkLHNCQUF5QixDQUFFO0FBQTNCLEtBQWpFLENBQUQsQ0FBUixDQUEwR2xCLEdBRHBGLEdBRXRCLENBQUMsQ0E1QkE7QUE2QkwxQixJQUFBQSxRQUFRLEVBQUVnQixnQkFBZ0IsR0FDdEJqQyxRQUFRLENBQUNRLGtCQUFNSCxhQUFOLENBQW9CRyxrQkFBTVMsUUFBMUIsRUFBb0M7QUFBRUMsTUFBQUEsUUFBUSxFQUFFO0FBQVosS0FBcEMsQ0FBRCxDQUFSLENBQW1FeUIsR0FEN0MsR0FFdEIsQ0FBQyxDQS9CQTtBQWdDTG1CLElBQUFBLElBQUksRUFBRTVCLFlBQVksR0FDZHBCLFlBQVksQ0FBQ0MsYUFBRCxDQUFaLENBQTRCNEIsR0FEZCxHQUVkLENBQUM7QUFsQ0EsR0FBUDtBQW9DRCxDQXJFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGZha2VEeW5hbWljSW1wb3J0IH0gZnJvbSAnZW56eW1lLWFkYXB0ZXItdXRpbHMnO1xuXG5mdW5jdGlvbiBnZXRGaWJlcihlbGVtZW50KSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGluc3QgPSBudWxsO1xuICBjbGFzcyBUZXN0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgIGluc3QgPSB0aGlzO1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG4gIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFRlc3RlciksIGNvbnRhaW5lcik7XG4gIHJldHVybiBpbnN0Ll9yZWFjdEludGVybmFsRmliZXIuY2hpbGQ7XG59XG5cbmZ1bmN0aW9uIGdldExhenlGaWJlcihMYXp5Q29tcG9uZW50KSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGluc3QgPSBudWxsO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJlZmVyLXN0YXRlbGVzcy1mdW5jdGlvblxuICBjbGFzcyBUZXN0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgIGluc3QgPSB0aGlzO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGF6eUNvbXBvbmVudCk7XG4gICAgfVxuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcmVmZXItc3RhdGVsZXNzLWZ1bmN0aW9uXG4gIGNsYXNzIFN1c3BlbnNlV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFJlYWN0LlN1c3BlbnNlLFxuICAgICAgICB7IGZhbGxiYWNrOiBmYWxzZSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRlc3RlciksXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChTdXNwZW5zZVdyYXBwZXIpLCBjb250YWluZXIpO1xuICByZXR1cm4gaW5zdC5fcmVhY3RJbnRlcm5hbEZpYmVyLmNoaWxkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRldGVjdEZpYmVyVGFncygpIHtcbiAgY29uc3Qgc3VwcG9ydHNNb2RlID0gdHlwZW9mIFJlYWN0LlN0cmljdE1vZGUgIT09ICd1bmRlZmluZWQnO1xuICBjb25zdCBzdXBwb3J0c0NvbnRleHQgPSB0eXBlb2YgUmVhY3QuY3JlYXRlQ29udGV4dCAhPT0gJ3VuZGVmaW5lZCc7XG4gIGNvbnN0IHN1cHBvcnRzRm9yd2FyZFJlZiA9IHR5cGVvZiBSZWFjdC5mb3J3YXJkUmVmICE9PSAndW5kZWZpbmVkJztcbiAgY29uc3Qgc3VwcG9ydHNNZW1vID0gdHlwZW9mIFJlYWN0Lm1lbW8gIT09ICd1bmRlZmluZWQnO1xuICBjb25zdCBzdXBwb3J0c1Byb2ZpbGVyID0gdHlwZW9mIFJlYWN0LnVuc3RhYmxlX1Byb2ZpbGVyICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgUmVhY3QuUHJvZmlsZXIgIT09ICd1bmRlZmluZWQnO1xuICBjb25zdCBzdXBwb3J0c1N1c3BlbnNlID0gdHlwZW9mIFJlYWN0LlN1c3BlbnNlICE9PSAndW5kZWZpbmVkJztcbiAgY29uc3Qgc3VwcG9ydHNMYXp5ID0gdHlwZW9mIFJlYWN0LmxhenkgIT09ICd1bmRlZmluZWQnO1xuXG4gIGZ1bmN0aW9uIEZuKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcmVmZXItc3RhdGVsZXNzLWZ1bmN0aW9uXG4gIGNsYXNzIENscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIGxldCBDdHggPSBudWxsO1xuICBsZXQgRndkUmVmID0gbnVsbDtcbiAgbGV0IExhenlDb21wb25lbnQgPSBudWxsO1xuICBpZiAoc3VwcG9ydHNDb250ZXh0KSB7XG4gICAgQ3R4ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuICB9XG4gIGlmIChzdXBwb3J0c0ZvcndhcmRSZWYpIHtcbiAgICAvLyBSZWFjdCB3aWxsIHdhcm4gaWYgd2UgZG9uJ3QgaGF2ZSBib3RoIGFyZ3VtZW50cy5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICBGd2RSZWYgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiBudWxsKTtcbiAgfVxuICBpZiAoc3VwcG9ydHNMYXp5KSB7XG4gICAgTGF6eUNvbXBvbmVudCA9IFJlYWN0LmxhenkoKCkgPT4gZmFrZUR5bmFtaWNJbXBvcnQoKCkgPT4gbnVsbCkpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBIb3N0Um9vdDogZ2V0RmliZXIoJ3Rlc3QnKS5yZXR1cm4ucmV0dXJuLnRhZywgLy8gR28gdHdvIGxldmVscyBhYm92ZSB0byBmaW5kIHRoZSByb290XG4gICAgQ2xhc3NDb21wb25lbnQ6IGdldEZpYmVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2xzKSkudGFnLFxuICAgIEZyYWdtZW50OiBnZXRGaWJlcihbWyduZXN0ZWQnXV0pLnRhZyxcbiAgICBGdW5jdGlvbmFsQ29tcG9uZW50OiBnZXRGaWJlcihSZWFjdC5jcmVhdGVFbGVtZW50KEZuKSkudGFnLFxuICAgIE1lbW9TRkM6IHN1cHBvcnRzTWVtb1xuICAgICAgPyBnZXRGaWJlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0Lm1lbW8oRm4pKSkudGFnXG4gICAgICA6IC0xLFxuICAgIE1lbW9DbGFzczogc3VwcG9ydHNNZW1vXG4gICAgICA/IGdldEZpYmVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QubWVtbyhDbHMpKSkudGFnXG4gICAgICA6IC0xLFxuICAgIEhvc3RQb3J0YWw6IGdldEZpYmVyKFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChudWxsLCBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpKS50YWcsXG4gICAgSG9zdENvbXBvbmVudDogZ2V0RmliZXIoUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicpKS50YWcsXG4gICAgSG9zdFRleHQ6IGdldEZpYmVyKCd0ZXh0JykudGFnLFxuICAgIE1vZGU6IHN1cHBvcnRzTW9kZVxuICAgICAgPyBnZXRGaWJlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LlN0cmljdE1vZGUpKS50YWdcbiAgICAgIDogLTEsXG4gICAgQ29udGV4dENvbnN1bWVyOiBzdXBwb3J0c0NvbnRleHRcbiAgICAgID8gZ2V0RmliZXIoUmVhY3QuY3JlYXRlRWxlbWVudChDdHguQ29uc3VtZXIsIG51bGwsICgpID0+IG51bGwpKS50YWdcbiAgICAgIDogLTEsXG4gICAgQ29udGV4dFByb3ZpZGVyOiBzdXBwb3J0c0NvbnRleHRcbiAgICAgID8gZ2V0RmliZXIoUmVhY3QuY3JlYXRlRWxlbWVudChDdHguUHJvdmlkZXIsIHsgdmFsdWU6IG51bGwgfSwgbnVsbCkpLnRhZ1xuICAgICAgOiAtMSxcbiAgICBGb3J3YXJkUmVmOiBzdXBwb3J0c0ZvcndhcmRSZWZcbiAgICAgID8gZ2V0RmliZXIoUmVhY3QuY3JlYXRlRWxlbWVudChGd2RSZWYpKS50YWdcbiAgICAgIDogLTEsXG4gICAgUHJvZmlsZXI6IHN1cHBvcnRzUHJvZmlsZXJcbiAgICAgID8gZ2V0RmliZXIoUmVhY3QuY3JlYXRlRWxlbWVudCgoUmVhY3QuUHJvZmlsZXIgfHwgUmVhY3QudW5zdGFibGVfUHJvZmlsZXIpLCB7IGlkOiAnbW9jaycsIG9uUmVuZGVyKCkge30gfSkpLnRhZ1xuICAgICAgOiAtMSxcbiAgICBTdXNwZW5zZTogc3VwcG9ydHNTdXNwZW5zZVxuICAgICAgPyBnZXRGaWJlcihSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LlN1c3BlbnNlLCB7IGZhbGxiYWNrOiBmYWxzZSB9KSkudGFnXG4gICAgICA6IC0xLFxuICAgIExhenk6IHN1cHBvcnRzTGF6eVxuICAgICAgPyBnZXRMYXp5RmliZXIoTGF6eUNvbXBvbmVudCkudGFnXG4gICAgICA6IC0xLFxuICB9O1xufTtcbiJdfQ==
//# sourceMappingURL=detectFiberTags.js.map