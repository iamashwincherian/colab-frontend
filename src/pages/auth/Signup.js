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

export default function Signup() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signupSuccessMessage, setSignupSuccessMessage] = useState(null);
    const [signupFailedMessage, setSignupFailedMessage] = useState(null);

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            const username = email.split("@")[0];
            const res = await fetch("/auth/signup", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    name,
                    username,
                    email,
                    password,
                }),
            }).then((res) => res.json());
            setUser(res.data.user);
            setSignupFailedMessage(null);
            setSignupSuccessMessage("Successfully Signed Up!");
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (error) {
            setSignupFailedMessage("Invalid singup");
            setSignupSuccessMessage(null);
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
                    <Card sx={{ minWidth: 500 }}>
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
                                    Sign up
                                </Typography>
                                <p
                                    style={{
                                        margin: "10px 0 15px 0",
                                        fontSize: "16px",
                                        color: "#585757",
                                    }}
                                >
                                    Become a member and enjoy exclusive{" "}
                                    <br></br>deals, offers, invites and rewards.
                                </p>
                                <hr></hr>
                                <Box sx={{ margin: "20px 0" }}>
                                    <InputField
                                        label="Name"
                                        placeholder="Enter your full name"
                                        name="name"
                                        type="text"
                                        value={name}
                                        setValue={setName}
                                        required
                                    />
                                    <InputField
                                        label="Email"
                                        placeholder="Enter your email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        setValue={setEmail}
                                        required
                                    />

                                    <InputField
                                        label="Create a password"
                                        placeholder="Min 8 characters"
                                        name="password"
                                        type="password"
                                        value={password}
                                        setValue={setPassword}
                                        required
                                    />

                                    <InputField
                                        label="Date of Birth"
                                        placeholder="Min 8 characters"
                                        name="password"
                                        type="date"
                                        required
                                    />

                                    <Box marginBottom={"20px"}>
                                        <Button
                                            size="large"
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            fullWidth
                                        >
                                            <span style={{ color: "white" }}>
                                                Sign Up
                                            </span>
                                        </Button>
                                    </Box>
                                </Box>
                            </form>
                            <hr></hr>
                            <Link
                                to={"/login"}
                                style={{
                                    textAlign: "center",
                                    display: "block",
                                    textDecoration: "none",
                                    color: "#585757",
                                    marginTop: "15px",
                                }}
                            >
                                Already a user?
                                <span
                                    style={{
                                        color: "#2ecc71",
                                        marginLeft: "5px",
                                    }}
                                >
                                    Login
                                </span>
                            </Link>
                        </CardContent>
                    </Card>
                </Stack>
            </Container>

            <Snackbar
                open={signupSuccessMessage && true}
                autoHideDuration={2000}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                onClose={() => setSignupSuccessMessage(null)}
            >
                <Alert severity="success" sx={{ width: "100%" }}>
                    Successfully created account
                </Alert>
            </Snackbar>
            <Snackbar
                open={signupFailedMessage && true}
                autoHideDuration={2000}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                onClose={() => setSignupFailedMessage(null)}
            >
                <Alert severity="error" sx={{ width: "100%" }}>
                    Signup failed!
                </Alert>
            </Snackbar>
        </div>
    );
}
