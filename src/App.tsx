import { motion } from "motion/react";
import { CheckCircle, Users, Rocket, Calendar, MapPin, Clock, ArrowRight, Quote, Sparkles, Zap, ShieldCheck } from "lucide-react";

const CTA_LINK = "https://docs.google.com/forms/d/e/1FAIpQLScpM02bnz83N5Zhur0H5K9veKbbMmrFE6U3Q9AWPfAR_lp1bw/closedform";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-950 selection:bg-vigo-red selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src={`${import.meta.env.BASE_URL}logo-ve.png`} 
              alt="Vigo Emprende Logo" 
              className="h-10 w-auto"
            />
          </div>
          <a 
            href={CTA_LINK}
            className="hidden md:flex items-center gap-2 bg-vigo-blue text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-slate-900 transition-all"
          >
            Reservar Plaza
          </a>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vigo-red/5 border border-vigo-red/10 text-vigo-red text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles size={14} /> Taller Presencial Exclusivo
              </div>
              <h1 className="text-6xl md:text-[112px] font-black leading-[0.85] tracking-tighter text-vigo-blue mb-8">
                TU LANDING <br />
                <span className="text-vigo-red">CON IA.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-2xl mb-10">
                Descubre por qué la necesitas y cómo crearla <span className="text-slate-900 font-semibold italic">completamente gratis</span> en una mañana.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href={CTA_LINK}
                  className="inline-flex items-center justify-center gap-3 bg-vigo-red text-white font-black py-5 px-10 rounded-2xl text-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-vigo-red/30"
                >
                  Únete a esta aventura <ArrowRight size={24} />
                </a>
                <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-slate-600">
                    <span className="text-vigo-blue">+45</span> inscritos hoy
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
                {[
                  { label: "Fecha", val: "13 Mar", icon: <Calendar size={18} /> },
                  { label: "Hora", val: "10:30h", icon: <Clock size={18} /> },
                  { label: "Lugar", val: "Vigo", icon: <MapPin size={18} /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="text-vigo-red">{item.icon}</div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{item.label}</p>
                      <p className="font-bold text-slate-900">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80" 
                  alt="AI Technology" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Element */}
              <div className="absolute -right-8 top-1/4 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 max-w-[200px] animate-bounce-slow">
                <Zap className="text-vigo-red mb-2" fill="currentColor" />
                <p className="text-sm font-bold leading-tight">Crea tu web en menos de 15 minutos</p>
              </div>
            </motion.div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-vigo-blue/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Benefits - Bento Grid Style */}
      <section className="py-32 bg-slate-950 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
              DOMINA EL FUTURO <br />
              <span className="text-slate-500">SIN PICAR CÓDIGO.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-vigo-blue p-12 rounded-[32px] relative overflow-hidden group">
              <Rocket size={120} className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-black mb-4">Metodología "Fast-Track"</h3>
              <p className="text-xl text-blue-100 max-w-md">
                No perdemos el tiempo con teoría aburrida. Sal del taller con tu landing publicada y lista para recibir clientes.
              </p>
            </div>
            <div className="md:col-span-4 bg-slate-900 p-12 rounded-[32px] border border-white/10">
              <ShieldCheck size={48} className="text-vigo-red mb-6" />
              <h3 className="text-2xl font-black mb-4">Herramientas Pro</h3>
              <p className="text-slate-400">
                Seleccionamos el stack de IA gratuito más potente del 2026.
              </p>
            </div>
            <div className="md:col-span-4 bg-slate-900 p-12 rounded-[32px] border border-white/10">
              <Users size={48} className="text-vigo-red mb-6" />
              <h3 className="text-2xl font-black mb-4">Networking Real</h3>
              <p className="text-slate-400">
                Conecta con otros emprendedores de Vigo en un entorno creativo.
              </p>
            </div>
            <div className="md:col-span-8 bg-white text-slate-950 p-12 rounded-[32px] flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-black mb-4">¿Para quién es esto?</h3>
                <p className="text-xl text-slate-500">
                  Autónomos, pequeñas empresas y mentes inquietas que quieren vender más gastando menos.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Sin código', 'Sin diseño', '100% IA', 'Gratis'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-slate-100 rounded-full text-xs font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority & Speakers */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-black tracking-tighter mb-8 text-vigo-blue">
                APRENDE DE LOS <br />
                <span className="text-vigo-red">QUE YA LO HACEN.</span>
              </h2>
              <p className="text-xl text-slate-500 mb-12">
                Gabriel y Fabiana han ayudado a cientos de negocios a digitalizarse usando estrategias de vanguardia.
              </p>
              
              <div className="space-y-8">
                {[
                  { 
                    name: "Gabriel Oliveira", 
                    role: "Estratega Digital @ DPI", 
                    img: `${import.meta.env.BASE_URL}Gabriel_Oliveira-DPI.jpg` 
                  },
                  { 
                    name: "Fabiana Altamirano", 
                    role: "Especialista @ VigoEmprende", 
                    img: `${import.meta.env.BASE_URL}fabi.jpg` 
                  }
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <img src={s.img} className="w-24 h-24 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all shadow-lg" alt={s.name} referrerPolicy="no-referrer" />
                    <div>
                      <h4 className="text-xl font-black text-slate-900">{s.name}</h4>
                      <p className="text-vigo-red font-bold text-sm uppercase tracking-widest">{s.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-12 rounded-[40px] border border-slate-100 relative">
              <Quote className="text-vigo-blue/10 absolute top-10 right-10" size={80} />
              <p className="text-2xl font-light italic text-slate-700 leading-relaxed relative z-10">
                "Este taller no es una charla más. Es una sesión de trabajo donde la IA se convierte en tu empleada más eficiente. Queremos que Vigo lidere la adopción de estas tecnologías."
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-1 bg-vigo-red"></div>
                <p className="font-bold uppercase tracking-widest text-xs text-slate-400">Mensaje de los ponentes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call - High Impact */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-vigo-red rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(227,62,43,0.4)]">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
                ¿TE ATREVES A <br /> SER EL PRIMERO?
              </h2>
              <p className="text-xl md:text-2xl text-red-100 mb-12 max-w-2xl mx-auto font-light">
                Las plazas para el Pazo da Raposeira son limitadas por aforo. No te quedes fuera de la revolución.
              </p>
              <a 
                href={CTA_LINK}
                className="inline-flex items-center gap-4 bg-white text-vigo-red font-black py-6 px-12 rounded-2xl text-2xl hover:bg-slate-900 hover:text-white transition-all transform hover:scale-105"
              >
                RESERVAR MI ASIENTO <ArrowRight size={32} />
              </a>
              <div className="mt-12 flex justify-center gap-8 opacity-60 text-xs font-bold uppercase tracking-[0.3em]">
                <span>VIGO</span>
                <span>•</span>
                <span>13 MARZO</span>
                <span>•</span>
                <span>GRATIS</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-white border-t border-slate-100 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}logo-ve.png`} 
                alt="Vigo Emprende Logo" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 max-w-xs">
              Impulsando el ecosistema emprendedor de Vigo a través de la innovación y la tecnología.
            </p>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs text-slate-900 mb-6">Contacto</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li>Pazo da Raposeira, Vigo</li>
              <li>vigoemprende@vigo.org</li>
              <li>986 810 100</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs text-slate-900 mb-6">Legal</h5>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-vigo-red transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-vigo-red transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="hover:text-vigo-red transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
