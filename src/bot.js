import 'dotenv/config';
import { Telegraf } from 'telegraf';
import { askModel } from './purgeClient.js';

const token = process.env.BOT_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new Telegraf(token);

// Simple in-memory model store per user (use DB in production)
const userModelMap = new Map();

bot.start((ctx) => {
  ctx.reply(
    '🤖 Welcome to dsh-purge-telegram-bot! Use /model <name> to choose a model, then send any message to speak with the jailbroken model.'
  );
});

bot.command('model', (ctx) => {
  const args = ctx.message.text.split(' ').slice(1);
  if (args.length === 0) {
    ctx.reply('Usage: /model <model-key> (e.g., /model deepseek)');
    return;
  }
  const modelKey = args[0].toLowerCase();
  userModelMap.set(ctx.from.id, modelKey);
  ctx.reply(`✅ Model switched to "${modelKey}".`);
});

bot.on('text', async (ctx) => {
  const userMessage = ctx.message.text;
  const userId = ctx.from.id;
  const modelKey = userModelMap.get(userId) || 'deepseek';

  try {
    const reply = await askModel(modelKey, userMessage);
    ctx.reply(reply);
  } catch (err) {
    ctx.reply(`❌ Jailbreak request failed: ${err.message}`);
  }
});

bot.launch();
console.log('🚀 dsh-purge-telegram-bot is running...');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
