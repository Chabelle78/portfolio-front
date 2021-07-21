import React from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import queryClient from "./API/query-clients";
import Layout from "./Layout";

function App() {
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout />
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
