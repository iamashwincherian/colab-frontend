import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

export default function NavLayout({ children }) {
    return (
        <div>
            <AppBar position="static" sx={{mb: "20px"}}>
                <Container>
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            Collab
                        </Typography>

                        {/* Mobile */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <Typography variant="h6">Home</Typography>
                        </Box>

                        {/* Web */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "flex" },
                            }}
                        >
                            <Button
                                sx={{ color: "white", my: 2, display: "block" }}
                            >
                                Home
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {children}
        </div>
    );
}
