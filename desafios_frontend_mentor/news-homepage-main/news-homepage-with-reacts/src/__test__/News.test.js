import { create } from "react-test-renderer"
import News from "../components/News/News"
import React from "react"

let component
const props = {
    news:[],
}

describe("Test componente News", () => {
    beforeEach( ()=> {
        component =create(<News {...props} />)
    })
    it("Renderiza correctamente", () =>{
        expect(component).toBeDefined()
    })
    it("Renderiza titulo", () =>{
        expect((component.root.findByType("h2"))).toBeDefined()
    })
})