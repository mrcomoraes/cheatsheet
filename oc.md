# Listar todos os pods rodando em um node específico:
oc get pods -A --field-selector=spec.host=<node_name> # ou
oc get pods -A --field-selector=spec.nodeName=<node_name>

# Listar objetos e annotations com prefixo com custom-columns
oc get dc -o custom-columns=NAME:.metadata.name,SQUAD:".metadata.annotations.app\.via\.com\.br/squad"

# Listar objetos e annations com prefixo com jsonpath
oc get dc -o jsonpath='{range .items[*]}{.metadata.name},{.metadata.annotations.app\.via\.com\.br/squad}{"\n"}{end}'
