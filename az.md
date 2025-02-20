# Para logar num terminal sem navegador:
az login --use-device-code

# Listar os nomes dos clusters AKS baseado em uma tag:
az aks list --query "[?tags.tagname == 'value']" | jq .[].name

## Passando o nome de uma _subscription_:
az aks list --subscription '<subscription-name>' --query "[?tags.sre == 'figital']" | jq .[].name

# Listar o nome de todas as _subscriptions_ que tem acesso:
az account list | jq .[].name

# Listar os nomes dos clusters AKS que tem uma tag específica em todas as _subscriptions_ que tenho acesso:
for sub in $(az account list | jq .[].id | tr -d '"'); do az aks list --subscription "$sub" --query "[?tags.sre == 'figital']" | jq .[].name; done

## ou manipular a saída para visualizar em tabela o nome do cluster e a versão do Kubernetes:
... | jq -r '.[] | [.name, .kubernetesVersion] | @tsv'

# Consultar grupos no AD integrado ao Azure AD:
az ad group list --filter "startswith(displayName, 'AZ')" --query "[].[displayName, id]" --output tsv
az ad group list --filter "displayName eq 'VV_CLOUD_SRE'" --query "[].[displayName, id]" --output tsv

# Remover todos os arquivos de um blob storage:
az storage remove --account-key <Access_key> --account-name StorageAccountName --container-name '$web/sandbox' --recursive
