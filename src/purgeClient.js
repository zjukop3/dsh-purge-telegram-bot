// Core jailbreak client – wraps dsh-purge functionality
// Assumes dsh-purge provides an `apply` or `purge` function that takes
// a model name and a user prompt, and returns the jailbroken response.

import dshPurge from 'dsh-purge';

// Example model mapping – extend as needed
const MODEL_MAP = {
  deepseek: 'deepseek-chat',
  deepseekCoder: 'deepseek-coder',
  default: 'deepseek-chat'
};

/**
 * Ask a model to respond to a user message using dsh-purge jailbreak.
 * @param {string} modelKey - short model identifier (e.g., 'deepseek')
 * @param {string} userMessage - the message to send
 * @returns {Promise<string>} model's jailbroken reply
 */
export async function askModel(modelKey, userMessage) {
  const modelName = MODEL_MAP[modelKey] || MODEL_MAP.default;

  // 1. Obtain the jailbreak prompt for the chosen model
  // 2. Send the combined prompt to the model via dsh-purge
  // The exact function signature depends on the actual dsh-purge API.
  // Below is a plausible call:
  const response = await dshPurge.purge({
    model: modelName,
    prompt: userMessage,
    // optional: custom system/hook prompt
  });

  return response.text || response.content || response;
}
