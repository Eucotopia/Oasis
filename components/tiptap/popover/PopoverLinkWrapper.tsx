"use client";

import type {PopoverProps} from "@nextui-org/react/dist";

import React from "react";
import {
    cn,
    Popover,
    PopoverContent,
    PopoverTrigger,
    useDisclosure,
} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import {Link} from "@nextui-org/link";
import {Editor} from "@tiptap/react";
import {Tooltip} from "@nextui-org/tooltip";
import {PopoverFilterWrapperProps} from "@/components/tiptap/popover/PopoverColorWrapper";

const PopoverLinkWrapper = React.forwardRef<HTMLDivElement, PopoverFilterWrapperProps>(
    ({icon, title, children, editor, ...props}, ref) => {
        const {isOpen, onClose, onOpenChange} = useDisclosure();
        return (
            <Popover ref={ref} isOpen={isOpen} onOpenChange={onOpenChange} {...props}>
                <PopoverTrigger>
                    <Link
                        color={"foreground"}
                        onClick={()=>{
                            if(editor.isActive('link')){
                                editor.chain().focus().unsetLink().run()
                            }
                        }}
                        className={cn("bg-transparent border-none rounded-md cursor-pointer mr-1 p-1",
                            "hover:bg-gray-200",
                            {
                                "bg-gray-200": editor.isActive('link', {href: editor.getAttributes('link').href})
                            })}
                    >
                        <Tooltip delay={1000} content={
                            <p className={"text-[12px]"}>{title}</p>
                        }>
                            <Icon icon={icon} width={18} height={18}/>
                        </Tooltip>
                    </Link>
                </PopoverTrigger>
                <PopoverContent className="flex w-full flex-col items-start gap-2 px-4 pt-4 ">
                    <div className="w-full px-2">{children}</div>
                </PopoverContent>
            </Popover>
        )
            ;
    },
);

PopoverLinkWrapper.displayName = "PopoverLinkWrapper";

export default PopoverLinkWrapper;
