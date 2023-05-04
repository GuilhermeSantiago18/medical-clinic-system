import { AppBar, Typography } from '@mui/material'
import React from 'react'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'

export default function Header() {
    const {userName} = useAuth()
    const { pathname } = useRouter()
    console.log(pathname)

if (pathname === '/') return null
  return (
    <AppBar sx={{alignItems: "center", p: 2}}>
    <Typography >Bem-vindo, {userName}!</Typography>
    </AppBar>
  )
}
