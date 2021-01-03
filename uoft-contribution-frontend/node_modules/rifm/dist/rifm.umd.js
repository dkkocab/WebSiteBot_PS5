(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = global || self, factory(global.Rifm = {}, global.React));
}(this, function (exports, React) { 'use strict';

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var Rifm =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Rifm, _React$Component);

    function Rifm(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this._state = null;
      _this._del = false;

      _this._handleChange = function (evt) {
        {
          if (evt.target.type === 'number') {
            console.error('Rifm does not support input type=number, use type=tel instead.');
            return;
          }
        } // FUTURE: use evt.nativeEvent.inputType for del event, see comments at onkeydown


        var stateValue = _this.state.value;
        var value = evt.target.value;
        var input = evt.target;
        var op = value.length > stateValue.length;
        var del = _this._del;

        var noOp = stateValue === _this.props.format(value);

        _this.setState({
          value: value,
          local: true
        }, function () {
          var selectionStart = input.selectionStart;
          var refuse = _this.props.refuse || /[^\d]+/g;
          var before = value.substr(0, selectionStart).replace(refuse, '');
          _this._state = {
            input: input,
            before: before,
            op: op,
            di: del && noOp,
            del: del
          };

          if (_this.props.replace && _this.props.replace(stateValue) && op && !noOp) {
            var start = -1;

            for (var i = 0; i !== before.length; ++i) {
              start = Math.max(start, value.toLowerCase().indexOf(before[i].toLowerCase(), start + 1));
            }

            var c = value.substr(start + 1).replace(refuse, '')[0];
            start = value.indexOf(c, start + 1);
            value = "" + value.substr(0, start) + value.substr(start + 1);
          }

          var fv = _this.props.format(value);

          if (stateValue === fv) {
            _this.setState({
              value: value
            });
          } else {
            _this.props.onChange(fv);
          }
        });
      };

      _this._hKD = function (evt) {
        if (evt.code === 'Delete') {
          _this._del = true;
        }
      };

      _this._hKU = function (evt) {
        if (evt.code === 'Delete') {
          _this._del = false;
        }
      };

      _this.state = {
        value: props.value,
        local: true
      };
      return _this;
    }

    Rifm.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
      return {
        value: state.local ? state.value : props.value,
        local: false
      };
    };

    var _proto = Rifm.prototype;

    _proto.render = function render() {
      var _handleChange = this._handleChange,
          value = this.state.value,
          children = this.props.children;
      return children({
        value: value,
        onChange: _handleChange
      });
    } // delete when  https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType will be supported by all major browsers
    ;

    _proto.componentWillUnmount = function componentWillUnmount() {
      document.removeEventListener('keydown', this._hKD);
      document.removeEventListener('keyup', this._hKU);
    } // delete when  https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType will be supported by all major browsers
    ;

    _proto.componentDidMount = function componentDidMount() {
      document.addEventListener('keydown', this._hKD);
      document.addEventListener('keyup', this._hKU);
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var _state = this._state;

      if (_state) {
        var value = this.state.value;
        var start = -1;

        for (var i = 0; i !== _state.before.length; ++i) {
          start = Math.max(start, value.toLowerCase().indexOf(_state.before[i].toLowerCase(), start + 1));
        } // format usually looks better without this


        if (this.props.replace && (_state.op || _state.del && !_state.di)) {
          while (value[start + 1] && (this.props.refuse || /[^\d]+/).test(value[start + 1])) {
            start += 1;
          }
        }

        _state.input.selectionStart = _state.input.selectionEnd = start + 1 + (_state.di ? 1 : 0);
      }

      this._state = null;
    };

    return Rifm;
  }(React.Component);

  exports.Rifm = Rifm;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
