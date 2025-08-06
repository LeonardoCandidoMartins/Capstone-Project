import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Bem-vindo</h1>
      <p className={styles.subtitulo}>
        Escolha uma das categorias para começar:
      </p>

      <div className={styles.prateleira}>
        <Link to="/traumaOcular" className={`${styles.card} ${styles.linkDecoration}`} style={{ backgroundColor: "#5c8374" }}>
          Trauma Ocular
        </Link>
        <Link to="/olhoVermelho" className={`${styles.card} ${styles.linkDecoration}`} style={{ backgroundColor: "#6c7ea1" }}>
          Olho Vermelho
        </Link>
        <Link to="/auxilioTriagem" className={`${styles.card} ${styles.linkDecoration}`} style={{ backgroundColor: "#8f6d74" }}>
          Auxílio de Triagem
        </Link>
        <Link to="/tratamentoOcular" className={`${styles.card} ${styles.linkDecoration}`} style={{ backgroundColor: "#7e6c5f" }}>
          Tratamentos Oculares
        </Link>
        <div className={`${styles.card} ${styles.linkDecoration}`} style={{ backgroundColor: "#66c0f4" }}>
          Baixar App para uso offline
        </div>
      </div>
    </div>
  );
}

export default Home;