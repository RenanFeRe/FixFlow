# FixFlow

Helpdesk frontend — controle e correções de computadores. HTML + CSS puro, sem dependências ou bundler.

## Estrutura do projeto

```
login.html              # Login com link para /register.html
register.html           # Cadastro (nome, email, senha)
client/
├── dashboard.html      # Cliente: comentários feitos / respondidos / sem resposta
├── reviews.html        # Cliente: avaliar atendimento dos técnicos (estrelas)
└── profile.html        # Cliente: editar nome, email, senha
technician/
├── dashboard.html      # Técnico: chamados abertos vs respondidos
└── profile.html        # Técnico: editar perfil
css/
├── reset.css           # Reset + variáveis CSS (cores, sombras, radii)
└── style.css           # Todos os estilos do sistema
```

## Regras de estilo

- **Sem JavaScript.** Sem build tools. Apenas HTML + CSS.
- Sidebar responsiva usa `checkbox hack` (`#sidebar-toggle`) — sem JS.
- Sidebar do cliente: Dashboard, Minhas Avaliações, Configurar Perfil.
- Sidebar do técnico: Dashboard, Configurar Perfil (sem avaliações).
- Navbar lateral esquerda fixa (`240px`) em desktop; hamburger no mobile (`768px`).

## Design tokens (css/reset.css)

- `--sidebar-bg: #0f172a` — fundo escuro da sidebar
- `--primary: #3b82f6` — azul de ação principal
- `--bg: #f1f5f9` — fundo da página

## Urgência (4 níveis)

Badges com classes: `badge-critical` (vermelho), `badge-high` (laranja), `badge-medium` (âmbar), `badge-low` (verde).

## Como visualizar

Abra qualquer `.html` no navegador direto do sistema de arquivos. Navegue pelos links entre páginas.
