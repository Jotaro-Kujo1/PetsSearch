 import React, {useContext, useState} from 'react'
 import Button from "@mui/material/Button";
 import {Stack} from "@mui/material";
 import {ModalContext} from '../../contexts'


 export const Controls = ({onChange}) => {
  const {openModal} = useContext(ModalContext);
  const[state,setState]=useState(true);

  const handleState = () => {
    setState(false);
    onChange();
  }

  const handleClickRegistrationButton = () => {
      openModal({
          title: 'Registration'

      });
    handleState();
  }

    return (

        <Stack spacing={2} direction="row">
            {state &&<Button variant="contained" onClick=
             {handleClickRegistrationButton} data-toggle="modal" >Registration</Button>}
        </Stack>


    )
 }