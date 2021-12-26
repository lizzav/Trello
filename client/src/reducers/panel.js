const initialState = {
  items: [
    {
      id: 1,
      title: "PLAN 1",
      cards: [
        { id: 1, text: "1234",src:"https://img.fonwall.ru/o/ij/bereg-morya-skala-derevya-les.jpg?route=mid&amp;h=750"  },
        { id: 2, text: "1234",src:"https://img.fonwall.ru/o/ij/bereg-morya-skala-derevya-les.jpg?route=mid&amp;h=750"  },
        { id: 3, text: "3221234",src:"https://img.fonwall.ru/o/ij/bereg-morya-skala-derevya-les.jpg?route=mid&amp;h=750"  }
      ]
    },
    {
      id: 2,
      title: "PLAN 2",
      cards: [
        { id: 4, text: "1234",src:"https://img.fonwall.ru/o/ij/bereg-morya-skala-derevya-les.jpg?route=mid&amp;h=750" },
        { id: 5, text: "1234", src:"https://img.fonwall.ru/o/ij/bereg-morya-skala-derevya-les.jpg?route=mid&amp;h=750" },
        { id: 6, text: "3221234", src:"https://img.fonwall.ru/o/ij/bereg-morya-skala-derevya-les.jpg?route=mid&amp;h=750" }
      ]
    }
  ],
  dropTask: "",
  dropOldPanelID: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CARD-ADD":
      return {
        ...state,
        items: state.items.map(item => {
          if (action.id === item.id) {
            return {
              ...item,
              cards: [
                ...item.cards,
                {
                  id: Math.floor(Math.random() * 100000),
                  text: action.text,
                src:"https://img.fonwall.ru/o/ij/bereg-morya-skala-derevya-les.jpg?route=mid&amp;h=750"
          }
              ]
            };
          } else {
            return { ...item };
          }
        })
      };
    case "PANEL-ADD": {
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: Math.floor(Math.random() * 100000),
            title: action.text,
            cards: []
          }
        ]
      };
    }

    case "DROP-CHANGE": {
      if (state.dropOldPanelID === action.id) {
        return state;
      }
      const idxOldPanel = state.items.findIndex(
        el => el.id === parseInt(state.dropOldPanelID)
      );
      const idxCard = state.items[idxOldPanel].cards.findIndex(
        el => el.id === parseInt(state.dropTask)
      );
      const idxNewPanel = state.items.findIndex(
        el => el.id === parseInt(action.id)
      );
      const NewCard = { ...state.items[idxOldPanel].cards[idxCard] };

      if (idxOldPanel < idxNewPanel) {
        return {
          ...state,
          items: [
            ...state.items.slice(0, idxOldPanel),
            {
              ...state.items[idxOldPanel],
              cards: [
                ...state.items[idxOldPanel].cards.slice(0, idxCard),
                ...state.items[idxOldPanel].cards.slice(idxCard + 1)
              ]
            },
            ...state.items.slice(idxOldPanel + 1, idxNewPanel),
            {
              ...state.items[idxNewPanel],
              cards: [...state.items[idxNewPanel].cards, NewCard]
            },
            ...state.items.slice(idxNewPanel + 1)
          ]
        };
      }
      return {
        ...state,
        items: [
          ...state.items.slice(0, idxNewPanel),

          {
            ...state.items[idxNewPanel],
            cards: [...state.items[idxNewPanel].cards, NewCard]
          },
          ...state.items.slice(idxNewPanel + 1, idxOldPanel),
          {
            ...state.items[idxOldPanel],
            cards: [
              ...state.items[idxOldPanel].cards.slice(0, idxCard),
              ...state.items[idxOldPanel].cards.slice(idxCard + 1)
            ]
          },
          ...state.items.slice(idxOldPanel + 1)
        ]
      };
    }
    case "DROP-CARD-ADD": {
      return {
        ...state,
        dropTask: action.idCard,

        dropOldPanelID: action.idPanel
      };
    }

    default:
      return state;
  }
};
export const AddCard = (id, text) => ({
  type: "CARD-ADD",
  id,
  text
});
export const AddPanel = text => ({
  type: "PANEL-ADD",
  text
});
export const AddDropCard = (idCard, idPanel) => ({
  type: "DROP-CARD-ADD",
  idCard,
  idPanel
});
export const DropChange = id => ({
  type: "DROP-CHANGE",
  id
});
