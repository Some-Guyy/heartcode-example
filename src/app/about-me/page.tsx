import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react";
import Image from "next/image";
import Rat from "@/app/assets/rat.jpg";

export default function Home() {
	return (
		<>
			<CardContainer>
				<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
					<CardItem
						translateZ="100"
						className="text-2xl font-bold text-neutral-600 dark:text-white"
					>
						hi im owen
					</CardItem>
					<CardItem
						as="p"
						translateZ="150"
						className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
					>
						i like to eat
					</CardItem>
					<CardItem translateZ="200" className="w-full mt-4">
						<Image src={Rat} width={500} alt="rat image" unoptimized />
					</CardItem>
					<CardItem translateZ="170" className="flex flex-row gap-2 text-lg"><div className="font-bold">Name:</div> Owen</CardItem>
					<CardItem translateZ="120" className="flex flex-row gap-2 text-lg"><div className="font-bold">Major:</div> Information Systems</CardItem>
					<CardItem translateZ="80" className="flex flex-row gap-2 text-lg"><div className="font-bold">Hobbies:</div> I don&apos;t like to code</CardItem>
				</CardBody>
			</CardContainer>
			<Alert>
				<Terminal className="h-4 w-4" />
				<AlertTitle>Heads up!</AlertTitle>
				<AlertDescription>
					This component was created during the tutorial and i dont know what to put in it now.
				</AlertDescription>
			</Alert>
		</>
	);
}

