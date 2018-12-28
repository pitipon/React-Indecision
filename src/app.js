// stateless function component




class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: props.options
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
    }

    handleDeleteOptions() {
        console.log(999999,this.state)
        this.setState({
            options: []
        })
    }

    handleDeleteOption(option) {
        console.log(33434,option)
        this.setState( previousState => ({
            options: previousState.options.filter( x => x!=option )
        }))
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
                            handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption  handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: ["item1", "item2"]
}

const Header = props => (
    <div>
        <h1>{props.title}</h1>
        <h1>{props.subtitle}</h1>
    </div>
)

Header.defaultProps = {
    title: 'default title',
    subtitle: 'default subtitle'
}


const Action = props => (
        <div>
            {
                props.hasOption && (
                    <button onClick={props.handlePick} > What should I do?</button>
                )
            }       
        </div>
)



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
                    options.map( (option,index) => (
                        <Option key={`${option}-${index}`} 
                                option={option}
                                handleDeleteOption={this.props.handleDeleteOption}
                        />
                        
                    ))
                }
                <button onClick={this.handleRemoveAll}>Remove all</button>
            </div>
        )
    }
}

const Option = props => (
            <div>
                {props.option}
                <button onClick={ e => props.handleDeleteOption(props.option)}>Remove</button>
            </div>
        )





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



ReactDOM.render(<IndecisionApp options={['ok','ok2']}/>, document.getElementById('app'))