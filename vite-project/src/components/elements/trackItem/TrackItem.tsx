import type { ITrack } from '../../../types/track.types'

interface Props {
	id: number
	track: ITrack
}

export function TrackItem({ track, id }: Props) {
	return (
		<div>
			<div className="flex gap-2 items-center">
				<div className="h-10 w-10 flex items-center justify-center text-base text-secondary">
					{id}
				</div>
				<div className="h-10 w-10 bg-purple-900 rounded-sm"></div>
				<div className="flex flex-col text-left">
					<div className="text-[20px]">{track.name}</div>
					<div className="text-sm text-secondary">
						{track.artist.name}
					</div>
				</div>
			</div>
		</div>
	)
}
