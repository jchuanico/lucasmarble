/* ============ CONFIG: edit these to earn commissions ============ */
window.CONFIG = {
  // Amazon Associates tracking ID (sign up at https://affiliate-program.amazon.com).
  // Looks like "yourname-20". Leave "" until approved; links still work, just untracked.
  amazonTag: "",
  // Optional extra stores. {q} is replaced with the search text. Paste your
  // affiliate deep-link format here (e.g. Walmart / Target via Impact.com).
  extraStores: [
    // { name: "Walmart", url: "https://www.walmart.com/search?q={q}" },
  ],
  // Optional shared poll: deploy apps-script.gs as a Google Apps Script web app
  // and paste its /exec URL here. Empty = votes are counted on this device only.
  voteEndpoint: ""
};

/* ============ SQUISH DATABASE ============ */
window.SQUISHES = [
  { id: "cam", name: "Cam the Cat", type: "cat", body: "#b9bec8", belly: "#eef0f4", accent: "#ffb3c6",
    squad: "Cozy Squad", fav: "Warm blankets & cookies",
    bio: "Cam is the ultimate couch buddy. Give Cam a sunny windowsill and a soft blanket and you have a friend for life. Quiet, loyal, and always up for a nap." },
  { id: "wendy", name: "Wendy the Frog", type: "frog", body: "#8fd36b", belly: "#e6f7c9", accent: "#ff9fb5",
    squad: "Pond Pals", fav: "Leaping into puddles",
    bio: "Wendy is a giggly, bouncy frog who never met a puddle she didn't jump into. She loves spring rain, crunchy salads, and making her friends laugh." },
  { id: "malcolm", name: "Malcolm the Mushroom", type: "mushroom", body: "#fff3df", belly: null, accent: "#e8473f",
    squad: "Forest Friends", fav: "Quiet walks in the woods",
    bio: "Malcolm is a gentle little mushroom who is a bit shy at first. Once you get to know him, he'll tell you every secret of the forest floor." },
  { id: "archie", name: "Archie the Axolotl", type: "axolotl", body: "#ffc2d9", belly: "#ffe6ef", accent: "#ff7fae",
    squad: "Water Buddies", fav: "Bubbles & strawberries",
    bio: "Archie is a goofy, wiggly axolotl who's always smiling. He loves blowing bubbles, trying new snacks, and swimming in circles just for fun." },
  { id: "connor", name: "Connor the Cow", type: "cow", body: "#ffffff", belly: null, accent: "#2b2b33",
    squad: "Farm Squad", fav: "Milkshakes in the meadow",
    bio: "Connor is the most chill cow on the farm. He spends sunny days lounging in the grass and is famous for making the best milkshakes around." },
  { id: "fifi", name: "Fifi the Fox", type: "fox", body: "#ff9a4d", belly: "#fff4e8", accent: "#3a2a22",
    squad: "Forest Friends", fav: "Exploring new trails",
    bio: "Fifi is a brave little explorer with a bushy tail and a big heart. If there's a new trail, a hidden cave, or a mystery to solve, Fifi is first in line." },
  { id: "hans", name: "Hans the Hedgehog", type: "hedgehog", body: "#c99a6e", belly: "#f6e3c8", accent: "#7a5638",
    squad: "Cozy Squad", fav: "Autumn leaves & cocoa",
    bio: "Hans looks prickly but he's a total softie. He collects colorful fall leaves and shares his cocoa with anyone who looks like they need a hug." },
  { id: "winston", name: "Winston the Owl", type: "owl", body: "#8fa4e6", belly: "#dfe6ff", accent: "#ffb547",
    squad: "Night Owls", fav: "Stargazing & stories",
    bio: "Winston is a wise, dreamy owl who stays up late to count the stars. He knows a bedtime story for every night of the year." },
  { id: "maui", name: "Maui the Pineapple", type: "pineapple", body: "#ffd85a", belly: null, accent: "#4caf50",
    squad: "Snack Squad", fav: "Beach days & smoothies",
    bio: "Maui is a sunshiny pineapple who brings the party wherever she goes. Sandy toes, fruity smoothies, and dance-offs are her favorite things." },
  { id: "jack", name: "Jack the Black Cat", type: "cat", body: "#34343f", belly: "#4a4a58", accent: "#ff9fb5", eye: "#ffd84d", ink: "#ffe9a8",
    squad: "Night Owls", fav: "Moonlit adventures",
    bio: "Jack is a brave, mysterious kitty who loves spooky season. He's not scary at all, just a little dramatic, and he purrs the loudest of anyone." },
  { id: "lola", name: "Lola the Unicorn", type: "unicorn", body: "#ffffff", belly: "#fff0f8", accent: "#c79bff",
    squad: "Magic Squad", fav: "Rainbows & cupcakes",
    bio: "Lola is a sparkly, dreamy unicorn who believes in magic. She paints rainbows, bakes cupcakes, and sprinkles a little glitter on every day." },
  { id: "gordon", name: "Gordon the Shark", type: "shark", body: "#8aa3b8", belly: "#f2f6fa", accent: "#ff9fb5",
    squad: "Water Buddies", fav: "Surfing big waves",
    bio: "Gordon is a bold, friendly shark who only looks tough. He loves surfing, pizza parties, and protecting his friends from scary seaweed." }
];

/* ============ 6 QUESTIONS ============ */
window.QUESTIONS = [
  { q: "Pick a color vibe!", mascot: "lola", a: [
    { t: "Pink & purple", e: "💗", p: ["archie", "lola"] },
    { t: "Green & leafy", e: "🌿", p: ["wendy", "maui"] },
    { t: "Blues & grays", e: "💙", p: ["cam", "winston", "gordon"] },
    { t: "Warm orange & red", e: "🧡", p: ["fifi", "malcolm", "hans"] },
    { t: "Sunny yellow", e: "💛", p: ["maui", "fifi"] },
    { t: "Black & white", e: "🖤", p: ["connor", "jack"] } ] },
  { q: "Where would you rather hang out?", mascot: "wendy", a: [
    { t: "Cozy couch", e: "🛋️", p: ["cam", "hans"] },
    { t: "Enchanted forest", e: "🌲", p: ["malcolm", "fifi", "lola"] },
    { t: "Pond or ocean", e: "🌊", p: ["wendy", "archie", "gordon"] },
    { t: "Sunny farm", e: "🌻", p: ["connor", "hans"] },
    { t: "Tropical beach", e: "🏝️", p: ["maui", "gordon"] },
    { t: "Under the stars", e: "🌙", p: ["winston", "jack"] } ] },
  { q: "Choose a snack!", mascot: "maui", a: [
    { t: "Fresh fruit", e: "🍓", p: ["maui", "archie"] },
    { t: "Cookies & milk", e: "🍪", p: ["cam", "connor", "hans"] },
    { t: "Crunchy salad", e: "🥗", p: ["wendy", "malcolm"] },
    { t: "Pizza", e: "🍕", p: ["gordon", "fifi"] },
    { t: "Cupcakes", e: "🧁", p: ["lola", "archie"] },
    { t: "Movie popcorn", e: "🍿", p: ["jack", "winston"] } ] },
  { q: "Which one sounds most like you?", mascot: "fifi", a: [
    { t: "Shy & sweet", e: "🥺", p: ["hans", "malcolm", "cam"] },
    { t: "Silly & goofy", e: "🤪", p: ["wendy", "maui", "archie"] },
    { t: "Brave & bold", e: "💪", p: ["gordon", "jack", "fifi"] },
    { t: "Calm & chill", e: "😌", p: ["connor", "cam"] },
    { t: "Dreamy & creative", e: "🎨", p: ["lola", "winston"] },
    { t: "Curious explorer", e: "🔎", p: ["fifi", "winston", "wendy"] } ] },
  { q: "Favorite season?", mascot: "hans", a: [
    { t: "Spring", e: "🌷", p: ["wendy", "lola", "archie"] },
    { t: "Summer", e: "☀️", p: ["maui", "gordon", "connor"] },
    { t: "Fall", e: "🍂", p: ["fifi", "hans", "malcolm", "jack"] },
    { t: "Winter", e: "❄️", p: ["cam", "winston"] } ] },
  { q: "What kind of squish do you want to hug?", mascot: "cam", a: [
    { t: "A furry animal friend", e: "🐾", p: ["cam", "connor", "fifi", "hans"] },
    { t: "Something magical", e: "✨", p: ["lola", "winston", "jack"] },
    { t: "Something yummy or leafy", e: "🍄", p: ["maui", "malcolm"] },
    { t: "A water buddy", e: "💧", p: ["wendy", "archie", "gordon"] } ] }
];
