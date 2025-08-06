// src/pages/Configuracoes.jsx
import styles from "./Configuracoes.module.css";
import interruptorStyles from '../../components/interruptor/Interruptor.module.css'
import cardBaseConteudoStyles from '../../components/cardBaseConteudo/CardBaseConteudo.module.css'

function Configuracoes() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Configurações</h1>
      <div className={`${cardBaseConteudoStyles.card} ${styles.card}`}>
        
        <label className={styles.opcao}>
          <p>Modo noturno ?</p>
          <div className={styles.interruptor}>
          <label className={interruptorStyles.switch} >
             <input type="checkbox" id="idModoNoturno" />
             <span className={interruptorStyles.slider} ></span>
          </label>
          </div>
        </label>
        
        <label className={styles.opcao}>
          <p>Censurar imagens ?</p>
          <div className={styles.interruptor}>
          <label className={interruptorStyles.switch} >
             <input type="checkbox" id="idSensurarImagem"/>
             <span className={interruptorStyles.slider} ></span>
          </label>
          </div>
        </label>
        {/* mudei de div para label */}
        <label className={styles.opcao}>
          <p>Esconder botão de Baixar Aplicativo ?</p>
          <div className={styles.interruptor}>
          <label className={interruptorStyles.switch} >
             <input type="checkbox" id="idEsconderBaixarApp"/>
             <span className={interruptorStyles.slider} ></span>
          </label>
            </div>
        </label>
        
      </div>
    </div>
  );
}

export default Configuracoes;
