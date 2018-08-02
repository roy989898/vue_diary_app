import DiaryClass from "../Class/DiaryClass";

const state = {
    diarys: [new DiaryClass(0, 'A', new Date(2018.12, 3), "HIHIH"),
        new DiaryClass(1, 'B', new Date(2018.12, 5), "YO"),
        new DiaryClass(3, 'D', new Date(2018.12, 7), "Car"),
        new DiaryClass(2, 'C', new Date(2018.12, 6), "435345"),
        new DiaryClass(4, 'A', new Date(2018.12, 8), "HAYHAYHAYHAYHAYHAY"),],
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