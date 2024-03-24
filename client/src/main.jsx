import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import { LineaTestnet } from "@thirdweb-dev/chains";
import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider
    /* desiredChainId={59140} */
    activeChain={LineaTestnet}
    clientId="fdd78fb106b8eeaaec01afacb79b0563"
  >
    <Router>
      <StateContextProvider>
        <App />
        <Component />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);

function Component() {
  const { contract, isLoading } = useContract(
    "0xdb08dB64d1C79cB9E3d412E16C74D3cE98065002"
  );
}
