# Logar no GCP com navegador no dispositivo:
gcloud auth login

# Listar as contas logadas e qual está ativa no momento:
gcloud auth list

# Conectar em um projeto:
gcloud config set project <PROJECT_ID>

# Listar as instâncias existentes no projeto em todas as zonas:
gcloud compute instances list

# Reboot da instância apontando o nome e zona.:
gcloud compute instances reset <instance-name> --zone=us-east4-a

# Lista os Endpoints do projeto atual:
gcloud endpoints services list

# Delete Endpoints sem aguardar o retorno:
gcloud endpoints services delete <nome-do-serviço> --async

# Cria o deploy de endpoint
gcloud endpoints services deploy <file_swagger.yaml>

# Configurar proxy para os comandos gcloud
gcloud config set proxy/type http
gcloud config set proxy/address proxy.example.com
gcloud config set proxy/port 3128
## https://cloud.google.com/sdk/docs/proxy-settings
