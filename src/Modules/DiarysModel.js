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
    },
    getDiary: state => (id) => {
        for (let i = 0; i < state.diarys.length; i++) {
            if (state.diarys[i].id == id) {
                return state.diarys[i];
                break;
            }
        }
    },

};
const mutations = {
    setDiarys(state, diaryArray) {
        state.diarys = diaryArray;

    },
    deleteDiary(state, diaryId) {
        for (let i = 0; i < state.diarys.length; i++) {
            if (state.diarys[i].id == diaryId) {
                state.diarys.splice(i, 1);
                break;
            }
        }
    },
    updateDiary(state, diary) {

        // this.deleteDiary(diary.id);
        state.diarys.push(diary);


    }
};
const actions = {
    setDiarys(context, diaryArray) {
        context.commit('setDiarys', diaryArray);

    },
    deleteDiary(context, diaryId) {
        context.commit('deleteDiary', diaryId);

    },
    updateDiary(context, diary) {
        context.commit('deleteDiary', diary.id);
        context.commit('updateDiary', diary);

    }

};


const diaryModel = {
    state,
    mutations,
    actions,
    getters,
};


export default diaryModel;