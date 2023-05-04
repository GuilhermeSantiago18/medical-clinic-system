import { Box, Button, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import doctor from '../../images/doctor.avif'
import Image from "next/image";


type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const [session, setSession] = useState(false);
  const { setUserName } = useAuth();  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = async (data: FormValues) => {
    console.log(data.email);
    try {
      setUserName(data.email);
      setSession(true);
      // const response = await signIn("email", {
      //   email: data.email,
      //   password: data.password,
      // });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (session) {
      router.push("/home");
    }
  }, [router, session]);

  return (
    <>
    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f8f9fa"
    >
       <Box component={Image} src={doctor} alt="doctor" maxWidth="50%" sx={{objectFit: "cover"}} />
       <Stack direction="column" width="50%" alignItems="center">
        <Paper>
       <Typography bgcolor="#f8f9fa" color="#adb5bd" variant="h3" mb={2} alignSelf='center'>CARDIOCENTRO</Typography>
       <Stack display="flex" flexDirection="column" alignItems="center" spacing={1}>
        <TextField
          label="Email"
          variant="outlined"
          placeholder="Digite seu email"
          fullWidth
          {...register("email", { required: true })}
          />
        {errors.email && <Typography>Campo obrigatório</Typography>} 
        <TextField
          label="Senha"
          type="password"
          variant="outlined"
          fullWidth
          placeholder="Digite sua senha"
          {...register("password", { required: true })}
        />
        {errors.password && <Typography>Campo obrigatório</Typography>}

        <Button variant="contained" fullWidth sx={{color: "white"}} onClick={handleSubmit(onSubmit)}>
          Entrar
        </Button>
      </Stack>
      </Paper>
      </Stack>
 
    </Grid>
    </>
  );
};

export default LoginForm;
