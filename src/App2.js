import React, {Component} from "react";
import App1 from "./App";
import MainPage from "./component/MainPage";
import FinalQ from "./component/Final";
import LitR from "./component/LitR";
import Orderinterface from "./component/Orderinterface"


export default class App2 extends Component{
    state={
        list:[
            {
                id:1,
                content:"Home"
            },
            {
                id:2,
                content:"Fitts' Law"
            },
            {
                id:3,
                content:"Fun Task"
            },
            {
                id:4,
                content:"Final Quiz"
            }
        ],
        current:0
    }

    which(){
        switch(this.state.current){
            case 0:
                return <MainPage></MainPage>
            case 1:
                return <LitR></LitR>
            case 2:
                return <App1></App1>
            case 3:
                return <FinalQ></FinalQ>
            default:
                return null
        }
    }

    render(){
        return(
            <div>
                {
                    this.which()
                }

                <ul className="pagetab">
                    {
                        this.state.list.map((item,index)=>
                            <li key={item.id} className={this.state.current===index?"active":""} onClick={
                                ()=>this.handleClick(index)
                            }>{item.content}</li>)
                    }
                </ul>
            </div>
        )
    }

    handleClick(index){
        console.log(index)
        this.setState({
            current:index
        })
    }
}