const logo = 'https://raw.githubusercontent.com/gabrielareque17-lab/ricksonlinsassessoria/main/assets/logo-emblem-nav.png';

export default function PoliticaDePrivacidade() {
  return <main className="privacy">
    <header className="privacyHeader">
      <a href="/" className="brand"><img src={logo} alt="Rickson Lins"/><span><strong>RICKSON LINS</strong><small>ASSESSORIA</small></span></a>
    </header>
    <article className="privacyContent">
      <a href="/">← Voltar ao site</a>
      <h1>Política de Privacidade</h1>
      <p>Última atualização: agosto de 2026</p>
      <p>A Rickson Lins Assessoria e Consultoria Contábil respeita a privacidade dos visitantes deste site e dos clientes que utilizam nossos serviços. Esta Política explica quais dados coletamos, como os utilizamos e quais são os seus direitos, em conformidade com a Lei Geral de Proteção de Dados — LGPD.</p>
      <h2>1. Dados que coletamos</h2>
      <p>Podemos coletar nome, telefone, WhatsApp, e-mail, dados da empresa, informações enviadas voluntariamente e dados básicos de navegação.</p>
      <h2>2. Finalidade do uso dos dados</h2>
      <ul><li>Responder solicitações de contato e propostas;</li><li>Prestar serviços contábeis, tributários e financeiros;</li><li>Cumprir obrigações legais e regulatórias;</li><li>Melhorar a experiência de navegação.</li></ul>
      <h2>3. Compartilhamento de dados</h2>
      <p>Não vendemos ou alugamos dados pessoais. As informações poderão ser compartilhadas apenas quando exigido por lei ou com fornecedores necessários à operação, sempre com dever de confidencialidade.</p>
      <h2>4. Cookies</h2>
      <p>O site poderá utilizar cookies para melhorar a navegação e entender como os visitantes interagem com o conteúdo. O usuário pode gerenciar cookies nas configurações do navegador.</p>
      <h2>5. Seus direitos</h2>
      <p>Você pode solicitar confirmação do tratamento, acesso, correção, atualização, exclusão ou anonimização de dados, bem como revogar o consentimento quando aplicável.</p>
      <h2>6. Segurança</h2>
      <p>Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados contra acessos não autorizados, perda ou uso indevido.</p>
      <h2>7. Alterações desta política</h2>
      <p>Esta Política poderá ser atualizada periodicamente. A versão mais recente estará sempre disponível nesta página.</p>
      <h2>8. Contato</h2>
      <p>Para dúvidas ou solicitações relacionadas aos seus dados, entre em contato pelo e-mail <a href="mailto:ricksonlins.assessoria@hotmail.com">ricksonlins.assessoria@hotmail.com</a> ou pelo WhatsApp (92) 99376-3017.</p>
    </article>
  </main>;
}