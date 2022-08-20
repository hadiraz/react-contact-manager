import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import "../assets/appHeader.css"
import { openAddContactAction } from '../redux/addBox/addBoxAction';
import AddContact from './AddContact';
function AppHeader() {
  const dispatch = useDispatch();
  return (
    <div className="app_header">
    <button onClick={()=>dispatch(openAddContactAction())}>add contact</button>
    <AddContact/>
    </div>
  
  )
}

export default AppHeader