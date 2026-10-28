# Felipe Neto — Portfólio

Portfólio em português com Vite, React 18, TypeScript strict, Tailwind CSS 3, Lucide e React Icons. Layout escuro, sidebar de 220px e navegação de uma seção por vez sincronizada com o hash da URL.

## Rodar localmente

Requer Node.js 22.12+ ou 24 LTS e npm.

```bash
npm ci
npm run dev
```

Abra o endereço informado pelo Vite. Para verificar a versão de produção:

```bash
npm run typecheck
npm run lint
npm run format:check
npm run build
npm run preview
```

## Estrutura e componentes

```text
public/                     favicon, currículo e captura real do NETINOVE ERP
src/
  app/App.tsx               composição e imports dinâmicos das seções
  components/
    ui/                     Button, ButtonLink, Card, Tag, SectionTitle,
                            SocialIcon, SocialLinks, SectionErrorBoundary
    layout/                 Sidebar, NavItem, MobileNav, SectionWrapper
  sections/
    Hero/                   Hero, HeroIllustration (SVG original)
    About/                  About, ProfilePortrait, ResumeHighlights
    Skills/                 Skills
    Portfolio/              Portfolio, ProjectCard, ProjectCaseStudy,
                            ProjectGallery, ScreenshotDialog
    Contact/                Contact, ContactForm, ContactField
  data/                     conteúdo e configuração tipados
  hooks/                    useActiveSection, useCurrentDate, useMediaQuery,
                            useContactForm, useActiveProject
  services/contact.ts       integração de envio isolada
  types/                    contratos compartilhados
  utils/                    formatação e validação puras
  styles/                   estilos globais, animação e reduced-motion
  assets/                   espaço para recursos importados
```

Exports de componentes são nomeados; `React.lazy` adapta esses exports na fronteira de carregamento. Não há conteúdo editorial dentro dos componentes. Os textos e dados estão em `src/data/`; textos dos desenhos estáticos fazem parte dos próprios SVGs. Metadados de SEO vêm de `src/data/seo.ts` e são inseridos no HTML durante o build, para leitura sem executar JavaScript.

## Editar o conteúdo

| Arquivo                  | O que editar                                                    |
| ------------------------ | --------------------------------------------------------------- |
| `src/data/siteConfig.ts` | Logo, nome, e-mail, disponibilidade do CV, fuso e textos comuns |
| `src/data/profile.ts`    | Apresentação, foto, informações pessoais e princípios           |
| `src/data/navigation.ts` | Rótulos, ícones e ordem de navegação                            |
| `src/data/skills.ts`     | Tecnologias e serviços                                          |
| `src/data/projects.ts`   | Projetos, tags, capas e URLs                                    |
| `src/data/socials.ts`    | GitHub, LinkedIn e Instagram                                    |
| `src/data/contact.ts`    | Campos, limites, validação e mensagens de envio                 |
| `tailwind.config.js`     | Tokens de cores, fonte e dimensões                              |

O NETINOVE ERP apresenta sua aplicação web em React/Vite e o PDV desktop em Electron. Adicione projetos ao array `projects`; o grid se adapta automaticamente. Use `href: null` enquanto uma URL real não estiver disponível. Não há projetos, métricas, contatos ou fotos pessoais inventados.

O campo opcional `caseStudy` em `src/data/projects.ts` habilita uma apresentação interna em `#portfolio/<id>`. O NETINOVE tem contexto, responsabilidade por todo o front-end, plataformas, detalhes das interfaces e uma galeria de capturas reais. O botão “Explorar projeto” abre esse conteúdo mesmo sem uma URL externa. A galeria permite selecionar e ampliar imagens, fechar com Escape e abrir o arquivo original. A segunda captura enviada do cadastro de produtos repete a primeira e foi omitida da galeria.

### Dados preenchidos e pendências pessoais

O currículo fornecido foi copiado sem alterações para `public/cv-felipe-neto.pdf`. O botão está ativo e usa o nome original do documento no download. Nome completo, e-mail, telefone, cidade, GitHub e histórico profissional foram preenchidos a partir do PDF. O nome de apresentação continua Felipe Neto.

- `src/data/resume.ts`: cargos e datas do histórico profissional. A formação acadêmica foi removida da aba Sobre a pedido do titular.
- `src/data/skills.ts`: inclui HTML, CSS, suporte técnico, documentação e competências profissionais do currículo, mantendo a stack informada no briefing e acrescentando Electron para aplicações desktop.
- Os 3 anos de experiência do briefing foram preservados. As experiências profissionais usam as datas registradas no currículo, sem recalcular seus rótulos de duração.
- O formulário já abre uma mensagem para o e-mail configurado via `mailto:`; o visitante precisa concluir o envio no aplicativo de e-mail.

Foto e idiomas já estão preenchidos: português e inglês básico. O e-mail é `franciscofelipesn@gmail.com`, e os botões de WhatsApp apontam para `https://wa.me/5575998842196`, sem envio automático de mensagens. Ainda faltam URLs de LinkedIn e Instagram e, opcionalmente, uma demonstração externa do NETINOVE. O currículo permanece com seu conteúdo original; o site mostra apenas cidade/estado como localização.

## Formulário

Os campos são validados antes do envio e o primeiro erro recebe foco. Erros preservam a mensagem digitada; envios simultâneos são bloqueados. Estados de carregamento, erro e sucesso são anunciados por região viva.

- **Formspree ou endpoint compatível:** copie `.env.example` para `.env.local`, preencha `VITE_CONTACT_ENDPOINT` com um endpoint HTTPS que aceite JSON `{ name, email, message }`, permita CORS e retorne um status HTTP de sucesso somente após aceitar a mensagem. Reinicie o Vite ou gere novo build.
- **E-mail local:** sem endpoint, configure `siteConfig.email`. O serviço abre um `mailto:` e informa que o visitante precisa finalizar o envio em seu aplicativo de e-mail. Não afirma que a mensagem foi entregue.
- **Sem configuração:** a submissão informa que o canal ainda não foi configurado. Não simula sucesso.
- **EmailJS ou outro serviço:** substitua apenas a implementação de `sendContact` em `src/services/contact.ts`, preservando o retorno e os erros.

Variáveis `VITE_*` são incorporadas ao JavaScript público. Nunca use chaves privadas nelas. Configure proteção contra spam no provedor de formulário se necessário.

## Deploy

### Vercel

Importe o repositório e escolha o diretório `felipe-portfolio` como **Root Directory** se ele estiver dentro de outro repositório. Se este projeto for a raiz do repositório, use a própria raiz. O `vercel.json` define Vite, build `npm run build` e saída `dist`. Configure `VITE_CONTACT_ENDPOINT`, se aplicável, antes do build.

### Netlify

Importe o repositório e defina a base como a pasta deste projeto. O `netlify.toml` define build `npm run build`, saída `dist` e Node 22. Adicione a variável do formulário na configuração de ambiente do site.

### Hospedagem estática

Execute `npm run build` e publique o conteúdo de `dist/`. A navegação usa `#home`, `#about`, `#skills`, `#portfolio` e `#contact`, sem necessidade de fallback de rotas do servidor. A configuração assume publicação na raiz de um domínio; para subdiretórios, ajuste `base` do Vite e os caminhos dos recursos.

## Decisões de acessibilidade e visual

- Nunito com pesos 300, 400, 600 e 700; fallback sans-serif se Google Fonts estiver indisponível.
- Azul solicitado `#6C9EFF` em textos, botões e elementos gráficos. Botões usam texto escuro; o item ativo usa `#3867B8` com branco para manter contraste AA.
- Menu móvel abaixo de 1024px com `dialog` nativo: foco contido, fechamento por Escape, foco restaurado e rolagem do fundo bloqueada.
- Navegação por teclado, link de pular conteúdo, `aria-current`, labels, alt, foco visível e `prefers-reduced-motion`.
- Hash inválido volta para `#home`; histórico do navegador funciona. Seções secundárias são carregadas sob demanda.
- Data atualizada a cada minuto no idioma selecionado e no fuso `America/Sao_Paulo`.

## Idiomas

- Português e inglês com textos revisados em `src/i18n/en.ts`; os textos originais continuam em `src/data/`.
- No modo Automático, seleciona o primeiro idioma suportado de `navigator.languages` (incluindo variantes como `pt-PT` e `en-GB`). Se nenhum for suportado, usa inglês. Não consulta IP nem solicita localização.
- O seletor na barra lateral e no menu móvel guarda a preferência em `localStorage`. Automático remove a preferência manual. A troca recarrega a página mantendo a seção atual; dados de formulários não enviados não são preservados.
- `?lang=pt`, `?lang=en` e `?lang=auto` permitem compartilhar e testar cada versão. O parâmetro tem prioridade sobre a preferência salva; sem armazenamento disponível, a URL mantém a seleção durante a navegação.
- Navegação, conteúdo, estudo de caso, acessibilidade, validações, datas e metadados do navegador são traduzidos. PDF do currículo e capturas do sistema permanecem originais em português, com indicação na versão inglesa.
- O HTML estático de produção e suas prévias sociais permanecem em português para robôs que não executam JavaScript.
- Execute `node scripts/test-i18n.mjs` para verificar detecção, prioridade manual, fallback, preservação de recursos e cobertura dos textos acentuados.

## Commits

Use Conventional Commits, por exemplo:

```text
feat: add responsive portfolio sections
fix: preserve contact message after delivery failure
docs: update profile configuration guide
```

## Verificação desta entrega

- TypeScript strict e ESLint: sem erros.
- Build de produção: concluído, com seções secundárias separadas em chunks.
- Verificações isoladas aprovadas: campos vazios, e-mail inválido, espaços no nome, limite de mensagem, mudança de data no fuso de São Paulo, configuração ausente, resposta HTTP de sucesso/falha simulada e composição de `mailto:`. Nenhum e-mail real foi enviado.
- Contraste calculado: texto secundário/card 4,61:1; branco/menu ativo 5,53:1; texto/botão azul 5,66:1.
- Estudo de caso verificado no navegador em desktop e largura móvel de 390px: abertura pelo cartão, carregamento direto pelo hash, retorno ao portfólio, histórico do navegador, troca de capturas, ampliação, fechamento por Escape e restauração do foco. Sem rolagem horizontal no estudo de caso móvel. Idiomas conferidos na aba Sobre e destinos de e-mail/WhatsApp conferidos na aba Contato, sem envio de mensagens.
- `npm audit` em 19/10/2026: 7 avisos em dependências de desenvolvimento transitivas do Tailwind 3 (5 altos, 2 moderados), relacionados a parsing/globs. Não foram apontadas dependências de produção afetadas. O npm propõe migração de versão principal do Tailwind; a entrega mantém o arquivo de tokens solicitado e registra esta limitação. Reavalie esses avisos antes de integrar entradas não confiáveis ao processo de build.
