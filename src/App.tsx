import routes from "router";
import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const content = useRoutes(routes);

  return (
    <>
      {/* {isLoading === true && (
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.2)',
            zIndex: 100,
            position: 'fixed',
            display: 'flex',
            height: '100vh',
            width: '100vw',
          }}
        >
          <Spinner />
        </div>
      )} */}
      <ToastContainer
        hideProgressBar={true}
        autoClose={1500}
        theme='colored'
      />
      {content}
    </>
  );
}

export default App;
