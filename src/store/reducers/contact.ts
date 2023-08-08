import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactState = {
  itens: Contact[]
}

const initialState: ContactState = {
  itens: [
    new Contact(
      'Tamires Camargo Soares',
      'tamires.camargo.soares@gmail.com',
      '(11) 11111-1111',
      1
    ),
    new Contact(
      'Ana Paula Oliveira',
      'ana.paula_oliveira@uol.com.br',
      '(22) 22222-2222',
      2
    ),
    new Contact(
      'Fernando da Silva',
      'fs_silva@gmail.com',
      '(33) 33333-3333',
      3
    ),
    new Contact(
      'Maria Luiza de Jesus',
      'm.luiza.jesus@outlook.com',
      '(44) 44444-4444',
      4
    ),
    new Contact(
      'João Guilherme Silva',
      'joao.guilherme@gmail.com',
      '(55) 55555-5555',
      5
    )
  ]
}

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = [...state.itens.filter((c) => c.id !== action.payload)]
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const contactExists = state.itens.find(
        (c) => c.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (contactExists) {
        alert('Este contato já existe.')
      } else {
        const lastContact = state.itens[state.itens.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.itens.push(newContact)
      }
    }
  }
})

export const { remove, edit, register } = contactSlice.actions
export default contactSlice.reducer
