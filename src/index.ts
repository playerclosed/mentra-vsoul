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
console.log(`V-Soul läuft auf Port ${port}`);
