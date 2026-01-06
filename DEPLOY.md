# Guia de Deploy no Vercel

## Opção 1: Deploy via Vercel Dashboard (Recomendado)

1. **Crie um repositório Git:**
   ```bash
   # Se ainda não tiver um repositório remoto
   git remote add origin <URL_DO_SEU_REPOSITORIO>
   git push -u origin main
   ```

2. **Acesse o Vercel:**
   - Vá para [vercel.com](https://vercel.com)
   - Faça login com sua conta (GitHub, GitLab ou email)

3. **Importe o projeto:**
   - Clique em "Add New..." → "Project"
   - Conecte seu repositório Git
   - Selecione o repositório `git-diff`
   - O Vercel detectará automaticamente que é um projeto Next.js

4. **Configure o projeto:**
   - Framework Preset: Next.js (já detectado)
   - Root Directory: `./` (padrão)
   - Build Command: `npm run build` (padrão)
   - Output Directory: `.next` (padrão)

5. **Deploy:**
   - Clique em "Deploy"
   - Aguarde o build completar
   - Seu app estará disponível em uma URL como: `https://git-diff-xxx.vercel.app`

## Opção 2: Deploy via Vercel CLI

1. **Faça login no Vercel:**
   ```bash
   vercel login
   ```
   - Isso abrirá o navegador para autenticação
   - Ou use: `vercel login --github` / `vercel login --gitlab`

2. **Faça o deploy:**
   ```bash
   vercel
   ```
   - Na primeira vez, responda às perguntas:
     - Set up and deploy? **Y**
     - Which scope? (selecione sua conta)
     - Link to existing project? **N**
     - Project name? **git-diff** (ou deixe o padrão)
     - Directory? **./** (padrão)
     - Override settings? **N**

3. **Deploy de produção:**
   ```bash
   vercel --prod
   ```

## Opção 3: Deploy via GitHub Actions (CI/CD)

Crie um arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## Verificações Pós-Deploy

Após o deploy, verifique:

1. ✅ A aplicação carrega corretamente
2. ✅ O tema dark/light funciona
3. ✅ É possível colar um diff e visualizar
4. ✅ Os arquivos expandem/colapsam corretamente
5. ✅ As cores de adição/remoção estão corretas

## Variáveis de Ambiente

Este projeto não requer variáveis de ambiente, mas se precisar adicionar no futuro:

1. No Vercel Dashboard: Project Settings → Environment Variables
2. Ou via CLI: `vercel env add VARIABLE_NAME`

## Domínio Customizado

Para adicionar um domínio customizado:

1. Vercel Dashboard → Project → Settings → Domains
2. Adicione seu domínio
3. Configure os registros DNS conforme instruções
