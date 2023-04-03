import { OpenAIModel, OpenAIModelID, OpenAIModels } from '@/types/openai';
import { OPENAI_API_HOST, LLAMA_API_HOST } from '@/utils/app/const';

export const config = {
  runtime: 'edge',
};

const handler = async (req: Request): Promise<Response> => {
  try {
    const { key } = (await req.json()) as {
      key: string;
    };

    const response = await fetch(`${OPENAI_API_HOST}/v1/models`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key ? key : process.env.OPENAI_API_KEY}`,
        ...(process.env.OPENAI_ORGANIZATION && {
          'OpenAI-Organization': process.env.OPENAI_ORGANIZATION,
        })
      },
    });

    if (response.status === 401) {
      return new Response(response.body, {
        status: 500,
        headers: response.headers,
      });
    } else if (response.status !== 200) {
      console.error(
        `OpenAI API returned an error ${response.status
        }: ${await response.text()}`,
      );
      throw new Error('OpenAI API returned an error');
    }

    let json = await response.json();
    const llama_response = await fetch(`${LLAMA_API_HOST}/v1/models`, {
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (llama_response.status === 401) {
      return new Response(llama_response.body, {
        status: 500,
        headers: llama_response.headers,
      });
    } else if (llama_response.status !== 200) {
      console.error(
        `OpenAI API returned an error ${llama_response.status
        }: ${await llama_response.text()}`,
      );
      throw new Error('OpenAI API returned an error');
    }

    const llama_json = await llama_response.json();
    json.data.push(...llama_json.data)

    const models: OpenAIModel[] = json.data
      .map((model: any) => {
        for (const [key, value] of Object.entries(OpenAIModelID)) {
          if (value === model.id) {
            return {
              id: model.id,
              name: OpenAIModels[value].name,
            };
          }
        }
      })
      .filter(Boolean);

    return new Response(JSON.stringify(models), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
};

export default handler;
