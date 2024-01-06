import { Box, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Box padding={5}>
      <NavBar />
      <Heading>Oops</Heading>
      <p>
        {isRouteErrorResponse(error)
          ? "This page does not exist"
          : "Something went wrong"}
      </p>
    </Box>
  );
};

export default ErrorPage;
