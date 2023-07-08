import { useRouteError } from "react-router-dom";
import "../App.css";

export default function PaginaError() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oh noo!</h1>
      <p>Esta es una pagina de error.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}