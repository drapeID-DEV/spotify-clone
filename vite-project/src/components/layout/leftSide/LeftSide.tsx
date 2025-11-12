export function LeftSide() {
	return (
		<aside className="h-full overflow-y-auto bg-red-500 rounded-xl text-black text-center text-2xl p-2 no-scrollbar">
			{Array(50)
				.fill('LeftSide')
				.map((item, i) => (
					<div key={i}>{item}</div>
				))}
		</aside>
	)
}
