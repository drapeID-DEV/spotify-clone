import { TrackItem } from './components/elements/trackItem/TrackItem'
import { TRACKS } from './data/tracks.data'

function App() {
	return (
		<div className="h-full flex flex-col bg-gradient-to-b from-indigo-500 to-60% to-primary rounded-xl text-black text-center text-2xl">
			<div className="py-10 bg-transparent flex items-center px-10">
				<div className="w-60 h-60 bg-gradient-to-b from-indigo-900 to-indigo-100 flex items-center justify-center mr-5">
					3=====
				</div>
				<div className="">
					<p className="w-fit text-base font-medium text-white">
						Playlist
					</p>
					<h1 className="font-bold text-md mt-4 text-white">
						Liked songs
					</h1>
					<div className="flex items-center gap-2 mt-8">
						<div className="bg-black rounded-4xl h-5 w-5"></div>
						<p className="text-white text-base">DrapeID</p>
					</div>
				</div>
			</div>
			<div className="h-full bg-primary-opacity text-white flex flex-col gap-4 p-15">
				{TRACKS.map((item, index) => (
					<TrackItem key={item.name} id={index + 1} track={item} />
				))}
			</div>
		</div>
	)
}

export default App
