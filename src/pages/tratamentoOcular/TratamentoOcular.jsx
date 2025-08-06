import styles from './TratamentoOcular.module.css'
import listaStyles from '../../components/lista/Lista.module.css'

function tratamentoOcular () {
  const condicoes = [
    "Medicamentos oculares",
    "Tampão ocular",
    "Como aplicar colírio"
  ]
  return (
    <div className={listaStyles.listaContainer}>
      <h1 className={listaStyles.listaTitle}>Tratamento Ocular</h1>
      <ul className={listaStyles.listaLista}>
        {condicoes.map((item, index) => (
          <li key={index} className={listaStyles.listaItem}>
            <div className={listaStyles.listaImagem}></div>
            <span className={listaStyles.listaTexto}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default tratamentoOcular;