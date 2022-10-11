import React, { Component, useEffect, useRef, useState } from 'react';
import '../css/yashi.css'
// import '../css/yashi_preset3.css'
import example from '../images/example.gif';
let goodTime = '4500';
function Orderinterface({setListData}) {
    const [value, setValue] = useState({ 
        menuSInputId: '275', 
        menuWInputId: '79', 
        menuHInputId: '18', 
        foodSInputId: '763', 
        foodWInputId: '222', 
        foodHInputId: '10', 
        checkSInputId: '143', 
        checkWInputId: '96', 
        checkHInputId: '44' })
    const [checkoutVal,setCheckoutVal] = useState([])
    const [menuOrder,setMenuOrider] = useState(1)
    const [foodOrder,setFoodOrider] = useState(3)
    const [checkoutOrder,setCheckoutOrider] = useState(2)
    const startTime = useRef('')
    const endTime = useRef('')
    function disappear() {
        startTime.current =  Date.now()
        var x = document.getElementById("cover_start");
        x.style.display = "none";
        
    }
    function disappear2() {
        var x = document.getElementById("cover_end");
        x.style.display = "none";
        
    }
    const clear = ()=>{
        setCheckoutVal([])
    }
    function appear() {
        endTime.current =  Date.now()
        // alert(`Your completion time is ${(Number(endTime.current) - Number(startTime.current)) / 1000}seconds! Try to adjust the interface using Control Panel and reduce the time to less than 4.5s !`)
        var x = document.getElementById("cover_end");
        x.style.display = "block";
        setListData((value)=>{
            let newVal = [...value];
            newVal.push( Number(endTime.current) - Number(startTime.current))
            return newVal
        })
        var xx = document.getElementById("control_panel_appear");
            xx.style.display = "block";
    }
    function appearStart() {
        clear()
        var xxx = document.getElementById("cover_start");
            xxx.style.display = "block";
    }
    
    function openPage(pageName, elmnt, color) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        console.log(tabcontent[1])
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "";
        }
        document.getElementById(pageName).style.display = "flex";
        //elmnt.style.backgroundColor = color;
        
    }
    useEffect(() => {
        document.getElementById("x").click();
    }, [])

    const [isActive, setIsActive] = useState(0);
    // const openPage = event =>{
    //     setIsActive(current => !current);
    // }
    // const menuClick = event => {
    //     event.currentTarget.classList.add("active")
    // }

    return (
        <div className="frame_interface">
            {/* 开始覆盖 */}
            <div className="cover" id="cover_start">
                <button className="btnx_start" onClick={disappear}>START</button>
            </div>
            {/* 结束弹窗 */}
            <div className="cover" id="cover_end">
                  <div className='panel'>
                    <p>You completed in <span>{(Number(endTime.current) - Number(startTime.current)) / 1000}</span> seconds!</p>
                    <p>You must order <span>Faster!</span> Try to reduce the time to less than <b>4.5s</b>!</p>
                    <div><img src={example}/></div>
                    <p>Adjust the interface to help you order faster in next attempt. Use <b>Control Panel</b> to change the size and placement of the component. 
                   Think about <b>Fitts' Law</b> when you edit!</p>
                    <p>When you're ready, click <button>Done editing, try again!</button> to start new attempt!</p>
                    
                    <a className="btnx_start btnx_close" onClick={disappear2}></a>
                </div>
            </div>
            <div className="frame_os">
                
                {/* <!-- Menu区域 --> */}
                <section className="sec sec_menu" id="x" style={{width:value.menuSInputId + 'px',order:menuOrder}}>
                    <p style={{width:value.menuSInputId + 'px'}}>MENU SECTION</p>
                    <a className={isActive===1?'btnx btnx_menu tablink active':'btnx btnx_menu tablink'} style={{width:value.menuWInputId + 'px',height:value.menuHInputId + 'px'}} id="breakfast" onClick={() => { 
                        openPage('sec_food_breakfast', setIsActive(current => current=1), '#03c3b1')
                    }}>
                        Breakfast
                    </a>
                    <a className={isActive===2?'btnx btnx_menu tablink active':'btnx btnx_menu tablink'}  style={{width:value.menuWInputId + 'px',height:value.menuHInputId + 'px'}} id="meals" onClick={() => {
                        openPage('sec_food_meals', setIsActive(current => current=2), '#53dbb5')
                    }}>
                        Meals
                    </a>
                    <a className={isActive===3?'btnx btnx_menu tablink active':'btnx btnx_menu tablink'}  style={{width:value.menuWInputId + 'px',height:value.menuHInputId + 'px'}} id="hotd" onClick={() => {
                        openPage('sec_food_hotd', setIsActive(current => current=3), '#db4446')
                    }}>
                        Hot Drinks
                    </a>
                    <a className={isActive===4?'btnx btnx_menu tablink active':'btnx btnx_menu tablink'}  style={{width:value.menuWInputId + 'px',height:value.menuHInputId + 'px'}} id="coldd" onClick={() => {
                        openPage('sec_food_coldd', setIsActive(current => current=4), '#0093ff')
                    }}>
                        Cold Drinks
                    </a>

                    <a className={isActive===5?'btnx btnx_menu tablink active':'btnx btnx_menu tablink'}  style={{width:value.menuWInputId + 'px',height:value.menuHInputId + 'px'}} id="bakery" onClick={() => {
                        openPage('sec_food_bakery', setIsActive(current => current=5), 'rgb(179,104,215)')
                    }}>
                        Bakery
                    </a>
                </section>

                {/* <!-- Food区域 --> */}
                <section className="sec sec_food " id="y" style={{width:value.foodSInputId + 'px',order:foodOrder}}>
                    <p style={{width:value.foodSInputId + 'px'}}>FOOD SECTION</p>
                    <section id="sec_food_breakfast" className="sec sec_food tabcontent" >
                        <a className="btnx btnx_food wrong" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Roll
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Pancake
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Bagel
                        </a>
                        <a className="btnx btnx_food right" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}} onClick={()=>{
                            setCheckoutVal((val)=>{
                                let newVal = JSON.parse(JSON.stringify(val))
                                newVal.push('Cheese')
                                return newVal
                            })
                        }}>
                            Cheese
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Toast
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Oatmeal
                        </a>
                    </section>
                    <section id="sec_food_meals" className="sec sec_food tabcontent">
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Burger
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Sandwich
                        </a>
                        <a className="btnx btnx_food right" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}} onClick={()=>{
                            setCheckoutVal((val)=>{
                                let newVal = JSON.parse(JSON.stringify(val))
                                newVal.push('Wrap')
                                return newVal
                            })
                        }}>
                            Wrap
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Hot Dog
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Salad
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Fries
                        </a>
                    </section>
                    <section id="sec_food_hotd" className="sec sec_food tabcontent">
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Cider
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Cocoa
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Coffee
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Latte
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Milk
                        </a>
                        <a className="btnx btnx_food right" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}} onClick={()=>{
                            setCheckoutVal((val)=>{
                                let newVal = JSON.parse(JSON.stringify(val))
                                newVal.push('Tea')
                                return newVal
                            })
                        }}>
                            Tea
                        </a>
                    </section>
                    <section id="sec_food_coldd" className="sec sec_food tabcontent">
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Beer
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Coke
                        </a>
                        <a className="btnx btnx_food right" onClick={()=>{
                            setCheckoutVal((val)=>{
                                let newVal = JSON.parse(JSON.stringify(val))
                                newVal.push('Juice')
                                return newVal
                            })
                        }} style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Juice
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Sprite
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Soda
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Water
                        </a>
                    </section>
                    <section id="sec_food_bakery" onClick={()=>{
                            setCheckoutVal((val)=>{
                                let newVal = JSON.parse(JSON.stringify(val))
                                newVal.push('Bread')
                                return newVal
                            })
                        }} className="sec sec_food tabcontent">
                        <a className="btnx btnx_food right" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Bread
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Cake
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Cookies
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Croissant
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Donut
                        </a>
                        <a className="btnx btnx_food" style={{width:value.foodWInputId + 'px',height:value.foodHInputId + 'px'}}>
                            Pancake
                        </a>
                    </section>
                </section>

                {/* <!-- Checkout区域 --> */}
                <section className="sec sec_checkout" id="z" style={{width:value.checkSInputId + 'px',order:checkoutOrder}}>
                    <p>CHECKOUT SECTION</p>
                    <div className="list_checkout">
                        <ul>
                            {
                                [...new Set(checkoutVal)].map( item => <li>{item}</li>)
                            }
                         
                        </ul>

                    </div>
                    <div>
                        <button disabled={[...new Set(checkoutVal)].length !== 5} style={{width:value.checkWInputId + 'px',height:value.checkHInputId + 'px'}} className="btnx_checkout" onClick={appear}>CHECKOUT</button>
                    </div>
                </section>


            </div>
            <div className="control_panel" id='control_panel_appear'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <h5>Control Panel</h5>
                        </div>
                        <div className='col-6'>
                            <div className='description'> Change the <b>Width</b> and <b>Height</b> of the components</div>
                        </div>
                        <div className='col-3'>
                            <button className="btnx_done" onClick={appearStart}>Done editing, try again!</button>
                        </div>
                    </div>
                </div>

                <form className="" name="registrationForm">
                    <div className='row'>
                    <div className='col-3 control_panel_column orderpanel'>
                            {/* <!-- Section的排序 --> */}
                            <p>SECTION PLACEMENT ORDER</p>
                            <div>
                                <span>Menu</span>
                                <select name="choice" onChange={(e)=>{
                                    setMenuOrider(e.target.value)
                                    
                                }}>
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                            <div>
                                <span>Food</span>
                                <select name="choice" onChange={(e)=>{
                                    setFoodOrider(e.target.value)
                                    
                                }}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3" selected>3</option>
                                </select>
                            </div>
                            <div>
                                <span>Checkout</span>
                                <select name="choice" onChange={(e)=>{
                                    setCheckoutOrider(e.target.value)
                                    
                                }}>
                                    <option value="1">1</option>
                                    <option value="2" selected>2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-3 control_panel_column'>
                            <p className="">MENU SECTION WIDTH</p>
                            <div className='menusectionwidth'>
                                <input type="range" name="menuSInputName" id="menuSInputId" value={value.menuSInputId} min="87" max="1200" onInput={(e) => {

                                    setValue({ ...value, menuSInputId: e.target.value })

                                }} />
                                <output name="menuSOutputName" id="menuSOutputId">{value.menuSInputId}</output>
                            </div>
                            {/* <!-- Menu Button的宽度 --> */}
                            <p>MENU BUTTONS</p>
                            <div>
                                <input type="range" name="menuWInputName" id="menuWInputId" value={value.menuWInputId} min="79" max="1200" onInput={(e) => {
                                    setValue({ ...value, menuWInputId: e.target.value })
                                }} />
                                <output name="menuWOutputName" id="menuWOutputId">{value.menuWInputId}</output>
                            </div>
                            {/* <!-- Menu Button的高度 --> */}
                            <div>
                                <input type="range" name="menuHInputName" id="menuHInputId" value={value.menuHInputId} min="18" max="250" onInput={(e) => {
                                    setValue({ ...value, menuHInputId: e.target.value })
                                }} />
                                <output name="menuHOutputName" id="menuHOutputId">{value.menuHInputId}</output>
                            </div>


                        </div>
                        <div className='col-3 control_panel_column'>
                            {/* <!-- Food Section的宽度 --> */}
                            <p className="">FOOD SECTION WIDTH</p>
                            <div>
                                <input type="range" name="foodSInputName" id="foodSInputId" value={value.foodSInputId} min="108" max="1200" onInput={(e) => {
                                    setValue({ ...value, foodSInputId: e.target.value })
                                }} />
                                <output name="foodSOutputName" id="foodSOutputId">{value.foodSInputId}</output>
                            </div>
                            {/* <!-- Food Buttons的宽度 --> */}
                            <p>FOOD BUTTONS</p>
                            <div>
                                <input type="range" name="foodWInputName" id="foodWInputId" value={value.foodWInputId} min="68" max="1200" onInput={(e) => {
                                    setValue({ ...value, foodWInputId: e.target.value })
                                }} />
                                <output name="foodWOutputName" id="foodWOutputId">{value.foodWInputId}</output>
                            </div>
                            {/* <!-- Food Buttons的高度 --> */}
                            <div>
                                <input type="range" name="foodHInputName" id="foodHInputId" value={value.foodHInputId} min="5" max="250" onInput={(e) => {
                                    setValue({ ...value, foodHInputId: e.target.value })
                                }} />
                                <output name="foodHOutputName" id="foodHOutputId">{value.foodHInputId}</output>
                            </div>

                        </div>
                        <div className='col-3 control_panel_column'>
                            {/* <!-- Checkout Section的宽度 --> */}
                            <p className="">CHECKOUT SECTION WIDTH</p>
                            <div>
                                <input type="range" name="checkSInputName" id="checkSInputId" value={value.checkSInputId} min="35" max="1200" onInput={(e) => {
                                    setValue({ ...value, checkSInputId: e.target.value })
                                }} />
                                <output name="checkSOutputName" id="checkSOutputId">{value.checkSInputId} </output>
                            </div>

                            {/* <!-- Checkout Button的宽度 --> */}
                            <p>CHECKOUT BUTTON</p>
                            <div>
                                <input type="range" name="checkWInputName" id="checkWInputId" value={value.checkWInputId} min="35" max="1200" onInput={(e) => {
                                    setValue({ ...value, checkWInputId: e.target.value })
                                }} />
                                <output name="checkWOutputName" id="checkWOutputId">{value.checkWInputId}</output>
                            </div>

                            {/* <!-- Checkout Button的高度 --> */}
                            <div>
                                <input type="range" name="checkHInputName" id="checkHInputId" value={value.checkHInputId} min="35" max="400" onInput={(e) => {
                                    setValue({ ...value, checkHInputId: e.target.value })
                                }} />
                                <output name="checkHOutputName" id="checkHOutputId">{value.checkHInputId}</output>
                            </div>
                        </div>

                    </div>
                </form>

            </div>


        </div>
    );
}

export default Orderinterface;
