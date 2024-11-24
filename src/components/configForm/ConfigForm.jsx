import React from "react";
import "./styles.css"; // Connect the CSS file

const ConfigForm = ({ config, setConfig }) => {
  const { avatarImage, launcherImage } = config;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig((prevConfig) => ({ ...prevConfig, [name]: value }));
  };

  const handleFileUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setConfig((prevConfig) => ({ ...prevConfig, [field]: fileURL }));
    }
  };

  return (
    <div className="config-form">
      <label>
        Config Name:
        <input
          type="text"
          name="configName"
          value={config.configName}
          onChange={handleChange}
        />
      </label>
      <label>
        Bot Name:
        <input
          type="text"
          name="botName"
          value={config.botName}
          onChange={handleChange}
        />
      </label>
      <label>
        Font Family:
        <select
          name="fontFamily"
          value={config.fontFamily}
          onChange={handleChange}
          className="font-family-select"
        >
          <option value="Arial, sans-serif">Arial</option>
          <option value="Space Grotesk, sans-serif">Space Grotesk</option>
          <option value="Courier New, monospace">Courier New</option>
        </select>
      </label>
      <label>
        Header Color:
        <div className="color-input">
          <input
            type="text"
            value={config.headerColor}
            onChange={handleChange}
            name="headerColor"
            className="text-input"
            placeholder="#FFFFFF"
            style={{ width: "30%", background: "none", border: "none" }}
          />
          <input
            type="color"
            name="headerColor"
            value={config.headerColor}
            onChange={handleChange}
            className="color-picker"
          />
        </div>
      </label>
      <label>
        Header Font Color:
        <div className="color-input">
          <input
            type="text"
            value={config.headerFontColor}
            onChange={handleChange}
            name="headerFontColor"
            className="text-input"
            placeholder="#FFFFFF"
            style={{ width: "30%", background: "none", border: "none" }}
          />
          <input
            type="color"
            name="headerFontColor"
            value={config.headerFontColor}
            onChange={handleChange}
            className="color-picker"
          />
        </div>
      </label>
      <label>
        Background Color:
        <div className="color-input">
          <input
            type="text"
            value={config.backgroundColor}
            onChange={handleChange}
            name="backgroundColor"
            className="text-input"
            placeholder="#FFFFFF"
            style={{ width: "30%", background: "none", border: "none" }}
          />
          <input
            type="color"
            name="backgroundColor"
            value={config.backgroundColor}
            onChange={handleChange}
            className="color-picker"
          />
        </div>
      </label>
      <label>
        Chat Font Color:
        <div className="color-input">
          <input
            type="text"
            value={config.chatFontColor}
            onChange={handleChange}
            name="chatFontColor"
            className="text-input"
            placeholder="#FFFFFF"
            style={{ width: "30%", background: "none", border: "none" }}
          />
          <input
            type="color"
            name="chatFontColor"
            value={config.chatFontColor}
            onChange={handleChange}
            className="color-picker"
          />
        </div>
      </label>
      <label>
        Avatar Image:
        <div className="image-input">
          <img
            src={avatarImage || "https://via.placeholder.com/40"}
            alt="Avatar Preview"
            className="image-preview"
          />
          <input
            hidden
            id="avatarImageInput"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e, "avatarImage")}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="upload-icon"
            onClick={() => document.getElementById("avatarImageInput")?.click()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>
        </div>
      </label>
      <label>
        Launcher Image:
        <div className="image-input">
          <img
            src={launcherImage || "https://via.placeholder.com/40"}
            alt="Launcher Preview"
            className="image-preview"
          />
          <input
            hidden
            id="launcherImageInput"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e, "launcherImage")}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="upload-icon"
            onClick={() =>
              document.getElementById("launcherImageInput")?.click()
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>
        </div>
      </label>
    </div>
  );
};

export default ConfigForm;
