
const VariableComp = () => {
    const str = "Hello string" ;
    const number = 100;
    const booleanType =   true;
    const undif = undefined;
    const nullValue = null;
    const arrValue = [1, 2, 3, 4, 5];
    const objctValue = {
        name: "John",
        age: 30,
        city: "New York"
    }
    return (
        <div>
            <h1>Variable Component</h1>
            <p>This is a variable component.</p>
            <p>{str}</p>
            <p>{number}</p>
            <p>{booleanType ? "True" : "False"}</p>
            <p>{undif}</p>
            <p>{nullValue}</p>
            <p>{arrValue.join(", ")} - {JSON.stringify(arrValue)}</p>
            <p>Name: {objctValue.name}, Age: {objctValue.age}, City: {objctValue.city} -- {JSON.stringify(objctValue)}</p>
            </div>
    );
};

export default VariableComp;