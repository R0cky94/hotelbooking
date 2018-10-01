import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Text from "./Components/Text/Text";
import CardSection from "./Components/CardSection/CardSection";

class App extends Component {
    render() {
        return (
            <div className={"appDiv"}>
                <Header/>
                <Text name={"Coorg Shell"}/>
                <CardSection/>
                <CardSection/>
                <CardSection/>
                <CardSection/>
                <CardSection/>
            </div>
        );
    }
}

export default App;
