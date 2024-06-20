import {Editor} from "@tiptap/react";
import {Link} from "@nextui-org/link";
import {cn} from "@nextui-org/react";
import {Icon} from "@iconify/react/offline";
import React from "react";
import {useTextmenuCommands} from "@/components/tiptap/menus/TextMenu/hooks/useTextmenuCommands";
import {useTextmenuStates} from "@/components/tiptap/menus/TextMenu/hooks/useTextmenuStates";

export const EditorHeader = ({editor}: { editor: Editor }) => {
    const [youtubeLink, setYoutubeLink] = React.useState("");
    const commands = useTextmenuCommands(editor)
    const states = useTextmenuStates(editor)
    if (!Editor) {
        return null
    }
    return (
        <>
            <div className={"flex flex-row outline-none gap-1 w-full"}>
                <Link
                    color={"foreground"}
                    onPress={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}
                    className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-2",
                        "hover:bg-content4",
                    )}>
                    <Icon icon={Fa6SolidTextSlash}/>
                    {/*<Icon icon={"fa6-solid:text-slash"} width={20} height={20}/>*/}
                </Link>
                <Link
                    color={"foreground"}
                    onPress={() => editor.chain().focus().setImageUpload().run()}
                    className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-2",
                        "hover:bg-content4")}
                >
                    <Icon icon={"fa6-solid:upload"} width={20} height={20}/>
                </Link>
                <Link
                    color={"foreground"}
                    onPress={() => editor.chain().focus().undo().run()}
                    className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-2",
                        "hover:bg-content4",
                    )}>
                    <Icon icon={"fa6-solid:arrow-rotate-left"} width={20} height={20}/>
                </Link>
                <Link
                    color={"foreground"}
                    onPress={() => editor.chain().focus().redo().run()}
                    className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-2",
                        "hover:bg-content4",
                    )}>
                    <Icon icon={"fa6-solid:arrow-rotate-right"} width={20} height={20}/>
                </Link>
                {/*<PopoverYoutubeLinkWrapper icon="bi:youtube" className={"flex flex-col items-center"}*/}
                {/*                           editor={editor} title={"Youtube"}>*/}
                {/*    <div className={"flex flex-row items-center justify-center mb-2 gap-2"}>*/}
                {/*        <Input placeholder={"https://"} size={"sm"} value={youtubeLink}*/}
                {/*               onValueChange={(youtubeLink) => setYoutubeLink(youtubeLink)}*/}
                {/*               radius={"sm"}*/}
                {/*               className={"w-full"}/>*/}
                {/*        <Button*/}
                {/*            size={"sm"}*/}
                {/*            radius={"sm"}*/}
                {/*            onClick={() => {*/}
                {/*                if (youtubeLink) {*/}
                {/*                    editor.commands.setYoutubeVideo({*/}
                {/*                        src: youtubeLink,*/}
                {/*                        width: Math.max(320, parseInt("640", 10)) || 640,*/}
                {/*                        height: Math.max(180, parseInt("480", 10)) || 480,*/}
                {/*                    })*/}
                {/*                }*/}
                {/*                setYoutubeLink("")*/}
                {/*            }*/}
                {/*            }>*/}
                {/*            Set Link</Button>*/}
                {/*    </div>*/}
                {/*</PopoverYoutubeLinkWrapper>*/}

                <Link
                    color={"foreground"}
                    onClick={() => editor.chain().focus().setHardBreak().run()}
                    className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-2",
                        "hover:bg-content4")}>
                    <Icon icon={"fa6-solid:grip-lines"} width={20} height={20}/>
                </Link>
                <Link
                    color={"foreground"}
                    onClick={() => editor.chain().focus().setHorizontalRule().run()}
                    className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-2",
                        "hover:bg-content4")}>
                    <Icon icon={"fa6-solid:ruler-horizontal"} width={20} height={20}/>
                </Link>
            </div>
        </>
    )

}
