import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [eventTitle, setEventTitle] = useState("");
  const [eventType, setEventType] = useState("Palestra");
  const [eventVagas, setEventVagas] = useState(10); // Estado para o formulário
  const [eventList, setEventList] = useState([]);
  const [filter, setFilter] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState(""); // Filtro de pesquisa
  const [showModal, setShowModal] = useState(false); // Modal de alterações

  useEffect(() => {
    const savedEvents = localStorage.getItem("@eventpulse_data");
    if (savedEvents) setEventList(JSON.parse(savedEvents));
  }, []);

  useEffect(() => {
    localStorage.setItem("@eventpulse_data", JSON.stringify(eventList));
  }, [eventList]);

  const addEvent = (e) => {
    e.preventDefault();
    if (!eventTitle.trim()) return;

    const newEvent = {
      id: crypto.randomUUID(),
      title: eventTitle,
      type: eventType,
      vagas: eventVagas,
      status: "Agendado",
      date: new Date().toLocaleDateString()
    };

    setEventList([newEvent, ...eventList]);
    setEventTitle("");
  };

  const inscreverAluno = (id) => {
    setEventList(eventList.map(evt => 
      evt.id === id && evt.vagas > 0 ? { ...evt, vagas: evt.vagas - 1 } : evt
    ));
  };

  const limparCronograma = () => {
    if (window.confirm("Tem certeza que deseja apagar todo o cronograma? Esta ação não pode ser desfeita.")) {
      setEventList([]);
      localStorage.removeItem("@eventpulse_data");
    }
  };

  const toggleStatus = (id) => {
    setEventList(eventList.map(evt => {
      if (evt.id === id) {
        const nextStatus = evt.status === "Agendado" ? "Em Andamento" :
                           evt.status === "Em Andamento" ? "Encerrado" : "Agendado";
        return { ...evt, status: nextStatus };
      }
      return evt;
    }));
  };

  const deleteEvent = (id) => {
    setEventList(eventList.filter(evt => evt.id !== id));
  };

  // LÓGICA: Filtro por pesquisa + Filtro por status + Destaque Workshops no topo
  const processedEvents = eventList
    .filter(evt => {
      const matchesSearch = evt.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filter === "Todos" || 
                           (filter === "Agendados" && evt.status === "Agendado") ||
                           (filter === "Em Andamento" && evt.status === "Em Andamento") ||
                           (filter === "Encerrados" && evt.status === "Encerrado");
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      // Força Workshop para o início (prioridade -1)
      if (a.type === "Workshop" && b.type !== "Workshop") return -1;
      if (a.type !== "Workshop" && b.type === "Workshop") return 1;
      return 0;
    });

  return (
    <div className="app-container">
      <header style={{ position: 'relative' }}>
        <div className="header-actions">
          <button className="btn-clear" style={{ position: 'absolute', right: '20px', top: '20px' }} onClick={limparCronograma}><strong>Limpar Cronograma</strong></button>
        </div>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="🔍 Pesquisar evento pelo título..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <img src="Event.png" alt="Ícone" className="main-logo" />
        <h1><strong>EventPulse</strong> 💡</h1>
        <h2><strong>Gestão de Eventos Acadêmicos</strong></h2>
      </header>

      <section className="form-section" style={{ backgroundColor: '#ffffff', padding: '20px' }}>
  <form 
    onSubmit={addEvent} 
    style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '12px',         // Espaço menor entre os elementos
      width: '100%',       // Faz o formulário ser comprido
      maxWidth: '800px',   // Define um limite máximo para não esticar ao infinito em telas grandes
      margin: '0 auto',    // Centraliza na tela
      backgroundColor: '#ffffff'
    }}
  >
    <input
      value={eventTitle}
      onChange={(e) => setEventTitle(e.target.value)}
      placeholder="Nome do evento..."
      style={{ 
        fontSize: '18px', 
        padding: '15px', 
        minHeight: '60px',
        width: '100%',      // Ocupa toda a largura do formulário
        boxSizing: 'border-box', // Garante que o padding não quebre a largura
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#ffffff'
      }}
    />

    <select 
      value={eventType} 
      onChange={(e) => setEventType(e.target.value)} 
      style={{ 
        fontSize: '18px', 
        padding: '15px', 
        minHeight: '60px',
        width: '100%', 
        boxSizing: 'border-box',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#ffffff'
      }}
    >
      <option value="Palestra">Palestra</option>
      <option value="Workshop">Workshop</option>
      <option value="Painel">Painel</option>
    </select>

    <select 
      value={eventVagas} 
      onChange={(e) => setEventVagas(Number(e.target.value))} 
      style={{ 
        fontSize: '18px', 
        padding: '15px', 
        minHeight: '60px',
        width: '100%',
        boxSizing: 'border-box',
        border: '1px solid #ddd',
        borderRadius: '5px',
        backgroundColor: '#ffffff'
      }}
    >
      <option value={10}>10 Vagas</option>
      <option value={30}>30 Vagas</option>
      <option value={50}>50 Vagas</option>
    </select>

    <button 
      type="submit" 
      style={{ 
        fontSize: '18px', 
        padding: '15px', 
        minHeight: '60px', 
        width: '100%',
        cursor: 'pointer',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        fontWeight: 'bold'
      }}
    >
      Agendar
    </button>
  </form>
</section>

      <section className="filter-section" style={{ display: 'flex', gap: '10px' }}>
  {["Todos", "Agendados", "Em Andamento", "Encerrados"].map(f => (
    <button
      key={f}
      className={filter === f ? "active" : ""}
      onClick={() => setFilter(f)}
      style={{ 
        flex: 1, // Faz o botão crescer para ocupar o espaço disponível
        padding: '10px 0' 
      }}
    >
      {f}
    </button>
  ))}
</section>

      <main className="event-grid">
        {processedEvents.map(item => (
          <div key={item.id} className={`event-card ${item.type.toLowerCase()} ${item.status.toLowerCase().replace(" ", "-")}`}>
            <div className="event-content">
              <h3>{item.title}</h3>
              <span className="event-tag">Tipo: {item.type}</span>
              <span className="status-badge">Status: {item.status}</span>
              <span className="vagas-badge">Vagas: {item.vagas}</span>
              <small>Registrado em: {item.date}</small>
            </div>
            <div className="event-actions">
              <button 
                onClick={() => inscreverAluno(item.id)} 
                className="enroll-btn"
                disabled={item.vagas === 0}
              >
                {item.vagas > 0 ? "Inscrever Aluno" : "Esgotado"}
              </button>
              <button onClick={() => toggleStatus(item.id)} className="status-btn">Alterar Status</button>
              <button onClick={() => deleteEvent(item.id)} className="delete">Remover</button>
            </div>
          </div>
        ))}
      </main>

      {/* Botão FAB e Modal */}
      <button className="fab-button" style={{ position: 'fixed', right: '20px', bottom: '20px' }} onClick={() => setShowModal(true)}>
        <img src="Event.png" alt="Ícone" className="main-logo" style={{ width: '24px', height: '24px' }} />
      </button>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>Alterações Estruturais</h2>
            <hr />
            <ul>
              <li><strong>Efeito Glassmorphism:</strong> Implementado nos cards para um visual moderno e translúcido.</li>
              <li><strong>Sistema de Cards Dinâmicos:</strong> Mudança de escala e sombra ao passar o mouse (hover).</li>
              <li><strong>Interface de Status:</strong> Badges de vagas e status com cores contextuais vibrantes.</li>
            </ul>
            <button onClick={() => setShowModal(false)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;