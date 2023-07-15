import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An error occured";
  let message = "somethings wrong";
  console.log(error);

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not Found";
    message = "Could not find resource or page";
  }
  return <PageContent title={title} message={message} />;
};

export default ErrorPage;
