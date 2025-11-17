# 🌍 Territórios Vivos – Mapa Indígena Interativo

Uma plataforma educativa inovadora que apresenta a diversidade dos povos indígenas do Brasil através de um mapa interativo, quiz envolvente e conteúdo educativo personalizado.

## 📋 Índice

- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Usar](#-como-usar)
- [Componentes Principais](#-componentes-principais)
- [Dados dos Povos](#-dados-dos-povos)
- [Customização](#-customização)

## ⭐ Funcionalidades

### 🗺️ Mapa Interativo
- **Mapa responsivo** com Leaflet.js baseado em OpenStreetMap
- **Marcadores interativos** representando territórios indígenas
- **Filtros avançados**:
  - Por Região (Norte, Nordeste, Centro-Oeste, Sudeste, Sul)
  - Por Bioma (Floresta Amazônica, Mata Atlântica, Cerrado, etc.)
  - Por Família Linguística (Tupi-Guarani, Jê, Yanomami, Aruak, Karib)
- **Popup com informações rápidas** ao clicar nos marcadores
- **Lista dinâmica** de povos abaixo do mapa

### ❓ Quiz Interativo
- **Três níveis de dificuldade**: Fácil, Médio, Difícil
- **Dez perguntas** por sessão (selecionadas aleatoriamente)
- **Tipos de perguntas**:
  - Localização: Identificar região/povo
  - Cultura: Conhecimento sobre tradições e idiomas
  - História: Eventos e tradições importantes
  - Associação: Relacionar símbolos com povos
- **Feedback imediato** para cada resposta
- **Barra de progresso** visual
- **Medalhas e títulos** baseados no desempenho:
  - 🏆 Guardião da Floresta (90%+)
  - 🥇 Explorador dos Povos (70-89%)
  - 🎯 Aprendiz da Cultura (50-69%)
  - 📚 Continue Explorando (<50%)

### 📚 Centro de Aprendizagem
- **Artigos educativos** sobre:
  - Conhecimento Ecológico Indígena
  - Arte e Cultura
  - Organização Social e Política
  - Espiritualidade e Rituais
  - Diversidade Linguística
  - Tradição Oral
- **Linha do Tempo Interativa** da história indígena
- **Glossário** com 10+ termos indígenas

### 💬 Informações Detalhadas de Cada Povo
Ao clicar em um povo, modal exibe:
- Nome e localização
- História
- Línguas faladas
- Curiosidades
- Rituais e tradições
- Tipos de artesanato
- Alimentação típica
- Saudação na língua nativa

## 🛠️ Tecnologias

### Frontend
- **HTML5** - Estrutura semântica
- **CSS3** - Design responsivo com Grid/Flexbox
- **JavaScript Vanilla** - Sem dependências desnecessárias
- **Leaflet.js** - Biblioteca de mapas
- **OpenStreetMap** - Dados cartográficos

### Backend (Opcional)
- Dados em JSON (pode ser expandido para Node.js/Express)
- Estrutura pronta para integração com banco de dados

## 📁 Estrutura do Projeto

```
territorios-vivos/
├── index.html                    # Página principal
├── assets/
│   ├── css/
│   │   └── style.css            # Estilos completos
│   ├── js/
│   │   └── app.js               # Lógica da aplicação
│   ├── data/
│   │   └── povos.json           # Dados dos povos e quiz
│   └── images/                  # Imagens (futuros)
└── README.md                    # Este arquivo
```

## 🚀 Como Usar

### 1. Instalação Local

```bash
# Clone ou baixe o projeto
git clone <repo-url>
cd territorios-vivos

# Abra no VS Code
code .

# Use a extensão Live Server para servir localmente
# Clique em "Go Live" na barra inferior
```

### 2. Abrir no Navegador

- Opção 1: Use o Live Server do VS Code
- Opção 2: Acesse `http://localhost:5500` (porta padrão do Live Server)
- Opção 3: Simplesmente abra `index.html` no navegador

### 3. Explorar as Funcionalidades

**Mapa:**
- Navegue pelo mapa usando mouse (zoom, pan)
- Use os filtros para explorar povos específicos
- Clique nos marcadores para ver detalhes

**Quiz:**
- Selecione um nível de dificuldade
- Responda as perguntas
- Veja seu desempenho com feedback detalhado

**Educação:**
- Leia artigos sobre povos indígenas
- Explore a linha do tempo interativa
- Consulte o glossário de termos

## 🏘️ Componentes Principais

### App Object
```javascript
{
  dados: {},           // Dados dos povos e quiz
  mapa: L.map,        // Instância do Leaflet
  marcadores: [],     // Marcadores do mapa
  quizDados: {},      // Estado do quiz
  filtrosAtivos: {}   // Filtros aplicados
}
```

### Estrutura de um Povo
```json
{
  "id": 1,
  "nome": "Guarani",
  "regiao": "Sul e Sudeste",
  "bioma": "Mata Atlântica",
  "familiaLinguistica": "Tupi-Guarani",
  "populacao": 85000,
  "latitud": -25.5,
  "longitud": -47.5,
  "localizacao": "São Paulo, Paraná, Santa Catarina",
  "historia": "...",
  "linguas": ["Guarani", "Português"],
  "curiosidades": ["..."],
  "rituais": "...",
  "artesanato": "...",
  "alimentacao": "...",
  "saudacao": "Nde porã"
}
```

### Estrutura de uma Pergunta
```json
{
  "id": 1,
  "tipo": "localizacao",
  "dificuldade": "facil",
  "pergunta": "Qual povo indígena...",
  "opcoes": ["Opção A", "Opção B", "Opção C", "Opção D"],
  "resposta": 1,
  "explicacao": "Explicação da resposta correta"
}
```

## 📊 Dados dos Povos

Atualmente incluídos 8 povos:
1. **Guarani** - Mata Atlântica, 85.000 pessoas
2. **Yanomami** - Amazônia, 27.000 pessoas
3. **Tupinambá** - Nordeste/Litoral, 2.000 pessoas
4. **Kaingang** - Sul, 45.000 pessoas
5. **Kayapó** - Amazônia Central, 14.000 pessoas
6. **Terena** - Mato Grosso do Sul, 29.000 pessoas
7. **Krenak** - Sudeste, 600 pessoas
8. **Kuikuro** - Parque do Xingu, 700 pessoas

## 🎨 Customização

### Adicionar Novo Povo

No arquivo `assets/data/povos.json`, adicione no array `povos`:

```json
{
  "id": 9,
  "nome": "Seu Povo",
  "regiao": "Região",
  "bioma": "Bioma",
  "familiaLinguistica": "Família",
  "populacao": 5000,
  "latitud": -10.0,
  "longitud": -55.0,
  "localizacao": "Descrição da localização",
  "historia": "História do povo...",
  "linguas": ["Língua 1", "Língua 2"],
  "curiosidades": ["Curiosidade 1", "Curiosidade 2"],
  "rituais": "Descrição dos rituais",
  "artesanato": "Tipos de artesanato",
  "alimentacao": "Alimentos tradicionais",
  "saudacao": "Saudação na língua nativa"
}
```

### Adicionar Pergunta ao Quiz

No mesmo arquivo, adicione ao array `quizPerguntas`:

```json
{
  "id": 11,
  "tipo": "cultura",
  "dificuldade": "medio",
  "pergunta": "Sua pergunta aqui?",
  "opcoes": ["Opção A", "Opção B", "Opção C", "Opção D"],
  "resposta": 0,
  "explicacao": "Explicação..."
}
```

### Personalizar Cores

No arquivo `assets/css/style.css`, modifique as variáveis CSS:

```css
:root {
    --primary-color: #2d6a4f;        /* Verde floresta */
    --secondary-color: #40916c;      /* Verde claro */
    --accent-color: #d4a574;         /* Tom terra */
    --text-primary: #1b3a2a;         /* Texto escuro */
    /* ... mais variáveis */
}
```

## 🌐 Deploy

### GitHub Pages
```bash
# Fazer push para GitHub
git push origin main

# Ir em Settings > Pages
# Selecionar branch main como fonte
# Acessar em: https://usuario.github.io/territorios-vivos
```

### Vercel / Netlify
1. Conecte seu repositório GitHub
2. Configurações padrão funcionam
3. Deploy automático em cada push

### Servidor próprio
```bash
# Usar com Node.js
npm install -g http-server
http-server
```

## 📱 Responsividade

O site é totalmente responsivo para:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## 🔒 Acessibilidade

- Semântica HTML correta
- Contraste de cores adequado
- Navegação por teclado
- Labels em formulários

## 📝 Licença

Este projeto é educativo e está disponível para uso livre. As informações sobre povos indígenas devem ser sempre tratadas com respeito e precisão.

## 🤝 Contribuições

Sugestões para melhorias:
- Adicionar mais povos indígenas
- Incluir áudios de saudações
- Expandir seção educativa
- Adicionar atividades interativas
- Integração com redes sociais

## 📞 Contato

Dúvidas ou sugestões? Este projeto foi desenvolvido com 💚 para valorizar a diversidade indígena brasileira.

---

**🌳 Territórios Vivos - Explorando a Riqueza Cultural dos Povos Indígenas do Brasil**
