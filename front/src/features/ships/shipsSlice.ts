import { createAppSlice } from "../../app/createAppSlice"

export interface ShipsSliceState {
    ships: Array<any>
    status: "idle" | "loading" | "failed"
}

const initialState: ShipsSliceState = {
    ships: [],
    status: "idle",
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const shipsSlice = createAppSlice({
    name: "ships",
    initialState,
    reducers: create => ({
        fetchShips: create.asyncThunk(
            async (filter: { type: string | undefined }, thunkAPI:{ extra: any }) => {
                return await thunkAPI.extra.shipApi.fetch(filter);
            },
            {
                pending: state => {
                    state.status = "loading"
                },
                fulfilled: (state, action) => {
                    state.status = "idle"
                    state.ships = action.payload
                },
                rejected: state => {
                    state.status = "failed"
                },
            },
        ),
    }),
    selectors: {
        selectShips: ships => ships.ships,
        selectStatus: counter => counter.status,
    },
})

// Action creators are generated for each case reducer function.
export const { fetchShips } =
    shipsSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectShips } = shipsSlice.selectors

