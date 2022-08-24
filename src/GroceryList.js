import { Component } from "react";
import icon from './img/icon.jpeg'

export class GroceryList extends Component {
    constructor() {
        super();
        this.state = {
            userInput: "",
            groceryList: []
        }
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addItem(input) {
        if (input === '') {
            return false
        }
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: ''})
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <input type="text" 
                        placeholder="What do you wanna buy?"
                        onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                        value={this.state.userInput}/>
                    </div>
                    <div className="container">
                        <button onClick={() => this.addItem(this.state.userInput)} className="add btn" >Add</button>
                    </div>
                    <ul>
                        {this.state.groceryList.map((item, index) => (
                            <li onClick={this.crossedWord} key={index}>
                                <img src={icon} width="30px" alt="icon"/>
                                {item}
                            </li>
                        )) }
                    </ul>
                    <div className="container">
                        <button onClick={() => this.deleteItem()} className="delete btn">Delete</button>
                    </div>
                </form>
            </div>  
        )
    }
}