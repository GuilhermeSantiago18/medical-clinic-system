import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import imgCardioCentro from "src/images/cardiocentro.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

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
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
    >
      <Image src={imgCardioCentro} alt="Cardio-Centro" />

      <Grid item>
        <TextField
          label="Email"
          variant="outlined"
          placeholder="Digite seu email"
          {...register("email", { required: true })}
        />
        {errors.email && <Typography>Campo obrigatório</Typography>}
      </Grid>

      <Grid item>
        <TextField
          label="Senha"
          type="password"
          variant="outlined"
          placeholder="Digite sua senha"
          {...register("password", { required: true })}
        />
        {errors.password && <Typography>Campo obrigatório</Typography>}
      </Grid>

      <Grid item>
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>
          Entrar
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
