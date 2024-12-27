type LineProps = {
  /**
   * Define a grossura da linha em pixels.
   * @default 2
   */
  thickness?: number;

  /**
   * Define a largura da linha em pixels.
   * @default 40
   */
  width?: number;

  /**
   * Define o espaçamento entre as linhas (margin-bottom) em pixels.
   * @default 4
   */
  spacing?: number;
};

/**
 * Um componente de linha reutilizável com estilos personalizáveis.
 * 
 * @param {number} [thickness=2] - Define a grossura da linha em pixels (padrão: 2).
 * @param {number} [width=40] - Define a largura da linha em pixels (padrão: 40).
 * @param {number} [spacing=4] - Define o espaçamento entre as linhas em pixels (padrão: 4).
 * 
 * @returns {JSX.Element} Um componente de linha estilizado.
 */
const Line = ({ thickness = 2, width = 40, spacing = 4 }: LineProps) => (
  <div
    className={`bg-black rounded-full`}
    style={{
      height: `${thickness}px`, // Altura da linha
      width: `${width}px`, // Largura da linha
      marginBottom: `${spacing}px`, // Espaçamento entre as linhas
    }}
  ></div>
);

export default Line;
