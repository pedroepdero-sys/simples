# 🚀 Guia Rápido - Territórios Vivos

## ⚡ Comece em 30 segundos

### 1. Abra o arquivo
```bash
# No VS Code, use a extensão Live Server
# Clique em "Go Live" na barra inferior
# Ou acesse:
http://localhost:5500
```

### 2. Explore as seções
- 🗺️ **Mapa**: Veja onde vivem os povos
- ❓ **Quiz**: Teste seu conhecimento
- 📚 **Aprender**: Leia conteúdo educativo

---

## 🗺️ Como Usar o Mapa

### Exploração Básica
1. **Zoom**: Use mouse/trackpad
2. **Pan**: Clique e arraste
3. **Clique em marcador**: Veja informações do povo
4. **Clique no povo na lista**: Abre modal com detalhes

### Filtros
```
Região:
- Norte
- Nordeste  
- Centro-Oeste
- Sudeste
- Sul

Bioma:
- Floresta Amazônica
- Mata Atlântica
- Cerrado
- Pantanal
- Caatinga
- Mata de Araucária

Família Linguística:
- Tupi-Guarani
- Jê
- Yanomami
- Aruak
- Karib
- Macro-Jê
```

### Dica
💡 Use múltiplos filtros! Exemplo: "Sul + Mata de Araucária" = Kaingang

---

## ❓ Como Jogar o Quiz

### Passo 1: Escolher Dificuldade
```
⭐ Fácil
⭐⭐ Médio
⭐⭐⭐ Difícil
```

### Passo 2: Responder
- Leia a pergunta
- Clique em uma opção
- Veja o resultado (verde = certo, vermelho = erro)
- Clique "Próxima"

### Passo 3: Ver Resultado
- Sua pontuação (%)
- Número de acertos
- Título conquistado
- Perguntas que errou com explicações

### Títulos
```
90%+ 🏆 Guardião da Floresta
70-89% 🥇 Explorador dos Povos
50-69% 🎯 Aprendiz da Cultura
<50% 📚 Continue Explorando!
```

### Dica
💡 Tente diferentes níveis! Fácil → Médio → Difícil

---

## 📚 Como Usar a Seção Educativa

### Artigos
- 6 artigos sobre temas indígenas
- Clique em cada card para ler
- Volta ao topo com scroll

### Linha do Tempo
- 7 períodos históricos
- Alternadas esquerda/direita
- Mostra evolução histórica

### Glossário
- 10+ termos indígenas
- Clique para mais informações
- Ótimo para pesquisa rápida

---

## 🎯 Dicas e Truques

### Aprenda Melhor
1. Explore um povo no mapa
2. Clique para ler detalhes
3. Estude a saudação na língua nativa
4. Faça um quiz sobre esse povo
5. Leia artigos relacionados

### Prepare-se para o Quiz
- Leia sobre povos diferentes
- Observe as regiões no mapa
- Memorize características principais
- Identifique padrões culturais

### Compartilhe Conhecimento
- Mostre para amigos
- Use em apresentações
- Recomende como recurso educativo
- Comente sobre experiência

---

## 📱 Em Dispositivos Diferentes

### Smartphone
- Interface se adapta
- Mapa com altura menor
- Toques para interação
- Melhor em landscape para mapa

### Tablet
- Layout otimizado
- Bom equilíbrio
- Touch-friendly

### Desktop
- Experiência completa
- Mapa grande
- Múltiplas colunas

---

## 🔧 Problemas Comuns

### "Mapa não aparece"
✅ Solução: Aguarde carregamento completo (Leaflet é biblioteca externa)

### "Dados não carreguem"
✅ Solução: Certifique-se que arquivo `povos.json` existe em `assets/data/`

### "Quiz não funciona"
✅ Solução: Recarregue a página (F5 ou Ctrl+R)

### "Filtros não funcionam"
✅ Solução: Limpe filtros primeiro com o botão "Limpar Filtros"

---

## 📊 Estrutura dos Dados

### Arquivo: `assets/data/povos.json`

```json
{
  "povos": [
    {
      "id": 1,
      "nome": "Nome do Povo",
      "regiao": "Região",
      "bioma": "Bioma",
      "populacao": 85000,
      "latitud": -25.5,
      "longitud": -47.5,
      // ... mais dados
    }
  ],
  "quizPerguntas": [
    {
      "id": 1,
      "tipo": "localizacao",
      "dificuldade": "facil",
      "pergunta": "...",
      "opcoes": ["A", "B", "C", "D"],
      "resposta": 0
    }
  ]
}
```

---

## 🎨 Personalize as Cores

### Arquivo: `assets/css/style.css`

Encontre a seção `:root`:
```css
:root {
    --primary-color: #2d6a4f;      /* Mude verde */
    --secondary-color: #40916c;    /* Mude verde claro */
    --accent-color: #d4a574;       /* Mude tom terra */
    /* ... etc */
}
```

Salve e veja as mudanças em tempo real!

---

## 📁 Arquivo Adicione um Novo Povo

### Passo 1: Abra `assets/data/povos.json`

### Passo 2: Encontre a seção `"povos"` e adicione no final:

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
  "localizacao": "Descrição",
  "historia": "História do povo...",
  "linguas": ["Língua 1"],
  "curiosidades": ["Curiosidade 1"],
  "rituais": "Rituais...",
  "artesanato": "Artesanato...",
  "alimentacao": "Alimentos...",
  "saudacao": "Saudação"
}
```

### Passo 3: Salve e recarregue página

---

## 📖 Leia Mais

- **README.md** - Documentação completa
- **APRESENTACAO.md** - Visão geral do projeto
- **EXPANSAO.md** - Ideias futuras
- **assets/js/app.js** - Código fonte (comentado)

---

## 🌍 URLs Importantes

```
Mapa: http://localhost:5500#mapa
Quiz: http://localhost:5500#quiz
Educação: http://localhost:5500#educacao
```

---

## ❓ Dúvidas?

Procure por:
- Comentários no código (`// Explicação`)
- Seção de Glossário
- Artigos educativos
- GitHub Issues (quando publicar)

---

## 🎓 Próximos Passos

1. ✅ Explore a plataforma (5 min)
2. ✅ Faça um quiz (10 min)
3. ✅ Leia um artigo (5 min)
4. ✅ Adicione um novo povo (5 min)
5. ✅ Compartilhe com amigos!

---

**Bom aprendizado! 🌳**

*Territórios Vivos - Explorando a Riqueza Cultural dos Povos Indígenas*
