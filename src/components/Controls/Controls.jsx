 import React, {useContext} from 'react'
 import Button from "@mui/material/Button";
 import {Stack} from "@mui/material";
 import {ModalContext} from '../../contexts'


 export const Controls = () => {
  const {openModal} = useContext(ModalContext);

  const handleClickRegistrationButton = () => {
      openModal({
          title: 'Modal zebra',
          children: "MODAL MODAL MODAL"
      });
  }
    return (
        <Stack spacing={2} direction="row">
         <Button variant="contained" onClick=
             {handleClickRegistrationButton}>Registration</Button>
         <Button variant="outlined">Sign in</Button>
        </Stack>
    )
 }