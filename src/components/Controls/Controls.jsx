 import React, {useContext, useState} from 'react'
 import Button from "@mui/material/Button";
 import {Stack} from "@mui/material";
 import {ModalContext} from '../../contexts'


 export const Controls = () => {
  const {openModal} = useContext(ModalContext);


  const handleClickRegistrationButton = () => {
      openModal({
          title: 'Registration'

      });
  }

    return (

        <Stack spacing={2} direction="row">
            <Button variant="contained" onClick=
             {handleClickRegistrationButton} data-toggle="modal" >Registration</Button>
        </Stack>


    )
 }