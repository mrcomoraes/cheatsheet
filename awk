# Exibe o segundo campo com separador virgula:
awk -F, '{ print $2 }'

# Compara se o campo 5 contém valor e printa o primeiro campo:
awk '$5 ~ /pattern/ { print $1 }'

# Exemplo de match value:
awk '$3 == "x" { print $3 } $3 != "x" { print "no value" }' file.in

# Exemplo de if/else:
awk '{ if ($2 == "yes") print $2; else print $1; }' file.in

# Rodar comandos da saída do awk diretamente pelo próprio awk:
oc get pod | awk '{ if ($3 == "Completed") system("oc delete pod "$1) }'
!!! warning
Pelos testes que fiz, o Ctrl+C não funciona, então tenha certeza do que vai rodar!
!!!

# Usar 2 caracteres como delimitador e processar variável:
awk -F'[/:]' '{print $3}' <<< $IMAGE_COMPLETE
# OBS: o parâmetro -F suporta regex

Mais informações: https://cheatsheets.zip/awk
