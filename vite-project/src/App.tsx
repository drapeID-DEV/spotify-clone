function App() {
	return (
		<div className="h-full overflow-y-auto bg-blue-500 h-full rounded-xl text-black text-center text-2xl no-scrollbar">
			{Array(50)
				.fill('Music')
				.map((item, i) => (
					<div key={i}>{item}</div>
				))}
		</div>
	)
}

export default App
