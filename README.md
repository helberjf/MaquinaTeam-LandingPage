# Máquina Team — Landing Page

Landing page institucional da Máquina Team (Premium Fight Club, Juiz de Fora - MG), construída em **React + Vite** com **Tailwind CSS** e animações de scroll com **Framer Motion**.

É uma versão **somente institucional** do site original: sem venda/checkout, sem blog e sem login ou cadastro. Os planos são apresentados apenas como informação, com CTA para WhatsApp.

## Rodando o projeto

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

Para gerar o build de produção:

```bash
npm run build
```

Os arquivos finais ficam em `dist/` (pronto para deploy na Vercel, Netlify ou qualquer host estático).

## Estrutura

```
src/
  App.jsx                      # composição das seções
  data/content.js              # TODO o conteúdo do site (textos, planos, contato)
  components/
    motion/
      Reveal.jsx               # Reveal, Stagger e StaggerItem (animação ao entrar na tela)
      ScrollProgressBar.jsx    # barra de progresso de scroll no topo
    ui/
      SectionHeading.jsx       # título padrão das seções
      WhatsappFab.jsx          # botão flutuante do WhatsApp
    sections/
      Navbar.jsx               # menu fixo com blur ao rolar + menu mobile
      Hero.jsx                 # vídeo de fundo com parallax e entrada do título
      Marquee.jsx              # faixa de modalidades que desliza com o scroll
      About.jsx                # sobre a academia, com imagens em parallax
      Modalities.jsx           # Boxe, Muay Thai e Funcional
      Plans.jsx                # planos (abas + tabela completa)
      Testimonials.jsx         # avaliações do Google
      Contact.jsx              # contato, horários e mapa
      Footer.jsx               # rodapé
public/
  images/                      # fotos da academia e logo
  videos/hero.mp4              # vídeo de fundo do hero
```

## Onde editar o conteúdo

Praticamente tudo (preços, textos, telefone, endereço, depoimentos) está centralizado em
[`src/data/content.js`](src/data/content.js). Mudou um valor de plano? Edite só esse arquivo.

### Planos

Os planos seguem a tabela oficial "Escolha seu plano":

| Frequência       | Mensal | Trimestral | Semestral |
| ---------------- | ------ | ---------- | --------- |
| 1x na Semana     | R$ 155 | R$ 145     | R$ 135    |
| 2x na Semana     | R$ 179 | R$ 169     | R$ 159    |
| 3x na Semana     | R$ 199 | R$ 189     | R$ 175    |
| FULL (Ilimitado) | R$ 219 | R$ 209     | R$ 199    |

O período **Trimestral** vem marcado como "mais vendido" e já aparece selecionado por padrão.

## Animações de scroll

- **Barra de progresso** no topo, ligada ao scroll da página (`useScroll` + `useSpring`).
- **Hero em parallax**: o vídeo desce e dá zoom enquanto o texto sobe e some.
- **Entrada do título** palavra por palavra, com rotação 3D.
- **Reveal ao entrar na tela** em todas as seções, com stagger nos grids e listas.
- **Faixa de modalidades** que desliza horizontalmente conforme a página rola.
- **Imagens em parallax** na seção da academia (camadas em velocidades diferentes).
- **Abas de planos** com indicador animado (`layoutId`) e troca de cards com `AnimatePresence`.
- **Linhas da tabela** que entram uma a uma.
- **Botão do WhatsApp** que aparece depois de 500px de scroll.

Tudo respeita `prefers-reduced-motion`: quem tem animações reduzidas no sistema vê a página estática.
