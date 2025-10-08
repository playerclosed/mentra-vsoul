import { defineApp } from '@mentra/app';

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
