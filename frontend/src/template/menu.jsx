import React from 'react'

export default porps =>(
    <nav className='navbar navbar-inverse bg-inverse navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
            <div className="navbar-header">
                <a className='navbar-brand' href='#'>
                    <i className='fa fa-calendar-check-0'></i> TodoApp
                </a>

            </div>
            <div id='navbar' className='navbar-collapse collapse'>
                <ul className="nav navbar-nav">
                    <li><a href='#/todos' >Tarefas</a></li>
                    <li><a href='#/about' >Sobre</a></li>
                </ul>

            </div>
        </div>
    </nav>
)
