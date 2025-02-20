# Ler uma saída bonita:
yq "." < NomeArquivo.yaml

# Ler chaves que contém ponto no nome da chave:
yq '.data."tls.crt"' cert_tls.yaml
