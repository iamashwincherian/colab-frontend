import {
  Button,
  Box,
  Stack,
  Container,
  Typography,
  Card,
  CardContent,
  Snackbar,
  Alert,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/inputFields/primaryInput";
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "@leecheuk/react-google-login";
import GoogleLogo from "../../assets/images/google-logo.jpg";
import ApiClient from "../../ApiClient";

const GOOGLE_CLIENT_ID =
  "939908623749-rb9ubv5g66mtaoi2agjjhk8m2mj3ed83.apps.googleusercontent.com";

export default function Login() {
  const navigate = useNavigate();
  const [disabledLogin, setDisabledLogin] = useState(false);
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccessMessage, setLoginSuccessMessage] = useState(null);
  const [loginFailedMessage, setLoginFailedMessage] = useState(null);

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId: GOOGLE_CLIENT_ID,
        scope: "",
      });
    });
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    setDisabledLogin(true);

    try {
      const res = await ApiClient.post("/auth/login", {
        email,
        password,
      });

      setUser(res.data?.data.user);
      setLoginFailedMessage(null);
      setLoginSuccessMessage("Successfully Logged In!");
      setTimeout(() => {
        navigate("/create-org");
      }, 1000);
    } catch (error) {
      setLoginFailedMessage("Invalid username / password");
      setLoginSuccessMessage(null);
      setDisabledLogin(false);
    }
  };

  const GoogleAuthButton = (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Login with Google"
      responseType="token"
      scope="profile email"
      prompt="consent"
      onSuccess={async (credentails) => {
        console.log("credentails", Object.keys(credentails));
        const user = await fetch(
          "/auth/google/callback?" +
            new URLSearchParams({
              token: credentails?.accessToken,
            })
        ).then((res) => res.json());
        if (!user) return;

        setUser(user.data.user);
        setLoginSuccessMessage(
          `Welcome back ${user.data.user.name.split(" ")[0]}`
        );
        setTimeout(() => {
          navigate("/projects");
        }, 1000);
      }}
      onFailure={(err) => console.log("google login failed", err)}
      cookiePolicy={"single_host_origin"}
      render={(renderProps) => (
        <button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          size="large"
          variant="contained"
          type={"button"}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            margin: "10px 0",
            textTransform: "none",
            border: "none",
            width: "100%",
            padding: "5px 0",
            borderRadius: "4px",
            cursor: "pointer",
            boxShadow:
              "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
          }}
        >
          <img
            src={GoogleLogo}
            alt="google-logo"
            style={{
              width: "30px",
              height: "auto",
            }}
          />
          Sign in with google!
        </button>
      )}
    />
  );

  return (
    <div>
      <Container sx={{ height: "100vh" }}>
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Card sx={{ minWidth: 400 }}>
            <CardContent sx={{ padding: "22px 24px" }}>
              <form onSubmit={submitForm}>
                <div
                  style={{
                    display: "inline-block",
                    borderRadius: "50%",
                    height: "36px",
                    width: "36px",
                    padding: "10px",
                    backgroundColor: "#E5F8EB",
                  }}
                >
                  <PersonIcon
                    sx={{
                      color: "#2ECC71",
                      overflow: "hidden",
                      padding: 0,
                      height: "18px",
                      width: "18px",
                    }}
                  />
                </div>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                    display: "inline",
                    margin: "0 14px",
                  }}
                >
                  Login
                </Typography>
                <p
                  style={{
                    margin: "10px 0 15px 0",
                    fontSize: "16px",
                    color: "#585757",
                  }}
                >
                  Start using it now
                </p>
                <hr></hr>
                <Box sx={{ margin: "20px 0" }}>
                  <InputField
                    label="Email"
                    placeholder="Enter your email"
                    name="email"
                    type="text"
                    value={email}
                    setValue={setEmail}
                    autoComplete="off"
                    required
                  />

                  <InputField
                    label="Password"
                    placeholder="Enter password"
                    name="password"
                    type="password"
                    value={password}
                    setValue={setPassword}
                    subLink={{
                      title: "Forgot password?",
                      link: "/forgot-password",
                    }}
                    required
                  />
                  <Box marginBottom={"20px"}>
                    <Button
                      disabled={disabledLogin}
                      size="large"
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                    >
                      <span style={{ color: "white" }}>Login</span>
                    </Button>
                    {GoogleAuthButton}
                  </Box>
                </Box>
              </form>
              <hr></hr>
              <Link
                to={"/signup"}
                style={{
                  textAlign: "center",
                  display: "block",
                  textDecoration: "none",
                  color: "#585757",
                  marginTop: "15px",
                }}
              >
                New User?
                <span
                  style={{
                    color: "#2ecc71",
                    marginLeft: "5px",
                  }}
                >
                  Sign Up
                </span>
              </Link>
            </CardContent>
          </Card>
        </Stack>
      </Container>

      <Snackbar
        open={loginSuccessMessage && true}
        autoHideDuration={2000}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        onClose={() => setLoginSuccessMessage(null)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          {loginSuccessMessage}
        </Alert>
      </Snackbar>
      <Snackbar
        open={loginFailedMessage && true}
        autoHideDuration={2000}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        onClose={() => setLoginFailedMessage(null)}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {loginFailedMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
