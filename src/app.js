class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: ['item1', 'item2', 'item3']
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
    }

    handleDeleteOptions() {
        console.log(999999,this.state)
        this.setState({
            options: []
        })
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }

    handleAddOption(option) {
        let options = this.state.options
        options.push(option)
        this.setState({
            options
        })
    }

    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOption={this.state.options.length > 0}
                        handlePick={this.handlePick}
                />
                <Options    options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption  handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}


class Header extends React.Component {
    render() {
        console.log(222,this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.props.subtitle}</h1>
            </div>
        )
    }
}

class Action extends React.Component {

    render() {
        console.log(333,this.props.hasOption)
        return (
            <div>
                {
                    this.props.hasOption && (
                        <button onClick={this.props.handlePick} > What should I do?</button>
                    )
                }       
            </div>
        )
    }
}



class Options extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }

    handleRemoveAll() {
        this.props.handleDeleteOptions()
    }

    render() {
        console.log(444,this.props)
        let options = this.props.options

        return (
            <div>

                <p>Total {options.length}</p>
                {
                    options.map( option => (<Option key={option} option={option}/>))
                }
                <button onClick={this.handleRemoveAll}>Remove all</button>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        let option = this.props.option

        return (
            <div>
                {option}
            </div>
        )
    }
}



class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
    }

    handleAddOption(e) {
        e.preventDefault()
        // console.log(343434,this.props)

        const option = e.target.elements.option.value.trim()

        if (option) {
            // console.log(option)
            this.props.handleAddOption(option)
            e.target.elements.option.value = ''
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add option</button>    
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))