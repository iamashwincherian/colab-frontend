import {
    Button,
    TextField,
    Box,
    Stack,
    Container,
    Typography,
    Card,
    CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const submitForm = () => {
        navigate("/projects")
    }

    return (
        <Container sx={{ height: "100vh" }}>
            <Stack
                sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                }}
            >
                <Card sx={{minWidth: 400, minHeight: 300}}>
                    <CardContent sx={{ padding: "50px" }}>
                        <form onSubmit={() => submitForm()}>
                            <Typography variant="h5">Login</Typography>
                            <Box sx={{margin: "20px 0"}}>
                                <Box marginBottom={"20px"}>
                                    <TextField
                                        size="small"
                                        variant="outlined"
                                        fullWidth
                                        label="Email"
                                        name="email"
                                        required
                                        type="email"
                                    />
                                </Box>
                                <Box marginBottom={"20px"}>
                                    <TextField
                                        size="small"
                                        variant="outlined"
                                        fullWidth
                                        type="password"
                                        label="Password"
                                        name="password"
                                        required
                                    />
                                </Box>
                                <Box marginBottom={"20px"}>
                                    <Button size="large" variant="contained" color="primary" type="submit" fullWidth>
                                        Login
                                    </Button>
                                </Box>
                            </Box>
                        </form>
                    </CardContent>
                </Card>
            </Stack>
        </Container>
    );
};
