import {
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import MainContainer from "@/components/MainContainer";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
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
    <MainContainer>
      <Stack direction="column" alignItems="center" justifyContent="center">
        <Typography
          color="primary"
          mb={18}
          variant="h3"
          sx={{ fontFamily: "Montserrat" }}
        >
          CARDIOCENTRO SYSTEM
        </Typography>
        <Stack
          display="flex"
          flexDirection="column"
          alignItems="center"
          spacing={1}
        >
          <TextField
            label="Email"
            variant="outlined"
            placeholder="Digite seu email"
            {...register("email", { required: true })}
          />
          {errors.email && <Typography>Campo obrigatório</Typography>}
          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            placeholder="Digite sua senha"
            {...register("password", { required: true })}
          />
          {errors.password && <Typography>Campo obrigatório</Typography>}

          <Button
            variant="contained"
            fullWidth
            sx={{ color: "white" }}
            onClick={handleSubmit(onSubmit)}
          >
            Entrar
          </Button>
        </Stack>
      </Stack>
    </MainContainer>
  );
};

export default LoginPage;
