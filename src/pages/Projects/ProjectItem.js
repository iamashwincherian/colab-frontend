import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function ProjectItem(props) {
    const { projectName } = useParams();

    return <Container>
        <Typography variant="h6">{projectName}</Typography>
    </Container>;
}
