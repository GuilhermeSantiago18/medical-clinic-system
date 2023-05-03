import { Typography } from '@mui/material'
import React from 'react'
import { useAuth } from '@/context/AuthContext'

export default function Header() {
    const {userName} = useAuth()
  return (
    <Typography>Bem-vindo, {userName}!</Typography>
  )
}
