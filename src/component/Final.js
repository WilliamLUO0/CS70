import React, {Component} from "react";
import avatar1 from '../images/Avatar/Avatar1.png';
import avatar2 from '../images/Avatar/Avatar2.png';
import avatar3 from '../images/Avatar/Avatar3.png';
import avatar4 from '../images/Avatar/Avatar4.png';
import avatar5 from '../images/Avatar/Avatar5.png';
import avatar6 from '../images/Avatar/Avatar6.png';
export default class PreT extends Component{
    render(){
        return(
            <div>
                <div className='container sec_google_form task1'>
                <div className='row'>
                    <div className='col-5'>
                        <h2 >Final Quiz!</h2>
                        <h4>Please answer the questions and submit!</h4>
                    </div>
                    <div className='col-7'>
                    <iframe className='google_form' src="https://docs.google.com/forms/d/e/1FAIpQLScbAHa2E68_YQF6jGZom89oKZU_AAP3fTJo6ozEvN42x80z9A/viewform?embedded=true" width="720" height="660" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
                  
                    </div>
                </div>
            </div>
            <footer>
            <div className="footer-main pc50">
               <div className="container">
                  <div className="row">
                     <div className="col-8 footer-contact">
                     <h2>COMPSCI 705 GROUP 3</h2>
                     <p>An interactive learning website for university HCI students to learn about Fitts' Law.</p>
                     </div>
                     <div className="col-2 align-self-end members">
                     <h4>Group Member</h4>
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
               </div>
            </div>
            <div className="footer-bottom">
               <small className="copyright t-center">
                  © 2022 University of Auckland
                </small>
            </div>
         </footer>
            </div>
        )
    }
}