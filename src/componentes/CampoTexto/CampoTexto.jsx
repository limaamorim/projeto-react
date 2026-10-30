import './CampoTexto.css'

function CampoTexto(props) {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} type={props.tipo || 'text'} value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />

        </div>
    )
}

export default CampoTexto