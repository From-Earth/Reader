import { getInfoAsync, StorageAccessFramework as SAF } from "expo-file-system";

interface Files {
  extension?: string;
  fileUri: string;
  name?: string;
  size: number | boolean;
}

export async function readFilesInDirectory() {
  const buffer: Files[] = [];
  // Gets all files inside of selected directory
  const uri =
    "content://com.android.externalstorage.documents/tree/primary%3ADocuments/";
  const files = await SAF.readDirectoryAsync(uri);

  // Iterate over each file and get its info

  await Promise.all(
    files.map(async (fileUri) => {
      const fileInfo = await getInfoAsync(fileUri, { size: true });
      const decoded = decodeURIComponent(fileUri).split("/").pop();
      const name = decoded?.split(".").shift();
      const extension = decoded?.split(".").pop();
      buffer.push({
        extension,
        fileUri,
        name,
        size: fileInfo.exists && fileInfo.size,
      });
    })
  );

  return buffer;
}
