# produtos-api-igorconrado

API REST de Produtos desenvolvida com Node.js + Express, seguindo o padrão MVC.

## Identificação

- **Nome:** Igor Conrado Figueiredo Almeida
- **Matrícula:** 202501008411
- **Disciplina:** Projeto de Desenvolvimento Backend — IBMEC-BH
- **Professor:** Cristiano de Macedo Neto, M.Sc

## Instalação
```bash
npm install
```

## Execução
```bash
# Desenvolvimento
npm run dev

# Produção
npm start
```

A API roda em: `http://localhost:3000`

## Endpoints

| Verbo  | Path                    | Descrição                          | Status esperado               |
|--------|-------------------------|------------------------------------|-------------------------------|
| GET    | /api/v1/produtos        | Lista todos os produtos            | 200 OK                        |
| GET    | /api/v1/produtos/:id    | Retorna um produto pelo ID         | 200 OK / 404 Not Found        |
| POST   | /api/v1/produtos        | Cria um novo produto               | 201 Created / 400 Bad Request |
| PUT    | /api/v1/produtos/:id    | Atualiza completamente um produto  | 200 OK / 404 Not Found        |
| DELETE | /api/v1/produtos/:id    | Remove um produto                  | 204 No Content / 404 Not Found|
