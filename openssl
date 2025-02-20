# openssl

## Gerar request de certificado

```
openssl req -new -newkey rsa:4096 -nodes -out wildcard.infra.hdi.br_2020.csr -keyout wildcard.infra.hdi.br_2020.key -subj "/C=BR/ST=SP/L=Sao Paulo/O=HDI Seguros/OU=Departamento/CN=*.infra.hdi.br" -addext "subjectAltName = DNS:*.infra.hdi.br,DNS:infra.hdi.br"
```

Um bom exemplo do que usei na HDI.

## Converter p7b para crt com o CA embitudo

```
openssl pkcs7 -print_certs -in wildcard.infra.hdi.br_2020.p7b -out wildcard.infra.hdi.br_2020.crt
```

# Verificar a validade do certificado

```
openssl x509 -in nome_do_arquivo.pem -subject -enddate -noout
```

# Verificar todos os dados do certificado

```
openssl x509 -in nome_do_arquivo.pem -text -noout
```

# Gerar um certificado auto-assinado

```
openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 3650 -out certificate.pem
```
