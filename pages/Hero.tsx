import Typography from "../src/components/Typography";
export default function Hero() {
  return (
    <div
      style={{
        background: "rgb(159,61,164)",
        background:
          "linear-gradient(70deg, rgba(159,61,164,1) 0%, rgba(0,212,255,1) 100%)",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 200,
      }}
    >
      <Typography component="h1" variant="h2" style={{ color: "white" }}>
        Aurora
      </Typography>
    </div>
  );
}
