# Expansão de variáveis
EMAIL=alfa.beto@hotmail.com
echo ${EMAIL%@*} = alfa.beto
echo ${EMAIL#*@} = hotmail.com
echo ${EMAIL^^} - Uppercase
echo ${EMAIL,,} - Lowercase

# Substituir apenas uma ocorrência (replace once):
^status^start

# Substituir todas as ocorrências (replace all)
!!:gs/pattern/new_pattern
# ou
fc -s pattern=new_pattern

# Renomear vários arquivos trocando apenas a extensão:
for f in *.txt; do mv -- "$f" "${f%.txt}.yml"; done
