export function generatePattern(fileExtensions: string): string {
    const extensions = fileExtensions.split(',').map(ext => ext.trim().replace('.', '\\.'));
    const pattern = extensions.join('|');
    const regexPattern = `.*\\.(${pattern})$`;
    return regexPattern;
  }