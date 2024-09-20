import { CompletionClient } from 'dify-client';

export const BASE_URL = "https://api.dify.ai/v1/";
const DEFY_API_KEY: string | undefined = process.env.SUPABASE_SERVICE_ROLEKEY
  ? process.env.DIFY_API_KEY
  : "";
const user = `tr-98763`;
const completionClient = new CompletionClient(DEFY_API_KEY);

export const translate = async function (query: string) {
  const result = await completionClient.createCompletionMessage(
    {
      query: query,
      target_language: "英文",
    },
    user,
    false
  );
  return result.data.answer;
};
