import {Link} from "@nextui-org/link";
import {Divider} from "@nextui-org/divider";
import {Button} from "@nextui-org/react";

import {Fa6SolidPencil, Fa6SolidTrashCan} from "@/components/icons";

export type LinkPreviewPanelProps = {
    url: string
    onEdit: () => void
    onClear: () => void
}

export const LinkPreviewPanel = ({onClear, onEdit, url}: LinkPreviewPanelProps) => {
    return (
        <>
            <div className={"flex bg-content1 rounded-md shadow-md items-center gap-2 p-2"}>
                <Link
                    href={url} target={"_blank"}
                    rel={"noopener noreferrer"}
                    className="text-sm underline text-foreground  overflow-x-hidden max-w-60">
                    {url}
                </Link>
                <div className="flex h-5 items-center self-center  text-small">
                    <Divider orientation="vertical"/>
                </div>
                <Button size={"sm"} isIconOnly variant={"light"} onPress={onEdit}>
                    <Fa6SolidPencil size={18}/>
                </Button>
                <Button size={"sm"} isIconOnly variant={"light"} onPress={onClear}>
                    <Fa6SolidTrashCan size={18}/>
                </Button>
            </div>
        </>
    )
}
