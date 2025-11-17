# 🧪 Guia de Testes - Territórios Vivos

## ✅ Checklist de Testes

### 🗺️ Testes do Mapa

#### Carregamento
- [ ] Mapa aparece ao abrir a página
- [ ] Mapa está centrado no Brasil
- [ ] Todos os 8 marcadores aparecem
- [ ] Cada marcador tem um ícone 🏘️

#### Interação
- [ ] Clique em marcador → abre popup
- [ ] Clique em povo na lista → abre modal
- [ ] Zoom com mouse wheel
- [ ] Pan arrastandoclique + movimento
- [ ] Duplo clique → zoom in

#### Filtros
- [ ] Selecionar região → filtra povos
- [ ] Selecionar bioma → filtra povos
- [ ] Selecionar família linguística → filtra povos
- [ ] Combinar múltiplos filtros → combina corretamente
- [ ] Botão "Limpar Filtros" → volta ao estado inicial

#### Modal
- [ ] Abre com informações completas
- [ ] Mostra saudação na língua nativa
- [ ] Botão X fecha modal
- [ ] Clique fora fecha modal
- [ ] Scroll funciona dentro do modal
- [ ] Não há quebra de layout

#### Lista de Povos
- [ ] Lista se atualiza com filtros
- [ ] Clique em card abre modal
- [ ] Nenhum card duplicado
- [ ] Cards responsivos

---

### ❓ Testes do Quiz

#### Seleção de Dificuldade
- [ ] 3 botões de dificuldade aparecem
- [ ] Clique em "Fácil" → inicia quiz
- [ ] Clique em "Médio" → inicia quiz
- [ ] Clique em "Difícil" → inicia quiz

#### Gameplay
- [ ] Primeira pergunta aparece
- [ ] 4 opções aparecem
- [ ] Opções mudam ao clicar (highlight)
- [ ] Barra de progresso avança
- [ ] Contador de pergunta atualiza
- [ ] Próxima pergunta aparece após responder

#### Feedback
- [ ] Resposta correta → botão fica verde
- [ ] Resposta incorreta → botão fica vermelho
- [ ] Resposta correta é indicada mesmo se errou
- [ ] Explicação aparece

#### Resultados
- [ ] Mostra percentual correto
- [ ] Mostra número de acertos
- [ ] Mostra título/medalha apropriada
- [ ] Lista perguntas com erro
- [ ] Mostra explicações
- [ ] Botão "Fazer Outro Quiz" funciona

#### Funcionalidades Especiais
- [ ] Perguntas embaralhadas cada vez
- [ ] 10 perguntas por sessão
- [ ] Dificuldade afeta seleção de perguntas
- [ ] Sem erros no console (F12)

---

### 📚 Testes da Educação

#### Abas
- [ ] Clique em "Artigos" → abre aba
- [ ] Clique em "Linha do Tempo" → abre aba
- [ ] Clique em "Glossário" → abre aba
- [ ] Navegação entre abas é suave

#### Artigos
- [ ] 6 artigos aparecem
- [ ] Cada artigo tem título e conteúdo
- [ ] Texto legível
- [ ] Imagens se carregam (quando adicionadas)
- [ ] Scroll funciona

#### Linha do Tempo
- [ ] 7 períodos aparecem
- [ ] Alternados esquerda/direita
- [ ] Linha vertical no meio
- [ ] Datas destacadas
- [ ] Conteúdo legível

#### Glossário
- [ ] 10+ termos aparecem
- [ ] Cada termo tem definição
- [ ] Layout em grid
- [ ] Responsivo em mobile

---

### 🎨 Testes de Design e UX

#### Cores
- [ ] Verde floresta (#2d6a4f) é primária
- [ ] Verde claro (#40916c) é secundária
- [ ] Tom terra (#d4a574) é acento
- [ ] Contraste adequado em todos os textos
- [ ] Sem cores muito brilhantes

#### Tipografia
- [ ] Títulos grandes e legíveis
- [ ] Subtítulos proporcionais
- [ ] Corpo do texto confortável
- [ ] Sem texto muito pequeno

#### Espaçamento
- [ ] Sem elementos muito próximos
- [ ] Padding consistente
- [ ] Margin consistente
- [ ] Sem layout quebrado

#### Animações
- [ ] Transições suaves
- [ ] Sem lag ou tela congelada
- [ ] Animações não distraem
- [ ] Botões têm feedback visual

#### Header
- [ ] Logo/título visível
- [ ] Navegação clara
- [ ] Sticky ao scroll
- [ ] Responsive em mobile

#### Footer
- [ ] Aparece ao final
- [ ] Conteúdo legível
- [ ] Cores apropriadas

---

### 📱 Testes de Responsividade

#### Mobile (320px)
- [ ] Layout em coluna única
- [ ] Mapa aparece
- [ ] Botões clicáveis
- [ ] Texto legível
- [ ] Sem scrollbar horizontal
- [ ] Menu funciona
- [ ] Quiz é jogável

#### Tablet (768px)
- [ ] Layout se adapta
- [ ] 2 colunas onde apropriado
- [ ] Mapa tem tamanho bom
- [ ] Tudo funciona

#### Desktop (1024px+)
- [ ] Layout completo
- [ ] Mapa grande
- [ ] Múltiplas colunas
- [ ] Tudo funciona perfeitamente

#### Verificação Específica
```
Abrir DevTools (F12)
Ctrl+Shift+M (modo responsivo)
Testar:
- 320px (mobile pequeno)
- 480px (mobile grande)
- 768px (tablet)
- 1024px (laptop)
- 1440px (desktop grande)
```

---

### ⚡ Testes de Performance

#### Tempo de Carregamento
- [ ] Página carrega em <3 segundos
- [ ] Sem delay notável
- [ ] Dados JSON carregam rápido
- [ ] Mapa renderiza em <1 segundo

#### Memória
- [ ] Sem memory leak ao trocar abas
- [ ] Sem crescimento de memória ao abrir/fechar modais
- [ ] Performance não degrada com uso prolongado

#### Smooth Scrolling
- [ ] Scroll é fluido
- [ ] 60 FPS ao navegar
- [ ] Sem jancos ao interagir

#### Verificação
```
DevTools → Performance → Record
Fazer ações
Analysar timeline
Procurar por spikes
```

---

### 🔒 Testes de Segurança

#### Validação
- [ ] Sem console.log em produção
- [ ] Sem erros de CORS
- [ ] Sem avisos de segurança
- [ ] Sem dados sensíveis no código
- [ ] Sem comentários com informações

#### XSS (Cross-Site Scripting)
- [ ] Tentar injetar `<script>alert('xss')</script>` em filtros
- [ ] Resultados devem ser escapados corretamente
- [ ] Sem execução de scripts maliciosos

#### Verificação no Console
```javascript
// Abrir F12 → Console
// Não deve haver erros em vermelho
// Warnings são OK
```

---

### 🌐 Testes de Compatibilidade

#### Navegadores Desktop
- [ ] Chrome (versão recente)
- [ ] Firefox (versão recente)
- [ ] Safari (versão recente)
- [ ] Edge (versão recente)

#### Navegadores Mobile
- [ ] Chrome Mobile
- [ ] Safari iOS
- [ ] Firefox Mobile
- [ ] Samsung Internet

#### Dispositivos Específicos
- [ ] iPhone (teste com DevTools)
- [ ] Android (teste com DevTools)
- [ ] iPad
- [ ] Kindle (se aplicável)

**Matriz de Teste:**
| Navegador | Desktop | Mobile |
|-----------|---------|--------|
| Chrome | ✅ | ✅ |
| Firefox | ✅ | ✅ |
| Safari | ✅ | ✅ |
| Edge | ✅ | - |
| IE 11 | ❌ | - |

---

### ♿ Testes de Acessibilidade

#### Navegação por Teclado
- [ ] Tab percorre todos elementos
- [ ] Shift+Tab volta
- [ ] Enter ativa botões
- [ ] Espaço ativa checkboxes

#### Cores e Contraste
- [ ] Usar WAVE (wave.webaim.org)
- [ ] Verificar contraste com Contrast Checker
- [ ] Sem dependência só de cor

#### Leitores de Tela
- [ ] Títulos têm hierarquia (H1, H2, H3)
- [ ] Botões têm labels claros
- [ ] Imagens têm alt text (futura)
- [ ] Formulários têm labels

#### Zoom
- [ ] Aumentar zoom a 200% - mantém funcionalidade
- [ ] Texto reajusta sem overflow
- [ ] Botões permanecem clicáveis

---

### 🧠 Testes de Lógica

#### Mapa
- [ ] Cordenadas estão corretas (lat/long)
- [ ] Filtros aplicam lógica AND corretamente
- [ ] Favoritos se lembram (se implementado)

#### Quiz
- [ ] Resposta correta é sempre a mesma
- [ ] Índice de resposta bate com opção
- [ ] Pontuação calcula corretamente
- [ ] Título é atribuído baseado em %

#### Dados
- [ ] Nenhum povo duplicado
- [ ] Todas as fields preenchidas
- [ ] JSON é válido (jsonlint.com)
- [ ] Sem typos óbvios

---

### 📋 Testes de Dados

#### Validação de JSON
```bash
# Terminal
cat assets/data/povos.json | python -m json.tool
# Não deve haver erro
```

#### Completude de Dados
Para cada povo:
- [ ] ID único
- [ ] Nome preenchido
- [ ] Região válida
- [ ] Bioma válido
- [ ] Família linguística válida
- [ ] Coordenadas razoáveis
- [ ] Localização descrita
- [ ] História preenchida
- [ ] Linguagem(s) listada(s)
- [ ] Curiosidades preenchidas
- [ ] Rituais descritos
- [ ] Artesanato descrito
- [ ] Alimentação descrita
- [ ] Saudação preenchida

---

### 📊 Testes de Conteúdo

#### Spelling/Grammar
- [ ] Sem erros de digitação (português)
- [ ] Sem caracteres estranhos
- [ ] Acentuação correta

#### Factualidade
- [ ] Informações são precisas
- [ ] Dados populacionais apropriados
- [ ] Localizações geográficas corretas
- [ ] Histórias respeitam culturas

#### Completude
- [ ] Nenhum campo vazio importante
- [ ] Descrições têm pelo menos 2-3 sentenças
- [ ] Exemplos são apropriados

---

## 🚀 Guia de Teste Rápido (15 minutos)

### 1. Abrir página (1 min)
```
Abrir index.html no navegador
Verificar que carrega sem erros
```

### 2. Testar mapa (3 min)
```
- Explorar clicando em povos
- Usar 1-2 filtros
- Verificar que mostra informações corretas
```

### 3. Testar quiz (8 min)
```
- Fazer quiz fácil (3 perguntas)
- Fazer quiz médio (3 perguntas)
- Verificar que resultado está correto
```

### 4. Testar educação (2 min)
```
- Clique em cada aba
- Scroll para verificar conteúdo
```

### 5. Testar responsividade (1 min)
```
F12 → Modo responsivo
Testar em 320px e 768px
```

---

## 🔍 Verificação de Erros

### Console (F12)
```
Deve aparecer:
✅ "🌍 Territórios Vivos - Iniciando..."
✅ "✅ [número] povos carregados"
✅ "✅ Aplicação carregada com sucesso!"
✅ "🎉 Territórios Vivos carregado com sucesso!"

Não deve aparecer:
❌ Erros em vermelho
❌ Warnings sobre deprecated APIs
```

### Network (F12 → Network)
```
Deve carregar:
✅ index.html (200)
✅ style.css (200)
✅ app.js (200)
✅ povos.json (200)
✅ Leaflet.js (200 ou 304 cached)
```

---

## 📝 Relatório de Testes

Use este template para documentar:

```markdown
# Teste #1 - [Data]

## Ambiente
- Navegador: Chrome 120
- SO: Windows 11
- Resolução: 1920x1080
- Conexão: WiFi

## Resultados
- [ ] Mapa - Passou
- [ ] Quiz - Passou
- [ ] Educação - Passou
- [ ] Responsividade - Passou

## Problemas Encontrados
(nenhum / liste abaixo)

## Notas
...

## Assinado por
[Nome]
```

---

## 🎯 Critérios de Sucesso

✅ **Mapa funciona:** Todas as features de mapa testadas
✅ **Quiz funciona:** Lógica de quiz está correta
✅ **Educação funciona:** Abas navegam corretamente
✅ **Sem erros:** Console limpo
✅ **Responsivo:** Funciona em mobile/tablet/desktop
✅ **Performance:** Carrega rápido
✅ **Acessibilidade:** Navegável com teclado

---

## 📞 Quando Algo Dá Errado

1. **Abrir DevTools** (F12)
2. **Checar Console** (vermelho = erro)
3. **Checar Network** (viu o arquivo ser carregado?)
4. **Hard Refresh** (Ctrl+Shift+R)
5. **Limpar Cache** (DevTools → Settings → Cache)
6. **Verificar arquivo** (existe em `assets/data/povos.json`?)

---

## ✨ Testes de Qualidade Avançados

### Lighthouse (Chrome DevTools)
```
F12 → Lighthouse
Rodar audit completo
Procurar por:
- Performance: >80
- Accessibility: >90
- Best Practices: >90
- SEO: >90
```

### WAVE (Accessibility)
```
https://wave.webaim.org
Colocar URL do seu site
Procurar por erros de acessibilidade
```

### PageSpeed Insights
```
https://pagespeed.web.dev
Colocar URL
Verificar recomendações
```

---

**Bom Teste! 🧪✅**

*Territórios Vivos - Teste com Confiança*
