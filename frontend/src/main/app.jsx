import 'modules/bootstrap/dist/css/bootstrap-theme.min.css'
//import '../static/font-awesome.min.css'
import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)