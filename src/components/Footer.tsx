import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Footer() {
    return (
        <>
            <Typography
                variant="body1"
                style={{
                    marginTop: "5%",
                    marginBottom: "30px",
                }}
            >
                Created by{"    "}{" "}
                <Link
                    href="https://github.com/wkj9893/Photo-Gallery"
                    target="_blank"
                >
                    wkj9893
                </Link>
            </Typography>
        </>
    );
}
