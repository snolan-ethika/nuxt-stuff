import supabase from '~/utils/supabase'

export default defineEventHandler(async (event) => {
    const { data, error } = await supabase
        .from('users')
        .select()
    return { data, error }
})
