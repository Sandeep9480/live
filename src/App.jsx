import React, { useState } from "react";
import ConfigForm from "./components/configForm/ConfigForm";
import ChatPreview from "./components/chatPreview/ChatPreview";
import { downloadConfig, loadConfig } from "./components/FileHandlers";
import "./App.css";

const App = () => {
  const [config, setConfig] = useState({
    configName: "config-1",
    botName: "Greebo",
    fontFamily: "Space Grotesk, sans-serif",
    headerColor: "#E63A1E",
    headerFontColor: "#FFFFFF",
    backgroundColor: "#E8E1DB",
    chatFontColor: "#323130",
    avatarImage: "",
    launcherImage: "",
  });

  return (
    <div className="app">
      <div className="left-panel">
        <button
          style={{
            width: "35%",
            height: "5%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            cursor: "pointer",
            marginBottom: "5%",
          }}
          onClick={() => document.getElementById("loadConfigInput")?.click()}
        >
          <span>Load Config</span>
          <input
            hidden
            id="loadConfigInput"
            type="file"
            accept="application/json"
            onChange={(e) => loadConfig(e, setConfig)}
          />
        </button>

        <ConfigForm config={config} setConfig={setConfig} />
      </div>
      <div className="right-panel">
        <ChatPreview config={config} />
        <div style={{ position: "absolute", bottom: "0" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {" "}
            <button onClick={() => downloadConfig(config)}>
              Download Config
            </button>
            <p style={{ opacity: "0.7" }}>{config.configName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
