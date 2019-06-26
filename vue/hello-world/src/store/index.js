import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    // 设置全局访问的state对象
    showFooter: true,
    changAbleNum: 0
}

const getters = {
    isShow(state){
        return state.showFooter
    },
    getChangAbleNum(){
        return state.changAbleNum
    }

}

const mutations = {
     //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    show(state){
        state.showFooter = true;
    },
    hide(state){
        state.showFooter = false;
    },
    newNum(state,sum){
        state.changAbleNum +=sum
    }
}

const actions = {
    hideFooter(context){
        context.commit('hide');
    },
    showFooter(context){
        context.commit('show')
    },
    getNewNum(context,num){
        context.commit('newNum',num)
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;