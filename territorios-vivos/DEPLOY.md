# 🌐 Guia de Deploy - Territórios Vivos

## 📝 Índice

1. [Desenvolvimento Local](#desenvolvimento-local)
2. [GitHub Pages](#github-pages)
3. [Vercel](#vercel)
4. [Netlify](#netlify)
5. [Servidor Próprio](#servidor-próprio)
6. [Checklist Pré-Deploy](#checklist-pré-deploy)

---

## 💻 Desenvolvimento Local

### Requisitos
- VS Code ou navegador moderno
- Conexão de internet (para Leaflet)

### Opção 1: Live Server (Recomendado)

```bash
# 1. Instale a extensão Live Server no VS Code
# Procure por "Live Server" na aba de extensões

# 2. Clique com botão direito em index.html
# 3. Selecione "Open with Live Server"

# 4. Navegador abrirá automaticamente em:
http://localhost:5500
```

### Opção 2: http-server (Node.js)

```bash
# Instale globalmente
npm install -g http-server

# Na pasta do projeto
http-server

# Acesse
http://localhost:8080
```

### Opção 3: Python SimpleHTTPServer

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Acesse
http://localhost:8000
```

---

## 🐙 GitHub Pages

### Passo 1: Criar Repositório

```bash
# Inicializar git
git init
git add .
git commit -m "Initial commit: Territórios Vivos"

# Conectar ao GitHub
git remote add origin https://github.com/seu-usuario/territorios-vivos.git
git branch -M main
git push -u origin main
```

### Passo 2: Ativar GitHub Pages

1. Vá em **Settings** do repositório
2. Navegue até **Pages**
3. Em "Source", selecione **Deploy from a branch**
4. Selecione branch **main** e pasta **/ (root)**
5. Clique em **Save**

### Passo 3: Acessar o Site

Após alguns minutos, acesse:
```
https://seu-usuario.github.io/territorios-vivos
```

### Dica
Para um domínio personalizado:
1. Vá em **Pages** settings
2. Em "Custom domain", digite seu domínio
3. Configure DNS no provedor

---

## 🚀 Vercel (Recomendado para Produção)

### Passo 1: Conectar Repositório

1. Vá em [vercel.com](https://vercel.com)
2. Clique **Import Project**
3. Selecione **Import Git Repository**
4. Digite URL do seu repositório GitHub

### Passo 2: Configurar

```
Project Name: territorios-vivos
Framework Preset: Other
Root Directory: ./
Build Command: (deixar em branco)
Output Directory: (deixar em branco)
Environment Variables: (nenhum necessário)
```

### Passo 3: Deploy

1. Clique **Deploy**
2. Aguarde 30-60 segundos
3. Seu URL será exibido (ex: `territorios-vivos.vercel.app`)

### Domínio Personalizado

1. Em Project Settings → Domains
2. Adicione seu domínio
3. Configure DNS no provedor

### Benefícios
✅ CDN global
✅ HTTPS automático
✅ Redeploy automático ao push
✅ Preview para pull requests
✅ Gratuito para projetos estáticos

---

## 🌐 Netlify

### Passo 1: Conectar GitHub

1. Vá em [netlify.com](https://netlify.com)
2. Clique **New site from Git**
3. Selecione **GitHub**
4. Autorize Netlify
5. Selecione repositório

### Passo 2: Configurar Build

```
Branch to deploy: main
Build command: (deixar em branco)
Publish directory: ./
```

### Passo 3: Deploy

1. Clique **Deploy site**
2. Aguarde conclusão
3. Acesse URL gerada

### Domínio Personalizado

Em **Domain Settings**:
1. Clique **Add custom domain**
2. Configure DNS

### Benefícios
✅ Integração fácil com GitHub
✅ HTTPS gratuito
✅ Analytics de site
✅ Formulários (com extensão)
✅ Ambiente de staging

---

## 🖥️ Servidor Próprio

### Opção 1: Linux com Nginx

```bash
# 1. SSH no servidor
ssh user@seu-servidor.com

# 2. Instale Nginx
sudo apt update
sudo apt install nginx

# 3. Clone o projeto
cd /var/www
git clone https://github.com/seu-usuario/territorios-vivos.git

# 4. Configure Nginx
sudo nano /etc/nginx/sites-available/territorios-vivos
```

Conteúdo do arquivo:
```nginx
server {
    listen 80;
    server_name seu-dominio.com;
    
    root /var/www/territorios-vivos;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
}
```

```bash
# 5. Ative a configuração
sudo ln -s /etc/nginx/sites-available/territorios-vivos \
           /etc/nginx/sites-enabled/

# 6. Teste e reinicie
sudo nginx -t
sudo systemctl restart nginx

# 7. Configure SSL (HTTPS)
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d seu-dominio.com
```

### Opção 2: Node.js com Express

```javascript
// server.js
const express = require('express');
const app = express();

app.use(express.static('./'));

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
```

```bash
# Instale e rode
npm install express
node server.js
```

### Opção 3: Docker

```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY . .
EXPOSE 3000
CMD ["npx", "serve", "-l", "3000"]
```

```bash
# Build e rode
docker build -t territorios-vivos .
docker run -p 3000:3000 territorios-vivos
```

---

## ✅ Checklist Pré-Deploy

### Funcionalidade
- [ ] Mapa carrega corretamente
- [ ] Filtros funcionam
- [ ] Quiz responde adequadamente
- [ ] Modal abre ao clicar povo
- [ ] Abas de educação navegam
- [ ] Sem erros no console (F12)

### Performance
- [ ] Página carrega em <3 segundos
- [ ] Mapa renderiza suavemente
- [ ] Quiz responde rapidamente
- [ ] Sem memory leaks

### SEO & Metadados
```html
<!-- Verifique em index.html -->
<meta name="description" content="...">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Territórios Vivos - Mapa Indígena Interativo</title>
```

### Segurança
- [ ] Sem chaves de API expostas
- [ ] Sem console.log em produção
- [ ] HTTPS ativado
- [ ] Headers de segurança configurados

### Compatibilidade
- [ ] Chrome (Desktop + Mobile)
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Acessibilidade
- [ ] Navegação por teclado
- [ ] Contraste de cores OK
- [ ] Alt text nas imagens
- [ ] Sem erros de acessibilidade

### Responsividade
- [ ] Mobile (320px)
- [ ] Tablet (768px)
- [ ] Desktop (1024px+)
- [ ] Mapa se adapta

---

## 🔒 Configurações de Segurança

### Headers de Segurança (Nginx)

```nginx
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
```

### Certificado SSL

```bash
# Let's Encrypt (gratuito)
sudo certbot certonly --standalone -d seu-dominio.com
```

### .gitignore

```
node_modules/
.env
.env.local
dist/
build/
*.log
```

---

## 📊 Monitoramento Pós-Deploy

### Ferramentas
1. **Google Analytics**
   ```html
   <!-- Adicione ao final de index.html -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_ID');
   </script>
   ```

2. **Sentry (Error Tracking)**
   ```javascript
   // No final de app.js
   Sentry.init({ dsn: 'sua-chave' });
   ```

3. **Uptime Monitor**
   - Use UptimeRobot ou similar
   - Monitorar 24/7

### Métricas Importantes
- Visitantes únicos por dia
- Tempo médio na página
- Povos mais explorados
- Taxa de conclusão do quiz
- Comportamento por navegador

---

## 🔄 CI/CD Automatizado

### GitHub Actions

Criar `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy to Vercel
        run: |
          npm i -g vercel
          vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

---

## 🆘 Troubleshooting Deploy

### Erro: "404 not found"
**Solução:** Verifique se `index.html` está na raiz

### Erro: "Mapa não carrega"
**Solução:** Verifique conexão internet e CDN do Leaflet

### Erro: "Dados não encontrados"
**Solução:** Certifique-se `assets/data/povos.json` está publicado

### Site lento
**Solução:** 
- Use CDN (Vercel/Netlify fazem isso)
- Comprima imagens (future)
- Ative cache no navegador

### CORS Error
**Solução:** Adicione headers (geralmente automático em plataformas)

---

## 📱 Testes Finais

```bash
# Teste em diferentes navegadores
# Chrome DevTools: Ctrl+F12
# Modo responsivo: Ctrl+Shift+M

# Teste de velocidade
# Google PageSpeed: https://pagespeed.web.dev

# Teste de acessibilidade
# WAVE: https://wave.webaim.org

# Teste de SEO
# Screaming Frog ou similar
```

---

## 🎉 Parabéns!

Seu site está no ar! 🚀

Próximos passos:
1. Compartilhe nas redes sociais
2. Submeta para buscadores
3. Peça feedback
4. Itere baseado em analytics

---

**Territórios Vivos - Agora no mundo!** 🌍

