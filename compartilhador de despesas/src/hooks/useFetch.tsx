import React, { useState, useEffect, useCallback } from "react";
import api from "../services/api";
import { AxiosRequestConfig } from "axios";

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
    const [ data, setData ] = useState<T | null>();
    const [ statusCode, setStatus ] = useState<number | null>(null);
    const [ error, setError ] = useState<Error | null>(null);
    const [ loadding, setLoadding ] = useState(false);

    const fetch = useCallback( async () => {
        await setError(null);
        await setLoadding(true);
        await api(url, options)
        .then( response => {
            const { data, status } = response;
            setData(data);
            setStatus(status)
        } )
        .catch( erro => {
            setError(erro);
        } )
        .finally( () => {
            setLoadding(false);
        })
    }, [url] );

    useEffect(() => {
        fetch();
      }, [fetch]);

    return {
        data,
        statusCode,
        error,
        loadding,
    };
};