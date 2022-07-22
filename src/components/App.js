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

const App = () => {
    return (
        <Container sx={{ height: "100vh" }}>
            <Stack
                sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                }}
            >
                <Card sx={{minWidth: 350}}>
                    <CardContent>
                        <form>
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

export default App;
