import { DialogContent, DialogOverlay, DialogPortal } from "../../../../../@/components/ui/dialog";

export function AppDetails() {
    return (
        <DialogPortal >
            <DialogOverlay className="bg-black/50 fixed inset-0" />
            <DialogContent className="bg-white fixed top-[50%] left-[50%] w-[320px] h-[300px] p-4 transform translate-x-[-50%] translate-y-[-50%] rounded-lg">

            </DialogContent>
        </DialogPortal>
    )
}