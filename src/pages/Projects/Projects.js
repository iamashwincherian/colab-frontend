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
import { useNavigate } from "react-router-dom";

export default function Projects() {
    const navigate = useNavigate();
    const projects = ["Customer Center App", "Analytics App"];

    const onMouseOverRow = (e) => {
        e.target.parentElement.style.backgroundColor = "#F4F4F4";
    };

    const onMouseOutRow = (e) => {
        e.target.parentElement.style.backgroundColor = "";
    };

    const openProject = (projectName) => {
        navigate(`/projects/${projectName}`);
    };

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
                            <TableRow
                                sx={{ cursor: "pointer" }}
                                onMouseOver={onMouseOverRow}
                                onMouseOut={onMouseOutRow}
                                onClick={() => openProject(name)}
                            >
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
