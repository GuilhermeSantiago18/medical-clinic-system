import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import imgCardioCentro from "src/images/cardiocentro.png"
import Image from "next/image"

type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Image src={imgCardioCentro} alt="Cardio Centro" />

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
          label="Password"
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
