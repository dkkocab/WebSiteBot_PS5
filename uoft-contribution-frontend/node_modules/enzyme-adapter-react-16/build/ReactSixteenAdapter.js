"use strict";

var _object = _interopRequireDefault(require("object.assign"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _shallow = _interopRequireDefault(require("react-test-renderer/shallow"));

var _package = require("react-test-renderer/package.json");

var _testUtils = _interopRequireDefault(require("react-dom/test-utils"));

var _semver = _interopRequireDefault(require("semver"));

var _checkPropTypes2 = _interopRequireDefault(require("prop-types/checkPropTypes"));

var _has = _interopRequireDefault(require("has"));

var _reactIs = require("react-is");

var _enzyme = require("enzyme");

var _Utils = require("enzyme/build/Utils");

var _enzymeShallowEqual = _interopRequireDefault(require("enzyme-shallow-equal"));

var _enzymeAdapterUtils = require("enzyme-adapter-utils");

var _findCurrentFiberUsingSlowPath = _interopRequireDefault(require("./findCurrentFiberUsingSlowPath"));

var _detectFiberTags = _interopRequireDefault(require("./detectFiberTags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var is164 = !!_testUtils["default"].Simulate.touchStart; // 16.4+

var is165 = !!_testUtils["default"].Simulate.auxClick; // 16.5+

var is166 = is165 && !_react["default"].unstable_AsyncMode; // 16.6+

var is168 = is166 && typeof _testUtils["default"].act === 'function';

var hasShouldComponentUpdateBug = _semver["default"].satisfies(_package.version, '< 16.8'); // Lazily populated if DOM is available.


var FiberTags = null;

function nodeAndSiblingsArray(nodeWithSibling) {
  var array = [];
  var node = nodeWithSibling;

  while (node != null) {
    array.push(node);
    node = node.sibling;
  }

  return array;
}

function flatten(arr) {
  var result = [];
  var stack = [{
    i: 0,
    array: arr
  }];

  while (stack.length) {
    var n = stack.pop();

    while (n.i < n.array.length) {
      var el = n.array[n.i];
      n.i += 1;

      if (Array.isArray(el)) {
        stack.push(n);
        stack.push({
          i: 0,
          array: el
        });
        break;
      }

      result.push(el);
    }
  }

  return result;
}

function nodeTypeFromType(type) {
  if (type === _reactIs.Portal) {
    return 'portal';
  }

  return (0, _enzymeAdapterUtils.nodeTypeFromType)(type);
}

function isMemo(type) {
  return (0, _enzymeAdapterUtils.compareNodeTypeOf)(type, _reactIs.Memo);
}

function isLazy(type) {
  return (0, _enzymeAdapterUtils.compareNodeTypeOf)(type, _reactIs.Lazy);
}

function unmemoType(type) {
  return isMemo(type) ? type.type : type;
}

function transformSuspense(renderedEl, prerenderEl, _ref) {
  var suspenseFallback = _ref.suspenseFallback;

  if (!(0, _reactIs.isSuspense)(renderedEl)) {
    return renderedEl;
  }

  var children = renderedEl.props.children;

  if (suspenseFallback) {
    var fallback = renderedEl.props.fallback;
    children = replaceLazyWithFallback(children, fallback);
  }

  var _renderedEl$type = renderedEl.type,
      propTypes = _renderedEl$type.propTypes,
      defaultProps = _renderedEl$type.defaultProps,
      contextTypes = _renderedEl$type.contextTypes,
      contextType = _renderedEl$type.contextType,
      childContextTypes = _renderedEl$type.childContextTypes;
  var FakeSuspense = (0, _object["default"])(isStateful(prerenderEl.type) ? /*#__PURE__*/function (_prerenderEl$type) {
    _inherits(FakeSuspense, _prerenderEl$type);

    var _super = _createSuper(FakeSuspense);

    function FakeSuspense() {
      _classCallCheck(this, FakeSuspense);

      return _super.apply(this, arguments);
    }

    _createClass(FakeSuspense, [{
      key: "render",
      value: function render() {
        var type = prerenderEl.type,
            props = prerenderEl.props;
        return _react["default"].createElement(type, _objectSpread({}, props, {}, this.props), children);
      }
    }]);

    return FakeSuspense;
  }(prerenderEl.type) : function FakeSuspense(props) {
    // eslint-disable-line prefer-arrow-callback
    return _react["default"].createElement(renderedEl.type, _objectSpread({}, renderedEl.props, {}, props), children);
  }, {
    propTypes: propTypes,
    defaultProps: defaultProps,
    contextTypes: contextTypes,
    contextType: contextType,
    childContextTypes: childContextTypes
  });
  return _react["default"].createElement(FakeSuspense, null, children);
}

function elementToTree(el) {
  if (!(0, _reactIs.isPortal)(el)) {
    return (0, _enzymeAdapterUtils.elementToTree)(el, elementToTree);
  }

  var children = el.children,
      containerInfo = el.containerInfo;
  var props = {
    children: children,
    containerInfo: containerInfo
  };
  return {
    nodeType: 'portal',
    type: _reactIs.Portal,
    props: props,
    key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(el.key),
    ref: el.ref || null,
    instance: null,
    rendered: elementToTree(el.children)
  };
}

function _toTree(vnode) {
  if (vnode == null) {
    return null;
  } // TODO(lmr): I'm not really sure I understand whether or not this is what
  // i should be doing, or if this is a hack for something i'm doing wrong
  // somewhere else. Should talk to sebastian about this perhaps


  var node = (0, _findCurrentFiberUsingSlowPath["default"])(vnode);

  switch (node.tag) {
    case FiberTags.HostRoot:
      return childrenToTree(node.child);

    case FiberTags.HostPortal:
      {
        var containerInfo = node.stateNode.containerInfo,
            children = node.memoizedProps;
        var props = {
          containerInfo: containerInfo,
          children: children
        };
        return {
          nodeType: 'portal',
          type: _reactIs.Portal,
          props: props,
          key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(node.key),
          ref: node.ref,
          instance: null,
          rendered: childrenToTree(node.child)
        };
      }

    case FiberTags.ClassComponent:
      return {
        nodeType: 'class',
        type: node.type,
        props: _objectSpread({}, node.memoizedProps),
        key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(node.key),
        ref: node.ref,
        instance: node.stateNode,
        rendered: childrenToTree(node.child)
      };

    case FiberTags.FunctionalComponent:
      return {
        nodeType: 'function',
        type: node.type,
        props: _objectSpread({}, node.memoizedProps),
        key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(node.key),
        ref: node.ref,
        instance: null,
        rendered: childrenToTree(node.child)
      };

    case FiberTags.MemoClass:
      return {
        nodeType: 'class',
        type: node.elementType.type,
        props: _objectSpread({}, node.memoizedProps),
        key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(node.key),
        ref: node.ref,
        instance: node.stateNode,
        rendered: childrenToTree(node.child.child)
      };

    case FiberTags.MemoSFC:
      {
        var renderedNodes = flatten(nodeAndSiblingsArray(node.child).map(_toTree));

        if (renderedNodes.length === 0) {
          renderedNodes = [node.memoizedProps.children];
        }

        return {
          nodeType: 'function',
          type: node.elementType,
          props: _objectSpread({}, node.memoizedProps),
          key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(node.key),
          ref: node.ref,
          instance: null,
          rendered: renderedNodes
        };
      }

    case FiberTags.HostComponent:
      {
        var _renderedNodes = flatten(nodeAndSiblingsArray(node.child).map(_toTree));

        if (_renderedNodes.length === 0) {
          _renderedNodes = [node.memoizedProps.children];
        }

        return {
          nodeType: 'host',
          type: node.type,
          props: _objectSpread({}, node.memoizedProps),
          key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(node.key),
          ref: node.ref,
          instance: node.stateNode,
          rendered: _renderedNodes
        };
      }

    case FiberTags.HostText:
      return node.memoizedProps;

    case FiberTags.Fragment:
    case FiberTags.Mode:
    case FiberTags.ContextProvider:
    case FiberTags.ContextConsumer:
      return childrenToTree(node.child);

    case FiberTags.Profiler:
    case FiberTags.ForwardRef:
      {
        return {
          nodeType: 'function',
          type: node.type,
          props: _objectSpread({}, node.pendingProps),
          key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(node.key),
          ref: node.ref,
          instance: null,
          rendered: childrenToTree(node.child)
        };
      }

    case FiberTags.Suspense:
      {
        return {
          nodeType: 'function',
          type: _reactIs.Suspense,
          props: _objectSpread({}, node.memoizedProps),
          key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(node.key),
          ref: node.ref,
          instance: null,
          rendered: childrenToTree(node.child)
        };
      }

    case FiberTags.Lazy:
      return childrenToTree(node.child);

    default:
      throw new Error("Enzyme Internal Error: unknown node with tag ".concat(node.tag));
  }
}

function childrenToTree(node) {
  if (!node) {
    return null;
  }

  var children = nodeAndSiblingsArray(node);

  if (children.length === 0) {
    return null;
  }

  if (children.length === 1) {
    return _toTree(children[0]);
  }

  return flatten(children.map(_toTree));
}

function _nodeToHostNode(_node) {
  // NOTE(lmr): node could be a function component
  // which wont have an instance prop, but we can get the
  // host node associated with its return value at that point.
  // Although this breaks down if the return value is an array,
  // as is possible with React 16.
  var node = _node;

  while (node && !Array.isArray(node) && node.instance === null) {
    node = node.rendered;
  } // if the SFC returned null effectively, there is no host node.


  if (!node) {
    return null;
  }

  var mapper = function mapper(item) {
    if (item && item.instance) return _reactDom["default"].findDOMNode(item.instance);
    return null;
  };

  if (Array.isArray(node)) {
    return node.map(mapper);
  }

  if (Array.isArray(node.rendered) && node.nodeType === 'class') {
    return node.rendered.map(mapper);
  }

  return mapper(node);
}

function replaceLazyWithFallback(node, fallback) {
  if (!node) {
    return null;
  }

  if (Array.isArray(node)) {
    return node.map(function (el) {
      return replaceLazyWithFallback(el, fallback);
    });
  }

  if (isLazy(node.type)) {
    return fallback;
  }

  return _objectSpread({}, node, {
    props: _objectSpread({}, node.props, {
      children: replaceLazyWithFallback(node.props.children, fallback)
    })
  });
}

var eventOptions = {
  animation: true,
  pointerEvents: is164,
  auxClick: is165
};

function getEmptyStateValue() {
  // this handles a bug in React 16.0 - 16.2
  // see https://github.com/facebook/react/commit/39be83565c65f9c522150e52375167568a2a1459
  // also see https://github.com/facebook/react/pull/11965
  // eslint-disable-next-line react/prefer-stateless-function
  var EmptyState = /*#__PURE__*/function (_React$Component) {
    _inherits(EmptyState, _React$Component);

    var _super2 = _createSuper(EmptyState);

    function EmptyState() {
      _classCallCheck(this, EmptyState);

      return _super2.apply(this, arguments);
    }

    _createClass(EmptyState, [{
      key: "render",
      value: function render() {
        return null;
      }
    }]);

    return EmptyState;
  }(_react["default"].Component);

  var testRenderer = new _shallow["default"]();
  testRenderer.render(_react["default"].createElement(EmptyState));
  return testRenderer._instance.state;
}

function wrapAct(fn) {
  if (!is168) {
    return fn();
  }

  var returnVal;

  _testUtils["default"].act(function () {
    returnVal = fn();
  });

  return returnVal;
}

function getProviderDefaultValue(Provider) {
  // React stores references to the Provider's defaultValue differently across versions.
  if ('_defaultValue' in Provider._context) {
    return Provider._context._defaultValue;
  }

  if ('_currentValue' in Provider._context) {
    return Provider._context._currentValue;
  }

  throw new Error('Enzyme Internal Error: can’t figure out how to get Provider’s default value');
}

function makeFakeElement(type) {
  return {
    $$typeof: _reactIs.Element,
    type: type
  };
}

function isStateful(Component) {
  return Component.prototype && (Component.prototype.isReactComponent || Array.isArray(Component.__reactAutoBindPairs) // fallback for createClass components
  );
}

var ReactSixteenAdapter = /*#__PURE__*/function (_EnzymeAdapter) {
  _inherits(ReactSixteenAdapter, _EnzymeAdapter);

  var _super3 = _createSuper(ReactSixteenAdapter);

  function ReactSixteenAdapter() {
    var _this;

    _classCallCheck(this, ReactSixteenAdapter);

    _this = _super3.call(this);
    var lifecycles = _this.options.lifecycles;
    _this.options = _objectSpread({}, _this.options, {
      enableComponentDidUpdateOnSetState: true,
      // TODO: remove, semver-major
      legacyContextMode: 'parent',
      lifecycles: _objectSpread({}, lifecycles, {
        componentDidUpdate: {
          onSetState: true
        },
        getDerivedStateFromProps: {
          hasShouldComponentUpdateBug: hasShouldComponentUpdateBug
        },
        getSnapshotBeforeUpdate: true,
        setState: {
          skipsComponentDidUpdateOnNullish: true
        },
        getChildContext: {
          calledByRenderer: false
        },
        getDerivedStateFromError: is166
      })
    });
    return _this;
  }

  _createClass(ReactSixteenAdapter, [{
    key: "createMountRenderer",
    value: function createMountRenderer(options) {
      (0, _enzymeAdapterUtils.assertDomAvailable)('mount');

      if ((0, _has["default"])(options, 'suspenseFallback')) {
        throw new TypeError('`suspenseFallback` is not supported by the `mount` renderer');
      }

      if (FiberTags === null) {
        // Requires DOM.
        FiberTags = (0, _detectFiberTags["default"])();
      }

      var attachTo = options.attachTo,
          hydrateIn = options.hydrateIn,
          wrappingComponentProps = options.wrappingComponentProps;
      var domNode = hydrateIn || attachTo || global.document.createElement('div');
      var instance = null;
      var adapter = this;
      return _objectSpread({
        render: function render(el, context, callback) {
          return wrapAct(function () {
            if (instance === null) {
              var type = el.type,
                  props = el.props,
                  ref = el.ref;

              var wrapperProps = _objectSpread({
                Component: type,
                props: props,
                wrappingComponentProps: wrappingComponentProps,
                context: context
              }, ref && {
                refProp: ref
              });

              var ReactWrapperComponent = (0, _enzymeAdapterUtils.createMountWrapper)(el, _objectSpread({}, options, {
                adapter: adapter
              }));

              var wrappedEl = _react["default"].createElement(ReactWrapperComponent, wrapperProps);

              instance = hydrateIn ? _reactDom["default"].hydrate(wrappedEl, domNode) : _reactDom["default"].render(wrappedEl, domNode);

              if (typeof callback === 'function') {
                callback();
              }
            } else {
              instance.setChildProps(el.props, context, callback);
            }
          });
        },
        unmount: function unmount() {
          _reactDom["default"].unmountComponentAtNode(domNode);

          instance = null;
        },
        getNode: function getNode() {
          if (!instance) {
            return null;
          }

          return (0, _enzymeAdapterUtils.getNodeFromRootFinder)(adapter.isCustomComponent, _toTree(instance._reactInternalFiber), options);
        },
        simulateError: function simulateError(nodeHierarchy, rootNode, error) {
          var isErrorBoundary = function isErrorBoundary(_ref2) {
            var elInstance = _ref2.instance,
                type = _ref2.type;

            if (is166 && type && type.getDerivedStateFromError) {
              return true;
            }

            return elInstance && elInstance.componentDidCatch;
          };

          var _ref3 = nodeHierarchy.find(isErrorBoundary) || {},
              catchingInstance = _ref3.instance,
              catchingType = _ref3.type;

          (0, _enzymeAdapterUtils.simulateError)(error, catchingInstance, rootNode, nodeHierarchy, nodeTypeFromType, adapter.displayNameOfNode, is166 ? catchingType : undefined);
        },
        simulateEvent: function simulateEvent(node, event, mock) {
          var mappedEvent = (0, _enzymeAdapterUtils.mapNativeEventNames)(event, eventOptions);
          var eventFn = _testUtils["default"].Simulate[mappedEvent];

          if (!eventFn) {
            throw new TypeError("ReactWrapper::simulate() event '".concat(event, "' does not exist"));
          }

          wrapAct(function () {
            eventFn(adapter.nodeToHostNode(node), mock);
          });
        },
        batchedUpdates: function batchedUpdates(fn) {
          return fn(); // return ReactDOM.unstable_batchedUpdates(fn);
        },
        getWrappingComponentRenderer: function getWrappingComponentRenderer() {
          return _objectSpread({}, this, {}, (0, _enzymeAdapterUtils.getWrappingComponentMountRenderer)({
            toTree: function toTree(inst) {
              return _toTree(inst._reactInternalFiber);
            },
            getMountWrapperInstance: function getMountWrapperInstance() {
              return instance;
            }
          }));
        }
      }, is168 && {
        wrapInvoke: wrapAct
      });
    }
  }, {
    key: "createShallowRenderer",
    value: function createShallowRenderer() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var adapter = this;
      var renderer = new _shallow["default"]();
      var suspenseFallback = options.suspenseFallback;

      if (typeof suspenseFallback !== 'undefined' && typeof suspenseFallback !== 'boolean') {
        throw TypeError('`options.suspenseFallback` should be boolean or undefined');
      }

      var isDOM = false;
      var cachedNode = null;
      var lastComponent = null;
      var wrappedComponent = null;
      var sentinel = {}; // wrap memo components with a PureComponent, or a class component with sCU

      var wrapPureComponent = function wrapPureComponent(Component, compare) {
        if (!is166) {
          throw new RangeError('this function should not be called in React < 16.6. Please report this!');
        }

        if (lastComponent !== Component) {
          if (isStateful(Component)) {
            wrappedComponent = /*#__PURE__*/function (_Component) {
              _inherits(wrappedComponent, _Component);

              var _super4 = _createSuper(wrappedComponent);

              function wrappedComponent() {
                _classCallCheck(this, wrappedComponent);

                return _super4.apply(this, arguments);
              }

              return wrappedComponent;
            }(Component); // eslint-disable-line react/prefer-stateless-function


            if (compare) {
              wrappedComponent.prototype.shouldComponentUpdate = function (nextProps) {
                return !compare(_this2.props, nextProps);
              };
            } else {
              wrappedComponent.prototype.isPureReactComponent = true;
            }
          } else {
            var memoized = sentinel;
            var prevProps;

            wrappedComponent = function wrappedComponent(props) {
              var shouldUpdate = memoized === sentinel || (compare ? !compare(prevProps, props) : !(0, _enzymeShallowEqual["default"])(prevProps, props));

              if (shouldUpdate) {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  args[_key - 1] = arguments[_key];
                }

                memoized = Component.apply(void 0, [_objectSpread({}, Component.defaultProps, {}, props)].concat(args));
                prevProps = props;
              }

              return memoized;
            };
          }

          (0, _object["default"])(wrappedComponent, Component, {
            displayName: adapter.displayNameOfNode({
              type: Component
            })
          });
          lastComponent = Component;
        }

        return wrappedComponent;
      }; // Wrap functional components on versions prior to 16.5,
      // to avoid inadvertently pass a `this` instance to it.


      var wrapFunctionalComponent = function wrapFunctionalComponent(Component) {
        if (is166 && (0, _has["default"])(Component, 'defaultProps')) {
          if (lastComponent !== Component) {
            wrappedComponent = (0, _object["default"])( // eslint-disable-next-line new-cap
            function (props) {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }

              return Component.apply(void 0, [_objectSpread({}, Component.defaultProps, {}, props)].concat(args));
            }, Component, {
              displayName: adapter.displayNameOfNode({
                type: Component
              })
            });
            lastComponent = Component;
          }

          return wrappedComponent;
        }

        if (is165) {
          return Component;
        }

        if (lastComponent !== Component) {
          wrappedComponent = (0, _object["default"])(function () {
            return Component.apply(void 0, arguments);
          }, // eslint-disable-line new-cap
          Component);
          lastComponent = Component;
        }

        return wrappedComponent;
      };

      var renderElement = function renderElement(elConfig) {
        for (var _len3 = arguments.length, rest = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          rest[_key3 - 1] = arguments[_key3];
        }

        var renderedEl = renderer.render.apply(renderer, [elConfig].concat(rest));
        var typeIsExisted = !!(renderedEl && renderedEl.type);

        if (is166 && typeIsExisted) {
          var clonedEl = transformSuspense(renderedEl, elConfig, {
            suspenseFallback: suspenseFallback
          });
          var elementIsChanged = clonedEl.type !== renderedEl.type;

          if (elementIsChanged) {
            return renderer.render.apply(renderer, [_objectSpread({}, elConfig, {
              type: clonedEl.type
            })].concat(rest));
          }
        }

        return renderedEl;
      };

      return {
        render: function render(el, unmaskedContext) {
          var _ref4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
              _ref4$providerValues = _ref4.providerValues,
              providerValues = _ref4$providerValues === void 0 ? new Map() : _ref4$providerValues;

          cachedNode = el;
          /* eslint consistent-return: 0 */

          if (typeof el.type === 'string') {
            isDOM = true;
          } else if ((0, _reactIs.isContextProvider)(el)) {
            providerValues.set(el.type, el.props.value);
            var MockProvider = (0, _object["default"])(function (props) {
              return props.children;
            }, el.type);
            return (0, _enzymeAdapterUtils.withSetStateAllowed)(function () {
              return renderElement(_objectSpread({}, el, {
                type: MockProvider
              }));
            });
          } else if ((0, _reactIs.isContextConsumer)(el)) {
            var Provider = adapter.getProviderFromConsumer(el.type);
            var value = providerValues.has(Provider) ? providerValues.get(Provider) : getProviderDefaultValue(Provider);
            var MockConsumer = (0, _object["default"])(function (props) {
              return props.children(value);
            }, el.type);
            return (0, _enzymeAdapterUtils.withSetStateAllowed)(function () {
              return renderElement(_objectSpread({}, el, {
                type: MockConsumer
              }));
            });
          } else {
            isDOM = false;
            var renderedEl = el;

            if (isLazy(renderedEl)) {
              throw TypeError('`React.lazy` is not supported by shallow rendering.');
            }

            renderedEl = transformSuspense(renderedEl, renderedEl, {
              suspenseFallback: suspenseFallback
            });
            var _renderedEl = renderedEl,
                Component = _renderedEl.type;
            var context = (0, _enzymeAdapterUtils.getMaskedContext)(Component.contextTypes, unmaskedContext);

            if (isMemo(el.type)) {
              var _el$type = el.type,
                  InnerComp = _el$type.type,
                  compare = _el$type.compare;
              return (0, _enzymeAdapterUtils.withSetStateAllowed)(function () {
                return renderElement(_objectSpread({}, el, {
                  type: wrapPureComponent(InnerComp, compare)
                }), context);
              });
            }

            if (!isStateful(Component) && typeof Component === 'function') {
              return (0, _enzymeAdapterUtils.withSetStateAllowed)(function () {
                return renderElement(_objectSpread({}, renderedEl, {
                  type: wrapFunctionalComponent(Component)
                }), context);
              });
            }

            if (isStateful) {
              // fix react bug; see implementation of `getEmptyStateValue`
              var emptyStateValue = getEmptyStateValue();

              if (emptyStateValue) {
                Object.defineProperty(Component.prototype, 'state', {
                  configurable: true,
                  enumerable: true,
                  get: function get() {
                    return null;
                  },
                  set: function set(value) {
                    if (value !== emptyStateValue) {
                      Object.defineProperty(this, 'state', {
                        configurable: true,
                        enumerable: true,
                        value: value,
                        writable: true
                      });
                    }

                    return true;
                  }
                });
              }
            }

            return (0, _enzymeAdapterUtils.withSetStateAllowed)(function () {
              return renderElement(renderedEl, context);
            });
          }
        },
        unmount: function unmount() {
          renderer.unmount();
        },
        getNode: function getNode() {
          if (isDOM) {
            return elementToTree(cachedNode);
          }

          var output = renderer.getRenderOutput();
          return {
            nodeType: nodeTypeFromType(cachedNode.type),
            type: cachedNode.type,
            props: cachedNode.props,
            key: (0, _enzymeAdapterUtils.ensureKeyOrUndefined)(cachedNode.key),
            ref: cachedNode.ref,
            instance: renderer._instance,
            rendered: Array.isArray(output) ? flatten(output).map(function (el) {
              return elementToTree(el);
            }) : elementToTree(output)
          };
        },
        simulateError: function simulateError(nodeHierarchy, rootNode, error) {
          (0, _enzymeAdapterUtils.simulateError)(error, renderer._instance, cachedNode, nodeHierarchy.concat(cachedNode), nodeTypeFromType, adapter.displayNameOfNode, is166 ? cachedNode.type : undefined);
        },
        simulateEvent: function simulateEvent(node, event) {
          for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
            args[_key4 - 2] = arguments[_key4];
          }

          var handler = node.props[(0, _enzymeAdapterUtils.propFromEvent)(event, eventOptions)];

          if (handler) {
            (0, _enzymeAdapterUtils.withSetStateAllowed)(function () {
              // TODO(lmr): create/use synthetic events
              // TODO(lmr): emulate React's event propagation
              // ReactDOM.unstable_batchedUpdates(() => {
              handler.apply(void 0, args); // });
            });
          }
        },
        batchedUpdates: function batchedUpdates(fn) {
          return fn(); // return ReactDOM.unstable_batchedUpdates(fn);
        },
        checkPropTypes: function checkPropTypes(typeSpecs, values, location, hierarchy) {
          return (0, _checkPropTypes2["default"])(typeSpecs, values, location, (0, _enzymeAdapterUtils.displayNameOfNode)(cachedNode), function () {
            return (0, _enzymeAdapterUtils.getComponentStack)(hierarchy.concat([cachedNode]));
          });
        }
      };
    }
  }, {
    key: "createStringRenderer",
    value: function createStringRenderer(options) {
      if ((0, _has["default"])(options, 'suspenseFallback')) {
        throw new TypeError('`suspenseFallback` should not be specified in options of string renderer');
      }

      return {
        render: function render(el, context) {
          if (options.context && (el.type.contextTypes || options.childContextTypes)) {
            var childContextTypes = _objectSpread({}, el.type.contextTypes || {}, {}, options.childContextTypes);

            var ContextWrapper = (0, _enzymeAdapterUtils.createRenderWrapper)(el, context, childContextTypes);
            return _server["default"].renderToStaticMarkup(_react["default"].createElement(ContextWrapper));
          }

          return _server["default"].renderToStaticMarkup(el);
        }
      };
    } // Provided a bag of options, return an `EnzymeRenderer`. Some options can be implementation
    // specific, like `attach` etc. for React, but not part of this interface explicitly.
    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "createRenderer",
    value: function createRenderer(options) {
      switch (options.mode) {
        case _enzyme.EnzymeAdapter.MODES.MOUNT:
          return this.createMountRenderer(options);

        case _enzyme.EnzymeAdapter.MODES.SHALLOW:
          return this.createShallowRenderer(options);

        case _enzyme.EnzymeAdapter.MODES.STRING:
          return this.createStringRenderer(options);

        default:
          throw new Error("Enzyme Internal Error: Unrecognized mode: ".concat(options.mode));
      }
    }
  }, {
    key: "wrap",
    value: function wrap(element) {
      return (0, _enzymeAdapterUtils.wrap)(element);
    } // converts an RSTNode to the corresponding JSX Pragma Element. This will be needed
    // in order to implement the `Wrapper.mount()` and `Wrapper.shallow()` methods, but should
    // be pretty straightforward for people to implement.
    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "nodeToElement",
    value: function nodeToElement(node) {
      if (!node || _typeof(node) !== 'object') return null;
      var type = node.type;
      return _react["default"].createElement(unmemoType(type), (0, _enzymeAdapterUtils.propsWithKeysAndRef)(node));
    } // eslint-disable-next-line class-methods-use-this

  }, {
    key: "matchesElementType",
    value: function matchesElementType(node, matchingType) {
      if (!node) {
        return node;
      }

      var type = node.type;
      return unmemoType(type) === unmemoType(matchingType);
    }
  }, {
    key: "elementToNode",
    value: function elementToNode(element) {
      return elementToTree(element);
    }
  }, {
    key: "nodeToHostNode",
    value: function nodeToHostNode(node) {
      var supportsArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var nodes = _nodeToHostNode(node);

      if (Array.isArray(nodes) && !supportsArray) {
        return nodes[0];
      }

      return nodes;
    }
  }, {
    key: "displayNameOfNode",
    value: function displayNameOfNode(node) {
      if (!node) return null;
      var type = node.type,
          $$typeof = node.$$typeof;
      var nodeType = type || $$typeof; // newer node types may be undefined, so only test if the nodeType exists

      if (nodeType) {
        switch (nodeType) {
          case (is166 ? _reactIs.ConcurrentMode : _reactIs.AsyncMode) || NaN:
            return is166 ? 'ConcurrentMode' : 'AsyncMode';

          case _reactIs.Fragment || NaN:
            return 'Fragment';

          case _reactIs.StrictMode || NaN:
            return 'StrictMode';

          case _reactIs.Profiler || NaN:
            return 'Profiler';

          case _reactIs.Portal || NaN:
            return 'Portal';

          case _reactIs.Suspense || NaN:
            return 'Suspense';

          default:
        }
      }

      var $$typeofType = type && type.$$typeof;

      switch ($$typeofType) {
        case _reactIs.ContextConsumer || NaN:
          return 'ContextConsumer';

        case _reactIs.ContextProvider || NaN:
          return 'ContextProvider';

        case _reactIs.Memo || NaN:
          {
            var nodeName = (0, _enzymeAdapterUtils.displayNameOfNode)(node);
            return typeof nodeName === 'string' ? nodeName : "Memo(".concat((0, _enzymeAdapterUtils.displayNameOfNode)(type), ")");
          }

        case _reactIs.ForwardRef || NaN:
          {
            if (type.displayName) {
              return type.displayName;
            }

            var name = (0, _enzymeAdapterUtils.displayNameOfNode)({
              type: type.render
            });
            return name ? "ForwardRef(".concat(name, ")") : 'ForwardRef';
          }

        case _reactIs.Lazy || NaN:
          {
            return 'lazy';
          }

        default:
          return (0, _enzymeAdapterUtils.displayNameOfNode)(node);
      }
    }
  }, {
    key: "isValidElement",
    value: function isValidElement(element) {
      return (0, _reactIs.isElement)(element);
    }
  }, {
    key: "isValidElementType",
    value: function isValidElementType(object) {
      return !!object && (0, _reactIs.isValidElementType)(object);
    }
  }, {
    key: "isFragment",
    value: function isFragment(fragment) {
      return (0, _Utils.typeOfNode)(fragment) === _reactIs.Fragment;
    }
  }, {
    key: "isCustomComponent",
    value: function isCustomComponent(type) {
      var fakeElement = makeFakeElement(type);
      return !!type && (typeof type === 'function' || (0, _reactIs.isForwardRef)(fakeElement) || (0, _reactIs.isContextProvider)(fakeElement) || (0, _reactIs.isContextConsumer)(fakeElement) || (0, _reactIs.isSuspense)(fakeElement));
    }
  }, {
    key: "isContextConsumer",
    value: function isContextConsumer(type) {
      return !!type && (0, _reactIs.isContextConsumer)(makeFakeElement(type));
    }
  }, {
    key: "isCustomComponentElement",
    value: function isCustomComponentElement(inst) {
      if (!inst || !this.isValidElement(inst)) {
        return false;
      }

      return this.isCustomComponent(inst.type);
    }
  }, {
    key: "getProviderFromConsumer",
    value: function getProviderFromConsumer(Consumer) {
      // React stores references to the Provider on a Consumer differently across versions.
      if (Consumer) {
        var Provider;

        if (Consumer._context) {
          // check this first, to avoid a deprecation warning
          Provider = Consumer._context.Provider;
        } else if (Consumer.Provider) {
          Provider = Consumer.Provider;
        }

        if (Provider) {
          return Provider;
        }
      }

      throw new Error('Enzyme Internal Error: can’t figure out how to get Provider from Consumer');
    }
  }, {
    key: "createElement",
    value: function createElement() {
      return _react["default"].createElement.apply(_react["default"], arguments);
    }
  }, {
    key: "wrapWithWrappingComponent",
    value: function wrapWithWrappingComponent(node, options) {
      return {
        RootFinder: _enzymeAdapterUtils.RootFinder,
        node: (0, _enzymeAdapterUtils.wrapWithWrappingComponent)(_react["default"].createElement, node, options)
      };
    }
  }]);

  return ReactSixteenAdapter;
}(_enzyme.EnzymeAdapter);

module.exports = ReactSixteenAdapter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZWFjdFNpeHRlZW5BZGFwdGVyLmpzIl0sIm5hbWVzIjpbImlzMTY0IiwiVGVzdFV0aWxzIiwiU2ltdWxhdGUiLCJ0b3VjaFN0YXJ0IiwiaXMxNjUiLCJhdXhDbGljayIsImlzMTY2IiwiUmVhY3QiLCJ1bnN0YWJsZV9Bc3luY01vZGUiLCJpczE2OCIsImFjdCIsImhhc1Nob3VsZENvbXBvbmVudFVwZGF0ZUJ1ZyIsInNlbXZlciIsInNhdGlzZmllcyIsInRlc3RSZW5kZXJlclZlcnNpb24iLCJGaWJlclRhZ3MiLCJub2RlQW5kU2libGluZ3NBcnJheSIsIm5vZGVXaXRoU2libGluZyIsImFycmF5Iiwibm9kZSIsInB1c2giLCJzaWJsaW5nIiwiZmxhdHRlbiIsImFyciIsInJlc3VsdCIsInN0YWNrIiwiaSIsImxlbmd0aCIsIm4iLCJwb3AiLCJlbCIsIkFycmF5IiwiaXNBcnJheSIsIm5vZGVUeXBlRnJvbVR5cGUiLCJ0eXBlIiwiUG9ydGFsIiwiaXNNZW1vIiwiTWVtbyIsImlzTGF6eSIsIkxhenkiLCJ1bm1lbW9UeXBlIiwidHJhbnNmb3JtU3VzcGVuc2UiLCJyZW5kZXJlZEVsIiwicHJlcmVuZGVyRWwiLCJzdXNwZW5zZUZhbGxiYWNrIiwiY2hpbGRyZW4iLCJwcm9wcyIsImZhbGxiYWNrIiwicmVwbGFjZUxhenlXaXRoRmFsbGJhY2siLCJwcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJjb250ZXh0VHlwZXMiLCJjb250ZXh0VHlwZSIsImNoaWxkQ29udGV4dFR5cGVzIiwiRmFrZVN1c3BlbnNlIiwiaXNTdGF0ZWZ1bCIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtZW50VG9UcmVlIiwiY29udGFpbmVySW5mbyIsIm5vZGVUeXBlIiwia2V5IiwicmVmIiwiaW5zdGFuY2UiLCJyZW5kZXJlZCIsInRvVHJlZSIsInZub2RlIiwidGFnIiwiSG9zdFJvb3QiLCJjaGlsZHJlblRvVHJlZSIsImNoaWxkIiwiSG9zdFBvcnRhbCIsInN0YXRlTm9kZSIsIm1lbW9pemVkUHJvcHMiLCJDbGFzc0NvbXBvbmVudCIsIkZ1bmN0aW9uYWxDb21wb25lbnQiLCJNZW1vQ2xhc3MiLCJlbGVtZW50VHlwZSIsIk1lbW9TRkMiLCJyZW5kZXJlZE5vZGVzIiwibWFwIiwiSG9zdENvbXBvbmVudCIsIkhvc3RUZXh0IiwiRnJhZ21lbnQiLCJNb2RlIiwiQ29udGV4dFByb3ZpZGVyIiwiQ29udGV4dENvbnN1bWVyIiwiUHJvZmlsZXIiLCJGb3J3YXJkUmVmIiwicGVuZGluZ1Byb3BzIiwiU3VzcGVuc2UiLCJFcnJvciIsIm5vZGVUb0hvc3ROb2RlIiwiX25vZGUiLCJtYXBwZXIiLCJpdGVtIiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsImV2ZW50T3B0aW9ucyIsImFuaW1hdGlvbiIsInBvaW50ZXJFdmVudHMiLCJnZXRFbXB0eVN0YXRlVmFsdWUiLCJFbXB0eVN0YXRlIiwiQ29tcG9uZW50IiwidGVzdFJlbmRlcmVyIiwiU2hhbGxvd1JlbmRlcmVyIiwicmVuZGVyIiwiX2luc3RhbmNlIiwic3RhdGUiLCJ3cmFwQWN0IiwiZm4iLCJyZXR1cm5WYWwiLCJnZXRQcm92aWRlckRlZmF1bHRWYWx1ZSIsIlByb3ZpZGVyIiwiX2NvbnRleHQiLCJfZGVmYXVsdFZhbHVlIiwiX2N1cnJlbnRWYWx1ZSIsIm1ha2VGYWtlRWxlbWVudCIsIiQkdHlwZW9mIiwiRWxlbWVudCIsInByb3RvdHlwZSIsImlzUmVhY3RDb21wb25lbnQiLCJfX3JlYWN0QXV0b0JpbmRQYWlycyIsIlJlYWN0U2l4dGVlbkFkYXB0ZXIiLCJsaWZlY3ljbGVzIiwib3B0aW9ucyIsImVuYWJsZUNvbXBvbmVudERpZFVwZGF0ZU9uU2V0U3RhdGUiLCJsZWdhY3lDb250ZXh0TW9kZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsIm9uU2V0U3RhdGUiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSIsInNldFN0YXRlIiwic2tpcHNDb21wb25lbnREaWRVcGRhdGVPbk51bGxpc2giLCJnZXRDaGlsZENvbnRleHQiLCJjYWxsZWRCeVJlbmRlcmVyIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwiVHlwZUVycm9yIiwiYXR0YWNoVG8iLCJoeWRyYXRlSW4iLCJ3cmFwcGluZ0NvbXBvbmVudFByb3BzIiwiZG9tTm9kZSIsImdsb2JhbCIsImRvY3VtZW50IiwiYWRhcHRlciIsImNvbnRleHQiLCJjYWxsYmFjayIsIndyYXBwZXJQcm9wcyIsInJlZlByb3AiLCJSZWFjdFdyYXBwZXJDb21wb25lbnQiLCJ3cmFwcGVkRWwiLCJoeWRyYXRlIiwic2V0Q2hpbGRQcm9wcyIsInVubW91bnQiLCJ1bm1vdW50Q29tcG9uZW50QXROb2RlIiwiZ2V0Tm9kZSIsImlzQ3VzdG9tQ29tcG9uZW50IiwiX3JlYWN0SW50ZXJuYWxGaWJlciIsInNpbXVsYXRlRXJyb3IiLCJub2RlSGllcmFyY2h5Iiwicm9vdE5vZGUiLCJlcnJvciIsImlzRXJyb3JCb3VuZGFyeSIsImVsSW5zdGFuY2UiLCJjb21wb25lbnREaWRDYXRjaCIsImZpbmQiLCJjYXRjaGluZ0luc3RhbmNlIiwiY2F0Y2hpbmdUeXBlIiwiZGlzcGxheU5hbWVPZk5vZGUiLCJ1bmRlZmluZWQiLCJzaW11bGF0ZUV2ZW50IiwiZXZlbnQiLCJtb2NrIiwibWFwcGVkRXZlbnQiLCJldmVudEZuIiwiYmF0Y2hlZFVwZGF0ZXMiLCJnZXRXcmFwcGluZ0NvbXBvbmVudFJlbmRlcmVyIiwiaW5zdCIsImdldE1vdW50V3JhcHBlckluc3RhbmNlIiwid3JhcEludm9rZSIsInJlbmRlcmVyIiwiaXNET00iLCJjYWNoZWROb2RlIiwibGFzdENvbXBvbmVudCIsIndyYXBwZWRDb21wb25lbnQiLCJzZW50aW5lbCIsIndyYXBQdXJlQ29tcG9uZW50IiwiY29tcGFyZSIsIlJhbmdlRXJyb3IiLCJzaG91bGRDb21wb25lbnRVcGRhdGUiLCJuZXh0UHJvcHMiLCJpc1B1cmVSZWFjdENvbXBvbmVudCIsIm1lbW9pemVkIiwicHJldlByb3BzIiwic2hvdWxkVXBkYXRlIiwiYXJncyIsImRpc3BsYXlOYW1lIiwid3JhcEZ1bmN0aW9uYWxDb21wb25lbnQiLCJyZW5kZXJFbGVtZW50IiwiZWxDb25maWciLCJyZXN0IiwidHlwZUlzRXhpc3RlZCIsImNsb25lZEVsIiwiZWxlbWVudElzQ2hhbmdlZCIsInVubWFza2VkQ29udGV4dCIsInByb3ZpZGVyVmFsdWVzIiwiTWFwIiwic2V0IiwidmFsdWUiLCJNb2NrUHJvdmlkZXIiLCJnZXRQcm92aWRlckZyb21Db25zdW1lciIsImhhcyIsImdldCIsIk1vY2tDb25zdW1lciIsIklubmVyQ29tcCIsImVtcHR5U3RhdGVWYWx1ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwib3V0cHV0IiwiZ2V0UmVuZGVyT3V0cHV0IiwiY29uY2F0IiwiaGFuZGxlciIsImNoZWNrUHJvcFR5cGVzIiwidHlwZVNwZWNzIiwidmFsdWVzIiwibG9jYXRpb24iLCJoaWVyYXJjaHkiLCJDb250ZXh0V3JhcHBlciIsIlJlYWN0RE9NU2VydmVyIiwicmVuZGVyVG9TdGF0aWNNYXJrdXAiLCJtb2RlIiwiRW56eW1lQWRhcHRlciIsIk1PREVTIiwiTU9VTlQiLCJjcmVhdGVNb3VudFJlbmRlcmVyIiwiU0hBTExPVyIsImNyZWF0ZVNoYWxsb3dSZW5kZXJlciIsIlNUUklORyIsImNyZWF0ZVN0cmluZ1JlbmRlcmVyIiwiZWxlbWVudCIsIm1hdGNoaW5nVHlwZSIsInN1cHBvcnRzQXJyYXkiLCJub2RlcyIsIkNvbmN1cnJlbnRNb2RlIiwiQXN5bmNNb2RlIiwiTmFOIiwiU3RyaWN0TW9kZSIsIiQkdHlwZW9mVHlwZSIsIm5vZGVOYW1lIiwibmFtZSIsIm9iamVjdCIsImZyYWdtZW50IiwiZmFrZUVsZW1lbnQiLCJpc1ZhbGlkRWxlbWVudCIsIkNvbnN1bWVyIiwiUm9vdEZpbmRlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7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QUFDWixZQUFJaEosUUFBSjs7QUFDQSxZQUFJZ0osUUFBUSxDQUFDL0ksUUFBYixFQUF1QjtBQUFFO0FBQ3BCRCxVQUFBQSxRQURrQixHQUNMZ0osUUFBUSxDQUFDL0ksUUFESixDQUNsQkQsUUFEa0I7QUFFdEIsU0FGRCxNQUVPLElBQUlnSixRQUFRLENBQUNoSixRQUFiLEVBQXVCO0FBQ3pCQSxVQUFBQSxRQUR5QixHQUNaZ0osUUFEWSxDQUN6QmhKLFFBRHlCO0FBRTdCOztBQUNELFlBQUlBLFFBQUosRUFBYztBQUNaLGlCQUFPQSxRQUFQO0FBQ0Q7QUFDRjs7QUFDRCxZQUFNLElBQUl0QixLQUFKLENBQVUsMkVBQVYsQ0FBTjtBQUNEOzs7b0NBRXNCO0FBQ3JCLGFBQU9uRixrQkFBTWlELGFBQU4sb0NBQVA7QUFDRDs7OzhDQUV5QnJDLEksRUFBTXlHLE8sRUFBUztBQUN2QyxhQUFPO0FBQ0xxSSxRQUFBQSxVQUFVLEVBQVZBLDhCQURLO0FBRUw5TyxRQUFBQSxJQUFJLEVBQUUsbURBQTBCWixrQkFBTWlELGFBQWhDLEVBQStDckMsSUFBL0MsRUFBcUR5RyxPQUFyRDtBQUZELE9BQVA7QUFJRDs7OztFQXRoQitCNkcscUI7O0FBeWhCbEN5QixNQUFNLENBQUNDLE9BQVAsR0FBaUJ6SSxtQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tdXNlLWJlZm9yZS1kZWZpbmU6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXG5pbXBvcnQgU2hhbGxvd1JlbmRlcmVyIGZyb20gJ3JlYWN0LXRlc3QtcmVuZGVyZXIvc2hhbGxvdyc7XG5pbXBvcnQgeyB2ZXJzaW9uIGFzIHRlc3RSZW5kZXJlclZlcnNpb24gfSBmcm9tICdyZWFjdC10ZXN0LXJlbmRlcmVyL3BhY2thZ2UuanNvbic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVucmVzb2x2ZWRcbmltcG9ydCBUZXN0VXRpbHMgZnJvbSAncmVhY3QtZG9tL3Rlc3QtdXRpbHMnO1xuaW1wb3J0IHNlbXZlciBmcm9tICdzZW12ZXInO1xuaW1wb3J0IGNoZWNrUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMnO1xuaW1wb3J0IGhhcyBmcm9tICdoYXMnO1xuaW1wb3J0IHtcbiAgQXN5bmNNb2RlLFxuICBDb25jdXJyZW50TW9kZSxcbiAgQ29udGV4dENvbnN1bWVyLFxuICBDb250ZXh0UHJvdmlkZXIsXG4gIEVsZW1lbnQsXG4gIEZvcndhcmRSZWYsXG4gIEZyYWdtZW50LFxuICBpc0NvbnRleHRDb25zdW1lcixcbiAgaXNDb250ZXh0UHJvdmlkZXIsXG4gIGlzRWxlbWVudCxcbiAgaXNGb3J3YXJkUmVmLFxuICBpc1BvcnRhbCxcbiAgaXNTdXNwZW5zZSxcbiAgaXNWYWxpZEVsZW1lbnRUeXBlLFxuICBMYXp5LFxuICBNZW1vLFxuICBQb3J0YWwsXG4gIFByb2ZpbGVyLFxuICBTdHJpY3RNb2RlLFxuICBTdXNwZW5zZSxcbn0gZnJvbSAncmVhY3QtaXMnO1xuaW1wb3J0IHsgRW56eW1lQWRhcHRlciB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgeyB0eXBlT2ZOb2RlIH0gZnJvbSAnZW56eW1lL2J1aWxkL1V0aWxzJztcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSAnZW56eW1lLXNoYWxsb3ctZXF1YWwnO1xuaW1wb3J0IHtcbiAgZGlzcGxheU5hbWVPZk5vZGUsXG4gIGVsZW1lbnRUb1RyZWUgYXMgdXRpbEVsZW1lbnRUb1RyZWUsXG4gIG5vZGVUeXBlRnJvbVR5cGUgYXMgdXRpbE5vZGVUeXBlRnJvbVR5cGUsXG4gIG1hcE5hdGl2ZUV2ZW50TmFtZXMsXG4gIHByb3BGcm9tRXZlbnQsXG4gIGFzc2VydERvbUF2YWlsYWJsZSxcbiAgd2l0aFNldFN0YXRlQWxsb3dlZCxcbiAgY3JlYXRlUmVuZGVyV3JhcHBlcixcbiAgY3JlYXRlTW91bnRXcmFwcGVyLFxuICBwcm9wc1dpdGhLZXlzQW5kUmVmLFxuICBlbnN1cmVLZXlPclVuZGVmaW5lZCxcbiAgc2ltdWxhdGVFcnJvcixcbiAgd3JhcCxcbiAgZ2V0TWFza2VkQ29udGV4dCxcbiAgZ2V0Q29tcG9uZW50U3RhY2ssXG4gIFJvb3RGaW5kZXIsXG4gIGdldE5vZGVGcm9tUm9vdEZpbmRlcixcbiAgd3JhcFdpdGhXcmFwcGluZ0NvbXBvbmVudCxcbiAgZ2V0V3JhcHBpbmdDb21wb25lbnRNb3VudFJlbmRlcmVyLFxuICBjb21wYXJlTm9kZVR5cGVPZixcbn0gZnJvbSAnZW56eW1lLWFkYXB0ZXItdXRpbHMnO1xuaW1wb3J0IGZpbmRDdXJyZW50RmliZXJVc2luZ1Nsb3dQYXRoIGZyb20gJy4vZmluZEN1cnJlbnRGaWJlclVzaW5nU2xvd1BhdGgnO1xuaW1wb3J0IGRldGVjdEZpYmVyVGFncyBmcm9tICcuL2RldGVjdEZpYmVyVGFncyc7XG5cbmNvbnN0IGlzMTY0ID0gISFUZXN0VXRpbHMuU2ltdWxhdGUudG91Y2hTdGFydDsgLy8gMTYuNCtcbmNvbnN0IGlzMTY1ID0gISFUZXN0VXRpbHMuU2ltdWxhdGUuYXV4Q2xpY2s7IC8vIDE2LjUrXG5jb25zdCBpczE2NiA9IGlzMTY1ICYmICFSZWFjdC51bnN0YWJsZV9Bc3luY01vZGU7IC8vIDE2LjYrXG5jb25zdCBpczE2OCA9IGlzMTY2ICYmIHR5cGVvZiBUZXN0VXRpbHMuYWN0ID09PSAnZnVuY3Rpb24nO1xuXG5jb25zdCBoYXNTaG91bGRDb21wb25lbnRVcGRhdGVCdWcgPSBzZW12ZXIuc2F0aXNmaWVzKHRlc3RSZW5kZXJlclZlcnNpb24sICc8IDE2LjgnKTtcblxuLy8gTGF6aWx5IHBvcHVsYXRlZCBpZiBET00gaXMgYXZhaWxhYmxlLlxubGV0IEZpYmVyVGFncyA9IG51bGw7XG5cbmZ1bmN0aW9uIG5vZGVBbmRTaWJsaW5nc0FycmF5KG5vZGVXaXRoU2libGluZykge1xuICBjb25zdCBhcnJheSA9IFtdO1xuICBsZXQgbm9kZSA9IG5vZGVXaXRoU2libGluZztcbiAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgIGFycmF5LnB1c2gobm9kZSk7XG4gICAgbm9kZSA9IG5vZGUuc2libGluZztcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4oYXJyKSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBjb25zdCBzdGFjayA9IFt7IGk6IDAsIGFycmF5OiBhcnIgfV07XG4gIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICBjb25zdCBuID0gc3RhY2sucG9wKCk7XG4gICAgd2hpbGUgKG4uaSA8IG4uYXJyYXkubGVuZ3RoKSB7XG4gICAgICBjb25zdCBlbCA9IG4uYXJyYXlbbi5pXTtcbiAgICAgIG4uaSArPSAxO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZWwpKSB7XG4gICAgICAgIHN0YWNrLnB1c2gobik7XG4gICAgICAgIHN0YWNrLnB1c2goeyBpOiAwLCBhcnJheTogZWwgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goZWwpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBub2RlVHlwZUZyb21UeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09IFBvcnRhbCkge1xuICAgIHJldHVybiAncG9ydGFsJztcbiAgfVxuXG4gIHJldHVybiB1dGlsTm9kZVR5cGVGcm9tVHlwZSh0eXBlKTtcbn1cblxuZnVuY3Rpb24gaXNNZW1vKHR5cGUpIHtcbiAgcmV0dXJuIGNvbXBhcmVOb2RlVHlwZU9mKHR5cGUsIE1lbW8pO1xufVxuXG5mdW5jdGlvbiBpc0xhenkodHlwZSkge1xuICByZXR1cm4gY29tcGFyZU5vZGVUeXBlT2YodHlwZSwgTGF6eSk7XG59XG5cbmZ1bmN0aW9uIHVubWVtb1R5cGUodHlwZSkge1xuICByZXR1cm4gaXNNZW1vKHR5cGUpID8gdHlwZS50eXBlIDogdHlwZTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU3VzcGVuc2UocmVuZGVyZWRFbCwgcHJlcmVuZGVyRWwsIHsgc3VzcGVuc2VGYWxsYmFjayB9KSB7XG4gIGlmICghaXNTdXNwZW5zZShyZW5kZXJlZEVsKSkge1xuICAgIHJldHVybiByZW5kZXJlZEVsO1xuICB9XG5cbiAgbGV0IHsgY2hpbGRyZW4gfSA9IHJlbmRlcmVkRWwucHJvcHM7XG5cbiAgaWYgKHN1c3BlbnNlRmFsbGJhY2spIHtcbiAgICBjb25zdCB7IGZhbGxiYWNrIH0gPSByZW5kZXJlZEVsLnByb3BzO1xuICAgIGNoaWxkcmVuID0gcmVwbGFjZUxhenlXaXRoRmFsbGJhY2soY2hpbGRyZW4sIGZhbGxiYWNrKTtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBwcm9wVHlwZXMsXG4gICAgZGVmYXVsdFByb3BzLFxuICAgIGNvbnRleHRUeXBlcyxcbiAgICBjb250ZXh0VHlwZSxcbiAgICBjaGlsZENvbnRleHRUeXBlcyxcbiAgfSA9IHJlbmRlcmVkRWwudHlwZTtcblxuICBjb25zdCBGYWtlU3VzcGVuc2UgPSBPYmplY3QuYXNzaWduKFxuICAgIGlzU3RhdGVmdWwocHJlcmVuZGVyRWwudHlwZSlcbiAgICAgID8gY2xhc3MgRmFrZVN1c3BlbnNlIGV4dGVuZHMgcHJlcmVuZGVyRWwudHlwZSB7XG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICBjb25zdCB7IHR5cGUsIHByb3BzIH0gPSBwcmVyZW5kZXJFbDtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICB7IC4uLnByb3BzLCAuLi50aGlzLnByb3BzIH0sXG4gICAgICAgICAgICBjaGlsZHJlbixcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICA6IGZ1bmN0aW9uIEZha2VTdXNwZW5zZShwcm9wcykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1hcnJvdy1jYWxsYmFja1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICByZW5kZXJlZEVsLnR5cGUsXG4gICAgICAgICAgeyAuLi5yZW5kZXJlZEVsLnByb3BzLCAuLi5wcm9wcyB9LFxuICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB7XG4gICAgICBwcm9wVHlwZXMsXG4gICAgICBkZWZhdWx0UHJvcHMsXG4gICAgICBjb250ZXh0VHlwZXMsXG4gICAgICBjb250ZXh0VHlwZSxcbiAgICAgIGNoaWxkQ29udGV4dFR5cGVzLFxuICAgIH0sXG4gICk7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEZha2VTdXNwZW5zZSwgbnVsbCwgY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBlbGVtZW50VG9UcmVlKGVsKSB7XG4gIGlmICghaXNQb3J0YWwoZWwpKSB7XG4gICAgcmV0dXJuIHV0aWxFbGVtZW50VG9UcmVlKGVsLCBlbGVtZW50VG9UcmVlKTtcbiAgfVxuXG4gIGNvbnN0IHsgY2hpbGRyZW4sIGNvbnRhaW5lckluZm8gfSA9IGVsO1xuICBjb25zdCBwcm9wcyA9IHsgY2hpbGRyZW4sIGNvbnRhaW5lckluZm8gfTtcblxuICByZXR1cm4ge1xuICAgIG5vZGVUeXBlOiAncG9ydGFsJyxcbiAgICB0eXBlOiBQb3J0YWwsXG4gICAgcHJvcHMsXG4gICAga2V5OiBlbnN1cmVLZXlPclVuZGVmaW5lZChlbC5rZXkpLFxuICAgIHJlZjogZWwucmVmIHx8IG51bGwsXG4gICAgaW5zdGFuY2U6IG51bGwsXG4gICAgcmVuZGVyZWQ6IGVsZW1lbnRUb1RyZWUoZWwuY2hpbGRyZW4pLFxuICB9O1xufVxuXG5mdW5jdGlvbiB0b1RyZWUodm5vZGUpIHtcbiAgaWYgKHZub2RlID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvLyBUT0RPKGxtcik6IEknbSBub3QgcmVhbGx5IHN1cmUgSSB1bmRlcnN0YW5kIHdoZXRoZXIgb3Igbm90IHRoaXMgaXMgd2hhdFxuICAvLyBpIHNob3VsZCBiZSBkb2luZywgb3IgaWYgdGhpcyBpcyBhIGhhY2sgZm9yIHNvbWV0aGluZyBpJ20gZG9pbmcgd3JvbmdcbiAgLy8gc29tZXdoZXJlIGVsc2UuIFNob3VsZCB0YWxrIHRvIHNlYmFzdGlhbiBhYm91dCB0aGlzIHBlcmhhcHNcbiAgY29uc3Qgbm9kZSA9IGZpbmRDdXJyZW50RmliZXJVc2luZ1Nsb3dQYXRoKHZub2RlKTtcbiAgc3dpdGNoIChub2RlLnRhZykge1xuICAgIGNhc2UgRmliZXJUYWdzLkhvc3RSb290OlxuICAgICAgcmV0dXJuIGNoaWxkcmVuVG9UcmVlKG5vZGUuY2hpbGQpO1xuICAgIGNhc2UgRmliZXJUYWdzLkhvc3RQb3J0YWw6IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc3RhdGVOb2RlOiB7IGNvbnRhaW5lckluZm8gfSxcbiAgICAgICAgbWVtb2l6ZWRQcm9wczogY2hpbGRyZW4sXG4gICAgICB9ID0gbm9kZTtcbiAgICAgIGNvbnN0IHByb3BzID0geyBjb250YWluZXJJbmZvLCBjaGlsZHJlbiB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZVR5cGU6ICdwb3J0YWwnLFxuICAgICAgICB0eXBlOiBQb3J0YWwsXG4gICAgICAgIHByb3BzLFxuICAgICAgICBrZXk6IGVuc3VyZUtleU9yVW5kZWZpbmVkKG5vZGUua2V5KSxcbiAgICAgICAgcmVmOiBub2RlLnJlZixcbiAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgICAgIHJlbmRlcmVkOiBjaGlsZHJlblRvVHJlZShub2RlLmNoaWxkKSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgRmliZXJUYWdzLkNsYXNzQ29tcG9uZW50OlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZVR5cGU6ICdjbGFzcycsXG4gICAgICAgIHR5cGU6IG5vZGUudHlwZSxcbiAgICAgICAgcHJvcHM6IHsgLi4ubm9kZS5tZW1vaXplZFByb3BzIH0sXG4gICAgICAgIGtleTogZW5zdXJlS2V5T3JVbmRlZmluZWQobm9kZS5rZXkpLFxuICAgICAgICByZWY6IG5vZGUucmVmLFxuICAgICAgICBpbnN0YW5jZTogbm9kZS5zdGF0ZU5vZGUsXG4gICAgICAgIHJlbmRlcmVkOiBjaGlsZHJlblRvVHJlZShub2RlLmNoaWxkKSxcbiAgICAgIH07XG4gICAgY2FzZSBGaWJlclRhZ3MuRnVuY3Rpb25hbENvbXBvbmVudDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGVUeXBlOiAnZnVuY3Rpb24nLFxuICAgICAgICB0eXBlOiBub2RlLnR5cGUsXG4gICAgICAgIHByb3BzOiB7IC4uLm5vZGUubWVtb2l6ZWRQcm9wcyB9LFxuICAgICAgICBrZXk6IGVuc3VyZUtleU9yVW5kZWZpbmVkKG5vZGUua2V5KSxcbiAgICAgICAgcmVmOiBub2RlLnJlZixcbiAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgICAgIHJlbmRlcmVkOiBjaGlsZHJlblRvVHJlZShub2RlLmNoaWxkKSxcbiAgICAgIH07XG4gICAgY2FzZSBGaWJlclRhZ3MuTWVtb0NsYXNzOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm9kZVR5cGU6ICdjbGFzcycsXG4gICAgICAgIHR5cGU6IG5vZGUuZWxlbWVudFR5cGUudHlwZSxcbiAgICAgICAgcHJvcHM6IHsgLi4ubm9kZS5tZW1vaXplZFByb3BzIH0sXG4gICAgICAgIGtleTogZW5zdXJlS2V5T3JVbmRlZmluZWQobm9kZS5rZXkpLFxuICAgICAgICByZWY6IG5vZGUucmVmLFxuICAgICAgICBpbnN0YW5jZTogbm9kZS5zdGF0ZU5vZGUsXG4gICAgICAgIHJlbmRlcmVkOiBjaGlsZHJlblRvVHJlZShub2RlLmNoaWxkLmNoaWxkKSxcbiAgICAgIH07XG4gICAgY2FzZSBGaWJlclRhZ3MuTWVtb1NGQzoge1xuICAgICAgbGV0IHJlbmRlcmVkTm9kZXMgPSBmbGF0dGVuKG5vZGVBbmRTaWJsaW5nc0FycmF5KG5vZGUuY2hpbGQpLm1hcCh0b1RyZWUpKTtcbiAgICAgIGlmIChyZW5kZXJlZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZW5kZXJlZE5vZGVzID0gW25vZGUubWVtb2l6ZWRQcm9wcy5jaGlsZHJlbl07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBub2RlVHlwZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgdHlwZTogbm9kZS5lbGVtZW50VHlwZSxcbiAgICAgICAgcHJvcHM6IHsgLi4ubm9kZS5tZW1vaXplZFByb3BzIH0sXG4gICAgICAgIGtleTogZW5zdXJlS2V5T3JVbmRlZmluZWQobm9kZS5rZXkpLFxuICAgICAgICByZWY6IG5vZGUucmVmLFxuICAgICAgICBpbnN0YW5jZTogbnVsbCxcbiAgICAgICAgcmVuZGVyZWQ6IHJlbmRlcmVkTm9kZXMsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIEZpYmVyVGFncy5Ib3N0Q29tcG9uZW50OiB7XG4gICAgICBsZXQgcmVuZGVyZWROb2RlcyA9IGZsYXR0ZW4obm9kZUFuZFNpYmxpbmdzQXJyYXkobm9kZS5jaGlsZCkubWFwKHRvVHJlZSkpO1xuICAgICAgaWYgKHJlbmRlcmVkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlbmRlcmVkTm9kZXMgPSBbbm9kZS5tZW1vaXplZFByb3BzLmNoaWxkcmVuXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vZGVUeXBlOiAnaG9zdCcsXG4gICAgICAgIHR5cGU6IG5vZGUudHlwZSxcbiAgICAgICAgcHJvcHM6IHsgLi4ubm9kZS5tZW1vaXplZFByb3BzIH0sXG4gICAgICAgIGtleTogZW5zdXJlS2V5T3JVbmRlZmluZWQobm9kZS5rZXkpLFxuICAgICAgICByZWY6IG5vZGUucmVmLFxuICAgICAgICBpbnN0YW5jZTogbm9kZS5zdGF0ZU5vZGUsXG4gICAgICAgIHJlbmRlcmVkOiByZW5kZXJlZE5vZGVzLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBGaWJlclRhZ3MuSG9zdFRleHQ6XG4gICAgICByZXR1cm4gbm9kZS5tZW1vaXplZFByb3BzO1xuICAgIGNhc2UgRmliZXJUYWdzLkZyYWdtZW50OlxuICAgIGNhc2UgRmliZXJUYWdzLk1vZGU6XG4gICAgY2FzZSBGaWJlclRhZ3MuQ29udGV4dFByb3ZpZGVyOlxuICAgIGNhc2UgRmliZXJUYWdzLkNvbnRleHRDb25zdW1lcjpcbiAgICAgIHJldHVybiBjaGlsZHJlblRvVHJlZShub2RlLmNoaWxkKTtcbiAgICBjYXNlIEZpYmVyVGFncy5Qcm9maWxlcjpcbiAgICBjYXNlIEZpYmVyVGFncy5Gb3J3YXJkUmVmOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBub2RlVHlwZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgdHlwZTogbm9kZS50eXBlLFxuICAgICAgICBwcm9wczogeyAuLi5ub2RlLnBlbmRpbmdQcm9wcyB9LFxuICAgICAgICBrZXk6IGVuc3VyZUtleU9yVW5kZWZpbmVkKG5vZGUua2V5KSxcbiAgICAgICAgcmVmOiBub2RlLnJlZixcbiAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgICAgIHJlbmRlcmVkOiBjaGlsZHJlblRvVHJlZShub2RlLmNoaWxkKSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgRmliZXJUYWdzLlN1c3BlbnNlOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBub2RlVHlwZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgdHlwZTogU3VzcGVuc2UsXG4gICAgICAgIHByb3BzOiB7IC4uLm5vZGUubWVtb2l6ZWRQcm9wcyB9LFxuICAgICAgICBrZXk6IGVuc3VyZUtleU9yVW5kZWZpbmVkKG5vZGUua2V5KSxcbiAgICAgICAgcmVmOiBub2RlLnJlZixcbiAgICAgICAgaW5zdGFuY2U6IG51bGwsXG4gICAgICAgIHJlbmRlcmVkOiBjaGlsZHJlblRvVHJlZShub2RlLmNoaWxkKSxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgRmliZXJUYWdzLkxhenk6XG4gICAgICByZXR1cm4gY2hpbGRyZW5Ub1RyZWUobm9kZS5jaGlsZCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihgRW56eW1lIEludGVybmFsIEVycm9yOiB1bmtub3duIG5vZGUgd2l0aCB0YWcgJHtub2RlLnRhZ31gKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGlsZHJlblRvVHJlZShub2RlKSB7XG4gIGlmICghbm9kZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGNoaWxkcmVuID0gbm9kZUFuZFNpYmxpbmdzQXJyYXkobm9kZSk7XG4gIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIHRvVHJlZShjaGlsZHJlblswXSk7XG4gIH1cbiAgcmV0dXJuIGZsYXR0ZW4oY2hpbGRyZW4ubWFwKHRvVHJlZSkpO1xufVxuXG5mdW5jdGlvbiBub2RlVG9Ib3N0Tm9kZShfbm9kZSkge1xuICAvLyBOT1RFKGxtcik6IG5vZGUgY291bGQgYmUgYSBmdW5jdGlvbiBjb21wb25lbnRcbiAgLy8gd2hpY2ggd29udCBoYXZlIGFuIGluc3RhbmNlIHByb3AsIGJ1dCB3ZSBjYW4gZ2V0IHRoZVxuICAvLyBob3N0IG5vZGUgYXNzb2NpYXRlZCB3aXRoIGl0cyByZXR1cm4gdmFsdWUgYXQgdGhhdCBwb2ludC5cbiAgLy8gQWx0aG91Z2ggdGhpcyBicmVha3MgZG93biBpZiB0aGUgcmV0dXJuIHZhbHVlIGlzIGFuIGFycmF5LFxuICAvLyBhcyBpcyBwb3NzaWJsZSB3aXRoIFJlYWN0IDE2LlxuICBsZXQgbm9kZSA9IF9ub2RlO1xuICB3aGlsZSAobm9kZSAmJiAhQXJyYXkuaXNBcnJheShub2RlKSAmJiBub2RlLmluc3RhbmNlID09PSBudWxsKSB7XG4gICAgbm9kZSA9IG5vZGUucmVuZGVyZWQ7XG4gIH1cbiAgLy8gaWYgdGhlIFNGQyByZXR1cm5lZCBudWxsIGVmZmVjdGl2ZWx5LCB0aGVyZSBpcyBubyBob3N0IG5vZGUuXG4gIGlmICghbm9kZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgbWFwcGVyID0gKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbSAmJiBpdGVtLmluc3RhbmNlKSByZXR1cm4gUmVhY3RET00uZmluZERPTU5vZGUoaXRlbS5pbnN0YW5jZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGUubWFwKG1hcHBlcik7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkobm9kZS5yZW5kZXJlZCkgJiYgbm9kZS5ub2RlVHlwZSA9PT0gJ2NsYXNzJykge1xuICAgIHJldHVybiBub2RlLnJlbmRlcmVkLm1hcChtYXBwZXIpO1xuICB9XG4gIHJldHVybiBtYXBwZXIobm9kZSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VMYXp5V2l0aEZhbGxiYWNrKG5vZGUsIGZhbGxiYWNrKSB7XG4gIGlmICghbm9kZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgcmV0dXJuIG5vZGUubWFwKChlbCkgPT4gcmVwbGFjZUxhenlXaXRoRmFsbGJhY2soZWwsIGZhbGxiYWNrKSk7XG4gIH1cbiAgaWYgKGlzTGF6eShub2RlLnR5cGUpKSB7XG4gICAgcmV0dXJuIGZhbGxiYWNrO1xuICB9XG4gIHJldHVybiB7XG4gICAgLi4ubm9kZSxcbiAgICBwcm9wczoge1xuICAgICAgLi4ubm9kZS5wcm9wcyxcbiAgICAgIGNoaWxkcmVuOiByZXBsYWNlTGF6eVdpdGhGYWxsYmFjayhub2RlLnByb3BzLmNoaWxkcmVuLCBmYWxsYmFjayksXG4gICAgfSxcbiAgfTtcbn1cblxuY29uc3QgZXZlbnRPcHRpb25zID0ge1xuICBhbmltYXRpb246IHRydWUsXG4gIHBvaW50ZXJFdmVudHM6IGlzMTY0LFxuICBhdXhDbGljazogaXMxNjUsXG59O1xuXG5mdW5jdGlvbiBnZXRFbXB0eVN0YXRlVmFsdWUoKSB7XG4gIC8vIHRoaXMgaGFuZGxlcyBhIGJ1ZyBpbiBSZWFjdCAxNi4wIC0gMTYuMlxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2NvbW1pdC8zOWJlODM1NjVjNjVmOWM1MjIxNTBlNTIzNzUxNjc1NjhhMmExNDU5XG4gIC8vIGFsc28gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzExOTY1XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3ByZWZlci1zdGF0ZWxlc3MtZnVuY3Rpb25cbiAgY2xhc3MgRW1wdHlTdGF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIGNvbnN0IHRlc3RSZW5kZXJlciA9IG5ldyBTaGFsbG93UmVuZGVyZXIoKTtcbiAgdGVzdFJlbmRlcmVyLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEVtcHR5U3RhdGUpKTtcbiAgcmV0dXJuIHRlc3RSZW5kZXJlci5faW5zdGFuY2Uuc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHdyYXBBY3QoZm4pIHtcbiAgaWYgKCFpczE2OCkge1xuICAgIHJldHVybiBmbigpO1xuICB9XG4gIGxldCByZXR1cm5WYWw7XG4gIFRlc3RVdGlscy5hY3QoKCkgPT4geyByZXR1cm5WYWwgPSBmbigpOyB9KTtcbiAgcmV0dXJuIHJldHVyblZhbDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvdmlkZXJEZWZhdWx0VmFsdWUoUHJvdmlkZXIpIHtcbiAgLy8gUmVhY3Qgc3RvcmVzIHJlZmVyZW5jZXMgdG8gdGhlIFByb3ZpZGVyJ3MgZGVmYXVsdFZhbHVlIGRpZmZlcmVudGx5IGFjcm9zcyB2ZXJzaW9ucy5cbiAgaWYgKCdfZGVmYXVsdFZhbHVlJyBpbiBQcm92aWRlci5fY29udGV4dCkge1xuICAgIHJldHVybiBQcm92aWRlci5fY29udGV4dC5fZGVmYXVsdFZhbHVlO1xuICB9XG4gIGlmICgnX2N1cnJlbnRWYWx1ZScgaW4gUHJvdmlkZXIuX2NvbnRleHQpIHtcbiAgICByZXR1cm4gUHJvdmlkZXIuX2NvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoJ0VuenltZSBJbnRlcm5hbCBFcnJvcjogY2Fu4oCZdCBmaWd1cmUgb3V0IGhvdyB0byBnZXQgUHJvdmlkZXLigJlzIGRlZmF1bHQgdmFsdWUnKTtcbn1cblxuZnVuY3Rpb24gbWFrZUZha2VFbGVtZW50KHR5cGUpIHtcbiAgcmV0dXJuIHsgJCR0eXBlb2Y6IEVsZW1lbnQsIHR5cGUgfTtcbn1cblxuZnVuY3Rpb24gaXNTdGF0ZWZ1bChDb21wb25lbnQpIHtcbiAgcmV0dXJuIENvbXBvbmVudC5wcm90b3R5cGUgJiYgKFxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudFxuICAgIHx8IEFycmF5LmlzQXJyYXkoQ29tcG9uZW50Ll9fcmVhY3RBdXRvQmluZFBhaXJzKSAvLyBmYWxsYmFjayBmb3IgY3JlYXRlQ2xhc3MgY29tcG9uZW50c1xuICApO1xufVxuXG5jbGFzcyBSZWFjdFNpeHRlZW5BZGFwdGVyIGV4dGVuZHMgRW56eW1lQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgY29uc3QgeyBsaWZlY3ljbGVzIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgLi4udGhpcy5vcHRpb25zLFxuICAgICAgZW5hYmxlQ29tcG9uZW50RGlkVXBkYXRlT25TZXRTdGF0ZTogdHJ1ZSwgLy8gVE9ETzogcmVtb3ZlLCBzZW12ZXItbWFqb3JcbiAgICAgIGxlZ2FjeUNvbnRleHRNb2RlOiAncGFyZW50JyxcbiAgICAgIGxpZmVjeWNsZXM6IHtcbiAgICAgICAgLi4ubGlmZWN5Y2xlcyxcbiAgICAgICAgY29tcG9uZW50RGlkVXBkYXRlOiB7XG4gICAgICAgICAgb25TZXRTdGF0ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB7XG4gICAgICAgICAgaGFzU2hvdWxkQ29tcG9uZW50VXBkYXRlQnVnLFxuICAgICAgICB9LFxuICAgICAgICBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZTogdHJ1ZSxcbiAgICAgICAgc2V0U3RhdGU6IHtcbiAgICAgICAgICBza2lwc0NvbXBvbmVudERpZFVwZGF0ZU9uTnVsbGlzaDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q2hpbGRDb250ZXh0OiB7XG4gICAgICAgICAgY2FsbGVkQnlSZW5kZXJlcjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogaXMxNjYsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjcmVhdGVNb3VudFJlbmRlcmVyKG9wdGlvbnMpIHtcbiAgICBhc3NlcnREb21BdmFpbGFibGUoJ21vdW50Jyk7XG4gICAgaWYgKGhhcyhvcHRpb25zLCAnc3VzcGVuc2VGYWxsYmFjaycpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdgc3VzcGVuc2VGYWxsYmFja2AgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYG1vdW50YCByZW5kZXJlcicpO1xuICAgIH1cbiAgICBpZiAoRmliZXJUYWdzID09PSBudWxsKSB7XG4gICAgICAvLyBSZXF1aXJlcyBET00uXG4gICAgICBGaWJlclRhZ3MgPSBkZXRlY3RGaWJlclRhZ3MoKTtcbiAgICB9XG4gICAgY29uc3QgeyBhdHRhY2hUbywgaHlkcmF0ZUluLCB3cmFwcGluZ0NvbXBvbmVudFByb3BzIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IGRvbU5vZGUgPSBoeWRyYXRlSW4gfHwgYXR0YWNoVG8gfHwgZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBpbnN0YW5jZSA9IG51bGw7XG4gICAgY29uc3QgYWRhcHRlciA9IHRoaXM7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbmRlcihlbCwgY29udGV4dCwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHdyYXBBY3QoKCkgPT4ge1xuICAgICAgICAgIGlmIChpbnN0YW5jZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgeyB0eXBlLCBwcm9wcywgcmVmIH0gPSBlbDtcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXJQcm9wcyA9IHtcbiAgICAgICAgICAgICAgQ29tcG9uZW50OiB0eXBlLFxuICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgd3JhcHBpbmdDb21wb25lbnRQcm9wcyxcbiAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgLi4uKHJlZiAmJiB7IHJlZlByb3A6IHJlZiB9KSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBSZWFjdFdyYXBwZXJDb21wb25lbnQgPSBjcmVhdGVNb3VudFdyYXBwZXIoZWwsIHsgLi4ub3B0aW9ucywgYWRhcHRlciB9KTtcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZWRFbCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RXcmFwcGVyQ29tcG9uZW50LCB3cmFwcGVyUHJvcHMpO1xuICAgICAgICAgICAgaW5zdGFuY2UgPSBoeWRyYXRlSW5cbiAgICAgICAgICAgICAgPyBSZWFjdERPTS5oeWRyYXRlKHdyYXBwZWRFbCwgZG9tTm9kZSlcbiAgICAgICAgICAgICAgOiBSZWFjdERPTS5yZW5kZXIod3JhcHBlZEVsLCBkb21Ob2RlKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5zdGFuY2Uuc2V0Q2hpbGRQcm9wcyhlbC5wcm9wcywgY29udGV4dCwgY2FsbGJhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgdW5tb3VudCgpIHtcbiAgICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShkb21Ob2RlKTtcbiAgICAgICAgaW5zdGFuY2UgPSBudWxsO1xuICAgICAgfSxcbiAgICAgIGdldE5vZGUoKSB7XG4gICAgICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2V0Tm9kZUZyb21Sb290RmluZGVyKFxuICAgICAgICAgIGFkYXB0ZXIuaXNDdXN0b21Db21wb25lbnQsXG4gICAgICAgICAgdG9UcmVlKGluc3RhbmNlLl9yZWFjdEludGVybmFsRmliZXIpLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgc2ltdWxhdGVFcnJvcihub2RlSGllcmFyY2h5LCByb290Tm9kZSwgZXJyb3IpIHtcbiAgICAgICAgY29uc3QgaXNFcnJvckJvdW5kYXJ5ID0gKHsgaW5zdGFuY2U6IGVsSW5zdGFuY2UsIHR5cGUgfSkgPT4ge1xuICAgICAgICAgIGlmIChpczE2NiAmJiB0eXBlICYmIHR5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGVsSW5zdGFuY2UgJiYgZWxJbnN0YW5jZS5jb21wb25lbnREaWRDYXRjaDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgaW5zdGFuY2U6IGNhdGNoaW5nSW5zdGFuY2UsXG4gICAgICAgICAgdHlwZTogY2F0Y2hpbmdUeXBlLFxuICAgICAgICB9ID0gbm9kZUhpZXJhcmNoeS5maW5kKGlzRXJyb3JCb3VuZGFyeSkgfHwge307XG5cbiAgICAgICAgc2ltdWxhdGVFcnJvcihcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgICBjYXRjaGluZ0luc3RhbmNlLFxuICAgICAgICAgIHJvb3ROb2RlLFxuICAgICAgICAgIG5vZGVIaWVyYXJjaHksXG4gICAgICAgICAgbm9kZVR5cGVGcm9tVHlwZSxcbiAgICAgICAgICBhZGFwdGVyLmRpc3BsYXlOYW1lT2ZOb2RlLFxuICAgICAgICAgIGlzMTY2ID8gY2F0Y2hpbmdUeXBlIDogdW5kZWZpbmVkLFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHNpbXVsYXRlRXZlbnQobm9kZSwgZXZlbnQsIG1vY2spIHtcbiAgICAgICAgY29uc3QgbWFwcGVkRXZlbnQgPSBtYXBOYXRpdmVFdmVudE5hbWVzKGV2ZW50LCBldmVudE9wdGlvbnMpO1xuICAgICAgICBjb25zdCBldmVudEZuID0gVGVzdFV0aWxzLlNpbXVsYXRlW21hcHBlZEV2ZW50XTtcbiAgICAgICAgaWYgKCFldmVudEZuKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgUmVhY3RXcmFwcGVyOjpzaW11bGF0ZSgpIGV2ZW50ICcke2V2ZW50fScgZG9lcyBub3QgZXhpc3RgKTtcbiAgICAgICAgfVxuICAgICAgICB3cmFwQWN0KCgpID0+IHtcbiAgICAgICAgICBldmVudEZuKGFkYXB0ZXIubm9kZVRvSG9zdE5vZGUobm9kZSksIG1vY2spO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBiYXRjaGVkVXBkYXRlcyhmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgICAgLy8gcmV0dXJuIFJlYWN0RE9NLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzKGZuKTtcbiAgICAgIH0sXG4gICAgICBnZXRXcmFwcGluZ0NvbXBvbmVudFJlbmRlcmVyKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnRoaXMsXG4gICAgICAgICAgLi4uZ2V0V3JhcHBpbmdDb21wb25lbnRNb3VudFJlbmRlcmVyKHtcbiAgICAgICAgICAgIHRvVHJlZTogKGluc3QpID0+IHRvVHJlZShpbnN0Ll9yZWFjdEludGVybmFsRmliZXIpLFxuICAgICAgICAgICAgZ2V0TW91bnRXcmFwcGVySW5zdGFuY2U6ICgpID0+IGluc3RhbmNlLFxuICAgICAgICAgIH0pLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIC4uLihpczE2OCAmJiB7IHdyYXBJbnZva2U6IHdyYXBBY3QgfSksXG4gICAgfTtcbiAgfVxuXG4gIGNyZWF0ZVNoYWxsb3dSZW5kZXJlcihvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBhZGFwdGVyID0gdGhpcztcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBTaGFsbG93UmVuZGVyZXIoKTtcbiAgICBjb25zdCB7IHN1c3BlbnNlRmFsbGJhY2sgfSA9IG9wdGlvbnM7XG4gICAgaWYgKHR5cGVvZiBzdXNwZW5zZUZhbGxiYWNrICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygc3VzcGVuc2VGYWxsYmFjayAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ2BvcHRpb25zLnN1c3BlbnNlRmFsbGJhY2tgIHNob3VsZCBiZSBib29sZWFuIG9yIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICBsZXQgaXNET00gPSBmYWxzZTtcbiAgICBsZXQgY2FjaGVkTm9kZSA9IG51bGw7XG5cbiAgICBsZXQgbGFzdENvbXBvbmVudCA9IG51bGw7XG4gICAgbGV0IHdyYXBwZWRDb21wb25lbnQgPSBudWxsO1xuICAgIGNvbnN0IHNlbnRpbmVsID0ge307XG5cbiAgICAvLyB3cmFwIG1lbW8gY29tcG9uZW50cyB3aXRoIGEgUHVyZUNvbXBvbmVudCwgb3IgYSBjbGFzcyBjb21wb25lbnQgd2l0aCBzQ1VcbiAgICBjb25zdCB3cmFwUHVyZUNvbXBvbmVudCA9IChDb21wb25lbnQsIGNvbXBhcmUpID0+IHtcbiAgICAgIGlmICghaXMxNjYpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RoaXMgZnVuY3Rpb24gc2hvdWxkIG5vdCBiZSBjYWxsZWQgaW4gUmVhY3QgPCAxNi42LiBQbGVhc2UgcmVwb3J0IHRoaXMhJyk7XG4gICAgICB9XG4gICAgICBpZiAobGFzdENvbXBvbmVudCAhPT0gQ29tcG9uZW50KSB7XG4gICAgICAgIGlmIChpc1N0YXRlZnVsKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB3cmFwcGVkQ29tcG9uZW50ID0gY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge307IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvcHJlZmVyLXN0YXRlbGVzcy1mdW5jdGlvblxuICAgICAgICAgIGlmIChjb21wYXJlKSB7XG4gICAgICAgICAgICB3cmFwcGVkQ29tcG9uZW50LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSAobmV4dFByb3BzKSA9PiAhY29tcGFyZSh0aGlzLnByb3BzLCBuZXh0UHJvcHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3cmFwcGVkQ29tcG9uZW50LnByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBtZW1vaXplZCA9IHNlbnRpbmVsO1xuICAgICAgICAgIGxldCBwcmV2UHJvcHM7XG4gICAgICAgICAgd3JhcHBlZENvbXBvbmVudCA9IGZ1bmN0aW9uIChwcm9wcywgLi4uYXJncykge1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkVXBkYXRlID0gbWVtb2l6ZWQgPT09IHNlbnRpbmVsIHx8IChjb21wYXJlXG4gICAgICAgICAgICAgID8gIWNvbXBhcmUocHJldlByb3BzLCBwcm9wcylcbiAgICAgICAgICAgICAgOiAhc2hhbGxvd0VxdWFsKHByZXZQcm9wcywgcHJvcHMpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgICBtZW1vaXplZCA9IENvbXBvbmVudCh7IC4uLkNvbXBvbmVudC5kZWZhdWx0UHJvcHMsIC4uLnByb3BzIH0sIC4uLmFyZ3MpO1xuICAgICAgICAgICAgICBwcmV2UHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZW1vaXplZDtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgd3JhcHBlZENvbXBvbmVudCxcbiAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgeyBkaXNwbGF5TmFtZTogYWRhcHRlci5kaXNwbGF5TmFtZU9mTm9kZSh7IHR5cGU6IENvbXBvbmVudCB9KSB9LFxuICAgICAgICApO1xuICAgICAgICBsYXN0Q29tcG9uZW50ID0gQ29tcG9uZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdyYXBwZWRDb21wb25lbnQ7XG4gICAgfTtcblxuICAgIC8vIFdyYXAgZnVuY3Rpb25hbCBjb21wb25lbnRzIG9uIHZlcnNpb25zIHByaW9yIHRvIDE2LjUsXG4gICAgLy8gdG8gYXZvaWQgaW5hZHZlcnRlbnRseSBwYXNzIGEgYHRoaXNgIGluc3RhbmNlIHRvIGl0LlxuICAgIGNvbnN0IHdyYXBGdW5jdGlvbmFsQ29tcG9uZW50ID0gKENvbXBvbmVudCkgPT4ge1xuICAgICAgaWYgKGlzMTY2ICYmIGhhcyhDb21wb25lbnQsICdkZWZhdWx0UHJvcHMnKSkge1xuICAgICAgICBpZiAobGFzdENvbXBvbmVudCAhPT0gQ29tcG9uZW50KSB7XG4gICAgICAgICAgd3JhcHBlZENvbXBvbmVudCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbmV3LWNhcFxuICAgICAgICAgICAgKHByb3BzLCAuLi5hcmdzKSA9PiBDb21wb25lbnQoeyAuLi5Db21wb25lbnQuZGVmYXVsdFByb3BzLCAuLi5wcm9wcyB9LCAuLi5hcmdzKSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHsgZGlzcGxheU5hbWU6IGFkYXB0ZXIuZGlzcGxheU5hbWVPZk5vZGUoeyB0eXBlOiBDb21wb25lbnQgfSkgfSxcbiAgICAgICAgICApO1xuICAgICAgICAgIGxhc3RDb21wb25lbnQgPSBDb21wb25lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHdyYXBwZWRDb21wb25lbnQ7XG4gICAgICB9XG4gICAgICBpZiAoaXMxNjUpIHtcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudDtcbiAgICAgIH1cblxuICAgICAgaWYgKGxhc3RDb21wb25lbnQgIT09IENvbXBvbmVudCkge1xuICAgICAgICB3cmFwcGVkQ29tcG9uZW50ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAoLi4uYXJncykgPT4gQ29tcG9uZW50KC4uLmFyZ3MpLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbiAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICk7XG4gICAgICAgIGxhc3RDb21wb25lbnQgPSBDb21wb25lbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gd3JhcHBlZENvbXBvbmVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVuZGVyRWxlbWVudCA9IChlbENvbmZpZywgLi4ucmVzdCkgPT4ge1xuICAgICAgY29uc3QgcmVuZGVyZWRFbCA9IHJlbmRlcmVyLnJlbmRlcihlbENvbmZpZywgLi4ucmVzdCk7XG5cbiAgICAgIGNvbnN0IHR5cGVJc0V4aXN0ZWQgPSAhIShyZW5kZXJlZEVsICYmIHJlbmRlcmVkRWwudHlwZSk7XG4gICAgICBpZiAoaXMxNjYgJiYgdHlwZUlzRXhpc3RlZCkge1xuICAgICAgICBjb25zdCBjbG9uZWRFbCA9IHRyYW5zZm9ybVN1c3BlbnNlKHJlbmRlcmVkRWwsIGVsQ29uZmlnLCB7IHN1c3BlbnNlRmFsbGJhY2sgfSk7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudElzQ2hhbmdlZCA9IGNsb25lZEVsLnR5cGUgIT09IHJlbmRlcmVkRWwudHlwZTtcbiAgICAgICAgaWYgKGVsZW1lbnRJc0NoYW5nZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVuZGVyZXIucmVuZGVyKHsgLi4uZWxDb25maWcsIHR5cGU6IGNsb25lZEVsLnR5cGUgfSwgLi4ucmVzdCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlbmRlcmVkRWw7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICByZW5kZXIoZWwsIHVubWFza2VkQ29udGV4dCwge1xuICAgICAgICBwcm92aWRlclZhbHVlcyA9IG5ldyBNYXAoKSxcbiAgICAgIH0gPSB7fSkge1xuICAgICAgICBjYWNoZWROb2RlID0gZWw7XG4gICAgICAgIC8qIGVzbGludCBjb25zaXN0ZW50LXJldHVybjogMCAqL1xuICAgICAgICBpZiAodHlwZW9mIGVsLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaXNET00gPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQ29udGV4dFByb3ZpZGVyKGVsKSkge1xuICAgICAgICAgIHByb3ZpZGVyVmFsdWVzLnNldChlbC50eXBlLCBlbC5wcm9wcy52YWx1ZSk7XG4gICAgICAgICAgY29uc3QgTW9ja1Byb3ZpZGVyID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIChwcm9wcykgPT4gcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICBlbC50eXBlLFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIHdpdGhTZXRTdGF0ZUFsbG93ZWQoKCkgPT4gcmVuZGVyRWxlbWVudCh7IC4uLmVsLCB0eXBlOiBNb2NrUHJvdmlkZXIgfSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQ29udGV4dENvbnN1bWVyKGVsKSkge1xuICAgICAgICAgIGNvbnN0IFByb3ZpZGVyID0gYWRhcHRlci5nZXRQcm92aWRlckZyb21Db25zdW1lcihlbC50eXBlKTtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3ZpZGVyVmFsdWVzLmhhcyhQcm92aWRlcilcbiAgICAgICAgICAgID8gcHJvdmlkZXJWYWx1ZXMuZ2V0KFByb3ZpZGVyKVxuICAgICAgICAgICAgOiBnZXRQcm92aWRlckRlZmF1bHRWYWx1ZShQcm92aWRlcik7XG4gICAgICAgICAgY29uc3QgTW9ja0NvbnN1bWVyID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIChwcm9wcykgPT4gcHJvcHMuY2hpbGRyZW4odmFsdWUpLFxuICAgICAgICAgICAgZWwudHlwZSxcbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiB3aXRoU2V0U3RhdGVBbGxvd2VkKCgpID0+IHJlbmRlckVsZW1lbnQoeyAuLi5lbCwgdHlwZTogTW9ja0NvbnN1bWVyIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc0RPTSA9IGZhbHNlO1xuICAgICAgICAgIGxldCByZW5kZXJlZEVsID0gZWw7XG4gICAgICAgICAgaWYgKGlzTGF6eShyZW5kZXJlZEVsKSkge1xuICAgICAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdgUmVhY3QubGF6eWAgaXMgbm90IHN1cHBvcnRlZCBieSBzaGFsbG93IHJlbmRlcmluZy4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZW5kZXJlZEVsID0gdHJhbnNmb3JtU3VzcGVuc2UocmVuZGVyZWRFbCwgcmVuZGVyZWRFbCwgeyBzdXNwZW5zZUZhbGxiYWNrIH0pO1xuICAgICAgICAgIGNvbnN0IHsgdHlwZTogQ29tcG9uZW50IH0gPSByZW5kZXJlZEVsO1xuXG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IGdldE1hc2tlZENvbnRleHQoQ29tcG9uZW50LmNvbnRleHRUeXBlcywgdW5tYXNrZWRDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChpc01lbW8oZWwudHlwZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgdHlwZTogSW5uZXJDb21wLCBjb21wYXJlIH0gPSBlbC50eXBlO1xuXG4gICAgICAgICAgICByZXR1cm4gd2l0aFNldFN0YXRlQWxsb3dlZCgoKSA9PiByZW5kZXJFbGVtZW50KFxuICAgICAgICAgICAgICB7IC4uLmVsLCB0eXBlOiB3cmFwUHVyZUNvbXBvbmVudChJbm5lckNvbXAsIGNvbXBhcmUpIH0sXG4gICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICApKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWlzU3RhdGVmdWwoQ29tcG9uZW50KSAmJiB0eXBlb2YgQ29tcG9uZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aFNldFN0YXRlQWxsb3dlZCgoKSA9PiByZW5kZXJFbGVtZW50KFxuICAgICAgICAgICAgICB7IC4uLnJlbmRlcmVkRWwsIHR5cGU6IHdyYXBGdW5jdGlvbmFsQ29tcG9uZW50KENvbXBvbmVudCkgfSxcbiAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc1N0YXRlZnVsKSB7XG4gICAgICAgICAgICAvLyBmaXggcmVhY3QgYnVnOyBzZWUgaW1wbGVtZW50YXRpb24gb2YgYGdldEVtcHR5U3RhdGVWYWx1ZWBcbiAgICAgICAgICAgIGNvbnN0IGVtcHR5U3RhdGVWYWx1ZSA9IGdldEVtcHR5U3RhdGVWYWx1ZSgpO1xuICAgICAgICAgICAgaWYgKGVtcHR5U3RhdGVWYWx1ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgJ3N0YXRlJywge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IGVtcHR5U3RhdGVWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3N0YXRlJywge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gd2l0aFNldFN0YXRlQWxsb3dlZCgoKSA9PiByZW5kZXJFbGVtZW50KHJlbmRlcmVkRWwsIGNvbnRleHQpKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHVubW91bnQoKSB7XG4gICAgICAgIHJlbmRlcmVyLnVubW91bnQoKTtcbiAgICAgIH0sXG4gICAgICBnZXROb2RlKCkge1xuICAgICAgICBpZiAoaXNET00pIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudFRvVHJlZShjYWNoZWROb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvdXRwdXQgPSByZW5kZXJlci5nZXRSZW5kZXJPdXRwdXQoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBub2RlVHlwZTogbm9kZVR5cGVGcm9tVHlwZShjYWNoZWROb2RlLnR5cGUpLFxuICAgICAgICAgIHR5cGU6IGNhY2hlZE5vZGUudHlwZSxcbiAgICAgICAgICBwcm9wczogY2FjaGVkTm9kZS5wcm9wcyxcbiAgICAgICAgICBrZXk6IGVuc3VyZUtleU9yVW5kZWZpbmVkKGNhY2hlZE5vZGUua2V5KSxcbiAgICAgICAgICByZWY6IGNhY2hlZE5vZGUucmVmLFxuICAgICAgICAgIGluc3RhbmNlOiByZW5kZXJlci5faW5zdGFuY2UsXG4gICAgICAgICAgcmVuZGVyZWQ6IEFycmF5LmlzQXJyYXkob3V0cHV0KVxuICAgICAgICAgICAgPyBmbGF0dGVuKG91dHB1dCkubWFwKChlbCkgPT4gZWxlbWVudFRvVHJlZShlbCkpXG4gICAgICAgICAgICA6IGVsZW1lbnRUb1RyZWUob3V0cHV0KSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBzaW11bGF0ZUVycm9yKG5vZGVIaWVyYXJjaHksIHJvb3ROb2RlLCBlcnJvcikge1xuICAgICAgICBzaW11bGF0ZUVycm9yKFxuICAgICAgICAgIGVycm9yLFxuICAgICAgICAgIHJlbmRlcmVyLl9pbnN0YW5jZSxcbiAgICAgICAgICBjYWNoZWROb2RlLFxuICAgICAgICAgIG5vZGVIaWVyYXJjaHkuY29uY2F0KGNhY2hlZE5vZGUpLFxuICAgICAgICAgIG5vZGVUeXBlRnJvbVR5cGUsXG4gICAgICAgICAgYWRhcHRlci5kaXNwbGF5TmFtZU9mTm9kZSxcbiAgICAgICAgICBpczE2NiA/IGNhY2hlZE5vZGUudHlwZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBzaW11bGF0ZUV2ZW50KG5vZGUsIGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBub2RlLnByb3BzW3Byb3BGcm9tRXZlbnQoZXZlbnQsIGV2ZW50T3B0aW9ucyldO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIHdpdGhTZXRTdGF0ZUFsbG93ZWQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gVE9ETyhsbXIpOiBjcmVhdGUvdXNlIHN5bnRoZXRpYyBldmVudHNcbiAgICAgICAgICAgIC8vIFRPRE8obG1yKTogZW11bGF0ZSBSZWFjdCdzIGV2ZW50IHByb3BhZ2F0aW9uXG4gICAgICAgICAgICAvLyBSZWFjdERPTS51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcygoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVyKC4uLmFyZ3MpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBiYXRjaGVkVXBkYXRlcyhmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICAgICAgLy8gcmV0dXJuIFJlYWN0RE9NLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzKGZuKTtcbiAgICAgIH0sXG4gICAgICBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGhpZXJhcmNoeSkge1xuICAgICAgICByZXR1cm4gY2hlY2tQcm9wVHlwZXMoXG4gICAgICAgICAgdHlwZVNwZWNzLFxuICAgICAgICAgIHZhbHVlcyxcbiAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICBkaXNwbGF5TmFtZU9mTm9kZShjYWNoZWROb2RlKSxcbiAgICAgICAgICAoKSA9PiBnZXRDb21wb25lbnRTdGFjayhoaWVyYXJjaHkuY29uY2F0KFtjYWNoZWROb2RlXSkpLFxuICAgICAgICApO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY3JlYXRlU3RyaW5nUmVuZGVyZXIob3B0aW9ucykge1xuICAgIGlmIChoYXMob3B0aW9ucywgJ3N1c3BlbnNlRmFsbGJhY2snKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYHN1c3BlbnNlRmFsbGJhY2tgIHNob3VsZCBub3QgYmUgc3BlY2lmaWVkIGluIG9wdGlvbnMgb2Ygc3RyaW5nIHJlbmRlcmVyJyk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICByZW5kZXIoZWwsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuY29udGV4dCAmJiAoZWwudHlwZS5jb250ZXh0VHlwZXMgfHwgb3B0aW9ucy5jaGlsZENvbnRleHRUeXBlcykpIHtcbiAgICAgICAgICBjb25zdCBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICAgICAgICAgIC4uLihlbC50eXBlLmNvbnRleHRUeXBlcyB8fCB7fSksXG4gICAgICAgICAgICAuLi5vcHRpb25zLmNoaWxkQ29udGV4dFR5cGVzLFxuICAgICAgICAgIH07XG4gICAgICAgICAgY29uc3QgQ29udGV4dFdyYXBwZXIgPSBjcmVhdGVSZW5kZXJXcmFwcGVyKGVsLCBjb250ZXh0LCBjaGlsZENvbnRleHRUeXBlcyk7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dFdyYXBwZXIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoZWwpO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLy8gUHJvdmlkZWQgYSBiYWcgb2Ygb3B0aW9ucywgcmV0dXJuIGFuIGBFbnp5bWVSZW5kZXJlcmAuIFNvbWUgb3B0aW9ucyBjYW4gYmUgaW1wbGVtZW50YXRpb25cbiAgLy8gc3BlY2lmaWMsIGxpa2UgYGF0dGFjaGAgZXRjLiBmb3IgUmVhY3QsIGJ1dCBub3QgcGFydCBvZiB0aGlzIGludGVyZmFjZSBleHBsaWNpdGx5LlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICBjcmVhdGVSZW5kZXJlcihvcHRpb25zKSB7XG4gICAgc3dpdGNoIChvcHRpb25zLm1vZGUpIHtcbiAgICAgIGNhc2UgRW56eW1lQWRhcHRlci5NT0RFUy5NT1VOVDogcmV0dXJuIHRoaXMuY3JlYXRlTW91bnRSZW5kZXJlcihvcHRpb25zKTtcbiAgICAgIGNhc2UgRW56eW1lQWRhcHRlci5NT0RFUy5TSEFMTE9XOiByZXR1cm4gdGhpcy5jcmVhdGVTaGFsbG93UmVuZGVyZXIob3B0aW9ucyk7XG4gICAgICBjYXNlIEVuenltZUFkYXB0ZXIuTU9ERVMuU1RSSU5HOiByZXR1cm4gdGhpcy5jcmVhdGVTdHJpbmdSZW5kZXJlcihvcHRpb25zKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRW56eW1lIEludGVybmFsIEVycm9yOiBVbnJlY29nbml6ZWQgbW9kZTogJHtvcHRpb25zLm1vZGV9YCk7XG4gICAgfVxuICB9XG5cbiAgd3JhcChlbGVtZW50KSB7XG4gICAgcmV0dXJuIHdyYXAoZWxlbWVudCk7XG4gIH1cblxuICAvLyBjb252ZXJ0cyBhbiBSU1ROb2RlIHRvIHRoZSBjb3JyZXNwb25kaW5nIEpTWCBQcmFnbWEgRWxlbWVudC4gVGhpcyB3aWxsIGJlIG5lZWRlZFxuICAvLyBpbiBvcmRlciB0byBpbXBsZW1lbnQgdGhlIGBXcmFwcGVyLm1vdW50KClgIGFuZCBgV3JhcHBlci5zaGFsbG93KClgIG1ldGhvZHMsIGJ1dCBzaG91bGRcbiAgLy8gYmUgcHJldHR5IHN0cmFpZ2h0Zm9yd2FyZCBmb3IgcGVvcGxlIHRvIGltcGxlbWVudC5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgbm9kZVRvRWxlbWVudChub2RlKSB7XG4gICAgaWYgKCFub2RlIHx8IHR5cGVvZiBub2RlICE9PSAnb2JqZWN0JykgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBub2RlO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHVubWVtb1R5cGUodHlwZSksIHByb3BzV2l0aEtleXNBbmRSZWYobm9kZSkpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgbWF0Y2hlc0VsZW1lbnRUeXBlKG5vZGUsIG1hdGNoaW5nVHlwZSkge1xuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIGNvbnN0IHsgdHlwZSB9ID0gbm9kZTtcbiAgICByZXR1cm4gdW5tZW1vVHlwZSh0eXBlKSA9PT0gdW5tZW1vVHlwZShtYXRjaGluZ1R5cGUpO1xuICB9XG5cbiAgZWxlbWVudFRvTm9kZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnRUb1RyZWUoZWxlbWVudCk7XG4gIH1cblxuICBub2RlVG9Ib3N0Tm9kZShub2RlLCBzdXBwb3J0c0FycmF5ID0gZmFsc2UpIHtcbiAgICBjb25zdCBub2RlcyA9IG5vZGVUb0hvc3ROb2RlKG5vZGUpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGVzKSAmJiAhc3VwcG9ydHNBcnJheSkge1xuICAgICAgcmV0dXJuIG5vZGVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBkaXNwbGF5TmFtZU9mTm9kZShub2RlKSB7XG4gICAgaWYgKCFub2RlKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCB7IHR5cGUsICQkdHlwZW9mIH0gPSBub2RlO1xuXG4gICAgY29uc3Qgbm9kZVR5cGUgPSB0eXBlIHx8ICQkdHlwZW9mO1xuXG4gICAgLy8gbmV3ZXIgbm9kZSB0eXBlcyBtYXkgYmUgdW5kZWZpbmVkLCBzbyBvbmx5IHRlc3QgaWYgdGhlIG5vZGVUeXBlIGV4aXN0c1xuICAgIGlmIChub2RlVHlwZSkge1xuICAgICAgc3dpdGNoIChub2RlVHlwZSkge1xuICAgICAgICBjYXNlIChpczE2NiA/IENvbmN1cnJlbnRNb2RlIDogQXN5bmNNb2RlKSB8fCBOYU46IHJldHVybiBpczE2NiA/ICdDb25jdXJyZW50TW9kZScgOiAnQXN5bmNNb2RlJztcbiAgICAgICAgY2FzZSBGcmFnbWVudCB8fCBOYU46IHJldHVybiAnRnJhZ21lbnQnO1xuICAgICAgICBjYXNlIFN0cmljdE1vZGUgfHwgTmFOOiByZXR1cm4gJ1N0cmljdE1vZGUnO1xuICAgICAgICBjYXNlIFByb2ZpbGVyIHx8IE5hTjogcmV0dXJuICdQcm9maWxlcic7XG4gICAgICAgIGNhc2UgUG9ydGFsIHx8IE5hTjogcmV0dXJuICdQb3J0YWwnO1xuICAgICAgICBjYXNlIFN1c3BlbnNlIHx8IE5hTjogcmV0dXJuICdTdXNwZW5zZSc7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgIGNhc2UgQ29udGV4dENvbnN1bWVyIHx8IE5hTjogcmV0dXJuICdDb250ZXh0Q29uc3VtZXInO1xuICAgICAgY2FzZSBDb250ZXh0UHJvdmlkZXIgfHwgTmFOOiByZXR1cm4gJ0NvbnRleHRQcm92aWRlcic7XG4gICAgICBjYXNlIE1lbW8gfHwgTmFOOiB7XG4gICAgICAgIGNvbnN0IG5vZGVOYW1lID0gZGlzcGxheU5hbWVPZk5vZGUobm9kZSk7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygbm9kZU5hbWUgPT09ICdzdHJpbmcnID8gbm9kZU5hbWUgOiBgTWVtbygke2Rpc3BsYXlOYW1lT2ZOb2RlKHR5cGUpfSlgO1xuICAgICAgfVxuICAgICAgY2FzZSBGb3J3YXJkUmVmIHx8IE5hTjoge1xuICAgICAgICBpZiAodHlwZS5kaXNwbGF5TmFtZSkge1xuICAgICAgICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkaXNwbGF5TmFtZU9mTm9kZSh7IHR5cGU6IHR5cGUucmVuZGVyIH0pO1xuICAgICAgICByZXR1cm4gbmFtZSA/IGBGb3J3YXJkUmVmKCR7bmFtZX0pYCA6ICdGb3J3YXJkUmVmJztcbiAgICAgIH1cbiAgICAgIGNhc2UgTGF6eSB8fCBOYU46IHtcbiAgICAgICAgcmV0dXJuICdsYXp5JztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHJldHVybiBkaXNwbGF5TmFtZU9mTm9kZShub2RlKTtcbiAgICB9XG4gIH1cblxuICBpc1ZhbGlkRWxlbWVudChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGlzRWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIGlzVmFsaWRFbGVtZW50VHlwZShvYmplY3QpIHtcbiAgICByZXR1cm4gISFvYmplY3QgJiYgaXNWYWxpZEVsZW1lbnRUeXBlKG9iamVjdCk7XG4gIH1cblxuICBpc0ZyYWdtZW50KGZyYWdtZW50KSB7XG4gICAgcmV0dXJuIHR5cGVPZk5vZGUoZnJhZ21lbnQpID09PSBGcmFnbWVudDtcbiAgfVxuXG4gIGlzQ3VzdG9tQ29tcG9uZW50KHR5cGUpIHtcbiAgICBjb25zdCBmYWtlRWxlbWVudCA9IG1ha2VGYWtlRWxlbWVudCh0eXBlKTtcbiAgICByZXR1cm4gISF0eXBlICYmIChcbiAgICAgIHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nXG4gICAgICB8fCBpc0ZvcndhcmRSZWYoZmFrZUVsZW1lbnQpXG4gICAgICB8fCBpc0NvbnRleHRQcm92aWRlcihmYWtlRWxlbWVudClcbiAgICAgIHx8IGlzQ29udGV4dENvbnN1bWVyKGZha2VFbGVtZW50KVxuICAgICAgfHwgaXNTdXNwZW5zZShmYWtlRWxlbWVudClcbiAgICApO1xuICB9XG5cbiAgaXNDb250ZXh0Q29uc3VtZXIodHlwZSkge1xuICAgIHJldHVybiAhIXR5cGUgJiYgaXNDb250ZXh0Q29uc3VtZXIobWFrZUZha2VFbGVtZW50KHR5cGUpKTtcbiAgfVxuXG4gIGlzQ3VzdG9tQ29tcG9uZW50RWxlbWVudChpbnN0KSB7XG4gICAgaWYgKCFpbnN0IHx8ICF0aGlzLmlzVmFsaWRFbGVtZW50KGluc3QpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmlzQ3VzdG9tQ29tcG9uZW50KGluc3QudHlwZSk7XG4gIH1cblxuICBnZXRQcm92aWRlckZyb21Db25zdW1lcihDb25zdW1lcikge1xuICAgIC8vIFJlYWN0IHN0b3JlcyByZWZlcmVuY2VzIHRvIHRoZSBQcm92aWRlciBvbiBhIENvbnN1bWVyIGRpZmZlcmVudGx5IGFjcm9zcyB2ZXJzaW9ucy5cbiAgICBpZiAoQ29uc3VtZXIpIHtcbiAgICAgIGxldCBQcm92aWRlcjtcbiAgICAgIGlmIChDb25zdW1lci5fY29udGV4dCkgeyAvLyBjaGVjayB0aGlzIGZpcnN0LCB0byBhdm9pZCBhIGRlcHJlY2F0aW9uIHdhcm5pbmdcbiAgICAgICAgKHsgUHJvdmlkZXIgfSA9IENvbnN1bWVyLl9jb250ZXh0KTtcbiAgICAgIH0gZWxzZSBpZiAoQ29uc3VtZXIuUHJvdmlkZXIpIHtcbiAgICAgICAgKHsgUHJvdmlkZXIgfSA9IENvbnN1bWVyKTtcbiAgICAgIH1cbiAgICAgIGlmIChQcm92aWRlcikge1xuICAgICAgICByZXR1cm4gUHJvdmlkZXI7XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignRW56eW1lIEludGVybmFsIEVycm9yOiBjYW7igJl0IGZpZ3VyZSBvdXQgaG93IHRvIGdldCBQcm92aWRlciBmcm9tIENvbnN1bWVyJyk7XG4gIH1cblxuICBjcmVhdGVFbGVtZW50KC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCguLi5hcmdzKTtcbiAgfVxuXG4gIHdyYXBXaXRoV3JhcHBpbmdDb21wb25lbnQobm9kZSwgb3B0aW9ucykge1xuICAgIHJldHVybiB7XG4gICAgICBSb290RmluZGVyLFxuICAgICAgbm9kZTogd3JhcFdpdGhXcmFwcGluZ0NvbXBvbmVudChSZWFjdC5jcmVhdGVFbGVtZW50LCBub2RlLCBvcHRpb25zKSxcbiAgICB9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RTaXh0ZWVuQWRhcHRlcjtcbiJdfQ==
//# sourceMappingURL=ReactSixteenAdapter.js.map