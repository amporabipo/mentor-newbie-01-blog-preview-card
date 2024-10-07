import Image from "next/image"

export const Card = () => {
    return (
        <div className="w-80 md:w-[336px] bg-white p-4
        rounded-[20px] border-[1px] border-mygrayb
        flex flex-col gap-4 font-figtree shadow-myshadow">
            <Image
                src="/illustration-article.svg"
                width={270}
                height={200}
                alt=""
                className="rounded-[10px] w-full"
            />
            <div className="flex flex-col gap-3">
                <div className="">
                    <span className="text-xs
                font-extrabold bg-myyellow py-1
                px-3 rounded-[4px]">Learning</span>
                </div>
                <h3 className="text-xs
                font-medium">Published 21 Dec 2023</h3>
                <h1 className="text-xl
                font-extrabold hover:text-myyellow
                transition-all duration-200
                ">HTML & CSS foundations</h1>
                <p className="text-sm
                font-medium text-mygray">
                    These languages are the backbone
                    of every website, defining structure,
                    content, and presentation.
                </p>
            </div>

            <div className="flex gap-3 items-center">
                <Image
                    src="/image-avatar.webp"
                    width={32}
                    height={32}
                    alt=""
                />
                <h4 className="font-extrabold
                text-sm">Greg Hooper</h4>
            </div>
        </div>
    )
}