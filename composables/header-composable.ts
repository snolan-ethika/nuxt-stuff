interface Header {
	title?: string
	back?: boolean
	secondary?: {
		icon: string
		to?: string
		click?: () => void
	}
	transparent?: boolean
}

export const useHeaderComp = () => {
	const header = () => {
		const state = useState<Header>('header', () => ({}))
		const setHeader = (header: Header) => {
			state.value = header
		}
		return { setHeader, header: readonly(state) }
	}
	return { header }
}