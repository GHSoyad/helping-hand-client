import { getSession, useSession } from 'next-auth/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type TProps<T> = {
  initialUrl: string,
  initialData?: null | T,
  initialLoader?: boolean,
  cache?: RequestCache,
  secure?: boolean,
}

type TData<T> = {
  data: null | T,
  loading: boolean,
  message: null | string,
  error: null | string,
}


const useGetMethod = <T>({ initialUrl = "", initialData = null, initialLoader = false, cache = "default", secure = false }: TProps<T>): [
  responseData: TData<T>,
  setUrl: Dispatch<SetStateAction<string>>
] => {
  const { data: session } = useSession();
  const [url, setUrl] = useState(initialUrl);
  const [responseData, setResponseData] = useState<TData<T>>({
    data: initialData,
    loading: initialLoader,
    message: null,
    error: null,
  });

  useEffect(() => {
    if (((secure && session?.token) || !secure) && url) {
      setResponseData(prev => ({
        ...prev,
        loading: true,
      }))

      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${session?.token}`
        },
        cache: cache,
      })
        .then(res => res.json())
        .then(data =>
          setResponseData(prev => ({
            ...prev,
            data: data?.content,
            loading: false,
            message: data?.message,
            error: null,
          }))
        )
        .catch(err =>
          setResponseData(prev => ({
            ...prev,
            data: null,
            loading: false,
            message: err?.message,
            error: err,
          }))
        )
    } else {
      setResponseData(prev => ({
        ...prev,
        data: initialData,
        message: null,
        error: null,
      }))
    }
    //eslint-disable-next-line
  }, [url]);

  // First index returns result state with data, loading, message and optionally error
  // Second index returns a set-url function to set-url manually, set empty string ("") to reset the result state
  return [responseData, setUrl]
};

export default useGetMethod;