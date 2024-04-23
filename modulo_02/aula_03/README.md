# Introdução ao CSS Grid

CSS Grid Layout é uma técnica de layout bidimensional poderosa e versátil que permite aos desenvolvedores criar interfaces complexas e responsivas de forma mais intuitiva e consistente. CSS Grid simplifica o processo de design, permitindo um controle preciso sobre a disposição tanto das colunas quanto das linhas.

---

#### Propriedades Fundamentais do CSS Grid

##### 1. **`display: grid;`**
Transforma um contêiner em um grid layout, permitindo que você defina linhas e colunas dentro desse contêiner.

**Uso:**
```css
.container {
  display: grid;
}
```
Esta propriedade é essencial para iniciar o uso de CSS Grid, definindo o contexto de grade para os elementos filhos.

##### 2. **`grid-template-columns` e `grid-template-rows`**
Define as colunas e linhas de um grid com tamanhos específicos. Você pode especificar o tamanho das colunas e linhas com unidades fixas, flexíveis ou como uma fração do espaço disponível (fr).

**Uso:**

```css
.container {
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 100px auto;
}
```
Essas propriedades são fundamentais para estruturar o layout do grid, definindo explicitamente quantas colunas e linhas existirão e quais serão seus tamanhos.


##### 3. **`grid-column` e `grid-row`**
Especifica a localização de início e fim de um item do grid dentro das colunas e linhas do grid.

**Uso:**
```css
.item {
  grid-column: 1 / 3;
  grid-row: 2 / 3;
}
```
Permite posicionar itens específicos em locais precisos dentro do grid, oferecendo um controle detalhado sobre a disposição dos componentes.

##### 4. **`grid-gap`**
Define o espaço entre as linhas e colunas de um grid.

**Uso:**
```css
.container {
  grid-gap: 20px;
}
```
Esta propriedade ajuda a criar espaços uniformes entre os itens do grid, facilitando a criação de designs que necessitam de espaçamento consistente.

##### 5. **`justify-items` e `align-items`**
Controlam o alinhamento dos itens dentro de suas células de grid no eixo horizontal (justify) e vertical (align), respectivamente.

**Uso:**
```css
.container {
  justify-items: start;
  align-items: end;
}
```
Essas propriedades são úteis para alinhar itens dentro de suas células, controlando como eles se ajustam no espaço alocado.

### Propriedades Avançadas do CSS Grid

#### 6. **`grid-auto-flow`**
Determina como os itens são automaticamente colocados em um grid. Pode controlar se os itens devem preencher linha por linha (`row`) ou coluna por coluna (`column`).

**Uso:**
```css
.container {
  grid-auto-flow: column;
}
```
Útil para layouts dinâmicos onde a quantidade de itens pode variar, permitindo controlar a direção de preenchimento automático do grid.

#### 7. **`grid-template-areas`**
Define áreas dentro de um grid por nomes e permite que itens sejam colocados nessas áreas referenciando esses nomes.

**Uso:**
```css
.container {
  grid-template-areas:
    "header header"
    "nav content"
    "footer footer";
}
.item-header {
  grid-area: header;
}
```
Esta propriedade permite um nível de abstração que facilita a leitura do layout, associando nomes às áreas do grid e posicionando itens com base nesses nomes.

#### 8. **`grid-area`**
Usado para posicionar itens dentro das áreas definidas por `grid-template-areas` ou para especificar sua posição e tamanho dentro do grid usando linhas de grid numeradas.

**Uso:**
```css
.item {
  grid-area: 1 / 2 / 3 / 4; // Começa na linha 1, coluna 2, vai até linha 3, coluna 4
}
```
Essencial para posicionar itens de forma precisa ou para colocá-los em áreas nomeadas, simplificando o design de layouts complexos.
