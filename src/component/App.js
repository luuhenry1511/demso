import React from 'react'
import { connect } from 'react-redux'
import './App.css'
class App extends React.Component{
    incre = () => {
        this.props.dispatch({ type: 'INC' });
    }

    decre = () =>{
        this.props.dispatch({ type: 'DEC' });
    }
    render (){
        return (
            <div id="wrapper">
                <h2 className= "title">Tăng giảm số</h2>
                <div className="content">
                    <button onClick={this.incre}>+</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.decre}>-</button>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return({count: state.count});
    
}
export default connect(mapStateToProps)(App);
