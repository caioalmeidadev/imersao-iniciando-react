import { FormEvent, useRef } from "react"
import './Form.css';

export default function Form() {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const onSubmit = (event:FormEvent) => {
        event.preventDefault();

        console.log(nameRef.current?.value);
        console.log(emailRef.current?.value);

    }
    
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" ref={nameRef}/>
            </div>

            <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" ref={emailRef}/>
            </div>

            <div className="form-group"><button type="submit">Enviar</button></div>
        </form>


    )
}