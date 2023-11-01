// Define an array of first names
const firstNames = [
    "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Isaac", "Jack",
    "Katherine", "Liam", "Mia", "Noah", "Olivia", "Peter", "Quinn", "Rachel", "Samuel", "Tina",
    "Ulysses", "Victoria", "William", "Xander", "Yvonne", "Zachary", "Amelia", "Benjamin", "Catherine",
    "Daniel", "Emily", "Finn", "Gabriella", "Henry", "Isabella", "Jacob", "Kaitlyn", "Lucas", "Madison",
    "Nathan", "Oliver", "Penelope", "Quincy", "Rebecca", "Sophia", "Thomas", "Uma", "Vincent", "Wendy",
  ];

  const commonWords = [
    "Hello", "like", "subscribe", "comment", "share", "awesome", "video", "stream",
    "chat", "channel", "great","⛔", "🚫", "🚦", "🔞", "📣", "❗", "❌", "❓", "❤️‍🔥", "💔", "content", "fun", "community", "love", "watching",
    "cool", "amazing", "interesting", "awesome", "Superchat", "notifications", "bell",
    "engagement", "interaction", "audience", "thanks", "support", "appreciate",
    "chatting", "interaction", "super", "streaming", "creator", "YouTube", "livestream",
    "join", "congrats", "fantastic", "fans", "live", "broadcast", "greetings","😅", "😂", "🤣", "😊", "😎",
    "👍", "👏", "👌", "👀", "❤️", "🔥", "💯", "🙌", "🙏", "🎉",
    "🔴", "🟢", "🔵", "🟡", "🟣", "🟠", "⚪", "⚫", "🔘", "🔴",
    "🚀", "💎", "💰", "💸", "💵", "🌟", "✨", "🎈", "🎁", "🍕",
    "🍔", "🍦", "🍻", "🎵", "📺", "🎮", "🎤", "📷", "🚗", "✈️",
    
  ];
  
  // Function to generate a random first name
 export  function generateRandomFirstName() {
    const randomIndex = Math.floor(Math.random() * firstNames.length);
    return firstNames[randomIndex];
  }

 export  function generateRandomChatMessage(wordCount) {
    let message = '';
    for (let i = 0; i < wordCount; i++) {
      const randomWord = commonWords[Math.floor(Math.random() * commonWords.length)];
      message += randomWord + ' ';
    }
    return message.trim(); // Remove the trailing space
  }
  
  // Function to generate a random word count between min and max (inclusive)
  export  function getRandomWordCount(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
  