import type { PropsWithChildren } from 'react'
import { Header } from './header/Header'
import { LeftSide } from './leftSide/LeftSide'
import { RightSide } from './rightSide/RightSide'
import { AudioPlayer } from '../player/AudioPlayer'

export default function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<div className="h-screen grid grid-rows-[auto_1fr_auto] overflow-hidden">
			<Header />

			<div className="grid grid-cols-[1fr_2.7fr_1fr] gap-2 px-2 overflow-hidden">
				<LeftSide />
				<main className="h-full overflow-y-auto bg-primary no-scrollbar rounded-xl">
					{children}
				</main>
				<RightSide />
			</div>

			<AudioPlayer />
		</div>
	)
}
