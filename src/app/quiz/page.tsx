"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { insertOneUser } from "@/server/user"

const formSchema = z.object({
	username: z.string().min(2, {
		message: "Number must be at least 2 characters.",
	}).max(10, {
		message: "Number must be below 11 characters"
	}),
	isDrugDealer: z.string({
		required_error: "Please select an option"
	})
})

export default function Home() {
	const { toast } = useToast();

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			isDrugDealer: "",
		},
	})

	// 2. Define a submit handler.
	async function onSubmit(data: z.infer<typeof formSchema>) {
		if (data.isDrugDealer === "yes") {
			toast({
				title: `Congratulations ${data.username}`,
				description: "You are drug dealer",
			})
		} else {
			toast({
				title: `Thank you ${data.username}`,
				description: "Unfortunately you not drug dealer",
			})
		}

		await insertOneUser(data.username, data.isDrugDealer === "yes")
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Question 1</FormLabel>
							<FormDescription>
								What is yo name?
							</FormDescription>
							<FormControl>
								<Input placeholder="what yo nam" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="isDrugDealer"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Question 2</FormLabel>
							<FormDescription>
								Are you drug dealer?
							</FormDescription>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Please select an answer" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="yes">Yes</SelectItem>
									<SelectItem value="no">No</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	)
}
