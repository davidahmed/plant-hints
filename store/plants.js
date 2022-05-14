export const state = () => ({
	content: [], // Source of truth
	filteredContent: [] // all subsequent queries/ views made from here.
})

export const mutations = {
	set (state, data) {
		state.content = data
		state.filteredContent = data
	},
	filter (state, filteredData) {
		state.filteredContent = filteredData
	}
}
