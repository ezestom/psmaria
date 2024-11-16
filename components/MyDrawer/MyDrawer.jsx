import { Drawer } from "vaul";
import { Button } from "../ui/button";
import { Grip, Menu } from "lucide-react";

export function MyDrawer() {
	return (
		<Drawer.Root>
			<Drawer.Trigger asChild>
				<Button>
					<Menu />
				</Button>
			</Drawer.Trigger>
			<Drawer.Portal>
				<Drawer.Overlay className="fixed inset-0 bg-black/40 z-50" />
				<Drawer.Content className="flex flex-col rounded-t-[10px] mt-24 fixed bottom-0 left-0 right-0 z-50  bg-gray-100">
					<div className="p-4 j rounded-t-[10px] flex-1 flex justify-center items-center flex-col ">
						<Button >
							<Grip />
						</Button>
						<div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full  mb-8" />
						<div className=" mx-auto">
							<Drawer.Title className="text-xl font-medium mb-4 text-center">
								Plásticos Santa María
							</Drawer.Title>
						</div>
					</div>
					<div className="p-4 bg-zinc-100 border-t border-zinc-200 mt-auto">
						<div className="grid grid-cols-2 items-center gap-4  justify-center h-full w-full flex-wrap mx-auto">
							<a
								href="https://wa.me/59897477434"
								target="_blank"
								className="cursor-pointer text-center relative group overflow-hidden border-2 px-8 py-2 border-[--secondary]">
								Whatsapp
							</a>
							<a
								href="https://www.instagram.com/lachingadamvd"
								target="_blank"
								className="cursor-pointer text-center relative
								group overflow-hidden border-2 px-8 py-2
								border-[--secondary]">
								Instagram
							</a>
							<a
								href="#"
								className="cursor-pointer text-center relative group overflow-hidden border-2 px-8 py-2 border-[--secondary]">
								Pedir presupuesto
							</a>
						</div>
					</div>
				</Drawer.Content>
			</Drawer.Portal>
		</Drawer.Root>
	);
}
