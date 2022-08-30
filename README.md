<h1 align="center">
  Desafio Buildbox
</h1>

O desafio é composto em duas etapas:
A primeira, tem como objetivo avaliar o planejamento na criação de casos
de testes.

A segunda etapa tem como objetivo avaliar o na Automatização dos Testes.

<h1 align="center">
Estratégia de testes para Buger Eats
</h1>

A estratégia de testes para o site Burger Eats é dividida em três etapas: processo(cultura), testes exploratórios(manuais) e testes automatizados.

Processos de documentação

Nesta etapa vamos buscar o entendimento necessário para a criação da estratégia de teste, organização e documentação dos cenários.

Testes manuais exploratório no site

Engloba uma bateria de testes manuais, principalmente exploratórios no site, testando os fluxos e buscando por inconsistências que possam atrapalhar o fluxo de usuário.

Garantindo também um melhor e maior conhecimento dos fluxos existentes, tantos os fluxos de sucesso como também entendimento sobre os casos de falha.

Essa bateria de testes geralmente é a mais lenta, mas nos proporciona confiança acima de todas as outras estratégias e nos faz ter certeza de que nosso usuário estará recebendo a experiência planejada pelo time de produto.

Testes automatizados

Os testes automatizados têm a função principal de verificar se o sistema está funcionando como deveria, mas não só isso, visto que por testes manuais também geramos esses resultados. A questão é que os testes manuais são lentos, maçantes e propensos a erros. A automação vem pra aliviar um pouco desses problemas. Visto que no dia a dia desejamos realizar entregas com velocidade sem perder o nível de qualidade, os testes devem:

· Nós dar confiança que o código faz o que deveria fazer;

· Dar feedback rápido, confiável e preciso;

· Ser uma rede de proteção, garantindo que os engenheiros possam alterar e melhorar o código sem a preocupação de quebrar funções já existentes.

#### Organização do Projeto
```ruby
   ├── .github/workflows                  
     ├── cypress.yml                     # Arquivos do Github Actions para executar o CI.
   ├── cypress 
   ├── README.md                         # Documentação do projeto
     ├── documentos                     
        ├── casos de testes              # documentação em pdf para criação de casos de testes. 
        ├── estratégia de testes         
     ├── fixtures            
        ├── imagens                      # imagem da CNH fake para massa de teste.
        ├── deliver.json                 # massa de teste para prencher dados para cadastrar usuário.
     ├── integration                        
        ├── home_registration.js         # Suite de teste para tela home e cadastro.      
     ├── pages                          
        ├── SignupPage.js                # representa a pagina de cadastro.
    ├── cypress.json                     # configuração para a execução do cypress.
    ├── package-lock.json            
    └── package.json                        
```

 ![banner](https://user-images.githubusercontent.com/104467309/187461248-e66b4b2e-4afa-453d-a87a-1a66f81c1442.jpeg)

### Por quê utilizar o Cypress

`Cypress` é um framework de testes, de código aberto e de fácil configuração.

Totalmente baseado em uma nova arquitetura, isenta de outros frameworks de testes, o Cypress apresenta um painel próprio que exibe exatamente o que está acontecendo durante a execução dos testes. À medida que o script é escrito, é possível acompanhá-lo, o que auxilia o Analista de Testes (QA) na visualização de quais partes do código necessitam de ajustes.

### Continuos Test
Com `Github Actions` criamos uma `PIPE`, que executa nosso projeto de automação a cada `PUSH`.<br/> 
Podendo ser executado também manualmente no menu de Actions!<br/> 


![Github-Actions](https://user-images.githubusercontent.com/104467309/187503203-165c3006-c7be-4505-aa42-4c0bff72f6b4.png)

### [Cypress.io]( https://www.cypress.io/)

O `CI` esta integrado com o `Cypress Dashboard` enviando os logs de resultado dos testes para armazenamento.<br/> 

![Dashboard-Cypress](https://user-images.githubusercontent.com/104467309/187505227-7bab07ed-f142-452a-b4b5-99a748c2ad76.gif)

### Meu projeto no `Cypress.io`=> [Buger Eats](https://dashboard.cypress.io/projects/i7k1nx/runs/4/test-results?actions=%5B%5D&browsers=%5B%5D&groups=%5B%5D&isFlaky=%5B%5D&modificationDateRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D&orderBy=EXECUTION_ORDER&oses=%5B%5D&specs=%5B%5D&statuses=%5B%7B%22value%22%3A%22PASSED%22%2C%22label%22%3A%22PASSED%22%7D%5D&testingTypesEnum=%5B%5D)

### Dependências para executar localmente

- Ter uma IDE de sua preferência
-instalar o node.js [Download](https://nodejs.org/dist/v16.17.0/node-v16.17.0-x64.msi)
- Instalar cypress: => npm i cypress@9.7.0 -D

<h1 align="center">
Executando o projeto
</h1>

> Clone o projeto
``` ruby
git clone https://github.com/paulinrs/desafio_buildbox.git
```

## Instruções de execução 
Use os comandos listados abaixo no terminal, diretamente na pasta raiz:

`npx cypress open`

Depois da interface do Cypress aberta, executar o teste: `home_registration.spec.js`
