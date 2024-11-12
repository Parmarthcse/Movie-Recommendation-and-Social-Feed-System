const ChatButton = () => {
    // Replace with your Chatango room URL
  // Replace with your Chatango room URL
  const chatUrl = "https://commudle.chatango.com/";
  
  return (
    <button
      onClick={() => window.open(chatUrl, "_blank")}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        color: "white",
        backgroundColor: "#EF0107",
        border: "none",
        borderRadius: "3px",
        cursor: "pointer"
      }}
    >

      Community
    </button>
  );
};

export default ChatButton;
  



  