export function RightSide() {
	return (
		<div className="h-full overflow-y-auto bg-green-500 rounded-xl text-black text-center text-2xl no-scrollbar">
			{Array(50)
				.fill('RightSide')
				.map((item, i) => (
					<div key={i}>{item}</div>
				))}
		</div>
	)
}
