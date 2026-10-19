import type { ContactValues } from '@/types';

export const contactCopy = {
  title: 'Uma boa conversa é o primeiro passo.',
  description:
    'Tem uma ideia, um projeto ou um desafio? Conte um pouco sobre o que você tem em mente.',
  emailLabel: 'E-mail',
  phoneLabel: 'Telefone',
  emailPending: 'E-mail a informar',
  availabilityLabel: 'Freelance',
  availability: 'Disponível para novos projetos',
  networks: 'Encontre-me também',
  submit: 'Enviar mensagem',
  sending: 'Enviando…',
  note: 'Seus dados serão usados apenas para responder à sua mensagem.',
  notConfigured:
    'O canal de envio ainda não foi configurado. Tente novamente quando o e-mail de contato estiver disponível.',
  sent: 'Mensagem enviada com sucesso. Obrigado pelo contato!',
  mailOpened:
    'Seu aplicativo de e-mail foi aberto com a mensagem. Finalize o envio por lá.',
  failed: 'Não foi possível enviar. Tente novamente em alguns instantes.',
  subject: 'Contato pelo portfólio',
  fields: {
    name: {
      label: 'Seu nome',
      placeholder: 'Como posso chamar você?',
      autoComplete: 'name',
    },
    email: {
      label: 'Seu e-mail',
      placeholder: 'voce@exemplo.com',
      autoComplete: 'email',
    },
    message: {
      label: 'Sua mensagem',
      placeholder: 'Me conte sobre a sua ideia…',
      autoComplete: 'off',
    },
  },
  errors: {
    name: 'Informe seu nome (pelo menos 2 caracteres).',
    email: 'Informe um e-mail válido.',
    message: 'Escreva uma mensagem com pelo menos 10 caracteres.',
    tooLong: 'O texto ultrapassa o limite permitido.',
  },
};
export const contactLimits = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  message: { min: 10, max: 5000 },
  timeoutMs: 15000,
};
export const emptyContact: ContactValues = { name: '', email: '', message: '' };
