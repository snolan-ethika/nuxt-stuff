import supabase from '~/utils/supabase'

export default defineEventHandler(async (event) => {
	const artist = getRouterParam(event, 'artist')
	const { data, error } = await supabase
		.from('artists')
		.select()
		.eq('identifier', artist)
		.limit(1)
		.single()
	return { data, error }
})
