// ========================================
// Territórios Vivos - Aplicação Principal
// ========================================

let app = {
    dados: null,
    mapa: null,
    marcadores: [],
    quizAtivo: false,
    quizDados: {
        dificuldade: null,
        perguntas: [],
        perguntaAtual: 0,
        respostas: [],
        timer: null,
        tempoRestante: 0
    },
    filtrosAtivos: {
        regiao: '',
        bioma: '',
        lingua: ''
    }
};

// ========================================
// Inicialização da Aplicação
// ========================================

document.addEventListener('DOMContentLoaded', async () => {
    console.log('🌍 Territórios Vivos - Iniciando...');
    
    // Carregar dados
    await carregarDados();
    
    // Inicializar componentes
    inicializarNavegacao();
    inicializarMapa();
    inicializarFiltros();
    inicializarQuiz();
    inicializarEducacao();
    
    console.log('✅ Aplicação carregada com sucesso!');
});

// ========================================
// Carregamento de Dados
// ========================================

async function carregarDados() {
    try {
        const response = await fetch('assets/data/povos.json');
        app.dados = await response.json();
        console.log(`✅ ${app.dados.povos.length} povos carregados`);
    } catch (error) {
        console.error('❌ Erro ao carregar dados:', error);
    }
}

// ========================================
// Navegação entre Seções
// ========================================

function inicializarNavegacao() {
    const botoes = document.querySelectorAll('.nav-btn');
    
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const secao = botao.getAttribute('data-section');
            mudarSecao(secao);
        });
    });
}

function mudarSecao(secao) {
    // Remover classe active de todos os botões e seções
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    
    // Adicionar classe active ao botão e seção selecionados
    document.querySelector(`[data-section="${secao}"]`).classList.add('active');
    document.querySelector(`#${secao}-section`).classList.add('active');
}

// ========================================
// Inicializar Mapa
// ========================================

function inicializarMapa() {
    // Criar mapa centrado no Brasil
    app.mapa = L.map('map').setView([-14.2350, -51.9253], 5);
    
    // Adicionar camada de mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(app.mapa);
    
    // Carregar marcadores dos povos
    atualizarMapa();
}

function atualizarMapa() {
    // Limpar marcadores antigos
    app.marcadores.forEach(marcador => app.mapa.removeLayer(marcador));
    app.marcadores = [];
    
    // Adicionar novos marcadores baseado em filtros
    const povosFiltrados = filtrarPovos();
    
    povosFiltrados.forEach(povo => {
        // Criar ícone customizado
        const icone = L.divIcon({
            className: 'marcador-povo',
            html: `<div class="marcador-emoji">🏘️</div>`,
            iconSize: [40, 40],
            popupAnchor: [0, -20]
        });
        
        // Criar marcador
        const marcador = L.marker([povo.latitud, povo.longitud], { icon: icone })
            .bindPopup(`<strong>${povo.nome}</strong><br>${povo.regiao}`)
            .on('click', () => abrirModalPovo(povo))
            .addTo(app.mapa);
        
        app.marcadores.push(marcador);
    });
    
    // Atualizar lista de povos
    atualizarListaPovos();
}

function filtrarPovos() {
    return app.dados.povos.filter(povo => {
        const matchRegiao = !app.filtrosAtivos.regiao || povo.regiao === app.filtrosAtivos.regiao;
        const matchBioma = !app.filtrosAtivos.bioma || povo.bioma === app.filtrosAtivos.bioma;
        const matchLingua = !app.filtrosAtivos.lingua || povo.familiaLinguistica === app.filtrosAtivos.lingua;
        
        return matchRegiao && matchBioma && matchLingua;
    });
}

function atualizarListaPovos() {
    const container = document.getElementById('povos-container');
    container.innerHTML = '';
    
    const povosFiltrados = filtrarPovos();
    
    povosFiltrados.forEach(povo => {
        const card = document.createElement('div');
        card.className = 'povo-card';
        card.innerHTML = `
            <h4>${povo.nome}</h4>
            <p><strong>Região:</strong> ${povo.regiao}</p>
            <p><strong>Bioma:</strong> ${povo.bioma}</p>
            <p><strong>Língua:</strong> ${povo.familiaLinguistica}</p>
            <p class="populacao">👥 ${povo.populacao.toLocaleString()} pessoas</p>
        `;
        card.addEventListener('click', () => abrirModalPovo(povo));
        container.appendChild(card);
    });
}

// ========================================
// Modal do Povo
// ========================================

function abrirModalPovo(povo) {
    const modal = document.getElementById('povo-modal');
    const conteudo = document.getElementById('modal-povo-info');
    
    conteudo.innerHTML = `
        <h2>${povo.nome} 🏘️</h2>
        
        <div class="info-section">
            <h3>📍 Localização</h3>
            <p>${povo.localizacao}</p>
        </div>
        
        <div class="detalhes-grid">
            <div class="detalhe">
                <strong>Região:</strong><br> ${povo.regiao}
            </div>
            <div class="detalhe">
                <strong>Bioma:</strong><br> ${povo.bioma}
            </div>
            <div class="detalhe">
                <strong>Família Linguística:</strong><br> ${povo.familiaLinguistica}
            </div>
            <div class="detalhe">
                <strong>População:</strong><br> ${povo.populacao.toLocaleString()} pessoas
            </div>
        </div>
        
        <div class="info-section">
            <h3>📖 História</h3>
            <p>${povo.historia}</p>
        </div>
        
        <div class="info-section">
            <h3>🗣️ Línguas</h3>
            <p>${povo.linguas.join(', ')}</p>
        </div>
        
        <div class="info-section">
            <h3>🌿 Curiosidades</h3>
            <ul class="curiosidades-list">
                ${povo.curiosidades.map(c => `<li>${c}</li>`).join('')}
            </ul>
        </div>
        
        <div class="info-section">
            <h3>🎭 Rituais</h3>
            <p>${povo.rituais}</p>
        </div>
        
        <div class="info-section">
            <h3>🎨 Artesanato</h3>
            <p>${povo.artesanato}</p>
        </div>
        
        <div class="info-section">
            <h3>🍽️ Alimentação</h3>
            <p>${povo.alimentacao}</p>
        </div>
        
        <div class="saudacao-box">
            🗣️ ${povo.saudacao}
        </div>
    `;
    
    modal.classList.remove('hidden');
}

document.getElementById('povo-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'povo-modal' || e.target.className === 'modal-close') {
        document.getElementById('povo-modal').classList.add('hidden');
    }
});

// ========================================
// Filtros
// ========================================

function inicializarFiltros() {
    document.getElementById('filtro-regiao').addEventListener('change', (e) => {
        app.filtrosAtivos.regiao = e.target.value;
        atualizarMapa();
    });
    
    document.getElementById('filtro-bioma').addEventListener('change', (e) => {
        app.filtrosAtivos.bioma = e.target.value;
        atualizarMapa();
    });
    
    document.getElementById('filtro-lingua').addEventListener('change', (e) => {
        app.filtrosAtivos.lingua = e.target.value;
        atualizarMapa();
    });
    
    document.getElementById('btn-limpar-filtros').addEventListener('click', () => {
        app.filtrosAtivos = { regiao: '', bioma: '', lingua: '' };
        document.getElementById('filtro-regiao').value = '';
        document.getElementById('filtro-bioma').value = '';
        document.getElementById('filtro-lingua').value = '';
        atualizarMapa();
    });
}

// ========================================
// Quiz
// ========================================

function inicializarQuiz() {
    document.querySelectorAll('.btn-dificuldade').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const dificuldade = e.target.getAttribute('data-dificuldade');
            iniciarQuiz(dificuldade);
        });
    });
    
    document.getElementById('btn-novo-quiz').addEventListener('click', () => {
        resetarQuiz();
    });
}

function iniciarQuiz(dificuldade) {
    app.quizDados.dificuldade = dificuldade;
    app.quizDados.perguntas = app.dados.quizPerguntas.filter(q => q.dificuldade === dificuldade);
    app.quizDados.perguntaAtual = 0;
    app.quizDados.respostas = [];
    
    // Embaralhar perguntas
    app.quizDados.perguntas = app.quizDados.perguntas.sort(() => Math.random() - 0.5).slice(0, 10);
    
    mostrarPergunta();
    document.getElementById('quiz-selector').classList.add('hidden');
    document.getElementById('quiz-game').classList.remove('hidden');
}

function mostrarPergunta() {
    const pergunta = app.quizDados.perguntas[app.quizDados.perguntaAtual];
    
    // Atualizar progresso
    const progresso = ((app.quizDados.perguntaAtual) / app.quizDados.perguntas.length) * 100;
    document.getElementById('progress-fill').style.width = progresso + '%';
    document.getElementById('questao-contador').textContent = 
        `Pergunta ${app.quizDados.perguntaAtual + 1} de ${app.quizDados.perguntas.length}`;
    
    // Mostrar pergunta
    document.getElementById('quiz-pergunta').textContent = pergunta.pergunta;
    
    // Embaralhar opções
    const opcoes = [...pergunta.opcoes].sort(() => Math.random() - 0.5);
    
    const container = document.getElementById('quiz-opcoes');
    container.innerHTML = '';
    
    opcoes.forEach((opcao, index) => {
        const btn = document.createElement('button');
        btn.className = 'opcao-btn';
        btn.textContent = opcao;
        btn.addEventListener('click', () => responderPergunta(index, pergunta, opcoes));
        container.appendChild(btn);
    });
    
    // Mostrar botões de ação
    document.getElementById('btn-proxima').classList.add('hidden');
    document.getElementById('btn-finalizar').classList.add('hidden');
}

function responderPergunta(indexOpcao, pergunta, opcoes) {
    const respostaCorreta = pergunta.opcoes[pergunta.resposta];
    const respostaSelecionada = opcoes[indexOpcao];
    const acertou = respostaSelecionada === respostaCorreta;
    
    // Registrar resposta
    app.quizDados.respostas.push({
        pergunta: pergunta.pergunta,
        respostaSelecionada,
        respostaCorreta,
        acertou,
        explicacao: pergunta.explicacao
    });
    
    // Desabilitar todos os botões
    document.querySelectorAll('.opcao-btn').forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === respostaCorreta) {
            btn.classList.add('correto');
        } else if (btn.textContent === respostaSelecionada && !acertou) {
            btn.classList.add('incorreto');
        }
    });
    
    // Mostrar botão de próxima
    if (app.quizDados.perguntaAtual < app.quizDados.perguntas.length - 1) {
        document.getElementById('btn-proxima').classList.remove('hidden');
        document.getElementById('btn-proxima').onclick = () => {
            app.quizDados.perguntaAtual++;
            mostrarPergunta();
        };
    } else {
        document.getElementById('btn-finalizar').classList.remove('hidden');
        document.getElementById('btn-finalizar').onclick = finalizarQuiz;
    }
}

function finalizarQuiz() {
    const acertos = app.quizDados.respostas.filter(r => r.acertou).length;
    const total = app.quizDados.respostas.length;
    const percentual = Math.round((acertos / total) * 100);
    
    // Determinar medal
    let medal = '😢';
    let titulo = '';
    if (percentual >= 90) {
        medal = '🏆';
        titulo = 'Guardião da Floresta';
    } else if (percentual >= 70) {
        medal = '🥇';
        titulo = 'Explorador dos Povos';
    } else if (percentual >= 50) {
        medal = '🎯';
        titulo = 'Aprendiz da Cultura';
    } else {
        medal = '📚';
        titulo = 'Continue Explorando!';
    }
    
    // Montar feedback
    let feedback = `<p>Você respondeu <strong>${acertos} de ${total}</strong> perguntas corretamente!</p>`;
    feedback += `<p style="margin-top: 10px;"><strong>Título conquistado:</strong> ${titulo}</p>`;
    
    // Perguntas com erro
    const erros = app.quizDados.respostas.filter(r => !r.acertou);
    let sugestoes = '';
    if (erros.length > 0) {
        sugestoes = '<h4>Perguntas com erro:</h4>';
        sugestoes += '<ul>';
        erros.forEach((erro, index) => {
            sugestoes += `
                <li>
                    <strong>${erro.pergunta}</strong><br>
                    Você respondeu: ${erro.respostaSelecionada}<br>
                    Resposta correta: ${erro.respostaCorreta}<br>
                    ${erro.explicacao}
                </li>
            `;
        });
        sugestoes += '</ul>';
    }
    
    // Mostrar resultados
    document.getElementById('quiz-game').classList.add('hidden');
    document.getElementById('quiz-resultados').classList.remove('hidden');
    document.getElementById('medal-icon').textContent = medal;
    document.getElementById('resultado-percentual').textContent = percentual + '%';
    document.getElementById('resultado-acertos').textContent = `${acertos} de ${total} corretos`;
    document.getElementById('resultado-feedback').innerHTML = feedback;
    document.getElementById('resultado-sugestoes').innerHTML = sugestoes || '<p>Parabéns! Você acertou todas!</p>';
}

function resetarQuiz() {
    document.getElementById('quiz-resultados').classList.add('hidden');
    document.getElementById('quiz-selector').classList.remove('hidden');
    document.getElementById('quiz-game').classList.add('hidden');
    app.quizDados = {
        dificuldade: null,
        perguntas: [],
        perguntaAtual: 0,
        respostas: [],
        timer: null,
        tempoRestante: 0
    };
}

// ========================================
// Educação - Tabs
// ========================================

function inicializarEducacao() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tabName = e.target.getAttribute('data-tab');
            mudarTab(tabName);
        });
    });
}

function mudarTab(tabName) {
    // Remover active de todos
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Adicionar active ao selecionado
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

// ========================================
// Estilos CSS Customizados para Marcadores
// ========================================

const style = document.createElement('style');
style.textContent = `
    .marcador-povo {
        background: none;
        border: none;
    }
    
    .marcador-emoji {
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        animation: float 3s ease-in-out infinite;
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    
    .leaflet-popup-content-wrapper {
        background: linear-gradient(135deg, #2d6a4f 0%, #40916c 100%);
        border-radius: 10px;
    }
    
    .leaflet-popup-content {
        color: white;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

console.log('🎉 Territórios Vivos carregado com sucesso!');
