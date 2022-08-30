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
   ├── .github                   
     ├── workflows                       # Arquivos do Github Actions para executar o CI.
   ├── cypress              
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
    ├── package.json  
    └── README.md                        # Documentação do projeto
```

 ![banner](https://user-images.githubusercontent.com/104467309/187461248-e66b4b2e-4afa-453d-a87a-1a66f81c1442.jpeg)
