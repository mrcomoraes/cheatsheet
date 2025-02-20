# Verifica qual cluster está conectado:
kubectl config current-context

# Verifica informações do cluster:
kubectl cluster-info

# Iniciar um pod apenas com interação:
kubectl run -it ubuntu-bash --image=ubuntu

# Container para troubleshooting:
kubectl run netshoot --rm -it --image nicolaka/netshoot -- /bin/bash

# Saber qual usuário/recurso estou usando
kubectl config view --template='{{ range .contexts }}{{ if eq .name "'$(kubectl config current-context)'" }}Current user: {{ printf "%s\n" .context.user }}{{ end }}{{ end }}'

# Saber a data de validade de um certificado instalado
kubectl get secret via-tls -o "jsonpath={.data['tls\.crt']}" -n project | base64 -d | openssl x509 -subject -enddate -noout

# Saber quantos pods roda em cada node do cluster
kubectl get pods -A | jq '.items | group_by(.spec.nodeName) | map({"nodeName": .[0].spec.nodeName, "count": length}) | sort_by(.count) | reverse'

# Pedir para o Kubernetes explicar um campo no manifesto YAML
kubectl explain deploy.spec.template
## Outro exemplo
kubectl explain pod.spec.containers.image

# Mesclar vários arquivos kubeconfig
export KUBECONFIG=/caminho/da/config1:/caminho/da/config2
kubectl config view --flatten > arquivo_combinado
mv arquivo_combinado $HOME/.kube/config
