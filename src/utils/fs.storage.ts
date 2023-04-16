import { Book } from "@storage/MMKV/default";
import { getInfoAsync, StorageAccessFramework as SAF } from "expo-file-system";
import { customAlphabet } from "nanoid/non-secure";

const nanoid = "abcdefghijklmnopqrstuvwxyz0123456789";
const generateId = customAlphabet(nanoid, 8);

export async function requestExternalStoragePermission() {
  try {
    const { granted } = await SAF.requestDirectoryPermissionsAsync(
      "content://com.android.externalstorage.documents/tree/primary%3ADocuments/"
    );
    if (granted) {
      console.log("External storage permission granted");
    } else {
      console.log("External storage permission denied");
    }
    return granted;
  } catch (err) {
    console.warn(err);
  }
}

export async function readBooksInDirectory() {
  const uri =
    "content://com.android.externalstorage.documents/tree/primary%3ADocuments/";
  const files = await SAF.readDirectoryAsync(uri);

  const buffer = await Promise.all(
    files.map(async (fileUri) => {
      const fileInfo = await getInfoAsync(fileUri, { size: true });
      const decoded = decodeURIComponent(fileUri).split("/").pop();
      const name = decoded?.split(".").shift() as string;
      const extension = decoded?.split(".").pop();

      return {
        extension,
        uri: fileUri,
        title: name,
        size: fileInfo.exists ? fileInfo.size : 0,
        id: generateId(),
        inPage: 0,
        totalPages: 0,
      };
    })
  );

  return buffer;
}

export async function updateBooks(books: Book[]): Promise<Book[]> {
  const updated = await readBooksInDirectory();

  const buffer = books.map((book) => {
    const index = updated.findIndex((item) => item.size=== book.size);
    if (index !== -1) {
      return {
        ...updated[index],
        id: book.id,
        inPage: book.inPage,
        totalPages: book.totalPages,
        extension: book.extension,
      };
    } else {
      return book;
    }
  });

  return buffer;
}
