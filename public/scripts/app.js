'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// stateless function component


var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: props.options
        };
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('IndecionsionApp - ComponentDidMount');
            var json = localStorage.getItem('options');
            var options = JSON.parse(json);

            // LOAD DATA
            if (options) {
                // load data from localStorage    

                this.setState({
                    options: options
                });
            }

            // LOAD DATA
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            console.log('IndecisionApp - ComponentDidUpdate');

            // SAVE DATA
            var json = JSON.stringify(this.state.options);

            // save to localStorage
            localStorage.setItem('options', json);
            console.log('Save data:', localStorage.getItem('options'));
            // SAVE DATA
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('IndecsionApp - ComponentWillUnmount');
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            console.log(999999, this.state);
            this.setState({
                options: []
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(option) {
            console.log(33434, option);
            this.setState(function (previousState) {
                return {
                    options: previousState.options.filter(function (x) {
                        return x != option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            var options = this.state.options;
            options.push(option);
            this.setState({
                options: options
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecision';
            var subtitle = 'Put your life in the hands of a computer';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { hasOption: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, { options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: ["item1", "item2"]
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h1',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'default title',
    subtitle: 'default subtitle'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        props.hasOption && React.createElement(
            'button',
            { onClick: props.handlePick },
            ' What should I do?'
        )
    );
};

var Options = function (_React$Component2) {
    _inherits(Options, _React$Component2);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this2 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this2.handleRemoveAll = _this2.handleRemoveAll.bind(_this2);
        return _this2;
    }

    _createClass(Options, [{
        key: 'handleRemoveAll',
        value: function handleRemoveAll() {
            this.props.handleDeleteOptions();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            // console.log(444,this.props)
            var options = this.props.options;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Total ',
                    options.length
                ),
                options.map(function (option, index) {
                    return React.createElement(Option, { key: option + '-' + index,
                        option: option,
                        handleDeleteOption: _this3.props.handleDeleteOption
                    });
                }),
                React.createElement(
                    'button',
                    { onClick: this.handleRemoveAll },
                    'Remove all'
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.option,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    return props.handleDeleteOption(props.option);
                } },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component3) {
    _inherits(AddOption, _React$Component3);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this4 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this4.handleAddOption = _this4.handleAddOption.bind(_this4);
        return _this4;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            // console.log(343434,this.props)

            var option = e.target.elements.option.value.trim();

            if (option) {
                // console.log(option)
                this.props.handleAddOption(option);
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, { options: ['ok', 'ok2'] }), document.getElementById('app'));
