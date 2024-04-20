'use client'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from '@tiptap/extension-character-count'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import TextStyle from '@tiptap/extension-text-style'
import HardBreak from '@tiptap/extension-hard-break'
import {ColorHighlighter} from "@/components/tiptap/extensions/ColorHighlighter/ColorHighlighter";
import {SmilieReplacer} from "@/components/tiptap/extensions/SmilieReplacer/App";
import Blockquote from '@tiptap/extension-blockquote'
import Placeholder from '@tiptap/extension-placeholder'
import { TableOfContent } from '@tiptap-pro/extension-table-of-content'
import {TableOfContentNode} from "@/components/tiptap/extensions/TableOfContents/TableOfContentNode";
import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import FileHandler from '@tiptap-pro/extension-file-handler'
import Image from '@tiptap/extension-image'
import {Mathematics} from '@tiptap-pro/extension-mathematics'
import Youtube from '@tiptap/extension-youtube'
import {CodeBlockLowlight} from '@tiptap/extension-code-block-lowlight'
import {lowlight} from 'lowlight'
import Heading from '@tiptap/extension-heading'
import FontFamily from '@tiptap/extension-font-family'
import {Color} from '@tiptap/extension-color'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TextAlign from '@tiptap/extension-text-align'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Underline from '@tiptap/extension-underline'
import Code from '@tiptap/extension-code'
import CodeBlock from '@tiptap/extension-code-block'
import Text from '@tiptap/extension-text'
import Link from '@tiptap/extension-link'
import {Paragraph} from "@tiptap/extension-paragraph";


export const ExtensionKit = () => [
    Paragraph,
    Text,
    StarterKit.configure({
        // Configure an included extension
        heading: {
            levels: [1, 2, 3],
        },
    }),
    Dropcursor,
    FileHandler.configure({
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
        onDrop: (currentEditor, files, pos) => {
            files.forEach(file => {
                const fileReader = new FileReader()

                fileReader.readAsDataURL(file)
                fileReader.onload = () => {
                    currentEditor.chain().insertContentAt(pos, {
                        type: 'image',
                        attrs: {
                            src: fileReader.result,
                        },
                    }).focus().run()
                }
            })
        },
        onPaste: (currentEditor, files, htmlContent) => {
            files.forEach(file => {
                if (htmlContent) {
                    // if there is htmlContent, stop manual insertion & let other extensions handle insertion via inputRule
                    // you could extract the pasted file from this url string and upload it to a server for example
                    console.log(htmlContent) // eslint-disable-line no-console
                    return false
                }

                const fileReader = new FileReader()

                fileReader.readAsDataURL(file)
                fileReader.onload = () => {
                    currentEditor.chain().insertContentAt(currentEditor.state.selection.anchor, {
                        type: 'image',
                        attrs: {
                            src: fileReader.result,
                        },
                    }).focus().run()
                }
            })
        },
    }),
    Image,
    TaskList,
    Link.configure({
        validate: href => /^https?:\/\//.test(href),
    }),
    TaskItem,
    TextAlign.configure({
        types: ['heading', 'paragraph'],
    }),
    FontFamily,
    Youtube,
    SmilieReplacer,
    Heading,
    Placeholder,
    Document,
    HardBreak,
    CodeBlock,
    Mathematics,
    ColorHighlighter,
    Code,
    Blockquote,
    CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: null,
    }),
    Underline,
    TextStyle,
    Superscript,
    Subscript,
    Color,
    TableOfContent,
    TableOfContentNode,
    Typography,
    Highlight,
    CharacterCount
]

export default ExtensionKit