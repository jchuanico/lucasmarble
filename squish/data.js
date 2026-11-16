/* ============ CONFIG: edit these to earn commissions ============ */
window.CONFIG = {
  // Amazon Associates tracking IDs. Each Amazon store has its own program and its own tag.
  // Amazon.ca: https://associates.amazon.ca   Amazon.com: https://affiliate-program.amazon.com
  stores: [
    { name: "Amazon.ca", flag: "🇨🇦", domain: "www.amazon.ca", tag: "squishfinder-20" },
    { name: "Amazon.com", flag: "🇺🇸", domain: "www.amazon.com", tag: "" } // add your .com tag when approved
  ],
  // Shared poll: Google Apps Script web app URL (see apps-script.gs). Empty = votes stay on this device.
  voteEndpoint: "https://script.google.com/macros/s/AKfycbwqpz3QB9vG-Jt8uThlZAInjkT9w-5cvu0fkqL-2dpk3LDBiHDekKw38NZxGRQF0RTi/exec"
};

/* ============ SQUISH DATABASE ============
   All 18 confirmed with plush listings on Amazon.ca (Nov 2026). Bios are fan-written. */
window.SQUISHES = [
  { id: "cam", name: "Cam the Cat", type: "cat", body: "#f3e6d6", belly: "#fffaf3", accent: "#ffb3c6",
    spots: [[52,84,20,15,"#b5793f"],[146,72,15,11,"#3a2e2e"],[150,152,18,13,"#3a2e2e"],[58,150,14,10,"#b5793f"]],
    squad: "Cozy Squad", fav: "Warm blankets & cookies",
    bio: "Cam is a calico cuddle expert with brown and black patches. Give Cam a sunny windowsill and a soft blanket and you have a friend for life. Quiet, loyal, and always up for a nap." },
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
  { id: "fifi", name: "Fifi the Fox", type: "fox", body: "#f2733a", belly: "#fff4e8", accent: "#ffffff",
    squad: "Forest Friends", fav: "Exploring new trails",
    bio: "Fifi is a brave little red fox with a big heart. If there's a new trail, a hidden cave, or a mystery to solve, Fifi is first in line." },
  { id: "hans", name: "Hans the Hedgehog", type: "hedgehog", body: "#c99a6e", belly: "#f6e3c8", accent: "#7a5638",
    squad: "Cozy Squad", fav: "Autumn leaves & cocoa",
    bio: "Hans looks prickly but he's a total softie. He collects colorful fall leaves and shares his cocoa with anyone who looks like they need a hug." },
  { id: "winston", name: "Winston the Owl", type: "owl", body: "#4fb3b0", belly: "#d7f2ef", accent: "#ffb547",
    squad: "Night Owls", fav: "Stargazing & stories",
    bio: "Winston is a wise, dreamy teal owl who stays up late to count the stars. He knows a bedtime story for every night of the year." },
  { id: "maui", name: "Maui the Pineapple", type: "pineapple", body: "#ffd85a", belly: null, accent: "#4caf50",
    squad: "Snack Squad", fav: "Beach days & smoothies",
    bio: "Maui is a sunshiny pineapple who brings the party wherever she goes. Sandy toes, fruity smoothies, and dance-offs are her favorite things." },
  { id: "lola", name: "Lola the Unicorn", type: "unicorn", body: "#e9d2ff", belly: "#ffffff", accent: "#a46be0",
    squad: "Magic Squad", fav: "Rainbows & cupcakes",
    bio: "Lola is a sparkly tie-dye unicorn who believes in magic. She paints rainbows, bakes cupcakes, and sprinkles a little glitter on every day." },
  { id: "gordon", name: "Gordon the Shark", type: "shark", body: "#8aa3b8", belly: "#f2f6fa", accent: "#ff9fb5",
    squad: "Water Buddies", fav: "Surfing big waves",
    bio: "Gordon is a bold, friendly shark who only looks tough. He loves surfing, pizza parties, and protecting his friends from scary seaweed." },
  { id: "benny", name: "Benny the Bigfoot", type: "bigfoot", body: "#9b6b43", belly: "#e8c9a3", accent: "#7a5032",
    squad: "Legends Squad", fav: "Hiking & taking photos",
    bio: "Benny is a fuzzy, friendly bigfoot who loves hiking deep in the woods. He's always snapping photos of his adventures, but somehow he's never in any of them." },
  { id: "avery", name: "Avery the Mallard", type: "duck", body: "#b39a80", belly: "#efe4d4", accent: "#2f8f5b",
    squad: "Pond Pals", fav: "Paddling & bread crumbs",
    bio: "Avery is a cheerful mallard duck with a shiny green head. She waddles to the pond every morning and quacks hello to everyone she meets." },
  { id: "stacy", name: "Stacy the Squid", type: "squid", body: "#b48cff", belly: "#eadfff", accent: "#9466e8",
    squad: "Sea Squad", fav: "Deep-sea dance parties",
    bio: "Stacy is a sweet purple squid who can wave all her arms at once. She's a little shy, but at an underwater dance party she's the star." },
  { id: "danny", name: "Danny the Dinosaur", type: "dino", body: "#7cc96b", belly: "#e6f5c8", accent: "#4f9e45",
    squad: "Dino Squad", fav: "Stomping & big snacks",
    bio: "Danny is a big-hearted dinosaur who loves to stomp around and play. His roar sounds scary, but it's really just his way of saying \"let's be friends!\"" },
  { id: "sunny", name: "Sunny the Bee", type: "bee", body: "#ffd84d", belly: "#ffd0e0", accent: "#2b2235",
    squad: "Garden Squad", fav: "Flowers & honey",
    bio: "Sunny is a busy little bumblebee with a rainbow heart. She buzzes from flower to flower and shares honey with all her garden friends." },
  { id: "leonard", name: "Leonard the Lion", type: "lion", body: "#f5c26b", belly: "#fff0cf", accent: "#e0812e",
    squad: "Safari Squad", fav: "Sunbathing on rocks",
    bio: "Leonard is a gentle lion with a big fluffy mane. He looks like a king, but his favorite thing is a long nap in the warm sun." },
  { id: "claudia", name: "Claudia the Beet", type: "beet", body: "#a8378f", belly: null, accent: "#ff8fc8", ink: "#2b1630",
    squad: "Veggie Squad", fav: "Gardens & headbands",
    bio: "Claudia is a stylish purple beet who never leaves the garden without her pink headband. She's calm, kind, and always rooting for her friends." }
];

/* ============ 6 QUESTIONS ============ */
window.QUESTIONS = [
  { q: "Pick a color vibe!", mascot: "lola", a: [
    { t: "Pink & purple", e: "💗", p: ["archie", "lola", "stacy", "claudia"] },
    { t: "Green & leafy", e: "🌿", p: ["wendy", "danny", "avery"] },
    { t: "Blues & teals", e: "💙", p: ["winston", "gordon"] },
    { t: "Warm orange & red", e: "🧡", p: ["fifi", "malcolm", "leonard"] },
    { t: "Sunny yellow", e: "💛", p: ["sunny", "maui", "leonard"] },
    { t: "Browns, black & white", e: "🤎", p: ["connor", "cam", "hans", "benny"] } ] },
  { q: "Where would you rather hang out?", mascot: "wendy", a: [
    { t: "Cozy couch", e: "🛋️", p: ["cam", "hans"] },
    { t: "Enchanted forest", e: "🌲", p: ["malcolm", "fifi", "lola", "benny"] },
    { t: "Pond or ocean", e: "🌊", p: ["wendy", "archie", "gordon", "stacy", "avery"] },
    { t: "Farm or garden", e: "🌻", p: ["connor", "sunny", "claudia"] },
    { t: "Jungle or beach", e: "🏝️", p: ["maui", "leonard", "danny"] },
    { t: "Under the stars", e: "🌙", p: ["winston", "benny"] } ] },
  { q: "Choose a snack!", mascot: "maui", a: [
    { t: "Fresh fruit", e: "🍓", p: ["maui", "archie", "avery"] },
    { t: "Cookies & milk", e: "🍪", p: ["cam", "connor", "hans"] },
    { t: "Crunchy veggies", e: "🥕", p: ["wendy", "malcolm", "claudia"] },
    { t: "Pizza", e: "🍕", p: ["gordon", "fifi", "leonard", "danny"] },
    { t: "Cupcakes & honey", e: "🍯", p: ["lola", "sunny", "stacy"] },
    { t: "Movie popcorn", e: "🍿", p: ["winston", "benny"] } ] },
  { q: "Which one sounds most like you?", mascot: "fifi", a: [
    { t: "Shy & sweet", e: "🥺", p: ["hans", "malcolm", "cam", "stacy"] },
    { t: "Silly & goofy", e: "🤪", p: ["wendy", "maui", "archie", "avery"] },
    { t: "Brave & bold", e: "💪", p: ["gordon", "leonard", "fifi", "danny"] },
    { t: "Calm & chill", e: "😌", p: ["connor", "cam", "claudia"] },
    { t: "Dreamy & creative", e: "🎨", p: ["lola", "winston", "sunny"] },
    { t: "Curious explorer", e: "🔎", p: ["fifi", "benny", "wendy"] } ] },
  { q: "Favorite season?", mascot: "hans", a: [
    { t: "Spring", e: "🌷", p: ["wendy", "lola", "archie", "sunny", "claudia"] },
    { t: "Summer", e: "☀️", p: ["maui", "gordon", "connor", "stacy", "leonard"] },
    { t: "Fall", e: "🍂", p: ["fifi", "hans", "malcolm", "benny"] },
    { t: "Winter", e: "❄️", p: ["cam", "winston", "avery", "danny"] } ] },
  { q: "What kind of squish do you want to hug?", mascot: "cam", a: [
    { t: "A furry animal friend", e: "🐾", p: ["cam", "connor", "fifi", "hans", "leonard"] },
    { t: "Something magical", e: "✨", p: ["lola", "winston"] },
    { t: "Something yummy or leafy", e: "🍄", p: ["maui", "malcolm", "claudia"] },
    { t: "A water buddy", e: "💧", p: ["wendy", "archie", "gordon", "stacy", "avery"] },
    { t: "A buzzy little bug", e: "🐝", p: ["sunny"] },
    { t: "A dino or a legend", e: "🦖", p: ["danny", "benny"] } ] }
];
