# Exibe as filas de impressão:
lpstat -o

# Exibe a URI configurada para impressão:
lpstat -v <printer_name>

# Exibe o status da impressora:
lpstat -p <printer_name>

# Exibe todos os dados da impressora
lpstat -t <printer_name>

# Imprimir um arquivo numa impressora registrada:
lp -d <nome_impressora> <arquivo.ext>

# Listar qual impressora tem mais jobs parados na fila do CUPS:
lpstat -o | awk -F "-" '{ print $1 }' | uniq -c

# Pegar detalhes de jobs que foram impressos:
lpstat -l -W completed -o <nome_impressora>

# Pacote para adminstração
> cups-tea4cups
