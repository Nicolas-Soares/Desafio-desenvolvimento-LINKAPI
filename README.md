# Desafio-desenvolvimento-LINKAPI
 
###Necessário:
Criar arquivo `.env` no root do projeto com as seguintes variáveis:
- BLING_API_KEY (chave de API do Bling)
- PIPEDRIVE_PERSONAL_API_TOKEN (token de API pessoal do Pipedrive)
- PIPEDRIVE_COMPANY_DOMAIN (domínio da empresa no Pipedrive)
- MONGODB_DATABASE_URL (URL do banco de dados MongoDB)

---

###Endpoints:
- /cadastro-pedido-bling
- /query-mongodb-data
- /inserir-no-mongodb (requer um BODY em formato JSON com o campo `data`, informando a data dos pedidos no Bling que deseja enviar para o banco de dados MongoDB no formato `YYYY-MM-DD`)

---

###PIPEDRIVE_COMPANY_DOMAIN
Pode ser achado na URL de qualquer página no Pipedrive. Exemplo: https://XXX.pipedrive.com/leads/inbox onde `XXX` é o COMPANY_DOMAIN