import React, {Component} from "react";
import avatar1 from '../images/Avatar/Avatar1.png';
import avatar2 from '../images/Avatar/Avatar2.png';
import avatar3 from '../images/Avatar/Avatar3.png';
import avatar4 from '../images/Avatar/Avatar4.png';
import avatar5 from '../images/Avatar/Avatar5.png';
import avatar6 from '../images/Avatar/Avatar6.png';

export default class MainPage extends Component{
    render(){
        return(
            
            <div className="MainPage">
                <div className="mobile-cover">
                    <h3>Are you visiting the website with cellphone?</h3>This site is designed for computer users only! Please open this site in a browser with a screen width greater than 1200px. 
                </div>
            <div className="task1 container">
                <div className='row'>
                <div className="col-8">
                        <h2 className="big_title">Welcome!</h2>
                        <p>An interactive learning website for university HCI students about Fitts' Law.</p>
                    </div>
                    <div className="col-2 align-self-end members">
                    <h4>COMPSCI 705 GROUP 3</h4>
                    <p><span><img src={avatar1} alt="Member"/></span>Yashi Lin</p>
                    <p><span><img src={avatar2}alt="Member"/></span>Zihao Luo</p>   
                    <p><span><img src={avatar3}alt="Member"/></span>Yidan Zhang</p>   
        
                    </div>
                    <div className="col-2 align-self-end members">
                    <p><span><img src={avatar4}alt="Member"/></span>Ziqi Wang</p>   
                    <p><span><img src={avatar5}alt="Member"/></span>Yiwen Zhang</p>   
                    <p><span><img src={avatar6}alt="Member"/></span>Weixu Wang</p>   
                    </div>
                </div>
                <div className='orientation'>
                    
                    <div className="row">
                        <div className="col-8">
                            <h2 className="">You are expected to ...</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <div className="square">
                                Do First Quiz
                                <i class="arrow right"></i>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="square">
                                Read about Fitts' Law
                                <i class="arrow right"></i>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="square">
                                Do Fun Task
                                <i class="arrow right"></i>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="square">
                                Do Final Quiz
                            
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row sec_google_form">
               
               
                    <div className='col-4'>
                        <h2 >First Quiz</h2>
                        <h4>Please answer the question and submit!</h4>
                    </div>
                    <div className='col-8'>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdjl9sm4Ez09UXZ7wHwwMWjlr8Ie3Si8rDBBgzfV7XKWaXe3w/viewform?embedded=true" width="750" height="700" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                    </div>
                </div>
       
            
            </div> 
            </div>
        )
    }
}