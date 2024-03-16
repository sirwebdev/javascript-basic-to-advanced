# HTML

- HTML (Hyper Text Marked Language - Linguagem de Marcaçao de HiperTexto) é uma linguagem padrão usada para cirar e estruturar páginas na WEB.
- Ele é a base de TODOS os sites da WEB.

**Todas as tags precisam conter abertura `<>` e fechamento da mesma `</>`**

## Estrutura do HTML Basicas - TAGs

- `<!DOCTYPE html>` Tag de declaração do documento. Ela define que o arquivo em questão é um HTML.
- `<html></html>` Tag de inicio e fim do HTML.
- `<head></head>` - Contém metadados/Informações para o documento.
  - `<meta/>` - Define metatags.
  - `<title></title>` - Define o título do documento, que é mostrado na barra de titulo do navegador.
  - `<link/>` - Recebe informações extarnas ao site em questão, alem de também definir icone (favicon) da pagina.
- `<body></body>` - Define o corpo do documento, onde todo o conteudo _VISIVEL_ vai.
- `<h[1 -> 6]> </h[1 -> 6]>` - Define cabeçalhos de diferentes niveis (h1 é o maior, h6 é o menor) de tamanho.
- `<p></p>` - Define uma paragrafo.
- `<a/>` - Define um hiperlink (links pra paginas externas).
- `<img/>` - Insere uma imagem atraves do atributo `src`.
- `<ul></ul>` e `<li></li>` - Define uma lista _NÃO_ ordenada e seus items.
  ```html
  <ul>
    <li>item 01</li>
  </ul>
  ```
- `<ol></ol>` e `<li></li>` - Define uma lista ordenada e seus items.
  ```html
  <ol>
    <li>item 01</li>
  </ol>
  ```
- `<div></div>` - Define uma seção ou divisão em um documento.
