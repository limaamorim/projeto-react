import './Colaborador.css'

function Colaborador(props) {
  return (
    <div className="colaborador">
      <div
        className="cabecalho"
        style={{ backgroundColor: props.corDeFundo }}
      >
        {props.imagem ? (
          <img src={props.imagem} alt={props.nome} />
        ) : (
          <span className="avatar" aria-label="Sem foto">
            {props.nome.charAt(0).toUpperCase()}
          </span>
        )}
      </div>

      <div className="rodape">
        <h4>{props.nome}</h4>
        <h5>{props.cargo}</h5>
      </div>
    </div>
  )
}

export default Colaborador