import { AppBar, Typography } from '@mui/material'
import React from 'react'
import { useAuth } from '@/context/AuthContext'

export default function Header() {
    const {userName} = useAuth()

  return (
    <AppBar sx={{alignItems: "center", p: 2}}>
    <Typography >Bem-vindo, {userName}!</Typography>
    </AppBar>
  )
}
