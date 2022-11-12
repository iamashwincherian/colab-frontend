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
import { useNavigate } from "react-router-dom";
import InputField from "../components/inputFields/primaryInput";
import { useState } from "react";

export default function CreateOrganisation() {
  const navigate = useNavigate();
  const [loginSuccessMessage, setLoginSuccessMessage] = useState(null);
  const [loginFailedMessage, setLoginFailedMessage] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();

    navigate("/projects");
  };

  return (
    <div
      style={{
        background: "#DFDFDF",
      }}
    >
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
                  Create your organisation
                </Typography>
                <div style={{ margin: "10px" }}></div>
                <hr></hr>
                <Box sx={{ margin: "20px 0" }}>
                  <InputField
                    label="Organisation name"
                    placeholder="Enter your organisation name"
                    name="name"
                    type="text"
                    autoComplete={"off"}
                    required
                  />

                  <Box marginBottom={"20px"}>
                    <Button
                      size="large"
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                      onClick={() => setLoginSuccessMessage(true)}
                    >
                      <span style={{ color: "white" }}>Continue</span>
                    </Button>
                  </Box>
                </Box>
              </form>
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
          Welcome back User!
        </Alert>
      </Snackbar>
      <Snackbar
        open={loginFailedMessage && true}
        autoHideDuration={2000}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        onClose={() => setLoginFailedMessage(null)}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          Login failed!
        </Alert>
      </Snackbar>
    </div>
  );
}
