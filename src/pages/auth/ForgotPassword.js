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
import { useState } from "react";

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [disabledLogin, setDisabledLogin] = useState(false);
    const [user, setUser] = useState({});
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccessMessage, setLoginSuccessMessage] = useState(null);
    const [loginFailedMessage, setLoginFailedMessage] = useState(null);

    const submitForm = async (e) => {
        e.preventDefault();
        setDisabledLogin(true);

        try {
            await fetch("/auth/password-reset", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });
            setLoginFailedMessage(null);
            setLoginSuccessMessage("Your password got reset successfully");
            setTimeout(() => {
                navigate("/login");
            }, 1000);
        } catch (error) {
            setLoginFailedMessage("Something went wrong");
            setLoginSuccessMessage(null);
            setDisabledLogin(false);
        }
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
                                    Forgot Password
                                </Typography>
                                <div style={{ margin: "10px" }}></div>
                                <hr></hr>
                                <Box sx={{ margin: "20px 0" }}>
                                    <InputField
                                        label="Username"
                                        placeholder="Enter your username"
                                        name="username"
                                        type="text"
                                        value={username}
                                        setValue={setUsername}
                                        required
                                    />
                                    <InputField
                                        label="New password"
                                        placeholder=""
                                        name="password"
                                        type="password"
                                        value={password}
                                        setValue={setPassword}
                                        required
                                    />
                                    <InputField
                                        label="Confirm new password"
                                        placeholder=""
                                        name="password-confirm"
                                        type="password"
                                        required
                                    />

                                    <Box marginBottom={"20px"}>
                                        <Button
                                            size="large"
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            fullWidth
                                            disabled={disabledLogin}
                                            sx={{ textTransform: "none" }}
                                        >
                                            <span style={{ color: "white" }}>
                                                Reset
                                            </span>
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
