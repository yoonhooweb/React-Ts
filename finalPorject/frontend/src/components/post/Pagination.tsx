import { useMemo } from "react";

/* 
    pageRange : 몇개의 페이지가 보여줄지 정하는 값
    currentPage : 현재 페이지
    maxPage : 최대 몇페이지까지있는지 값
    onPageChange : 페이지를 업데이트하는 값

*/
export default function Pagination({
    pageRange,
    currentPage,
    maxPage,
    onPageChange,
}: {
    pageRange: number;
    currentPage: number;
    maxPage: number;
    onPageChange: (page: number) => void;
}) {
    /* 중앙값 홀수여야함 */
    const half = Math.floor(pageRange / 2);
    /* 페이지 구하기 */
    const pages = useMemo(() => {
        let start = currentPage - half;
        let end = currentPage + half;

        if (start < 1) {
            start = 1;
            end = Math.min(maxPage, pageRange);
        }

        if (end > maxPage) {
            end = maxPage;
            start = Math.max(1, maxPage - pageRange + 1);
        }

        const arr = [];
        for (let i = start; i <= end; i++) {
            arr.push(i);
        }
        return arr;
    }, [currentPage, half, maxPage, pageRange]);
    return (
        <>
            <div className="flex justify-center mt-12 gap-2">
                {/* 이전버튼 */}
                <button
                    className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 disabled:opacity-50"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {/* 
        currentPage === page
          ? "bg-blue-500 text-white"
          : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300"
        */}
                {pages.map((page) => (
                    <button
                        className={
                            page === currentPage
                                ? "w-10 h-10 rounded-lg bg-blue-500 text-white cursor-pointer"
                                : "w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 cursor-pointer"
                        }
                        key={page}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                ))}
                {/* 다음버튼 */}
                <button
                    className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 disabled:opacity-50"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === maxPage}
                >
                    Next
                </button>
            </div>
        </>
    );
}
