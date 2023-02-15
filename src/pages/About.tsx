import { useEffect, useState } from "react";
import { useMessage } from '../hooks/useMessage';

export const About = () => {

    const [message, setMessage] = useState();
    const { getProtectedResource } = useMessage();

    useEffect(() => {

        const getMessage = async () => { 
            var { text } = await getProtectedResource();
            setMessage(text);
        }

        getMessage();

    }, [getProtectedResource]);

    return (
        <>
            <h1>About page</h1>
            <p>{ message }</p>
        </>
      )
}
