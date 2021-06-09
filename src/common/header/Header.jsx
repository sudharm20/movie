
import React from 'react'
import { Component } from 'react'
import './Header.css'
import logo from './logo.svg';


export default class Header extends Component
{
    render()
    {
        return(
            <header className="attribute">
              <img src={logo} alt="" className="logo"/>
                </header>
        )
    }
}