# Listar as releases:
helm list

# Listar as releases em todos os namespaces:
helm list -A

# Pegar os manifestos da release:
helm get manifest release-name

# Debugar uma instalação de release:
helm install --debug --dry-run release-name [./pasta]

# Gerar template apontando novos values e sets:
helm template via-mailer-pdv ./chart --namespace pagamentos-sit --values ./chart/overlays/values-sit.yaml --set "image.tag=9.9.9-10"
