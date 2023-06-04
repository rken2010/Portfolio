import { create } from 'react-test-renderer';
import App from '../App';

let component


describe('<App />', () => {
 beforeEach(() => {
    component = create(<App />);
 })
    it( "Renderiza correctamente", () =>{
      expect(component).toBeDefined();
    })
    it( "Header renderiza correctamente", () =>{
      expect(component.root.findByType("header")).toBeDefined();
    })
   
  });
