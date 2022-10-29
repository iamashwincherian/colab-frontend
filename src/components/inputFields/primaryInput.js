import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.css";

export default function InputField(props) {
    return (
        <Box className="input-field" marginBottom={"20px"} {...props.style}>
            <p
                style={{
                    marginBottom: "10px",
                    fontSize: "16px",
                    color: "#585757",
                }}
            >
                {props.label}
                {props.required && (
                    <span style={{ color: "red", marginLeft: "5px" }}>*</span>
                )}
            </p>
            <input
                type={props.type || "text"}
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
                required={props.required || false}
                autoComplete={props.autoComplete || "on"}
            />
            {props.subLink?.title && (
                <small style={{ float: "right", marginBottom: "10px" }}>
                    <Link
                        to={props.subLink.link}
                        style={{
                            textAlign: "center",
                            display: "block",
                            textDecoration: "none",
                            color: "#585757",
                            marginTop: "5px",
                            marginBottom: "10px",
                        }}
                    >
                        {props.subLink.title}
                    </Link>
                </small>
            )}
        </Box>
    );
}
