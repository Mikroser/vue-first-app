import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
        memories: [
            {
              id: "m1",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Desert_Electric.jpg/1920px-Desert_Electric.jpg",
              title: "Dune Bashing",
              description: "The best",
            },
            {
              id: "m2",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Wonderful_Nature_Beauty.jpg/800px-Wonderful_Nature_Beauty.jpg",
              title: "Wadi",
              description: "The worst",
            },
            {
              id: "m3",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Beautiful_nature_Before_sunset.jpg/800px-Beautiful_nature_Before_sunset.jpg",
              title: "Gaming",
              description: "Decent",
            },
          ],
    };
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description
      };

      state.memories.unshift(newMemory);
    }
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit('addMemory', memoryData)
    }
  },
  getters: {
      memories(state) {
          return state.memories;
      },
      memory(state) {
          return (memoryId) => {
              return state.memories.find(memory => memory.id === memoryId);
          }
      }
  }
});

export default store;
