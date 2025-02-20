# Procura por arquivos com modificação maior que 30 dias no primeiro nível da pasta:
find . -maxdepth 1 -type f -mtime +30

# Procura arquivos modificados maior que 30 dias para serem removido:
find . -type f -mtime +30 -exec rm {} \;

# Procura pastas e muda suas permissões:
find . -type d -exec chmod 0750 {} \;

# Procura arquivos e muda suas permissões:
find . -type f -exec chmod 0640 {} \;
