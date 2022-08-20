import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction, editContactAction } from '../redux/contacts/contactsAction';
import styled from "styled-components"
import store from '../redux/store';
import { closeAddContactAction } from '../redux/addBox/addBoxAction';

const Background = styled.div`
  background-color : #9a9a9a26 ;
  position : absolute ; 
  z-index : 10 ;
  top : 0 ;
  right : 0 ;
  width : 100vw ;
  height : 100vh ;
  transition : 0.3s;
  transform : ${props => props.open ? "scale(1)" : "scale(0)"} ;
  opacity : ${props => props.open ? "1" : "0.01"} ;
  display : flex ;
  justify-content : center ;
  align-items : center ;
`
const Container = styled.div`
display: flex;
position : relative ;
z-index : 10 ;
flex-direction : column;
justify-content : center ;
align-items : center ;
width : 100% ;
max-width: 500px;
min-height: 100px;
background-color : white ;
border-radius : 5px ;
padding : 1rem ;
margin-top: 1rem;
`
const CloseButton = styled.button`
display : flex ;
align-items : center ;
justify-content : center ;
margin : 0.5rem ;
background : transparent;
border : 1px solid grey ; 
padding : 0.3rem 0.8rem ;
border-radius : 5px ;
transition : 0.3s ;
&:hover {
  background : black ;
  color : white ;
}
`
const CloseButtonBox = styled.div`
display : flex ;
align-items : center ;
justify-content : flex-end ;
width : 100%;

`
const ContactInfo = styled.section`
display : flex ;
width : 80% ;
flex-direction : column ;
justify-content : center ;
align-items : flex-start ;
`
const InputContainer = styled.span`
display: flex;
flex-direction : column ;
justify-content: center;
margin: 0.8rem;
width : 90% ;
input {
  display: flex;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  letter-spacing: 1px;
  width : 100% ;
}
label {
  margin-bottom : 0.5rem ;
  text-transform : capitalize ;
}
`
const AddButtonBox = styled.div`
display: flex;
height: 100%;
justify-content: center;
align-items: center;
margin : 1rem 0;
`
const AddButtonGreen = styled.button`
padding: 0.5rem 0.8rem;
border-radius: 5px;
margin: 0 0.3rem;
background-color: rgb(0, 174, 0);
color: white;
text-transform: capitalize;
`
function AddContact() {
  const [name , setName] = useState("");
  const [number , setNumber] = useState("");
  const [id , setId] = useState(null);
  const [editStatus , setEditStatus] = useState(false)
  const addBox = useSelector(state => state.box);
  const contacts = useSelector(state => state.contacts.contacts)
  const dispatch = useDispatch();

  const addContact = () => {
    if(name !== "" && number !== ""){
      dispatch(addContactAction({name : name , number : number}))
      setName("");
      setNumber("");
    }
  }

  const editContact = () => {
    if(name !== "" && number !== ""){
      dispatch(editContactAction({name : name , number : number , id : id}))
      setName("");
      setNumber("");
      setId(null);
      setEditStatus(false)
    }
  }

  useEffect(()=>{
    if(addBox.status && addBox.editID){
      contacts.map((value)=>{
        if(value.id === addBox.editID){
          setEditStatus(true);
          setName(value.name);
          setNumber(value.number);
          setId(value.id)
        }
      })
    }else{
      setEditStatus(false);
      setName("");
      setNumber("");
      setId(null)
    }
  },[addBox.status])

  return (
    <Background open={addBox.status}>
      <Container open={addBox.status}>
        <CloseButtonBox>
          <CloseButton onClick={
            () => dispatch(closeAddContactAction())
            }>
              close
            </CloseButton>
        </CloseButtonBox>
          <ContactInfo>
            <InputContainer>
                <label htmlFor="name">name</label>
                <input onChange={(e)=>setName(e.target.value)} placeholder="Enter contact's name" id="name" value={name}/>
            </InputContainer>
            <InputContainer>
                <label htmlFor="number">number</label>
                <input placeholder="Enter number"  id="number" value={number}  onChange={(e)=>setNumber(e.target.value)} />
            </InputContainer>
            <AddButtonBox >
                <AddButtonGreen onClick={()=> editStatus ? editContact(id) : addContact()}>
                  {editStatus ? "edit" : "add"}
                </AddButtonGreen>
            </AddButtonBox>
          </ContactInfo>
      </Container>
    </Background>
  )
}

export default AddContact