import { useEffect, useRef } from "react";
import Image from "next/image";

import Avatar from "@/public/assets/header/header_drawer_avatar.svg";
import HeaderExtra from "@/public/assets/header/header_extras.svg";
import DrawerCloseBtn from "@/public/assets/header/header_drawer_close_btn.svg";

import useClipBuilder from "@/app/_hooks/clip_path_calculations";

import TextInBrackets from "@/app/_components/texts/text_in_brackets";

const DrawerCard = ({ text=["", ""], content="", className="", bracketClassName="", thin = {apply: false, color: "#AF5CAA", width: 3} }) => {
    return (
        <div className={`p-6 px-12 w-full
        grid grid-cols-[.6fr,_auto] gap-x-6 text-lg md:text-xl lg:text-2xl xl:text-3xl ${className}`}>
            <section className="row-span-2 w-[90%]">
                <Image src={Avatar} alt="avatar" />
            </section>
            <section className="flex items-end gap-1">
                <TextInBrackets text={text[0]} className={`font-bold text-yellow-dark fill-white ${bracketClassName}`} thin={thin} />
                <span className={`text-white font-bold`}>{text[1]}</span>
            </section>
            <section>
                <p className="text-yellow-dark text-lg">{content}</p>
            </section>
        </div>
    );
}

const CategoriesDrawer = ({ handleMoreCategoryClick=()=>{} }) => {
    const elementRef = useRef();

    const { rectClip } = useClipBuilder();

    useEffect(() => {
        rectClip(elementRef, 0, 3, 1);
    }, []);

    const cats = ['asdf','djasfs', 'asdfsfff', 'asdfsfff'];

    return (
        <>
            <div className="absolute top-full left-1/2 h-screen z-50
            min-w-[300px] w-[80%] xl:w-[60%] translate-x-[-50%] responsive-container">
                <div ref={elementRef} className={`relative h-[80%]
                flex flex-col items-start
                before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 pseudo-clip-path
                before:bg-purple-dark`}>
                    <section className="relative h-[90%] w-full overflow-auto no-scrollbar">
                        {
                            cats.map((z, i) => <DrawerCard key={i} text={["inner", z]} className={i%2 ? "bg-purple-inner-octagon": ""}
                            content="AI personas inspired by the great souls of history. AI personas in-" />)
                        }
                    </section>

                    <section className="absolute left-1/2 translate-x-[-50%] top-full translate-y-[-50%] z-50
                    lg:flex items-center justify-center">
                        <button className="lg:flex items-center justify-center w-1/2" onClick={handleMoreCategoryClick}>
                            <Image
                                src={DrawerCloseBtn}
                                alt="close"
                            />
                        </button>
                    </section>
                </div>
            </div>
        </>
    );
}

export default CategoriesDrawer;