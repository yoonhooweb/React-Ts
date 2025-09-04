import axios from "axios";
import { ImagePlus, Loader2 } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { axiosInstanse } from "../../../api/axios";

const categories = ["", "Technology", "Lifestyle", "Travel", "Business", "Economy", "Sports"];
type FormStateType = {
    title: string;
    category: string;
    thumbnail: string;
    content: string;
};
export default function PostCreate() {
    const navigate = useNavigate();
    const post: Post = useLoaderData();
    const [formState, setFormState] = useState<FormStateType>({
        title: "",
        category: "",
        thumbnail: "",
        content: "",
    });
    /* 각 값에 에러를 표시하기위한 상태*/
    const [errorState, setErrorState] = useState<FormStateType>({
        title: "",
        category: "",
        thumbnail: "",
        content: "",
    });
    /* input 벨리체크를 위한 훅 */
    const [isPending, startTransition] = useTransition();

    const MAX_FILE_SIZE = 10 * 1024 * 1024; //10mb

    const [previewImgage, setPreviewImage] = useState("");

    /* 사용자가 입력요소의 값이 업데이트 하는 함수 */
    const handleChangeFormState = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormState((formmState) => ({
            ...formmState,
            [e.target.name]: e.target.value,
        }));

        console.log("formState :", formState);
        console.log(e.target.name);
        console.log(e.target.name);
        console.log("formState :", formState);

        setErrorState((errorState) => ({
            ...errorState,
            [e.target.name]: "",
        }));
    };

    const handleFormAction = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        startTransition(async () => {
            try {
                /* 폼 유효성 검사 */
                const newError: FormStateType = {} as FormStateType;
                if (!formState.title.trim()) {
                    newError.title = "타이틀를 입력해주세요";
                }
                if (!formState.category.trim()) {
                    newError.category = "카테고리를 선택해주세요";
                }
                if (!previewImgage) {
                    newError.thumbnail = "썸네일 넣어주세요";
                }
                if (!formState.content) {
                    newError.content = "컨텐츠를 입력해주세요";
                }
                /* 에러가 있는경우다 */
                if (Object.keys(newError).length > 0) {
                    setErrorState(newError);
                }

                let thumbnail = post?.thumbnail || "";

                if (previewImgage !== thumbnail) {
                    const formData = new FormData();
                    formData.append("file", previewImgage);
                    formData.append("upload_preset", "react_blog");

                    const { data } = await axios.post("https://api.cloudinary.com/v1_1/dmihig0of/image/upload", formData);
                    thumbnail = data.url;
                    console.log(data);
                    console.log(formData);
                }

                if (post) {
                    const { status } = await axiosInstanse.put(`/posts/${post._id}`, {
                        title: formState.title,
                        category: formState.category,
                        thumbnail: thumbnail,
                        content: formState.content,
                    });
                    if (status === 200) {
                        alert("수정 성공");
                        navigate(`/post/${post._id}`);
                    }
                } else {
                    const { status } = await axiosInstanse.post("/posts", {
                        title: formState.title,
                        category: formState.category,
                        thumbnail: thumbnail,
                        content: formState.content,
                    });

                    if (status === 201) {
                        alert("등록 성공");
                        navigate("/");
                    }
                }
            } catch (e) {
                console.error(e instanceof Error ? e.message : "unknown error");
            }
        });
    };

    const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        /* null 처리 해서 타입가드 한다. */
        if (!selectedFile) return;

        /* 유효성검사 */

        const fileAllowd = ["png", "webp", "jpeg", "jpg", "gif"];
        const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase(); // ***.jpg 뒤에있는걸 꺼내서 소문자로 변경
        if (!fileExtension || !fileAllowd.includes(fileExtension)) {
            alert(`허용된 이미지 확장자는 ${fileAllowd.join(", ")} 입니다`);
            e.target.value = "";
            return;
        }

        if (selectedFile.size > MAX_FILE_SIZE) {
            alert(`허용된 용량보다 큽니다. 용량은 10MB 이하로 해주세요`);
            e.target.value = "";
            return;
        }
        /* 파일 리더 객체 */
        const reader = new FileReader();
        /* 파일 객체를 읽어서 이해가능한 문자열로 바꾸는 작업 변경이 끝나면 onloadend라는 게 호출된다. */
        reader.onloadend = () => {
            setErrorState((errorState) => ({ ...errorState, thumbnail: "" }));
            setPreviewImage(reader.result as string);
        };
        /* base64 번경하는 ? */
        reader.readAsDataURL(selectedFile);
    };

    /* 수정 페이지랑 같이쓰기 */
    useEffect(() => {
        if (post) {
            setFormState({
                title: post.title,
                category: post.category,
                thumbnail: post.thumbnail,
                content: post.content,
            });
            setPreviewImage(post.thumbnail);
        }
    }, [post]);

    return (
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
            <h1 className="text-3xl font-bold text-white mb-8">Write {post ? "modify" : "new"} Post</h1>

            <form onSubmit={handleFormAction} className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="w-full bg-slate-800 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter post title"
                        value={formState.title}
                        onChange={handleChangeFormState}
                    />
                    {errorState.title && <p className="text-rose-500">{errorState.title}</p>}
                </div>

                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                        Category
                    </label>
                    <select
                        id="category"
                        className="w-full bg-slate-800 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        name="category"
                        value={formState.category}
                        onChange={handleChangeFormState}
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category == "" ? "Select a Category" : category}
                            </option>
                        ))}
                    </select>
                    {errorState.category && <p className="text-rose-500">{errorState.category}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Featured Image</label>
                    <div className="relative">
                        {/* 이미지 선택 후 화면 (미리보기) */}
                        {previewImgage ? (
                            <div className="relative w-full aspect-video mb-4">
                                <img src={previewImgage} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                                <button
                                    type="button"
                                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                                    onClick={() => setPreviewImage("")}
                                >
                                    ✕
                                </button>
                            </div>
                        ) : (
                            <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                                <input type="file" id="image" accept="image/*" className="hidden" onChange={handleChangeImg} multiple />
                                <label htmlFor="image" className="flex flex-col items-center cursor-pointer">
                                    <ImagePlus className="h-12 w-12 text-gray-400 mb-3" />
                                    <span className="text-gray-300">Click to upload image</span>
                                    <span className="text-gray-500 text-sm mt-1">PNG, JPG up to 10MB</span>
                                </label>
                            </div>
                        )}
                        {errorState.thumbnail && <p className="text-rose-500">{errorState.thumbnail}</p>}
                    </div>
                </div>

                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-2">
                        Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        className="w-full h-96 bg-slate-800 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Write your post content here..."
                        value={formState.content}
                        onChange={handleChangeFormState}
                    />
                    {errorState.content && <p className="text-rose-500">{errorState.content}</p>}
                </div>

                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="px-6 py-2.5 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400"
                        disabled={isPending}
                    >
                        {isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : post ? "Modify Post" : "Publish Post"}
                    </button>
                    <button
                        type="button"
                        className="px-6 py-2.5 bg-slate-700 text-white font-medium rounded-lg hover:bg-slate-600 transition-colors"
                        onClick={() => navigate(-1)}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
