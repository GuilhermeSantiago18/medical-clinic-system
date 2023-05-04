import { Container, SxProps } from '@mui/material'
import { ReactNode } from 'react'


type Props = {
    children: ReactNode
    sx?: SxProps
}
export default function MainContainer({ children, sx }: Props) {
  return (
    <Container
    sx={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", minHeight: "100vh", width: "100%", ...sx}}>{children}
    </Container>
  )
}
