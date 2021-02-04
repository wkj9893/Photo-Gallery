import Typography from "@material-ui/core/Typography";

export default function Title() {
    return (
        <div className="title">
            <Typography
                variant="h5"
                color="primary"
                align="justify"
                gutterBottom
            >
                Photo Gallery
            </Typography>
            <Typography variant="h3" align="center" gutterBottom>
                Your Pictures
            </Typography>
        </div>
    );
}
