import React from "react";
import "./styles.css";

const ChatPreview = ({ config }) => {
  const {
    botName,
    headerColor,
    headerFontColor,
    backgroundColor,
    chatFontColor,
    fontFamily,
    avatarImage,
    launcherImage,
  } = config;

  return (
    <>
      <div className="live-preview">
        <div className="live-indicator">
          <div className="indicator-dot"></div>
          <p>Live Preview</p>
        </div>
      </div>

      <div className="chat-preview">
        <div
          className="chat-header"
          style={{
            backgroundColor: headerColor,
            color: headerFontColor,
          }}
        >
          <div>{botName}</div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="close-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div
          className="chat-body"
          style={{
            backgroundColor: backgroundColor,
            color: chatFontColor,
            fontFamily: fontFamily,
          }}
        >
          {avatarImage && (
            <img src={avatarImage} alt="Avatar" className="avatar" />
          )}
          Hi! I'm {botName}, your virtual assistant. How can I help?
        </div>

        <div className="chat-footer">
          <p>Need help? Just type or say it</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mic-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
            />
          </svg>
        </div>
      </div>
      <div className="chat-launcher">
        {launcherImage && <img src={launcherImage} alt="Launcher" />}
      </div>
    </>
  );
};

export default ChatPreview;
