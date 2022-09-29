</h1>

<img src="https://user-images.githubusercontent.com/104467309/188473729-68d7615b-64dd-4478-b44d-1484b4db4141.png" width="250px"> 

</h1>

<h1 align="center">

  <img src="https://user-images.githubusercontent.com/104467309/193118227-21fdcc3b-a524-4a7f-b0d3-06351a09b28d.png" width="250px">
  
  </h1>
  <h1 align="center">

  <img src="https://user-images.githubusercontent.com/104467309/193118683-5eeb63fb-5d9e-4489-bf22-eb8fef30e430.png" width="550px">
  
  </h1>
  

<h1 align="center">
  Desafio Buger Eats

</h1>

O desafio é composto em duas etapas:
A primeira, tem como objetivo avaliar o planejamento na criação de casos
de testes.

A segunda etapa tem como objetivo avaliar a Automatização dos Testes.

<h1 align="center">
Estratégia de testes para Buger Eats
</h1>

A estratégia de testes para o site Burger Eats é dividida em três etapas: processo(cultura), testes exploratórios(manuais) e testes automatizados.

## Processos de documentação

Nesta etapa vamos buscar o entendimento necessário para a criação da estratégia de teste, organização e documentação dos cenários.
`Projeto em BDD utilizando o` => [mapa mental](https://mm.tt/map/2397110976?t=WXpPUfFOUG) e `Casos de teste` => [Arquivos em PDF](https://github.com/paulinrs/desafio_buildbox/tree/main/documentos/Casos%20de%20testes)

## Testes manuais exploratório no site

Engloba uma bateria de testes manuais, principalmente exploratórios no site, testando os fluxos e buscando por inconsistências que possam atrapalhar o fluxo de usuário.

Garantindo também um melhor e maior conhecimento dos fluxos existentes, tantos os fluxos de sucesso como também entendimento sobre os casos de falha.

Essa bateria de testes geralmente é a mais lenta, mas nos proporciona confiança acima de todas as outras estratégias e nos faz ter certeza de que nosso usuário estará recebendo a experiência planejada pelo time de produto.

## Testes automatizados

Os testes automatizados têm a função principal de verificar se o sistema está funcionando como deveria, mas não só isso, visto que por testes manuais também geramos esses resultados. A questão é que os testes manuais são lentos, maçantes e propensos a erros. A automação vem pra aliviar um pouco desses problemas. Visto que no dia a dia desejamos realizar entregas com velocidade sem perder o nível de qualidade, os testes devem:

· Nós dar confiança que o código faz o que deveria fazer;

· Dar feedback rápido, confiável e preciso;

· Ser uma rede de proteção, garantindo que os engenheiros possam alterar e melhorar o código sem a preocupação de quebrar funções já existentes.


 ## Organização do Projeto  

```ruby
   ├── .github/workflows                  
     ├── cypress.yml                     # Arquivos do Github Actions para executar o CI.
   ├── cypress 
   ├── documentos                     
        ├── casos de testes              # documentação em pdf para criação de casos de testes. 
        ├── estratégia de testes 
   ├── README.md                         # Documentação do projeto        
     ├── fixtures            
        ├── imagens                      # imagem da CNH para massa de teste.
        ├── deliver.json                 # massa de teste para prencher dados para cadastrar usuário.
     ├── integration                        
        ├── home_registration.js         # Suite de teste para tela home e cadastro.      
     ├── pages                          
        ├── SignupPage.js                # representa a pagina de cadastro.
   ├── cypress.json                      # configuração para a execução do cypress.
   ├── package-lock.json            
   └── package.json                        
```

 ![banner](https://user-images.githubusercontent.com/104467309/187461248-e66b4b2e-4afa-453d-a87a-1a66f81c1442.jpeg)

## Por quê utilizar o Cypress?

`Cypress` é um framework de testes, de código aberto e de fácil configuração.
Totalmente baseado em uma nova arquitetura, isenta de outros frameworks de testes, o Cypress apresenta um painel próprio que exibe exatamente o que está acontecendo durante a execução dos testes. À medida que o script é escrito, é possível acompanhá-lo, o que auxilia o Analista de Testes (QA) na visualização de quais partes do código necessitam de ajustes.

## Continuos Test
Com `Github Actions` criamos uma `PIPE`, que executa nosso projeto de automação a cada `PUSH`.<br/> 
Podendo ser executado também manualmente no menu de Actions!<br/> 


![Github-Actions](https://user-images.githubusercontent.com/104467309/187503203-165c3006-c7be-4505-aa42-4c0bff72f6b4.png)

## [Cypress.io]( https://www.cypress.io/)

O `CI` esta integrado com o `Cypress Dashboard` enviando os logs resultado dos testes com `evidências ex: video e screenshots` para armazenamento.<br/> 

![Dashboard-Cypress](https://user-images.githubusercontent.com/104467309/187505227-7bab07ed-f142-452a-b4b5-99a748c2ad76.gif)

## Meu projeto no `Cypress.io`=> [Buger Eats](https://dashboard.cypress.io/projects/i7k1nx/runs/4/test-results?actions=%5B%5D&browsers=%5B%5D&groups=%5B%5D&isFlaky=%5B%5D&modificationDateRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D&orderBy=EXECUTION_ORDER&oses=%5B%5D&specs=%5B%5D&statuses=%5B%7B%22value%22%3A%22PASSED%22%2C%22label%22%3A%22PASSED%22%7D%5D&testingTypesEnum=%5B%5D)


## Dependências para executar localmente

- Ter uma IDE de sua preferência
- instalar o node.js [Download](https://nodejs.org/dist/v16.17.0/node-v16.17.0-x64.msi)
- Instalar cypress: => npm i cypress@9.7.0 -D

<h1 align="center">
Executando o projeto
</h1>

> Clone o projeto
``` ruby
git clone https://github.com/paulinrs/desafio_buildbox.git
```

## Instruções de execução 
Use o comando listado abaixo no terminal, diretamente na pasta raiz:

`npx cypress open`

Depois da interface do Cypress aberta, executar o teste: `home_registration.spec.js`

# <h1 align="center">Olá 👋🏻, eu sou o Paulo Roberto</h1>
### 🌱 Atualmente estou no 2° período de *Análise E Desenvolvimento De Sistemas* e estou me aperfeiçoando em *Cypress, RobotFramework e Fundamentos de Testes.*
### 📚 Apaixonado por Livros.
### 💻 e por Tecnologia.


<div align="center">
<img align="leaft" alt="Gif" height="360" width="640" style="border-radius:50px;"  src="https://user-images.githubusercontent.com/104467309/178572559-8f9a513e-d90b-4a3b-9c13-15dbf61fceb1.gif">
<div align="center">
<img height="150em" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=paulinrs&theme=radical"/> 
<img height="150em" src="https://github-readme-stats.vercel.app/api?username=paulinrs&show_icons=true&theme=radical&include_all_commits=true&count_private=false&hide_border=true"/> <img height="150em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=paulinrs&layout=compact&langs_count=7&theme=radical&hide_border=true"/> <img height="150em" src="https://github-readme-streak-stats.herokuapp.com/?user=paulinrs&theme=radical&hide_border=true"/>

<div align="center">
<img src="https://media.giphy.com/media/0TtX2qqpxp3pIafzio/giphy.gif" width="80"> 

# 📫 Contato:
  <a href="https://www.instagram.com/paulinnrs/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
  <a href = "mailto:paulinn.rs@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/paulinnrs/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
 <a href="https://twitter.com/paulin_rs/" target="_blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" target="_blank"></a>
  #
  ![banner](https://github.com/professorjosedeassis/joseassis/blob/main/img/bannerpro.jpg?raw=true)
  #
          
# Linguagens e ferramentas do meu dia a dia:

 </h1> <img src="https://user-images.githubusercontent.com/104467309/180838262-55e35874-c94c-4d32-9cf3-3d5e18c8c7cd.gif" width="400px">  
   </h1>
<img src="https://user-images.githubusercontent.com/104467309/178513487-d1a267ff-4f00-4bf2-85f5-4eb27662bc24.gif" width="250px">

  ##






![Snake animation](https://github.com/paulinrs/paulinrs/blob/output/github-contribution-grid-snake.svg)

