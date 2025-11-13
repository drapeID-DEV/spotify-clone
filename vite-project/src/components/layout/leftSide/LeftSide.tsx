export function LeftSide() {
	return (
		<aside className="h-full overflow-y-auto bg-primary rounded-xl text-white text-center text-2xl p-2 no-scrollbar">
			{Array(50)
				.fill('LeftSide')
				.map((item, i) => (
					<div key={i}>{item}</div>
				))}
		</aside>
	)
}
