# Consultar usuário numa OU sem recursividade atráves do e-mail:
ldapsearch -x -H ldap://dc.example.com -D user -w SenhaForte -b "CN=Users,DC=dc,DC=example,DC=com" -LLL -s one "(mail=marco.moraes@example.com)"

# Consultar grupo numa OU recursivo através do nome do grupo:
ldapsearch -x -H ldap://dc.example.com -D user -w SenhaForte -b "DC=dc,DC=example,DC=com" -LLL -s sub "(&(objectClass=group)(cn=grupo*))"

# Consultar membros de um grupo:
ldapsearch -x -H ldap://dc.example.com -D user -w SenhaForte -b "CN=FS-GRUPO,OU=GRUPOS,DC=dc,DC=example,DC=com"
