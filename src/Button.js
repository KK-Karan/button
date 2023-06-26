import React from 'react';
import 'tachyons';
import './Button.css';



class Button extends React.Component {
    render() {
        return(
            <div>
              <h1 className = "ma5">Buttons</h1>
              <div className = "space">
                <button className = "ma5 style">Default</button>
                <button className = "ma5 style22">Default</button>
                <button className = "ma5 style2">Default</button>
              </div>
              <div className = "space">
                <button className = " ma5 style27">Default</button>
                <button className = " ma5 style3">Default</button>
                <button className = " ma5 style24">Default</button>
              </div>
              <div className = "space">
                <button className = " ma5 style5">Default</button>
                <button className = " ma5 style25">Default</button>
                <button className = " ma5 style26">Default</button>
              </div>
              <div className = "space">
                <button className = "ma5 style7">Default</button>
              </div>
              <div className = "space">
                <button type = "button" disabled className = "ma5 style8">Default</button>
                <button type = "button" disabled className = "ma5 style9">Default</button>
              </div>
              <div className = "space">
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                <button className = "ma5 style10">
                 <span class="material-symbols-outlined"> add_shopping_cart </span>
                 <span> Default</span>
                </button>
                <button className = "ma5 style11">
                 <span> Default</span>
                 <span class="material-symbols-outlined"> add_shopping_cart </span>
                </button>
              </div>
              <div>
                <button type = "button" className = "ma5 style12">Default</button>
                <button type = "button" className = "ma5 style13 ">Default</button>
                <button type = "button" className = "ma5 style14 ">Default</button>
              </div>
              <div className = "space">
                <button className = "ma5 style23">Default</button>
                <button className = "ma5 style15">Primary</button>
                <button className = "ma5 style16">Secondary</button>
                <button className = "ma5 style17">Danger</button>
              </div>
              <div className = "space">
                <button className = "ma5 style18">Default</button>
                <button className = "ma5 style19">Primary</button>
                <button className = "ma5 style20">Secondary</button>
                <button className = "ma5 style21">Danger</button>
              </div>
            </div>
        );
    }
}

export default Button;