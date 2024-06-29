body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #333;
    color: #fff;
    font-family: Arial, sans-serif;
  }
  
  .container {
    text-align: center;
    max-width: 90%;
    margin: 0 auto;
  }
  
  .spinner {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    margin: 0 auto 20px auto;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .blinking-cursor {
    font-weight: 100;
    font-size: 24px;
    color: white;
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
  }
  
  .hidden {
    display: none;
  }
  
  .status-icon {
    max-width: 50%;
    height: auto;
    margin: 20px auto;
  }
  
  .status-message {
    max-width: 80%;
    margin: 0 auto;
    word-wrap: break-word;
    font-size: 1.2em;
  }
  