import Typography from "@material-ui/core/Typography";

export default function Footer() {
    return (
        <div className="footer">
            <Typography color="textSecondary" variant="body2">
                Created by{"    "}
                <a
                    href="https://github.com/wkj9893"
                    style={{
                        fontSize: "20px",

                        color: "black",
                    }}
                >
                    wkj
                </a>
            </Typography>
        </div>
    );
}
