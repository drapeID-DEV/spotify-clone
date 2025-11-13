import { Home } from 'lucide-react'

export function HomeButton() {
	return (
		<button className="group aspect-square h-full flex items-center justify-center rounded-4xl bg-widget hover:cursor-pointer hover:bg-hover transition-all duration-300">
			<Home className="text-secondary group-hover:text-white  duration-300" />
		</button>
	)
}
