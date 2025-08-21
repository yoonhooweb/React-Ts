import axios from "axios";
import { Heart } from "lucide-react";
import { startTransition, useEffect, useOptimistic, useRef, useState } from "react";

interface like {
    id: number;
    isLike: boolean;
}
function Optimistic() {
    const controller = useRef<AbortController | null>(null);
    const [likes, setLike] = useState<like[]>([]);
    const [isLoding, setIsLoding] = useState(false);
    /* 낙관적 업데이트  
        1. 첫번째 매개변수는 현재값
        2. 낙관적 업데이트가 이뤄지면 호출될 함수
    */

    const [OptimisticLikes, addOptimisticLikes] = useOptimistic(likes, (stateLikes, id) => {
        return stateLikes.map((prev) => (prev.id === id ? { ...prev, isLike: !prev.isLike } : prev));
    });

    const updateLike = async (id: number, isLike: boolean) => {
        controller.current?.abort();
        controller.current = new AbortController();
        startTransition(async () => {
            addOptimisticLikes(id);
            const { data } = await axios.put(`http://localhost:3000/like/${id}`, {
                isLike: !isLike,
            },
            {
                signal : controller.current?.signal
            }
        );
            setLike((likes) => likes.map((prev) => (prev.id === data.id ? data : prev)));
        });
    };

    useEffect(() => {
        const featPosts = async () => {
            try {
                setIsLoding(true);
                const { data } = await axios.get("http://localhost:3000/like");
                setLike(data);
            } catch (e) {
                console.error("에러발생" + e);
            } finally {
                setIsLoding(false);
            }
        };
        featPosts();
    }, []);

    if (isLoding) return <h1>Loding!!!!!!!!!!!!</h1>;

    return (
        <div>
            {/* fill: 'none', stroke: 'currentColor' */}
            {/* fill: 'rgb(255,0,0)', stroke: 'rgb(255,0,0)' */}

            {OptimisticLikes.map((like) => (
                <Heart
                    key={like.id}
                    fill={like.isLike ? "rgb(255, 0, 0)" : "none"}
                    stroke={like.isLike ? "rgb(255, 0, 0)" : "currentColor"}
                    onClick={() => updateLike(like.id, like.isLike)}
                />
            ))}
        </div>
    );
}

export default Optimistic;
