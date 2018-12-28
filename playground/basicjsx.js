console.log('App.js is running');
var userName = "mo";

var template = (
    <div>
        <h1>Hello {userName}</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

let count = 0;

const addOne = () => {
    count += 1;
    console.log("+1");
    renderApp();
}
const minusOne = () => {
    count -= 1;
    console.log("-1")
    renderApp();
}
const reset = () => {
    count = 0;
    console.log("reset")
    renderApp();
}

let options = ["item1","item2"]
let visible = true;

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    // console.log(333,option)

    if (option) {
        options.push(option);
        e.target.elements.option.value = '';
        console.log(options)
        renderApp();
    }
    
};

const onRemoveAll = () => {
    options = []
    console.log(options)
    renderApp()
}

const toggleVisible = () => {
    visible = !visible;
    renderApp()
}


const renderApp = () => {

    var template2 = (
        <div>
            <div>
                <h1>Count: {count}</h1>
                <button onClick={ addOne }>+1</button>
                <button onClick={ minusOne }>-1</button>
                <button onClick={ reset }>reset</button>
            </div>

            <div>
                
                <ol>
                    {
                        options.map( item => (<li>{item}</li>))
                    }
                </ol>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
                <button onClick={onRemoveAll}>Remove all</button>

                <button onClick={toggleVisible}>Toggle Visible</button>
                {
                    visible && (
                        <div>
                            <h1>Hi Salmon</h1>
                        </div>
                    )
                }
            </div>
        </div>
        
    );

    ReactDOM.render(template2, document.getElementById('app'));

}

renderApp();