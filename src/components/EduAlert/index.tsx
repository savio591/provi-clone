export function EduAlert({ ...rest }) {
  return (
    <div style={{ padding: 12, background: '#000b3c' }} {...rest}>
      <p style={{ textAlign: "center", fontSize: '0.75rem', color: '#fff' }}>
        ⚠️ Logotipo, imagens, textos incluidos neste projeto pertencem à{" "}
        <span>PROVI SOLUCOES E SERVICOS LTDA</span>, logo, permitido para uso
        neste projeto.⚠️
        <br />
        <br />
        ⚠️ Logo, images, texts on this project are property of{" "}
        <span>PROVI SOLUCOES E SERVICOS LTDA</span>. By the way, it was allowed
        for use only if made for educational purposes.⚠️
      </p>
    </div>
  );
}
