import React,{ useState } from 'react';
import Orderinterface from './component/Orderinterface.jsx';
import './css/yashi.css';
import avatar1 from './images/Avatar/Avatar1.png';
import avatar2 from './images/Avatar/Avatar2.png';
import avatar3 from './images/Avatar/Avatar3.png';
import avatar4 from './images/Avatar/Avatar4.png';
import avatar5 from './images/Avatar/Avatar5.png';
import avatar6 from './images/Avatar/Avatar6.png';


function App1() {
let [listData,setListData] = useState([])

  return (
   <div className='index'>
         <div className="pagetab">
         </div>

            <div className="task1 container">
                <div className='row'>
                <div className="col-6"><h2 className="big_title">Food Ordering Simulation </h2></div>
                    <div className="task_description col-6 align-self-end">
                                <table className="Require_Table">
                            <thead>
                                <tr>
                                    <th colSpan="5"><i className="arrow down"></i>Order These Food!<i className="arrow down"></i> </th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr>
                                    <td>Breakfast</td>
                                    <td>Meals</td>
                                    <td>Hot Drinks</td>
                                    <td>Cold Drinks</td>
                                    <td>Bakery</td>
                                </tr>
                                <tr className="task_food">
                                    <td>Cheese</td>
                                    <td>Wrap</td>
                                    <td>Tea</td>
                                    <td>Juice</td>
                                    <td>Bread</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div> 

            <div className="Orderinterface_css">
              <Orderinterface setListData={setListData} />
            </div>
            <div className="sec_output container">
                <div className='row '>
                    <div className='col-8 output_text'>
                        <div className='mt'>
                        <h2 >Movement Time (MT)</h2> 
                        <h4>is the sum of the duration time of multiple clicks from <span>START</span> to <span>CHECKOUT</span></h4>
                        <h4>It measures the time required to perform a given task</h4>
                        <h4>Movement Time (MT) can be predicted using <b>Fitts' Law</b></h4>
                        </div>
                        <div className='sink'><h2 >Why simulate food-ordering?</h2>
                        <h4>This is a simplified version of restaurant POS interface. Restaurant staff operate hundreds of orders every day and there is a certain <b>pattern of repetition</b> in the ordering process, so it is crucial to to enhance the graphical user interface (GUI) design and eventually increase the effectiveness of human-computer interaction.</h4>
                        
                        </div>
                        <div className='sink'><h2 >Let that Sink In...</h2>
                        <h4>What interface design elements are important to reduce Movement Time?</h4>
                        <h4>What is <span>Fitts' Law</span> about?</h4>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className="sec_output_table">
                        <table className="Result_Table">
                            <thead>
                                <tr>
                                    <th>Attempts</th>
                                    <th>Movement Time (MT)</th>
                                    {/* <th>Performance Score</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                
                                {
                                    listData.map((item,idx) => <tr className={item < 4500 ?"goal" : ''}>
                                    <td>{ 1 + idx}</td>
                                    <td>{item/1000}s</td>
                                    {/* <td>520</td> */}
                                </tr>)
                                }
                            </tbody>
                            <tfoot>
                                <tr >
                                    <td colSpan="2">Try to reduce the time to less than <b>4.5s</b> !</td></tr>
                            </tfoot>
                        </table>
                        </div>

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
  );
}

export default App1;
