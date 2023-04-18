export interface OpenAIModel {
  id: string;
  name: string;

  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_4 = 'gpt-4',
  T7910_7B = '7b',
  T7910_7B_native = '7b-native',
  T7910_vicuna_13B = 'vicuna-13b',
  T7910_gpt4all = 'gpt4all',
  T7910_gpt4all_lora = 'gpt4all-lora',
  T7910_dolly_v2_12b = 'dolly-v2-12b',
  T7910_alpaca_7b = 'alpaca-7b',
  T7910_alpaca_13b = 'alpaca-13b',
  T7910_alpaca_30b = 'alpaca-30',

}

export const LlamaModels = [
  { id: OpenAIModelID.T7910_7B, name: "T7910_7B" },
  { id: OpenAIModelID.T7910_7B_native, name: "T7910_7B_native" },
  { id: OpenAIModelID.T7910_vicuna_13B, name: "T7910_vicuna_13B" },
  { id: OpenAIModelID.T7910_gpt4all, name: "T7910_gpt4all" },
  { id: OpenAIModelID.T7910_gpt4all_lora, name: "T7910_gpt4all_lora" },
  { id: OpenAIModelID.T7910_dolly_v2_12b, name: "T7910_dolly_v2_12b" },
  { id: OpenAIModelID.T7910_alpaca_7b, name: "T7910_alpaca_7b" },
  { id: OpenAIModelID.T7910_alpaca_13b, name: "T7910_alpaca_13b" },
  { id: OpenAIModelID.T7910_alpaca_30b, name: "T7910_alpaca_30b" },
];

const LlamaModelSet = new Set(LlamaModels.map(item => item.id.valueOf()));

export function is_llama(model_name: string) {
  return LlamaModelSet.has(model_name);
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8000,
  },  
  [OpenAIModelID.T7910_7B]: {
    id: OpenAIModelID.T7910_7B,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.T7910_7B_native]: {
    id: OpenAIModelID.T7910_7B_native,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.T7910_vicuna_13B]: {
    id: OpenAIModelID.T7910_vicuna_13B,
    name: 'T7910_vicuna_13B',
    maxLength: 24000,
    tokenLimit: 8000,
  },  
  [OpenAIModelID.T7910_gpt4all]: {
    id: OpenAIModelID.T7910_gpt4all,
    name: 'T7910_gpt4all',
    maxLength: 24000,
    tokenLimit: 8000,
  },  
  [OpenAIModelID.T7910_gpt4all_lora]: {
    id: OpenAIModelID.T7910_gpt4all_lora,
    name: 'T7910_gpt4all_lora',
    maxLength: 24000,
    tokenLimit: 8000,
  },  
  [OpenAIModelID.T7910_dolly_v2_12b]: {
    id: OpenAIModelID.T7910_dolly_v2_12b,
    name: 'T7910_dolly_v2_12b',
    maxLength: 24000,
    tokenLimit: 8000,
  },  
  [OpenAIModelID.T7910_alpaca_7b]: {
    id: OpenAIModelID.T7910_alpaca_7b,
    name: 'T7910_alpaca_7b',
    maxLength: 24000,
    tokenLimit: 8000,
  },  
  [OpenAIModelID.T7910_alpaca_13b]: {
    id: OpenAIModelID.T7910_alpaca_13b,
    name: 'T7910_alpaca_13b',
    maxLength: 24000,
    tokenLimit: 8000,
  },  
  [OpenAIModelID.T7910_alpaca_30b]: {
    id: OpenAIModelID.T7910_alpaca_30b,
    name: 'T7910_alpaca_30b',
    maxLength: 24000,
    tokenLimit: 8000,
  },

};
