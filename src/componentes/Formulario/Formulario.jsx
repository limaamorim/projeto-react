import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import Botao from '../Botao/Botao'
import { useState } from 'react'

function Formulario(props) {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [erro, setErro] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()

        if (!nome.trim() || !cargo.trim()) {
            setErro("Preencha o nome e o cargo com texto válido.")
            return
        }

        setErro('')
        props.aoColaboradorCadastrado({
            nome: nome.trim(),
            cargo: cargo.trim(),
            imagem: imagem.trim(),
            time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <CampoTexto
                    obrigatorio={true}
                    id="nome"
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    obrigatorio={true}
                    id="cargo"
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto
                    id="imagem"
                    tipo="url"
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    id="time"
                    label="Time"
                    items={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                {erro && <p role="alert">{erro}</p>}

                <Botao texto="Criar card" />
            </form>
        </section>
    )
}

export default Formulario