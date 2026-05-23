import { AppServer, AppSession } from "@mentra/sdk";

class VSoulApp extends AppServer {
  protected async onSession(
    session: AppSession,
    sessionId: string,
    userId: string
  ): Promise<void> {
    const messages = [
      '(•°▽°)з ☀️【POW!】',
      'ෆ( •̈ᴗ•̈ )ෆ\nTraining…',
      '❄️ (•°⟡°)ñ I feel energized!',
      '(☆•①•☆)\nKeep going!'
    ];

    for (const msg of messages) {
      session.layouts.showTextWall(msg);
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  }
}

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

const app = new VSoulApp({
  packageName: process.env.PACKAGE_NAME || "com.example.vsoul",
  apiKey: process.env.MENTRA_API_KEY || "",
  port,
  hostname: "0.0.0.0",
});

app.start();
console.log(`V-Soul läuft auf Port ${port}`);import { defineApp } from '@mentra/app';

export default defineApp({
  id: 'com.example.vsoul',
  name: 'V-Soul',
  description: 'Animated Tamagotchi-style companion for Even G1 glasses.',
  async onActivate(session) {
    const messages = [
      '(\u2022\u00b0\u25b3\u00b0)\u0437 \u2600\ufe0f\u3010POW!\u3011',
      '\u0661( \u2022\u0308\u1d17\u2022\u0308 )\u0661\nTraining…',
      '\u2744\ufe0f (\u2022\u00b0\u25e1\u00b0)\u00f1 I feel energized!',
      '(\u2606\u2022\u2460\u2022\u2606)\nKeep going!'
    ];

    for (const msg of messages) {
      await session.layouts.showTextWall(msg);
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  }
});
