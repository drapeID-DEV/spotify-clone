import { HomeButton } from '@/components/elements/homeButton/HomeButton'
import { SearchField } from '@/components/searchField/SearchField'

export function Header() {
	return (
		<div className="h-15 bg-black w-ful flex items-center justify-center py-2 gap-3">
			<HomeButton />
			<SearchField></SearchField>
		</div>
	)
}
