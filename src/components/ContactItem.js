import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeContactAction } from '../redux/contacts/contactsAction';
import styled from "styled-components" ;
import { openAddContactAction } from '../redux/addBox/addBoxAction';

const Container = styled.div`
display: flex;
width: 100%;
height: 60px;
background-color: rgb(240, 240, 240);
border-radius: 6px;
align-items: center;
justify-content: space-between;
padding: 0 0.6rem;
box-shadow: 0 0 9px 0 #d1d1d1;
cursor: pointer;
margin-bottom: 1.5rem;
`
const ContainerLeft = styled.div`
h3{
    margin-bottom: 0.2rem;
    text-transform: capitalize;
    color: #868686;
}
p{
    color: #5f5f5f;
    font-size: 0.9rem;
}
`
const ContainerRight = styled.div`


`
const ButtonText = styled.button`
padding: 0.3rem 0.4rem;
border-radius: 5px;
margin: 0 0.3rem;
color: black;
text-transform: capitalize;
letter-spacing :  1px ;
transition : 0.3s ;
}
`

const ButtonGreen = styled.button`
    padding: 0.3rem 0.4rem;
    border-radius: 5px;
    margin: 0 0.3rem;
    background-color: rgb(0, 174, 0);
    color: white;
    text-transform: capitalize;
    letter-spacing :  1px ;
    transition : 0.3s ;
    &:hover{
        background-color: rgb(0, 140, 0);
}
`
const ButtonBox = styled.div`
display : flex ;
align-items : center ;
justify-content : flex-end ;
width : 100%;

`
function ContactItem() {
    const contacts = useSelector(state => state.contacts.contacts);
    const dispatch = useDispatch()
  return (
      <>
      {
          contacts.map(({name , number , id},index)=>{
                return ( 
                <Container key={id}>
                    <ContainerLeft >
                        <h3>{name}</h3>
                        <p>{number}</p>
                    </ContainerLeft>
                    <ContainerRight >
                        
                        <ButtonBox >
                            <ButtonGreen 
                                onClick = {()=>dispatch(openAddContactAction({id}))}
                            >
                                edit
                            </ButtonGreen>
                            <ButtonText  
                            onClick={()=>dispatch(removeContactAction({id}))}>
                                remove
                            </ButtonText>
                        </ButtonBox>
                    </ContainerRight>
                </Container>
                )
          })
      }
    </>
  )
}

export default ContactItem