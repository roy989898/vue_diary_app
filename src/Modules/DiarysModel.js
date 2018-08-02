const state = {
    diarys: [],
};
const getters = {
    getDiarys: state => {
        let result = state.diarys;
        result.sort((a, b) => {
            return a.date.getTime() - b.date.getTime();
        });
        return result;
    }
};
const mutations = {
    setDiarys(state, diaryArray) {
        state.diarys = diaryArray;

    }
};
const actions = {
    setDiarys(context, diaryArray) {
        context.commit('setDiarys', diaryArray);

    }
};


const diaryModel = {
    state,
    mutations,
    actions,
    getters,
};


export default diaryModel;