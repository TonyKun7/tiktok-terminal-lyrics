# TikTok Terminal Lyrics

A small Node.js script that displays **song lyrics in the terminal** with color and typing animation — perfect for creating stylish TikTok videos.

---

## Preview

The script prints lyrics line by line, character by character, with different colors depending on the singer:

* **Men** → cyan
* **Women** → magenta

Each character has a custom typing delay, and each line can pause before the next, creating a dynamic “typed” effect in the terminal.

---

## Installation

1. Clone the project:

   ```bash
   git clone <your-repo-url>
   cd tiktok-terminal-lyrics
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

## Usage

### Development

Run the script in development mode:

```bash
npm run dev
```

### Build & Run

1. Compile TypeScript:

```bash
npm run build
```

2. Run the compiled script:

```bash
npm run start
```

The terminal will display the lyrics with colors and delays as configured.

---

## Lyrics Customization

Lyrics are defined in `rockLyrics.ts`:

```ts
export const rockLyrics: { text: string; writeIn: number; sleepDelay: number; who: string; }[] = [
    { text: "I wanna da-", writeIn: 0.06, sleepDelay: 0.2, who: "men" },
    { text: "Rock that body", writeIn: 0.069, sleepDelay: 0.18, who: "lady" },
    ...
]
```

* `text` → the line to display
* `writeIn` → typing delay per character (seconds)
* `sleepDelay` → pause after the line (seconds)
* `who` → `"men"` or `"women"` for color

You can add or modify lyrics to create your own TikTok animation.

---

## Dependencies

* [chalk](https://www.npmjs.com/package/chalk) → for terminal text coloring

---

## Notes

* This script is designed to **animate text in the terminal**, which can then be captured for **TikTok or other short videos**.
* Compatible with Node.js and TypeScript.
