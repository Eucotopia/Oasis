import {MenuProps} from "@/components/tiptap/menus/types";
import {BubbleMenu as BaseBubbleMenu} from '@tiptap/react'
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, SnippetProps} from "@nextui-org/react";
import {Instance, sticky} from "tippy.js";
import {useCallback, useRef} from "react";
import {getRenderContainer} from "@/components/tiptap/lib/utils";

export const CodeBlockFigureMenu = ({editor, appendTo}: MenuProps) => {

    const getReferenceClientRect = useCallback(() => {
        const renderContainer = getRenderContainer(editor, 'node-codeBlockFigure')
        return renderContainer?.getBoundingClientRect() || new DOMRect(-1000, -1000, 0, 0)
    }, [editor])

    const tippyInstance = useRef<Instance | null>(null)

    const shouldShow = useCallback(() => {
        return editor.isActive('codeBlockFigure')
    }, [editor])

    const setColor = useCallback((color: SnippetProps['color']) => {
        if (color) {
            editor.chain().focus(undefined, {scrollIntoView: false}).setCodeBlockFigureColor(color).run();
        }
    }, [editor]);

    const setVariant = useCallback((variant: SnippetProps['variant']) => {
        if (variant) {
            editor.chain().focus(undefined, {scrollIntoView: false}).setCodeBlockFigureVariant(variant).run();
        }
    }, [editor]);

    return (
        <>
            <BaseBubbleMenu
                editor={editor}
                shouldShow={shouldShow}
                updateDelay={0}
                tippyOptions={{
                    offset: [0, 8],
                    popperOptions: {
                        modifiers: [{name: 'flip', enabled: false}],
                    },
                    getReferenceClientRect,
                    onCreate: (instance: Instance) => {
                        tippyInstance.current = instance
                    },
                    appendTo: () => appendTo?.current,
                    plugins: [sticky],
                    sticky: 'popper',
                }}
            >
                <Dropdown size={"sm"}>
                    <DropdownTrigger>
                        <Button>{editor.getAttributes("codeBlockFigure")?.color}</Button>
                    </DropdownTrigger>
                    <DropdownMenu onAction={(key) => setColor(key as SnippetProps['color'])}>
                        <DropdownItem key={"default"}>Default</DropdownItem>
                        <DropdownItem key={"primary"}>Primary</DropdownItem>
                        <DropdownItem key={"secondary"}>Secondary</DropdownItem>
                        <DropdownItem key="success">Success</DropdownItem>
                        <DropdownItem key="warning">Warning</DropdownItem>
                        <DropdownItem key="danger">Danger</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <DropdownTrigger>
                        <Button>{editor.getAttributes("codeBlockFigure")?.variant}</Button>
                    </DropdownTrigger>
                    <DropdownMenu onAction={(key) => setVariant(key as SnippetProps['variant'])}>
                        <DropdownItem key={"solid"}>Solid</DropdownItem>
                        <DropdownItem key={"flat"}>Flat</DropdownItem>
                        <DropdownItem key={"bordered"}>Bordered</DropdownItem>
                        <DropdownItem key={"shadow"}>Shadow</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </BaseBubbleMenu>
        </>
    )
}