export type Quote = {
  text: string;
  author: string;
  topic: string;
};

export const quotes: Quote[] = [
  // Business quotes
  {
    text: "Business opportunities are like buses, there's always another one coming.",
    author: "Richard Branson",
    topic: "business"
  },
  {
    text: "The secret of business is to know something that nobody else knows.",
    author: "Aristotle Onassis",
    topic: "business"
  },
  {
    text: "To succeed in business, to reach the top, an individual must know all it is possible to know about that business.",
    author: "J. Paul Getty",
    topic: "business"
  },
  // Coding quotes
  {
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    topic: "coding"
  },
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    topic: "coding"
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    topic: "coding"
  },
  // Fail quotes
  {
    text: "Failure is simply the opportunity to begin again, this time more intelligently.",
    author: "Henry Ford",
    topic: "fail"
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
    topic: "fail"
  },
  {
    text: "Success is not built on success. It's built on failure, frustration, and sometimes even catastrophe.",
    author: "Sumner Redstone",
    topic: "fail"
  }
];
