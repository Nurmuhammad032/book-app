import { Box, CircularProgress, Stack } from "@mui/material";

const Loader = () => (
  <Box
    minHeight="100vh"
    width={"100%"}
    top={0}
    left={0}
    position={"fixed"}
    zIndex={50}
    sx={{ background: "rgba(0,0,9,0.6)" }}
  >
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width={"100%"}
    >
      <CircularProgress />
    </Stack>
  </Box>
);

export default Loader;
