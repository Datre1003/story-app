import { ChapterDetail } from "@/schema/ChapterDetail";

export const fetchAllContentChapter = async (novelHref: string) => {
    const res = await fetch(
        `https://localhost:7187/GetAllContentChapterOfNovel?href=${novelHref}`
    );
    if (!res.ok) {
        throw new Error("Fetching error");
    }
    const { contentChapterList } = await res.json();
    return contentChapterList as ChapterDetail[];
};
