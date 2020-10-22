# Projeto de sistema de gerenciamento de imagens (frontend)

## 1. Usuários

### 1.1 Tela de cadastro
- O usuário precisa informar o seu nome, o nickname, o email, senha, com, no mínimo 6 caracteres. 

### 1.2 Tela de Login
- Todos os usuários devem se logar pelo mesma tela. Eles podem fornecer o email (ou o nickname, caso tenha sido feito com este) e a senha correta. 

### 1.3 Feed
- A tela de feed é a tela **principal** da aplicação. Nela, tem-se os posts de todas as pessoas que o usuário segue, com um link para que se possa acessar o perfil do autor da imagem, que leva à tela de perfil. O texto do autor do item é o nome e o nickname.

### 1.4 Busca de usuários
- Barra de busca presente em um lugar fixo. Os resultados aparecem em lista corrida vertical. O perfil de quem foi trazido é clicável para que se possa ir ao seu perfil.

### 1.5 Perfil de usuários
- O perfil de um usuário deve exibir seu nome, seu nickname, suas músicas e coleções, e também um botão de **seguir**.
- O mesmo botão para seguir e deixar de seguir.

## 2. Imagem

### 2.1 Tela de criação de música ou imagem
- Um usuário tem que fornecer todas as informações citadas no backend em um formulário que valide se os campos estão vazios. Após criar um item, o usuário é levado à tela de leitura de todas os conteúdos criados até o momento.

### 2.2 Tela para ver itens
- Esta tela deve exibe todos os conteúdos criados até o momento. Exibe uma versão pequena da imagem e sua legenda.

#### 2.2.1 Tela para ver um item específico.
- Ao clicar em uma imagem, deve aparecer um modal com a imagem em um tamanho maior, junto ao resto das informações da imagem, como autor, ano e tags.

## 3. Coleção

#### 3.1 Tela de criação de coleção
- Na tela inicial há um botão para criar uma nova coleção. Ao clicar neste botão, abre um modal com um breve formulário para preencher os dados. Ao clicar em um botão de salvar, o modal se fecha e uma mensagem de sucesso aparece.

#### 3.2 Tela de listagem coleções
- Nesta tela há uma lista da coleções criadas pelo usuário, com nome e imagem. Caso não tenha imagem, um placeholder deve ser colocado no lugar. Ao clicar em uma das coleções, devemos ir para a próxima tela.

### 3.2.1 Tela de detalhes da coleção
- Funciona como a tela de listagem de todos os itens, mas apenas as imagens da coleção aparecem. Ao clicar em um item, o comportamento deve ser igual ao esperado na tela inicial de listagem de itens.

### 3.3 Tela para ver itens de cada critério.
- Esta tela deve exibir todos os critérios criados.

### 3.3.1 Tela de detalhes da coleção
- Deve funcionar como a tela de listagem de todos os itens, mas apenas as imagens do critério devem aparecer. Ao clicar em um item, o comportamento deve ser igual ao esperado na tela inicial de listagem de itens.

### 3.3.2 Tela para ver um item específico.
Ao clicar em uma imagem,deve aparecer um modal com a imagem em um tamanho maior, junto ao resto das informações da imagem, como autor, ano e tags.