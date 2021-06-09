import {
    TagService
} from "../../common/api.service";
import {
    FETCH_TAG,
    ADD_SELECTED_TAG,
    REMOVE_SELECTED_TAG,
    REMOVE_TAG,
    ADD_TAG
} from "./actions.type";

import {
    SET_TAGS,
    SET_SELECTED_TAG,
    SET_SELECTED_TAGS,
    REMOVE_SELECTED_TAG_FROM_SELECTED_TAGS,
    REMOVE_TAG_FROM_TAGS,
    SET_TAG
} from "./mutations.type";

const initialState = {
    tags: [],
    selectedTags: []
}

export const state = { ...initialState };

export const actions = {
    async [FETCH_TAG](context) {
        const { data } = await TagService.getTags();
        context.commit(SET_TAGS, data);
    },
    [ADD_SELECTED_TAG](context, selectedTag) {
        context.commit(SET_SELECTED_TAG, selectedTag);
    },
    [REMOVE_SELECTED_TAG](context, selectedTag) {
        context.commit(REMOVE_SELECTED_TAG_FROM_SELECTED_TAGS, selectedTag);
    },
    [REMOVE_TAG](context, tag) {
        context.commit(REMOVE_TAG_FROM_TAGS, tag);
    },
    [ADD_TAG](context, tag) {
        context.commit(SET_TAG, tag);
    },

}
export const mutations = {
    [SET_TAGS](state, tags) {
        state.tags = tags;
    },
    [SET_SELECTED_TAG](state, selectedTag) {
        state.selectedTags.push(selectedTag);
    },
    [REMOVE_SELECTED_TAG_FROM_SELECTED_TAGS](state, selectedTag) {
        for (let t = 0; t < state.selectedTags.length; t++) {
            if (selectedTag.id == state.selectedTags[t].id) {
                state.selectedTags.splice(t, 1);  
            }
        }
    },
    [SET_SELECTED_TAGS](state, selectedTags) {
        state.selectedTags = selectedTags;
    },
    [REMOVE_TAG_FROM_TAGS](state, tag) {
        for (let i = 0; i < state.tags.length; i++) {
            if (tag.id == state.tags[i].id) {
                state.tags.splice(i, 1);
            }
        }
    },
    [SET_TAG](state, tag) {
        state.tags.push(tag);
    },
    
}
const getters = {
    tags(state) {
        return state.tags;
    },
    selectedTags(state) {
        return state.selectedTags;
    },
}
export default {
    state,
    actions,
    mutations,
    getters
};