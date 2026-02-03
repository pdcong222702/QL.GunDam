import { Route, Routes } from "react-router-dom"
import { EpsList } from "./List"
import { EpsForm } from "./Form"

const EpsModule = () => {
    return (
        <Routes>
            <Route path="/" element={<EpsList />} />
            <Route path=":id" element={<EpsForm />} />
        </Routes>
    )
}

export { EpsModule }