import PDFDocument from "react-native-pdf";

export function getPDFimage(uri: string) {
    return new Promise<string>((resolve, reject) => {
        PDFDocument.source()
        .then((pdf) => {
            pdf.getPage(1).then((page) => {
            const scale = 1;
            const viewport = page.getViewport({ scale });
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            const renderContext = {
                canvasContext: context,
                viewport,
            };
            page.render(renderContext).then(() => {
                const dataURL = canvas.toDataURL();
                resolve(dataURL);
            });
            });
        })
        .catch((err) => {
            reject(err);
        });
    });
}