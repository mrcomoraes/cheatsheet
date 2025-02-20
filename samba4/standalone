# listar usuários locais
pdbedit -L -v

# adicionar usuário local
## primeiro cria o usuário no Linux sem shell. Este usuário não precisa de senha.
useradd -s /usr/sbin/nologin <username>

## após isso, adiciona o usuário na base do Samba
smbpasswd -a <username>

# Recarregar as configurações do Samba
smbcontrol smbd reload-config
