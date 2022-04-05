import useSWR from 'swr';

import { instance } from 'services';

interface IError {
  message: string;
  stack: string;
  name: string;
  config: any;
  baseURL: string;
}

export default function useFetch<Data = any, Error = IError | any>(
  url: string | null,
  fallbackData: any = null
) {
  const { data, error, mutate } = useSWR<Data, Error>(
    url,
    async (url) => {
      const response = await instance.get(url);
      return response.data;
    },
    {
      revalidateOnMount: true,
      errorRetryCount: 3,
      fallbackData: fallbackData,
    }
  );

  return { data, error, mutate, isLoading: !error && !data };
}
