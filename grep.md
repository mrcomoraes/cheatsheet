# Remover linhas em branco e comentários:
grep -E -v '^[[:space:]]*$|^#|^\s{1,}#' <arquivo>
