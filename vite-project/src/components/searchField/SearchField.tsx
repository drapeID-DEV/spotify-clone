import { Search } from 'lucide-react'

export function SearchField() {
	return (
		<div className="group relative w-100 h-full rounded-3xl bg-widget hover:bg-hover transition-all duration-300">
			<Search className="group-hover:text-white duration-300 absolute left-3 top-1/2 -translate-y-1/2 text-secondary pointer-events-none" />
			<input
				type="search"
				placeholder="What you wanna play?"
				className="w-full h-full pl-12 pr-5 rounded-3xl hover:cursor-pointer"
			/>
		</div>
	)
}
