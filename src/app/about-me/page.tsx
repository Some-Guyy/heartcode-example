import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Rat from "@/app/assets/rat.jpg";

export default function Home() {
	return (
		<>
			<div>hello world this is about me</div>
			<Card>
				<CardHeader>
					<CardTitle>hi im owen</CardTitle>
					<CardDescription>i like to eat</CardDescription>
				</CardHeader>
				<CardContent>
					<Image src={Rat} width={500} height={500} alt="rat image"></Image>
					<div className="flex flex-row gap-2"><p className="font-bold">Name:</p>Owen</div>
					<div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
					<div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I don&apos;t like to code</div>
				</CardContent>
			</Card>
		</>
	);
}

