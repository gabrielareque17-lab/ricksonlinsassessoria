'use client';

import { useEffect, useState } from 'react';

const logoNav = 'https://raw.githubusercontent.com/gabrielareque17-lab/ricksonlinsassessoria/main/assets/logo-emblem-nav.png';
const logoFooter = 'https://raw.githubusercontent.com/gabrielareque17-lab/ricksonlinsassessoria/main/assets/logo-emblem-footer.png';
const heroImage = 'https://raw.githubusercontent.com/gabrielareque17-lab/ricksonlinsassessoria/main/uploads/pasted-1785871236024-0.png';
const aboutImage = 'https://raw.githubusercontent.com/gabrielareque17-lab/ricksonlinsassessoria/main/uploads/pasted-1785871179341-0.png';
const whatsapp = 'https://wa.me/5592993763017';

const services = [
  ['Abertura e Legalização de Empresas','Abra e legalize seu negócio com segurança jurídica, para operar com tranquilidade desde o primeiro dia.'],
  ['Planejamento Tributário','Redução legal da carga tributária por meio de estratégias personalizadas e seguras.'],
  ['Suporte para MEI','Apoio completo ao Microempreendedor Individual: abertura, obrigações mensais e organização fiscal.'],
  ['Imposto de Renda Pessoa Física','Declaração completa e otimizada do IRPF, com análise de deduções e economia fiscal.'],
];

const differentials = [
  ['Análise Estratégica','Decisões guiadas por dados, cenários e projeções financeiras.'],
  ['Atendimento Personalizado','Comunicação direta, ágil e sem burocracia com nossos especialistas.'],
  ['Conformidade Fiscal','Processos alinhados às exigências legais, com segurança e transparência.'],
  ['Inteligência Estratégica','Transformamos dados financeiros e contábeis em informações relevantes para apoiar decisões mais inteligentes e impulsionar o crescimento sustentável do seu negócio.'],
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <main>
    <nav className={scrolled ? 'nav scrolled' : 'nav'}>
      <a href="#topo" className="brand">
        <img src={logoNav} alt="Rickson Lins" />
        <span><strong>RICKSON LINS</strong><small>ASSESSORIA</small></span>
      </a>
      <div className="navlinks">
        <a href="#topo">Início</a><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#diferenciais">Diferenciais</a><a href="#cta">Contato</a>
      </div>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Abrir menu"><i/><i/><i/></button>
    </nav>

    {open && <div className="mobileMenu"><button onClick={() => setOpen(false)}>×</button>{['topo','sobre','servicos','diferenciais','cta'].map((id,i)=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{['Início','Sobre','Serviços','Diferenciais','Contato'][i]}</a>)}<a className="goldBtn" href={whatsapp}>Agendar Consultoria</a></div>}

    <section id="topo" className="hero">
      <div className="glow" />
      <div className="heroGrid">
        <div>
          <h1>Transformamos a Contabilidade em <em>Estratégia</em> para o Crescimento da Sua Empresa</h1>
          <p>A Rickson Lins oferece assessoria e consultoria contábil, tributária e financeira para empresas que desejam crescer com segurança, reduzir riscos e tomar decisões estratégicas.</p>
          <div className="actions"><a className="goldBtn" href={whatsapp} target="_blank">SOLICITE SUA PROPOSTA</a><a className="outlineBtn" href={whatsapp} target="_blank">FALE CONOSCO</a></div>
        </div>
        <div className="photoWrap"><img src={heroImage} alt="Executivos analisando indicadores financeiros" /></div>
      </div>
    </section>

    <section id="sobre" className="section white"><div className="twoCol">
      <div className="photoWrap light"><img src={aboutImage} alt="Reunião corporativa" /></div>
      <div><span className="eyebrow dark">SOBRE A RICKSON LINS</span><h2>Mais do que contabilidade.<br/>Somos parceiros estratégicos do seu negócio.</h2><p>Unimos rigor técnico e visão de negócio para entregar consultoria contábil, tributária e financeira que vai além da conformidade — orientando decisões que impulsionam o crescimento.</p><p>Cada relação começa com escuta. Entendemos o momento da sua empresa antes de propor qualquer estratégia.</p></div>
    </div></section>

    <section id="servicos" className="section soft"><div className="container"><header className="center"><span className="eyebrow dark">NOSSAS SOLUÇÕES</span><h2>Serviços sob medida para cada estágio do seu negócio</h2><p>Uma abordagem consultiva que une contabilidade, tributos e finanças em uma única estratégia.</p></header><div className="cards">{services.map(([title,desc],i)=><article className="card" key={title}><div className="icon">{['⌕','◎','↻','▤'][i]}</div><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>

    <section id="diferenciais" className="section darkSection"><div className="container"><header className="center"><span className="eyebrow gold">NOSSOS DIFERENCIAIS</span><h2>Transformamos desafios empresariais em decisões estratégicas.</h2></header><div className="diffGrid">{differentials.map(([title,desc],i)=><article key={title}><div className="goldIcon">{['◉','♙','✓','▥'][i]}</div><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>

    <section className="section soft"><div className="container center"><span className="eyebrow dark">FALE COM A RICKSON LINS EM 3 PASSOS SIMPLES</span><h2>Seu sucesso começa com uma conversa</h2><div className="steps"><article><b>PASSO 1</b><h3>Clique no botão abaixo</h3><p>Para que possamos te ajudar, é só clicar no botão abaixo.</p></article><article className="featured"><b>PASSO 2</b><h3>Nos mande uma mensagem</h3><p>Envie uma mensagem via WhatsApp contando a sua situação.</p></article><article><b>PASSO 3</b><h3>A solução que você precisa</h3><p>Após entendermos sua situação, apresentaremos a solução ideal.</p></article></div><a className="goldBtn" href={whatsapp} target="_blank">Iniciar Atendimento</a></div></section>

    <section id="cta" className="cta"><div><h2>Sua empresa está preparada para crescer com uma consultoria contábil estratégica?</h2><p>Fale com nossos especialistas e descubra oportunidades de economia e crescimento para o seu negócio.</p><a className="goldBtn" href={whatsapp} target="_blank">Solicite sua proposta agora</a></div></section>

    <footer><div className="footerGrid"><div><div className="footerBrand"><img src={logoFooter} alt="Rickson Lins"/><span><strong>RICKSON LINS</strong><small>ASSESSORIA</small></span></div><p>Assessoria e consultoria contábil, tributária e financeira para empresas que buscam crescer com estratégia e segurança.</p></div><div><h4>Mapa do Site</h4><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#diferenciais">Diferenciais</a></div><div><h4>Contato</h4><p>(92) 99376-3017</p><p>WhatsApp: (92) 99376-3017</p><p>ricksonlins.assessoria@hotmail.com</p></div></div><div className="copyright"><span>© 2026 Rickson Lins Assessoria &amp; Consultoria Contábil. Todos os direitos reservados.</span><a href="/politica-de-privacidade">Política de Privacidade</a></div></footer>
  </main>;
}