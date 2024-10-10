import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react";
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
					<Image src={Rat} width={500} alt="rat image" unoptimized />
					<div className="flex flex-row gap-2"><p className="font-bold">Name:</p>Owen</div>
					<div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Information Systems</div>
					<div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I don&apos;t like to code</div>
				</CardContent>
			</Card>
			<Alert>
				<Terminal className="h-4 w-4" />
				<AlertTitle>Heads up!</AlertTitle>
				<AlertDescription>
					You can add components and dependencies to your app using the cli.
				</AlertDescription>
			</Alert>
		</>
	);
}

