# 2 meses de nós

Um álbum digital com a carta do Gustavo para a Julia, uma fotografia, a Amora e alguns planos para os próximos anos. O visual mistura papel antigo, recortes e carimbos feitos para o site.

## Personalizar

Edite `app/content.ts` para mudar nomes, carta, textos, foto e música.

Cada parágrafo da carta é um item de `content.letter`. O campo `mark` posiciona os três carimbos da carta. Os artigos e o plano da Gatinha Comunista ficam em `content.communis`.

## Trocar a foto

Coloque a foto original em `public/fotos/` e rode `npm run fotos` para gerar uma versão WebP. Depois atualize `content.photo.src` e `content.photo.alt` em `app/content.ts`.

## Música

A faixa tenta iniciar automaticamente em repetição. Se o navegador bloquear o som, ele começa no primeiro toque ou tecla. Para desativá-la, deixe `content.audio.src` vazio.

## Rodar localmente

```sh
npm ci
npm run dev
```

O fluxo em `.github/workflows/deploy-pages.yml` publica o site no GitHub Pages a cada atualização da branch `main`.
