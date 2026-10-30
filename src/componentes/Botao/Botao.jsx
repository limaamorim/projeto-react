import './Botao.css'

function Botao (props) {
    return (
        <button type="submit" className='botao'>
            {props.texto}
        </button>
    )
}

export default Botao