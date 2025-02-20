# Concatenar vários PDFs:
gs -dBATCH -dNOPAUSE -q -sDEVICE=pdfwrite -sOutputFile=saida.pdf pag1.pdf pag2.pdf pag3.pdf

# Converter PDF para PNG
gs -sDEVICE=png16m -sOutputFile=saida.png -r150x150 -f entrada.pdf

# Converter PDF com múltiplas páginas para PNG
gs -sDEVICE=png16m -sOutputFile=saida-%02d.png -r150x150 -f entrada.pdf

# Reduzindo o tamanho do PDF
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile=output.pdf input.pdf
# Resumo de -dPDFSETTINGS:
#  -dPDFSETTINGS=/screen - lower quality, smaller size. (72 dpi)
#  -dPDFSETTINGS=/ebook - for better quality, but slightly larger pdfs. (150 dpi)
#  -dPDFSETTINGS=/prepress - output similar to Acrobat Distiller "Prepress Optimized" setting (300 dpi)
#  -dPDFSETTINGS=/printer - selects output similar to the Acrobat Distiller "Print Optimized" setting (300 dpi)
#  -dPDFSETTINGS=/default - selects output intended to be useful across a wide variety of uses, possibly at the expense of a larger output file
