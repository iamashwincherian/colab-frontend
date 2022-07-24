import {
    Button,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

export default function Projects() {
    const projects = ["Project One", "Project Two"];

    return (
        <Container>
            <Typography variant="h6">Projects</Typography>
            <Button variant="contained" color="primary" sx={{ color: "white" }}>
                New
            </Button>

            <TableContainer sx={{ my: "10px" }}>
                <Table size="medium">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Projects</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projects.map((name, index) => (
                            <TableRow onMouseOver={(e) => console.log(e)}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
