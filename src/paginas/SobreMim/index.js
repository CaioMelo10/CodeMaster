import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Bem-vindo ao CodeMaster
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Bem-vindo(a) ao CodeMaster
            </p>

            <p className={styles.paragrafo}>
                o seu portal personalizado para conhecimentos de programação, onde a jornada do aprendizado é moldada especialmente para você! Aqui, você encontrará um universo de informações e recursos sob medida para ajudá-lo(a) a alcançar seus objetivos como programador(a).
            </p>

            <p className={styles.paragrafo}>
                Navegue por nossos artigos abrangentes e mergulhe nos conceitos fundamentais das linguagens de programação de seu interesse, seja Python, Java, C++ ou qualquer outra que desperte sua curiosidade. Desde os princípios básicos até tópicos avançados, cobrimos tudo o que você precisa saber para se tornar um mestre da programação, de acordo com suas preferências.
            </p>

            <p className={styles.paragrafo}>
                Além disso, nossa comunidade dinâmica de desenvolvedores está aqui para apoiá-lo(a) em sua jornada. Compartilhe suas dúvidas, desafios e sucessos com pessoas que têm a mesma paixão pela programação. Receba conselhos personalizados, troque conhecimentos valiosos e encontre inspiração em suas conquistas.
            </p>

            <p className={styles.paragrafo}>
                No "CodeMaster", acreditamos que cada pessoa tem seu próprio ritmo de aprendizado. É por isso que adaptamos nossos recursos para atender às suas necessidades. Você pode personalizar sua experiência, selecionando os tópicos que mais lhe interessam e definindo metas individuais para medir seu progresso.
            </p>

            <p className={styles.paragrafo}>
                Então, prepare-se para uma jornada emocionante! Junte-se à nossa comunidade hoje mesmo e embarque em uma jornada de descoberta, aprendizado e crescimento como programador(a). Com o "CodeMaster" ao seu lado, você pode alcançar resultados incríveis e se tornar um verdadeiro mestre do código. Estamos ansiosos para acompanhá-lo(a) em cada passo dessa jornada única!
            </p>
        </PostModelo>
    )
}