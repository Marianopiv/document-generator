import jsPDF from "jspdf";

export const useDownload = () => {
  function downloadPdf(generatedFields) {
    const doc = new jsPDF();

    // Calcular el ancho de la página
    const pageWidth = doc.internal.pageSize.getWidth();

    // Inicializar el offset en 10 píxeles
    let offsetY = 10;

    // Dibujar cada elemento debajo del anterior
    Object.values(generatedFields).forEach((item) => {
      // Si el elemento es una URL de imagen, dibujar la imagen
      if (item.startsWith("C:\fakepath")) {
        const img = new Image();
        img.src = item;
        doc.addImage(img, "JPEG", 0, offsetY, pageWidth, 200);
        offsetY += 200;  // Aumentar el offset
      } else {
        // Si es texto, dibujar el texto
        const textWidth =
          (doc.getStringUnitWidth(item) * doc.internal.getFontSize()) /
          doc.internal.scaleFactor;
        const x = (pageWidth - textWidth) / 2;
        doc.text(item, x, offsetY);
        offsetY += 50;  // Aumentar el offset
      }
    });

    const pdfData = doc.output();

    const blob = new Blob([pdfData], { type: "application/pdf" });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";  // Abrir en una nueva pestaña
    link.click();

    // Limpiar
    URL.revokeObjectURL(url);
  }

  return { downloadPdf };
};

export default useDownload;
``