export const downloadConfig = (config) => {
  const blob = new Blob([JSON.stringify(config, null, 2)], {
    type: "application/json",
  });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${config.configName || "config"}.json`;
  link.click();
};

export const loadConfig = (e, setConfig) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    const loadedConfig = JSON.parse(event.target.result);
    setConfig(loadedConfig);
  };
  reader.readAsText(file);
};
