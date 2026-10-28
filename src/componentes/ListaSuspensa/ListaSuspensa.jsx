import './ListaSuspensa.css'

function ListaSuspensa(props) {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>

            <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.value} required={props.obrigatorio}>
                {props.items.map(item => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default ListaSuspensa