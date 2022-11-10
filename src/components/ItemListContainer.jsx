import React, { Component } from 'react'


class App extends Component {
constructor(props){
    super(props)
    this.state = {greeting :
        'Click para recibir nuestro saludo'}
    this.updateState = this.updateState.bind(this)
}
updateState(){
this.setState({greeting :
'Bienvenido!!! Ya puede ordenar su plato preferido'})
}
render(){
    return (
    <div>
        <h2>Bienvenidos a nuestros productos</h2>
        <p>{this.state.greeting}</p>
        <button onClick={this.updateState}>
        Comenzar!
        </button>
    </div>
    )
}
}

export default App; 