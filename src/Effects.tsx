import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react';

export function Effects(props: { sourceId: string }) {
    let [message, setMessage] = useState(-1);

    function handleMessage(message: number) {
        setMessage(message);
    }
    useEffect(() => {
        setMessage(-1);
        subscribe(props.sourceId, handleMessage);
        return () => {
            unsubscribe(props.sourceId, handleMessage);
        };
    }, [props.sourceId]);
    return <h1>{props.sourceId + ': ' + message}</h1>;
}
