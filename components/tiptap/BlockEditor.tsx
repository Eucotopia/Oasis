import {Editor, EditorContent, PureEditorContent} from "@tiptap/react";
import React, {useRef} from "react";
import {ContentItemMenu} from "@/components/tiptap/menus/ContentItemMenu";
import {useTextmenuStates} from "@/components/tiptap/menus/TextMenu/hooks/useTextmenuStates";
import {TextMenu} from "@/components/tiptap/menus/TextMenu/TextMenu";
import {LinkMenu} from "@/components/tiptap/menus/LinkMenu";
import {ColumnsMenu} from "@/components/tiptap/extensions/MultiColumn/menus";
import {TableColumnMenu, TableRowMenu} from "@/components/tiptap/extensions/Table/menus";
import ImageBlockMenu from "@/components/tiptap/extensions/ImageBlock/components/ImageBlockMenu";
import {CodeBlockFigureMenu} from "@/components/tiptap/extensions/CodeBlockFigure/components/CodeBlockFigureMenu";

export const BlockEditor = ({editor}: {
    editor: Editor
}) => {
    const menuContainerRef = useRef(null)

    if (!editor) {
        return null
    }

    return (
        <>
            <div ref={menuContainerRef}>
                <TextMenu editor={editor}/>
                {editor.isEditable && <ColumnsMenu editor={editor} appendTo={menuContainerRef}/>}
                <TableRowMenu editor={editor} appendTo={menuContainerRef}/>
                <TableColumnMenu editor={editor} appendTo={menuContainerRef}/>
                <ImageBlockMenu editor={editor} appendTo={menuContainerRef}/>
                <CodeBlockFigureMenu editor={editor} appendTo={menuContainerRef}/>
                {editor.isEditable && <ContentItemMenu editor={editor}/>}
                <LinkMenu editor={editor} appendTo={menuContainerRef}/>
                <EditorContent editor={editor} className="flex-1 overflow-y-auto"/>
            </div>
        </>
    );
}