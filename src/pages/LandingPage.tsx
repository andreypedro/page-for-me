import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function LandingPage() {
  const faqItems = [
    {
      q: 'Por que usar o PageFor.me ao invés do Linktree?',
      a: 'Além de todos os recursos do Linktree, o PageFor.me oferece analytics detalhado, cards de destaque, integração com WhatsApp, personalização visual avançada e suporte em português, tudo pensado para o público brasileiro e negócios locais.'
    },
    {
      q: 'Preciso pagar para usar?',
      a: 'Não! Você pode começar gratuitamente e usar links ilimitados, temas básicos e analytics simples. Só paga se quiser recursos premium.'
    },
    {
      q: 'Consigo personalizar minha página?',
      a: 'Sim! Você pode escolher temas, cores, ordem dos links e até adicionar cards especiais para conversão.'
    },
    {
      q: 'O PageFor.me funciona no Instagram, WhatsApp, TikTok?',
      a: 'Sim! Basta colocar seu link do PageFor.me na bio de qualquer rede social ou compartilhar onde quiser.'
    },
    {
      q: 'Meus dados estão seguros?',
      a: 'Levamos segurança a sério. Seus dados são protegidos e você pode excluir sua conta a qualquer momento.'
    },
  ];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-yellow-400 flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-pink-400 via-purple-500 to-yellow-400 shadow-lg">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="28" height="28" rx="8" fill="url(#paint0_linear_1_1)"/>
              <path d="M10 16c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="16" cy="16" r="2" fill="#fff"/>
              <defs>
                <linearGradient id="paint0_linear_1_1" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fd5"/>
                  <stop offset="0.5" stopColor="#ff543e"/>
                  <stop offset="1" stopColor="#c837ab"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="ml-2 text-2xl font-extrabold tracking-tight text-white drop-shadow">PageFor.me</span>
        </div>
        <div className="flex gap-3">
          <Link to="/login" className="px-5 py-2 rounded-lg font-semibold text-blue-700 bg-white border border-blue-200 shadow hover:bg-blue-50 transition">Entrar</Link>
          <Link to="/" className="px-5 py-2 rounded-lg font-semibold text-white bg-blue-700 shadow hover:bg-blue-800 transition">Acessar Dashboard</Link>
        </div>
      </header>
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-pink-400 via-purple-500 to-yellow-400">
        <div className="max-w-2xl mx-auto pt-12 pb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-6 leading-tight drop-shadow flex flex-col items-center">
            <span>Seu link único.</span>
            <span className="text-blue-600">Todos os seus canais</span>
            <span>em um só lugar.</span>
          </h1>
          <p className="text-lg md:text-2xl text-blue-800 mb-10 max-w-xl mx-auto">Transforme sua bio em uma poderosa página de links com <span className="font-semibold text-blue-600">analytics</span>, <span className="font-semibold text-blue-600">personalização</span> e <span className="font-semibold text-blue-600">conversão</span>. Ideal para negócios locais, profissionais e criadores.</p>
          <Link to="/profile" className="inline-block px-10 py-4 rounded-2xl bg-blue-700 text-white text-2xl font-bold shadow-xl hover:bg-blue-800 transition mb-8">Comece Grátis Agora</Link>
          
        </div>
      </main>
      {/* Social Proof Section */}
      <section className="py-12 bg-gradient-to-r from-pink-200 via-purple-200 to-yellow-100 mt-0">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8 text-center">Confiado por profissionais, criadores e negócios locais</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Usuário satisfeito" className="w-16 h-16 rounded-full border-4 border-white shadow" />
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Usuário satisfeito" className="w-16 h-16 rounded-full border-4 border-white shadow" />
            <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Usuário satisfeito" className="w-16 h-16 rounded-full border-4 border-white shadow" />
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Usuário satisfeito" className="w-16 h-16 rounded-full border-4 border-white shadow" />
            <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="Usuário satisfeito" className="w-16 h-16 rounded-full border-4 border-white shadow" />
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <p className="text-blue-800 italic mb-2">“Aumentei em 40% os contatos pelo WhatsApp só organizando meus links com o PageFor.me!”</p>
              <span className="font-bold text-blue-700">Lucas, Barbeiro</span>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <p className="text-blue-800 italic mb-2">“Meus clientes encontram tudo em um só lugar. O analytics é sensacional!”</p>
              <span className="font-bold text-blue-700">Ana, Designer</span>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <p className="text-blue-800 italic mb-2">“Muito mais bonito e fácil de usar que o Linktree. Recomendo!”</p>
              <span className="font-bold text-blue-700">Rafael, Fotógrafo</span>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-100 to-yellow-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 text-center">Por que escolher o PageFor.me?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-blue-50 rounded-xl p-8 shadow flex flex-col items-center">
              <svg className="w-12 h-12 mb-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10"/></svg>
              <h3 className="font-bold text-lg text-blue-800 mb-2">Analytics Detalhado</h3>
              <p className="text-blue-700">Saiba exatamente quem está clicando nos seus links, de onde vêm seus visitantes e quais canais trazem mais resultados.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 shadow flex flex-col items-center">
              <svg className="w-12 h-12 mb-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"/><path d="M7 9l5-5 5 5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <h3 className="font-bold text-lg text-blue-800 mb-2">Personalização Visual</h3>
              <p className="text-blue-700">Escolha temas, cores e organize seus links com drag-and-drop. Sua bio, do seu jeito.</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 shadow flex flex-col items-center">
              <svg className="w-12 h-12 mb-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <h3 className="font-bold text-lg text-blue-800 mb-2">Recursos Premium</h3>
              <p className="text-blue-700">Desbloqueie cards exclusivos, analytics avançado, integração WhatsApp e muito mais com o plano premium.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-100 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 text-center">Planos para todos os perfis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-2 border-blue-100">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Grátis</h3>
              <p className="text-blue-800 mb-4">Para quem está começando e quer uma bio profissional.</p>
              <ul className="text-blue-700 mb-6 space-y-2 text-left">
                <li>✔️ Links ilimitados</li>
                <li>✔️ Temas básicos</li>
                <li>✔️ Analytics simples</li>
                <li>✔️ Página responsiva</li>
              </ul>
              <span className="text-3xl font-extrabold text-blue-700 mb-4">R$0</span>
              <Link to="/profile" className="px-6 py-3 rounded-xl bg-blue-700 text-white font-bold shadow hover:bg-blue-800 transition">Começar grátis</Link>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-500 rounded-2xl shadow-lg p-8 flex flex-col items-center border-2 border-blue-200">
              <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
              <p className="text-blue-100 mb-4">Para quem quer se destacar e vender mais com recursos avançados.</p>
              <ul className="text-white mb-6 space-y-2 text-left">
                <li>⭐ Analytics avançado</li>
                <li>⭐ Cards de destaque</li>
                <li>⭐ Integração WhatsApp</li>
                <li>⭐ Temas premium</li>
                <li>⭐ Suporte prioritário</li>
              </ul>
              <span className="text-3xl font-extrabold text-white mb-4">R$19/mês</span>
              <Link to="/profile" className="px-6 py-3 rounded-xl bg-white text-blue-700 font-bold shadow hover:bg-blue-100 transition">Quero ser Premium</Link>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-purple-100 to-yellow-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="border-b border-blue-100">
                <button
                  className="w-full flex justify-between items-center py-4 text-left focus:outline-none group"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className="font-bold text-lg text-blue-800 group-hover:text-blue-600 transition-colors">{item.q}</span>
                  <svg className={`w-6 h-6 ml-2 transform transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-blue-600' : 'text-blue-400'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                  aria-hidden={openFaq !== idx}
                >
                  <p className="text-blue-700 pb-4 pr-2 pl-1">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-8 text-center text-pink-700 text-sm bg-gradient-to-t from-yellow-50 to-white mt-auto">
        &copy; {new Date().getFullYear()} PageFor.me — Todos os direitos reservados.
      </footer>
    </div>
  );
}
