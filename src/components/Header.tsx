import Typography from "@material-ui/core/Typography";

export default function Header() {
    return (
        <>
            <Typography
                variant="h4"
                color="primary"
                style={{
                    textAlign: "left",
                    marginTop: "2%",
                    marginLeft: "5%",
                }}
            >
                {" "}
                Photo Gallery
            </Typography>
        </>
    );
}
