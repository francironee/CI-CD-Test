const date = new Date

const hora = date.getHours()

test("Hora par", () => {

        expect(hora%2).toBe(0);
    
    });