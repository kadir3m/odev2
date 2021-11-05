// Türü veri şekliyle aynı şekilde güncelleyin.
// eslint-disable-next-line max-classes-per-file
type List = Folder[];

export class File {
    id?: string;
    name?: string;
}

export class Folder {
    id?: string;
    name?: string;
    books?: Array<File>;
}

export default function move(
    list: List,
    source: string,
    destination: string
): List {
    let file: File;
    let allBooksIds = list.map((book) =>
        book.books?.map((file) => file.id)
    );
    let allFoldersIds = list.map(folder => folder.id);
    // @ts-ignore
    if (!allFoldersIds.includes(source)) {
        if (!allBooksIds.flat(1).includes(destination)) {
            for (let i = 0; i < list.length; i++) {
                const index: any = list[i].books?.findIndex((data) => data.id === source);
                if (index !== -1) {
                    // @ts-ignore
                    if (list[i]?.books?.length > 0) {
                        // @ts-ignore
                        file = list[i].books[index];
                        list[i].books?.splice(index, 1);
                    }
                }
            }
            for (let i = 0; i < list.length; i++) {
                if (list[i].id === destination) {
                    // @ts-ignore
                    list[i].books?.push(file);
                }
            }
            return list;
        } else {
            throw new Error("Hedef olarak bir kitap belirtemezsiniz");
        }
    } else {
        throw new Error("Bir rafı taşıyamazsınız");
    }
}
