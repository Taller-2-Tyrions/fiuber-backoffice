import React from "react";
import Home from "./modules/Home";
import {AuthProvider} from "./useAuth";

const App = () => {

  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App;
